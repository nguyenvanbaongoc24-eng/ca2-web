"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, FileText, Calculator, KeyRound, Smartphone, UsbIcon, Shield, Globe, Clock, HeartPulse, Search, DollarSign, Inbox } from 'lucide-react';
import Link from 'next/link';

const menuData = [
  { label: 'Trang chủ', href: '/' },
  {
    label: 'Hóa đơn điện tử',
    href: '/hoa-don-dien-tu',
    children: [
      { label: 'Ca2 eInvoice', desc: 'Hóa đơn điện tử chuẩn TCT', href: '/san-pham/ca2-einvoice', icon: FileText, color: 'text-blue-600 bg-blue-100' },
      { label: 'Ca2 IMV', desc: 'Hóa đơn đầu vào thông minh', href: '/san-pham/ca2-imv', icon: Inbox, color: 'text-violet-600 bg-violet-100' },
      { label: 'Ca2 Accounting', desc: 'Phần mềm kế toán thông minh', href: '/san-pham/ca2-accounting', icon: Calculator, color: 'text-emerald-600 bg-emerald-100' },
      { label: 'Ca2 POS', desc: 'Quản lý bán hàng trên Mobile', href: '/san-pham/ca2-pos', icon: Smartphone, color: 'text-orange-600 bg-orange-100' },
      { label: 'Chứng từ thuế TNCN', desc: 'Khởi tạo, phát hành chứng từ điện tử', href: '/san-pham/chung-tu-thue-tncn', icon: FileText, color: 'text-rose-600 bg-rose-100' },
      { label: 'Kê khai BHXH', desc: 'Kê khai bảo hiểm xã hội online', href: '/san-pham/ke-khai-bhxh', icon: HeartPulse, color: 'text-green-600 bg-green-100' },
    ],
  },
  {
    label: 'Chữ ký số',
    href: '/chu-ky-so',
    children: [
      { label: 'Remote Signing', desc: 'Chữ ký số từ xa, ký mọi nơi', href: '/san-pham/remote-signing', icon: Smartphone, color: 'text-purple-600 bg-purple-100' },
      { label: 'Sign Platform', desc: 'Nền tảng ký số tích hợp', href: '/san-pham/sign-platform', icon: KeyRound, color: 'text-indigo-600 bg-indigo-100' },
      { label: 'USB Token', desc: 'Chữ ký số phần cứng phổ biến', href: '/san-pham/usb-token', icon: UsbIcon, color: 'text-sky-600 bg-sky-100' },
      { label: 'Ca2 HSM', desc: 'Chữ ký số chuyên dụng server', href: '/san-pham/ca2-hsm', icon: Shield, color: 'text-red-600 bg-red-100' },
      { label: 'Ca2 SSL', desc: 'Chữ ký số bảo mật Website', href: '/san-pham/ca2-ssl', icon: Globe, color: 'text-teal-600 bg-teal-100' },
      { label: 'Ca2 TSA', desc: 'Dịch vụ dấu thời gian', href: '/san-pham/ca2-tsa', icon: Clock, color: 'text-amber-600 bg-amber-100' },
    ],
  },
  {
    label: 'Báo giá',
    href: '/bao-gia',
    children: [
      { label: 'Hóa đơn điện tử', desc: 'Bảng giá gói Ca2 eInvoice', href: '/bao-gia#hoa-don', icon: FileText, color: 'text-blue-600 bg-blue-100' },
      { label: 'Chữ ký số', desc: 'Bảng giá các loại chữ ký số', href: '/bao-gia#chu-ky-so', icon: KeyRound, color: 'text-purple-600 bg-purple-100' },
      { label: 'Phần mềm kế toán', desc: 'Bảng giá Ca2 Accounting', href: '/bao-gia#ke-toan', icon: Calculator, color: 'text-emerald-600 bg-emerald-100' },
    ],
  },
  {
    label: 'Tin tức',
    href: '/blog',
    children: [
      { label: 'Tin khuyến mãi', desc: 'Ưu đãi mới nhất từ CA2', href: '/blog', icon: FileText, color: 'text-pink-600 bg-pink-100' },
      { label: 'Tin chuyên ngành', desc: 'Cập nhật chính sách & pháp luật', href: '/blog', icon: Globe, color: 'text-blue-600 bg-blue-100' },
      { label: 'Thông báo', desc: 'Thông báo quan trọng từ hệ thống', href: '/blog', icon: Clock, color: 'text-slate-600 bg-slate-100' },
    ],
  },
  {
    label: 'Tiện ích',
    href: '/tien-ich',
    children: [
      { label: 'Tính thuế TNCN', desc: 'Công cụ tính mức nộp thuế TNCN', href: '/tien-ich/tinh-thue-tncn', icon: Calculator, color: 'text-green-600 bg-green-100' },
      { label: 'Tính hoàn thuế TNCN', desc: 'Dự toán định mức hoàn thuế', href: '/tien-ich/tinh-hoan-thue-tncn', icon: FileText, color: 'text-indigo-600 bg-indigo-100' },
      { label: 'Tính thuế HKD', desc: 'Thuế khoán Hộ kinh doanh', href: '/tien-ich/tinh-thue-hkd', icon: Calculator, color: 'text-orange-600 bg-orange-100' },
    ],
  },
  {
    label: 'Hỗ trợ',
    href: '/ho-tro',
    children: [
      { label: 'Tra cứu CKS', desc: 'Kiểm tra chứng thư số trực tuyến', href: '/ho-tro', icon: Shield, color: 'text-indigo-600 bg-indigo-100' },
      { label: 'Tra cứu HĐĐT', desc: 'Tra cứu hóa đơn đã phát hành', href: '/ho-tro', icon: FileText, color: 'text-sky-600 bg-sky-100' },
      { label: 'Tải về', desc: 'Driver & Phần mềm liên quan', href: '/ho-tro', icon: UsbIcon, color: 'text-emerald-600 bg-emerald-100' },
      { label: 'Hướng dẫn', desc: 'Tài liệu hướng dẫn sử dụng', href: '/ho-tro', icon: KeyRound, color: 'text-amber-600 bg-amber-100' },
      { label: 'Hỗ trợ nhanh', desc: 'Gửi yêu cầu Ultraview hỗ trợ ngay', href: '/ho-tro#quick-support', icon: Smartphone, color: 'text-orange-600 bg-orange-100' },
    ]
  },
  { label: 'Liên hệ', href: '/lien-he' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [language, setLanguage] = useState('vi');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    // Tích hợp Google Translate System
    let addScript = document.getElementById('google-translate-script') as HTMLScriptElement | null;
    if (!addScript) {
      addScript = document.createElement('script');
      addScript.id = 'google-translate-script';
      addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      addScript.async = true;
      document.body.appendChild(addScript);
      
      // @ts-ignore
      window.googleTranslateElementInit = () => {
        // @ts-ignore
        new window.google.translate.TranslateElement({
          pageLanguage: 'vi',
          includedLanguages: 'vi,en,zh-CN',
          autoDisplay: false
        }, 'google_translate_element');
      };
    }
    
    // Đọc Trạng thái Ngôn ngữ từ Cookie
    const match = document.cookie.match(/googtrans=\/vi\/([a-zA-Z-]+)/);
    if (match && match[1]) {
      setLanguage(match[1]);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setLanguage(lang);
    if (lang === 'vi') {
      document.cookie = "googtrans=/vi/vi; path=/";
      document.cookie = `googtrans=/vi/vi; path=/; domain=${window.location.hostname}`;
    } else {
      document.cookie = `googtrans=/vi/${lang}; path=/`;
      document.cookie = `googtrans=/vi/${lang}; path=/; domain=${window.location.hostname}`;
    }
    window.location.reload(); // Reload để trigger Google Translate dịch toàn trang
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f172a]/95 backdrop-blur-lg shadow-xl py-3' : 'bg-[#0f172a] py-5'}`}>
      <div id="google_translate_element" style={{display:'none',height:0,overflow:'hidden'}}></div>
      <style dangerouslySetInnerHTML={{__html: `
        .goog-te-banner-frame { display: none !important; }
        body { top: 0px !important; position: static !important; }
        .skiptranslate { display: none !important; height: 0 !important; }
        iframe.skiptranslate { display: none !important; }
        .goog-te-gadget { display: none !important; }
        .goog-tooltip { display: none !important; }
        .goog-tooltip:hover { display: none !important; }
        .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
        #goog-gt-tt { display: none !important; }
      `}} />
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="flex items-baseline">
            <span className="font-extrabold text-[32px] tracking-tight text-white drop-shadow-sm">Ca2</span>
            <span className="font-bold text-[32px] tracking-tight text-[#f97316]">.Digital</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden xl:flex items-center gap-2">
          {menuData.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-slate-200 text-sm font-medium hover:text-white hover:bg-white/10 transition-all duration-200 ${openDropdown === item.label ? 'text-white bg-white/10' : ''} whitespace-nowrap`}
              >
                {item.label}
                {item.children && <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />}
              </Link>

              {/* Dropdown */}
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <div
                    className={`bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 ${item.children.length > 3 ? 'w-[520px] grid grid-cols-2 gap-1' : 'w-[280px] flex flex-col gap-1'}`}
                  >
                    {item.children.map((child) => {
                      const Icon = child.icon;
                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${child.color} group-hover/item:scale-110 transition-transform`}>
                            <Icon size={20} />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-800 text-sm leading-tight">{child.label}</div>
                            <div className="text-xs text-slate-500 mt-0.5 leading-snug">{child.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Links (Large screens but not XL) - Fallback for slightly smaller screens */}
        <nav className="hidden lg:flex xl:hidden items-center gap-1">
          {menuData.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-1.5 py-2 rounded-lg text-slate-200 text-[13px] font-medium hover:text-white hover:bg-white/10 transition-all duration-200 ${openDropdown === item.label ? 'text-white bg-white/10' : ''} whitespace-nowrap`}
              >
                {item.label}
                {item.children && <ChevronDown size={12} className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />}
              </Link>
            </div>
          ))}
        </nav>

        {/* Right Actions & Buttons */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1">
            {[
              { code: 'vi', flag: '🇻🇳', label: 'VN' },
              { code: 'en', flag: '🇬🇧', label: 'EN' },
              { code: 'zh-CN', flag: '🇨🇳', label: 'CN' },
            ].map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  const syntheticEvent = { target: { value: lang.code } } as React.ChangeEvent<HTMLSelectElement>;
                  handleLanguageChange(syntheticEvent);
                }}
                className={`px-2 py-1 rounded-md text-xs font-semibold transition-all ${
                  language === lang.code
                    ? 'bg-orange-500 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {lang.flag} {lang.label}
              </button>
            ))}
          </div>
          
          <div className="w-px h-5 bg-white/20"></div>
          
          <button className="text-white hover:text-orange-300 transition-colors p-1.5 xl:p-2">
            <Search size={18} strokeWidth={2.5} className="xl:h-5 xl:w-5" />
          </button>
          
          <Link href="/bao-gia" className="ml-1 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-[13px] xl:text-sm text-white font-bold hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
            Báo giá
          </Link>
          <Link href="/lien-he" className="px-4 xl:px-5 py-2 xl:py-2.5 rounded-full bg-[#f97316] text-[13px] xl:text-sm text-white font-bold hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
            Đăng ký tư vấn
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0f172a] shadow-2xl border-t border-white/10 flex flex-col px-6 py-4 gap-1 max-h-[80vh] overflow-y-auto">
          {menuData.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between py-3 px-3 rounded-lg font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-all"
                  >
                    {item.label}
                    <ChevronDown size={18} className={`transition-transform duration-200 ${mobileAccordion === item.label ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileAccordion === item.label && (
                    <div className="ml-3 pl-3 border-l-2 border-orange-500/30 flex flex-col gap-1 mb-2">
                      {item.children.map((child) => {
                        const Icon = child.icon;
                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${child.color}`}>
                              <Icon size={16} />
                            </div>
                            <div>
                              <div className="font-medium text-sm">{child.label}</div>
                              <div className="text-[11px] text-slate-500">{child.desc}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-3 px-3 rounded-lg font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="h-px bg-white/10 my-3"></div>
          <div className="flex gap-2 px-3 mb-2">
            {[
              { code: 'vi', label: 'Tiếng Việt' },
              { code: 'en', label: 'English' },
              { code: 'zh-CN', label: '中文' },
            ].map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  const syntheticEvent = { target: { value: lang.code } } as React.ChangeEvent<HTMLSelectElement>;
                  handleLanguageChange(syntheticEvent);
                }}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  language === lang.code
                    ? 'bg-orange-500 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <Link
            href="/lien-he"
            className="block px-5 py-3 rounded-full bg-[#f97316] text-white font-semibold text-center mt-2 hover:bg-orange-400 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Đăng ký tư vấn
          </Link>
        </div>
      )}
    </header>
  );
}
