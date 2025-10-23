import { Geist, Geist_Mono } from 'next/font/google';
import '@/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Trademark registration cost in Ukraine',
  description:
    'Calculate costs and leave a registration request for trademark registration in Ukraine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 min-h-screen`}
      >
        <main className="max-w-5xl w-full mx-auto bg-white shadow-md rounded-2xl p-6 my-8">
          {children}
        </main>
      </body>
    </html>
  );
}
