import type { Metadata } from 'next';
import { Inter, Jost, Poppins } from 'next/font/google';
import { Providers } from './providers';
import { APP_NAME, APP_DESCRIPTION } from '@/config/constants';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jost = Jost({ subsets: ['latin'], variable: '--font-jost' });
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins' 
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
  authors: [{ name: APP_NAME }],
  creator: APP_NAME,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0a09' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'http://localhost:3000',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jost.variable} ${poppins.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


