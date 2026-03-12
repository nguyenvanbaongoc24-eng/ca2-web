"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, KeyRound, UsbIcon, Shield, Globe, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    name: 'Ca2 Remote Signing',
    desc: 'Chữ ký số từ xa – ký mọi lúc mọi nơi bằng thiết bị di động mà không cần USB Token hay máy tính.',
    features: ['Ký trên Smartphone/Tablet', 'Xác thực OTP/Face ID', 'Không cần cài phần mềm'],
    icon: Smartphone,
    color: 'from-purple-500 to-indigo-600',
    bgLight: 'bg-purple-50 border-purple-100',
    iconColor: 'bg-purple-100 text-purple-600',
  },
  {
    name: 'Ca2 Sign Platform',
    desc: 'Nền tảng ký số tích hợp cho doanh nghiệp – quản lý, phân quyền và ký duyệt tài liệu trên một hệ thống duy nhất.',
    features: ['Quản lý tập trung chữ ký số', 'Phân quyền ký duyệt linh hoạt', 'API tích hợp đa nền tảng'],
    icon: KeyRound,
    color: 'from-indigo-500 to-blue-600',
    bgLight: 'bg-indigo-50 border-indigo-100',
    iconColor: 'bg-indigo-100 text-indigo-600',
  },
  {
    name: 'Ca2 Token',
    desc: 'Chữ ký số USB Token – dạng phần cứng phổ biến nhất Việt Nam, bảo mật cấp cao, được tin dùng bởi hàng triệu doanh nghiệp.',
    features: ['Bảo mật phần cứng cấp cao', 'Phổ biến nhất Việt Nam', 'Tương thích mọi hệ thống'],
    icon: UsbIcon,
    color: 'from-sky-500 to-blue-600',
    bgLight: 'bg-sky-50 border-sky-100',
    iconColor: 'bg-sky-100 text-sky-600',
  },
  {
    name: 'Ca2 HSM',
    desc: 'Chữ ký số chuyên dụng cho máy chủ (Server) – phù hợp cho tổ chức cần ký lượng lớn tài liệu tự động.',
    features: ['Ký hàng loạt tự động', 'Bảo mật cấp quân sự', 'Phù hợp doanh nghiệp lớn'],
    icon: Shield,
    color: 'from-red-500 to-rose-600',
    bgLight: 'bg-red-50 border-red-100',
    iconColor: 'bg-red-100 text-red-600',
  },
  {
    name: 'Ca2 SSL',
    desc: 'Chữ ký số cho Website – Chứng thư số SSL bảo vệ giao dịch trực tuyến, nâng cao uy tín và thứ hạng SEO.',
    features: ['Bảo mật HTTPS cho website', 'Nâng cao thứ hạng Google', 'Chống giả mạo tên miền'],
    icon: Globe,
    color: 'from-teal-500 to-emerald-600',
    bgLight: 'bg-teal-50 border-teal-100',
    iconColor: 'bg-teal-100 text-teal-600',
  },
  {
    name: 'Ca2 TSA',
    desc: 'Dịch vụ dấu thời gian – Xác nhận chính xác thời điểm ký số nhằm đảm bảo giá trị pháp lý lâu dài của tài liệu.',
    features: ['Xác nhận thời gian chính xác', 'Giá trị pháp lý vĩnh viễn', 'Tuân thủ chuẩn quốc tế'],
    icon: Clock,
    color: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50 border-amber-100',
    iconColor: 'bg-amber-100 text-amber-600',
  },
];

export default function ChuKySo() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-800/50 border border-purple-400/30 text-purple-200 text-sm font-semibold mb-6">Hệ sinh thái Chữ ký số Ca2</div>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Chữ Ký Số Ca2 – <br/><span className="text-purple-300">Bảo Chứng Cho Mọi Giao Dịch</span></h1>
            <p className="text-purple-100 text-lg mb-10 leading-relaxed">Ký kết hợp đồng, kê khai thuế, giao dịch ngân hàng nhanh chóng và an toàn tuyệt đối. 6 giải pháp chữ ký số đa dạng phù hợp mọi nhu cầu doanh nghiệp.</p>
            <Link href="/lien-he" className="inline-block px-8 py-4 bg-white text-purple-900 font-bold rounded-full shadow-lg transition-all hover:shadow-purple-500/30 hover:-translate-y-1">Nhận báo giá ngay</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src="/ca2-web/hero-signature.png" alt="Chữ ký số Ca2" className="w-full rounded-2xl drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">6 Giải pháp Chữ ký số</h2>
            <p className="text-slate-500">Đáp ứng mọi nhu cầu từ cá nhân, doanh nghiệp vừa & nhỏ đến tập đoàn lớn.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 rounded-2xl border ${product.bgLight} hover:shadow-xl transition-all group`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${product.iconColor} group-hover:scale-110 transition-transform`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{product.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={15} className="text-green-500 shrink-0"/> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/lien-he" className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-800">
                    Liên hệ <ArrowRight size={16} className="ml-1"/>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Sign Platform */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Ca2 Sign Platform</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Nền tảng quản lý ký số tập trung giúp doanh nghiệp số hóa toàn bộ quy trình ký duyệt tài liệu. 
                Giao diện trực quan, dễ dàng tải lên, phân quyền và theo dõi luồng ký kết một cách chuyên nghiệp.
              </p>
              <div className="space-y-4">
                {[
                  "Ký số tập trung cho nhiều người dùng",
                  "Phân quyền phê duyệt đa cấp",
                  "Tự động gửi email thông báo ký duyệt",
                  "Lưu trữ và bảo mật tài liệu tuyệt đối"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                      <CheckCircle2 size={14} className="text-indigo-600" />
                    </div>
                    <span className="text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full"></div>
              <img src="/ca2-web/ca2-sign-platform.png" alt="Ca2 Sign Platform Interface" className="relative w-full rounded-2xl shadow-2xl border border-slate-200" />
            </motion.div>
          </div>

          {/* Remote Signing */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Ca2 Remote Signing</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Giải pháp ký số từ xa không cần USB Token. Người dùng có thể thực hiện ký kết ngay trên điện thoại di động 
                hoặc máy tính bảng mọi lúc, mọi nơi với độ bảo mật cao nhất qua xác thực sinh trắc học.
              </p>
              <div className="space-y-4">
                {[
                  "Không cần USB Token hay SIM CA",
                  "Xác thực an toàn qua Face ID / Fingerprint",
                  "Tương thích hoàn toàn với iOS và Android",
                  "Đáp ứng đầy đủ tiêu chuẩn eIDAS & Bộ TT&TT"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                      <CheckCircle2 size={14} className="text-purple-600" />
                    </div>
                    <span className="text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-1 relative">
              <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full"></div>
              <img src="/ca2-web/ca2-remote-signing.png" alt="Ca2 Remote Signing Mobile App" className="relative w-full rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <img src="/ca2-web/ca2-logo-3d.webp" alt="Miễn phí chữ ký số công dân" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
