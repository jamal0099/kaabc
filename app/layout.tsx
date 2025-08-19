import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Khair Al Anaam Building Contracting Abu Dhabi',
  description: 'General Contracting & Construction | Renovation & Fit-Out Works | Construction Materials & Equipment Supply',
icons: {
    icon: "/images/Alfalahvillas.jpg", // make sure this file is inside your public/ folder
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
