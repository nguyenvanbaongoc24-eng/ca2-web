"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calculator, CheckCircle, Shield, Zap, ArrowRight, BarChart3, CloudUpload } from 'lucide-react';
import Link from 'next/link';

export default function HoaDonDienTu() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-800/50 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-6">Ca2 eInvoice</div>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Hóa Đơn Điện Tử<br/>Thông Minh & An Toàn</h1>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">Kết nối trực tiếp Tổng cục Thuế, xử lý hàng triệu hóa đơn mỗi ngày với độ ổn định 99.9%. Tuân thủ Nghị định 123/2020/NĐ-CP và Thông tư 78/2021/TT-BTC.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/lien-he" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-1">Đăng ký dùng thử</Link>
              <Link href="#features" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 transition-all">Tìm hiểu thêm</Link>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src="/ca2-einvoice-banner.png" alt="CA2 E-Invoice - Phần mềm hóa đơn điện tử" className="w-full rounded-2xl drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Hệ sinh thái Hóa đơn & Kế toán</h2>
            <p className="text-slate-500">Giải pháp toàn diện từ phát hành hóa đơn đến quản lý sổ sách kế toán doanh nghiệp.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div whileHover={{ y: -8 }} className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-xl transition-all group">
              <img src="/ca2-sansang.webp" alt="Ca2 eInvoice Dashboard" className="w-full rounded-xl mb-6 shadow-md" />
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Ca2 eInvoice</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">Phát hành tức thì, kết nối trực tiếp Tổng cục Thuế, lưu trữ an toàn 10 năm. Hỗ trợ đầy đủ các loại hóa đơn: GTGT, bán hàng, xuất khẩu.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={16} className="text-green-500"/> Xuất hàng loạt 10,000 hóa đơn/phút</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={16} className="text-green-500"/> Tích hợp ERP, CRM, POS phổ biến</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={16} className="text-green-500"/> Tra cứu & quản lý trực tuyến 24/7</li>
              </ul>
              <Link href="/lien-he" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                Liên hệ báo giá <ArrowRight size={18} className="ml-2"/>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -8 }} className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Calculator size={32}/></div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Ca2 Accounting</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">Phần mềm kế toán thông minh tích hợp liền mạch với hệ thống hóa đơn điện tử, giúp tự động hóa quy trình quản lý tài chính.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={16} className="text-green-500"/> Tự động ghi nhận từ hóa đơn</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={16} className="text-green-500"/> Báo cáo tài chính chuẩn VAS</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={16} className="text-green-500"/> Quản lý đa chi nhánh, phòng ban</li>
              </ul>
              <Link href="/lien-he" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-800">
                Liên hệ báo giá <ArrowRight size={18} className="ml-2"/>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Lợi ích vượt trội</h2>
            <p className="text-slate-500">Hệ thống được tối ưu cho nghiệp vụ kế toán thực tế tại Việt Nam.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Chuẩn kết nối TCT', desc: 'Đồng bộ tức thời với cơ quan Thuế, không lo chậm trễ.', color: 'bg-blue-100 text-blue-600' },
              { icon: CloudUpload, title: 'Lưu trữ 10 năm', desc: 'Trung tâm dữ liệu đạt chuẩn Tier 3, an toàn tuyệt đối.', color: 'bg-green-100 text-green-600' },
              { icon: Zap, title: 'Xuất hàng loạt', desc: 'Xử lý 10,000 hóa đơn/phút, tích hợp đa nền tảng.', color: 'bg-orange-100 text-orange-600' },
              { icon: BarChart3, title: 'Báo cáo realtime', desc: 'Dashboard thống kê doanh thu, thuế VAT theo thời gian thực.', color: 'bg-purple-100 text-purple-600' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all text-center">
                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}><item.icon size={28}/></div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certification */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Hạ tầng đạt chuẩn Quốc tế</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">Hệ thống hóa đơn điện tử Ca2 được vận hành trên hạ tầng đạt tiêu chuẩn ISO 27001:2013 và eIDAS của Châu Âu. Được Bộ TT&TT chứng nhận, đảm bảo an toàn dữ liệu tuyệt đối.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700"><CheckCircle className="text-green-500 flex-shrink-0" size={20}/> Chứng nhận ISO 27001:2013</li>
                <li className="flex items-center gap-3 text-slate-700"><CheckCircle className="text-green-500 flex-shrink-0" size={20}/> Tuân thủ tiêu chuẩn eIDAS Châu Âu</li>
                <li className="flex items-center gap-3 text-slate-700"><CheckCircle className="text-green-500 flex-shrink-0" size={20}/> Chứng nhận Bộ TT&TT</li>
                <li className="flex items-center gap-3 text-slate-700"><CheckCircle className="text-green-500 flex-shrink-0" size={20}/> Trung tâm dữ liệu đạt chuẩn Tier 3</li>
              </ul>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <img src="/ca2-hatang.webp" alt="Hạ tầng Ca2 - ISO 27001 & eIDAS" className="w-full rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
