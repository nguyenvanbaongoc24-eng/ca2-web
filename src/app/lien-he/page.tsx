"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function LienHe() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-[#172554] mb-4">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-slate-600 text-lg">Đội ngũ chuyên viên của CA2 luôn hân hạnh hỗ trợ và tư vấn giải pháp hiệu quả nhất cho Doanh nghiệp của bạn.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          {/* Thông tin liên hệ */}
          <div className="bg-gradient-to-br from-[#172554] to-blue-900 text-white p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-8">Thông tin CA2</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl"><MapPin size={24}/></div>
                  <div>
                    <h4 className="font-bold text-lg text-blue-200">Trụ sở chính</h4>
                    <p className="text-blue-50 mt-1 leading-relaxed">Tầng 3, 25 Nguyễn Huy Tưởng, Lê Văn Thiêm, Thanh Xuân Trung, Thanh Xuân, Hà Nội</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl"><Phone size={24}/></div>
                  <div>
                    <h4 className="font-bold text-lg text-blue-200">SDT liên hệ</h4>
                    <p className="text-blue-50 mt-1 leading-relaxed">0356 230 550</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl"><Mail size={24}/></div>
                  <div>
                    <h4 className="font-bold text-lg text-blue-200">Email</h4>
                    <p className="text-blue-50 mt-1 leading-relaxed">Kinhdoanh@nacencomm.vn</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl"><Clock size={24}/></div>
                  <div>
                    <h4 className="font-bold text-lg text-blue-200">Giờ làm việc</h4>
                    <p className="text-blue-50 mt-1 leading-relaxed">Thứ 2 - Thứ 6: 08:00 - 17:30<br/>Thứ 7: 08:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form liên hệ */}
          <div className="p-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Gửi yêu cầu tư vấn</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Họ và tên *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-500 font-medium" placeholder="Nhập họ tên" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Số điện thoại *</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-500 font-medium" placeholder="Nhập số điện thoại" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Tên doanh nghiệp</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-500 font-medium" placeholder="Tên công ty / doanh nghiệp của bạn" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Dịch vụ quan tâm</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900 font-medium">
                  <option>-- Chọn dịch vụ --</option>
                  <option>Hóa đơn điện tử</option>
                  <option>Chữ ký số (CA)</option>
                  <option>Bảo hiểm xã hội điện tử</option>
                  <option>Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Nội dung lời nhắn</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none text-slate-900 placeholder:text-slate-500 font-medium" placeholder="Bạn cần chúng tôi tư vấn gì thêm?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-[#ea580c] hover:bg-[#f97316] text-white font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-1">Gửi thông tin ngay</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
