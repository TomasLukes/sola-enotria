import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sola Enotria',
  description: '- nejlepší pizza v Bohnicích',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className={clsx('bg-light-primary antialiased', poppins.className)}>{children}</body>
    </html>
  );
}
