import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'Giải pháp doanh nghiệp số - CA2.ONE',
  description: 'Cung cấp Hóa đơn điện tử, Chữ ký số, BHXH điện tử cho doanh nghiệp.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} bg-gradient-to-br from-[#0b0318] via-[#13072e] to-[#080211] text-slate-200 antialiased min-h-screen`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
