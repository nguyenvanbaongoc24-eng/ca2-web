import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Cột 1: Thông tin công ty */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4 group cursor-pointer">
            <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md group-hover:scale-105 transition-transform">
              <rect width="100" height="100" rx="30" fill="#f97316"/>
              <path d="M30 25 V75 L52 57 V43 Z" fill="white"/>
              <path d="M70 75 V25 L48 43 V57 Z" fill="white"/>
            </svg>
            <div className="flex items-baseline">
              <span className="font-extrabold text-[32px] tracking-tight text-white drop-shadow-sm">Ca2</span>
              <span className="font-bold text-[32px] tracking-tight text-[#f97316]">.Digital</span>
            </div>
          </Link>
          <p className="text-sm opacity-80 leading-relaxed mb-6">
            Giải pháp số hóa toàn diện dành cho doanh nghiệp với nền tảng bảo mật cao và vận hành tối ưu.
          </p>
          <img src="/ca2-press.webp" alt="Đội ngũ Nacencomm - Ca2" className="w-full rounded-lg mb-4 opacity-70 grayscale hover:grayscale-0 transition-all" />
          <p className="mt-4 text-xs opacity-60">© 2026 Ca2.Digital. All rights reserved.</p>
        </div>

        {/* Cột 2: Chữ ký số */}
        <div>
          <h4 className="text-white font-semibold mb-4">Chữ Ký Số</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/chu-ky-so" className="hover:text-white transition-colors">Chữ ký số từ xa (Remote Signing)</Link></li>
            <li><Link href="/chu-ky-so" className="hover:text-white transition-colors">Nền tảng ký số (Sign Platform)</Link></li>
            <li><Link href="/chu-ky-so" className="hover:text-white transition-colors">Chữ ký số USB Token</Link></li>
            <li><Link href="/chu-ky-so" className="hover:text-white transition-colors">Chữ ký số HSM</Link></li>
            <li><Link href="/chu-ky-so" className="hover:text-white transition-colors">Chữ ký số cho Website (SSL)</Link></li>
            <li><Link href="/chu-ky-so" className="hover:text-white transition-colors">Dịch vụ dấu thời gian (TSA)</Link></li>
          </ul>
        </div>

        {/* Cột 3: Sản phẩm khác */}
        <div>
          <h4 className="text-white font-semibold mb-4">Sản Phẩm Khác</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/hoa-don-dien-tu" className="hover:text-white transition-colors">Hóa đơn điện tử (Ca2 eInvoice)</Link></li>
            <li><Link href="/hoa-don-dien-tu" className="hover:text-white transition-colors">Phần mềm kế toán (Ca2 Accounting)</Link></li>
            <li><Link href="/bao-hiem-xa-hoi" className="hover:text-white transition-colors">Kê khai BHXH điện tử</Link></li>
            <li><Link href="/bao-hiem-xa-hoi" className="hover:text-white transition-colors">Ca2 CO-VAN</Link></li>
            <li><Link href="/lien-he" className="hover:text-white transition-colors">Liên hệ tư vấn</Link></li>
          </ul>
        </div>

        {/* Cột 4: Liên hệ */}
        <div>
          <h4 className="text-white font-semibold mb-4">Liên Hệ</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">📞</span>
              <span>Hotline: 1900 1234</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">✉️</span>
              <span>Email: support@ca2.digital</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">📍</span>
              <span>Tầng 12, Tòa nhà ABC, Quận Cầu Giấy, Hà Nội</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-6 lg:px-12 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
        <p>Công ty CP Công nghệ Thẻ Nacencomm – Thành viên Tập đoàn Hanel</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
          <Link href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</Link>
        </div>
      </div>
    </footer>
  );
}
