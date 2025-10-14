import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image?: string | null;
    };
    accessToken?: string; // API Platform JWT token
  }

  interface User {
    id: string;
    email: string;
    name: string;
    image?: string | null;
    accessToken?: string; // API Platform JWT token
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    email: string;
    name: string;
    picture?: string | null;
    accessToken?: string; // API Platform JWT token
  }
}
