"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Edit3, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--background-image-gradient-hero)] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Giải pháp <span className="text-[#ea580c]">Chuyển đổi số</span> toàn diện<br className="hidden lg:block"/> cho Doanh nghiệp
            </h1>
            <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
              Tối ưu hóa quy trình vận hành với hệ sinh thái thông minh: Hóa đơn điện tử, Chữ ký số và Bảo hiểm xã hội điện tử đáp ứng chuẩn pháp lý mới nhất.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-[#172554] text-white font-semibold hover:bg-[#1e3a8a] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Bắt đầu ngay
              </button>
              <button className="px-8 py-4 rounded-full bg-white text-[#172554] font-semibold border border-slate-200 hover:border-[#172554] hover:shadow-lg transition-all duration-300">
                Tìm hiểu thêm
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="/ca2-web/hero-homepage.png" 
              alt="Giải pháp chuyển đổi số toàn diện cho doanh nghiệp" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#172554] mb-4">Hệ Sinh Thái Sản Phẩm</h2>
            <p className="text-slate-500">Các giải pháp số cốt lõi giúp doanh nghiệp của bạn vận hành nhanh chóng, tiết kiệm và tuân thủ tuyệt đối pháp luật.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Hóa đơn điện tử</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Phát hành tức thì, an toàn bảo mật, trích xuất dữ liệu nhanh chóng và chuẩn kết nối Tổng cục Thuế.</p>
              <a href="#" className="flex items-center text-[#ea580c] font-semibold group-hover:text-[#f97316]">
                Xem chi tiết <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Card 2 */}
            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Edit3 size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Chữ ký số (CA)</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Ký số trên mọi nền tảng (USB Token, SmartCA), giá trị pháp lý tuyệt đối, chống giả mạo.</p>
              <a href="#" className="flex items-center text-[#ea580c] font-semibold group-hover:text-[#f97316]">
                Xem chi tiết <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Card 3 */}
            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">BHXH điện tử</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Kê khai trực tuyến, tra cứu quá trình đóng tự động, giảm thiểu 90% thủ tục giấy tờ phức tạp.</p>
              <a href="#" className="flex items-center text-[#ea580c] font-semibold group-hover:text-[#f97316]">
                Xem chi tiết <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl aspect-square flex flex-col items-center justify-center border border-slate-200 p-8">
            <div className="absolute inset-0 opacity-20">
              <img src="/ca2-web/ca2-solution-bg.png" alt="Background" className="w-full h-full object-cover" />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full max-w-sm bg-white rounded-2xl shadow-lg p-5 mb-6 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-inner">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">Ký số thành công</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Hợp đồng #HD-2026-001</div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: "0%" }} whileInView={{ width: "100%" }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-green-500"></motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-5 ml-12 transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-inner">
                  <FileText size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">Phát hành 1,000 Hóa đơn</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Đã gửi tới Cơ quan Thuế</div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-200 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-purple-200 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-orange-200 border-2 border-white"></div>
                </div>
                <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">Hoàn tất</div>
              </div>
            </motion.div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-[#172554] mb-6">Tại sao hơn 10,000 doanh nghiệp tin chọn chúng tôi?</h2>
            <div className="space-y-6">
              {[
                { title: 'Tốc độ xử lý nội bộ vượt trội', desc: 'Hệ thống chịu tải cao, phát hành hàng triệu hóa đơn không gián đoạn.' },
                { title: 'Tính pháp lý đảm bảo 100%', desc: 'Được cấp phép bởi Bộ TT&TT, đối tác trực tiếp của TCT & BHXH VN.' },
                { title: 'Hỗ trợ kỹ thuật 24/7', desc: 'Đội ngũ chuyên viên sẵn sàng xử lý mọi vướng mắc nghiệp vụ ngay lập tức.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 text-[#ea580c]"><CheckCircle size={24} /></div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PARTNERS SECTION */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-sm font-semibold text-slate-400 tracking-widest uppercase mb-8">Đối tác đồng hành & Khách hàng tiêu biểu</h3>
          <div className="max-w-5xl mx-auto flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
            <img src="/ca2-web/ca2-partners.webp" alt="Đối tác và khách hàng tiêu biểu của Ca2" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
