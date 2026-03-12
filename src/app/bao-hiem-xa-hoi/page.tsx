"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Users, Activity, Layers, ArrowRight, CheckCircle2, FileCheck, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function BHXH() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 via-emerald-800 to-teal-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-700/50 border border-green-400/30 text-green-200 text-sm font-semibold mb-6">BHXH Điện tử</div>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Phần Mềm<br/><span className="text-green-300">BHXH Điện Tử</span></h1>
            <p className="text-green-50 text-lg mb-8 leading-relaxed">Đơn giản hóa nghiệp vụ kê khai bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp. Kết nối trực tiếp cổng BHXH Việt Nam.</p>
            <Link href="/lien-he" className="inline-flex items-center px-8 py-4 bg-white text-green-800 font-bold rounded-full shadow-lg transition-transform hover:-translate-y-1">
              Tìm hiểu chi tiết <ArrowRight className="ml-2" size={20}/>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src="/ca2-web/hero-bhxh.png" alt="BHXH điện tử Ca2" className="w-full rounded-2xl drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Giải pháp BHXH & Nhận truyền</h2>
            <p className="text-slate-500">Hai sản phẩm hỗ trợ doanh nghiệp tối ưu nghiệp vụ bảo hiểm.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div whileHover={{ y: -8 }} className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><HeartPulse size={32}/></div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Kê khai BHXH</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">Kê khai BHXH, BHYT, BHTN trực tuyến. Tự động lập hồ sơ tăng/giảm lao động, giải quyết chế độ ốm đau, thai sản, tai nạn lao động nhanh chóng.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-green-500"/> Kết nối trực tiếp cổng BHXH VN</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-green-500"/> Tự động hóa 80% thao tác</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-green-500"/> Cập nhật thông tư mới nhất</li>
              </ul>
              <Link href="/lien-he" className="inline-flex items-center text-green-600 font-semibold hover:text-green-800">
                Liên hệ báo giá <ArrowRight size={18} className="ml-2"/>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -8 }} className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Users size={32}/></div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Ca2 CO-VAN</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">Giải pháp nhận – truyền dữ liệu BHXH cho đại lý và tổ chức I-VAN. Kết nối ổn định, truyền nhận nhanh chóng với cổng BHXH quốc gia.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-green-500"/> Cổng nhận truyền I-VAN chuyên dụng</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-green-500"/> Xử lý hồ sơ hàng loạt</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-green-500"/> Theo dõi trạng thái realtime</li>
              </ul>
              <Link href="/lien-he" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-800">
                Liên hệ báo giá <ArrowRight size={18} className="ml-2"/>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><Activity size={40}/></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Tự động hóa 80%</h3>
              <p className="text-slate-500 leading-relaxed">Giảm thiểu nhập liệu thủ công, gợi ý điền mẫu tự động, tránh sai sót.</p>
            </div>
            <div className="p-8">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"><FileCheck size={40}/></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Quản lý chặt chẽ</h3>
              <p className="text-slate-500 leading-relaxed">Theo dõi xuyên suốt hồ sơ tăng giảm lao động, giải quyết chế độ.</p>
            </div>
            <div className="p-8">
              <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6"><ShieldCheck size={40}/></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Thông tư mới nhất</h3>
              <p className="text-slate-500 leading-relaxed">Hệ thống liên tục cập nhật biểu mẫu và nghị định mới nhất từ BHXH VN.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
