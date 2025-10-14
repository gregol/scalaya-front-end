import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { authenticateUser } from '@/core/usecases';
import { apiAuthAdapter } from './api-auth-adapter';
import { mockAuthAdapter } from './mock-auth-adapter';
import { LoginCredentialsSchema } from '@/core/domain';

// Use API adapter for production, mock for development fallback
const authAdapter =
  process.env.NEXT_PUBLIC_USE_MOCK_API === 'true'
    ? mockAuthAdapter
    : apiAuthAdapter;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing credentials');
        }

        try {
          // Validate with Zod
          const validated = LoginCredentialsSchema.parse(credentials);

          // Call use case with selected auth adapter
          const user = await authenticateUser(validated, authAdapter);

          if (!user) {
            throw new Error('Invalid credentials');
          }

          // Store JWT token if using API adapter
          if (
            'getToken' in authAdapter &&
            typeof authAdapter.getToken === 'function'
          ) {
            const token = authAdapter.getToken();
            if (token) {
              // Token will be available in the session via JWT callback
              return {
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.image,
                accessToken: token,
              };
            }
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      // Only enable if credentials are provided
      ...((!process.env.GOOGLE_CLIENT_ID ||
        !process.env.GOOGLE_CLIENT_SECRET) && {
        allowDangerousEmailAccountLinking: true,
      }),
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;

        // Store API Platform JWT token if available
        if ('accessToken' in user && typeof user.accessToken === 'string') {
          token.accessToken = user.accessToken;
        }
      }

      // Handle Google OAuth
      if (account?.provider === 'google' && user) {
        // In a real app, you'd save the Google user to your database
        token.id = user.id ?? crypto.randomUUID();
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.image = token.picture as string;
      }

      // Include API Platform JWT token in session
      if (token.accessToken && typeof token.accessToken === 'string') {
        (session as { accessToken?: string }).accessToken = token.accessToken;
      }

      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};
