import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const appTitle = process.env.APP_TITLE;

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = { title: appTitle };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm">
            <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-bold text-gray-900">{appTitle}</h1>
            </div>
          </header>
          <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-6 shadow-sm">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
