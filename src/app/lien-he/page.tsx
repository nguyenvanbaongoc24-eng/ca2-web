"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function LienHe() {
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    company_name: '',
    service_type: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    const { error } = await supabase
      .from('consultation_requests')
      .insert([
        {
          full_name: formData.full_name,
          phone: formData.phone,
          company_name: formData.company_name,
          service_type: formData.service_type,
          message: formData.message,
          status: 'pending'
        }
      ]);

    setLoading(false);
    if (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Lỗi không xác định từ máy chủ');
    } else {
      setStatus('success');
      setFormData({
        full_name: '',
        phone: '',
        company_name: '',
        service_type: '',
        message: ''
      });
    }
  };
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
            
            {status === 'success' && (
              <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-3xl flex items-start gap-4">
                <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-green-800 mb-1">Gửi yêu cầu thành công!</h4>
                  <p className="text-green-700">Cảm ơn bạn đã quan tâm. Chuyên viên của CA2 sẽ liên hệ để tư vấn cho bạn trong thời gian sớm nhất.</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-3xl flex items-start gap-4">
                <AlertCircle className="text-red-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-red-800 mb-1">Có lỗi xảy ra</h4>
                  <p className="text-red-700">Không thể gửi yêu cầu lúc này. Vui lòng thử lại sau hoặc liên hệ Hotline.</p>
                  {errorMessage && <p className="mt-2 text-sm text-red-600 opacity-80">Chi tiết: {errorMessage}</p>}
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Họ và tên *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white font-extrabold text-slate-900 placeholder:font-semibold placeholder:text-slate-400" 
                    placeholder="Nhập họ tên" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Số điện thoại *</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white font-extrabold text-slate-900 placeholder:font-semibold placeholder:text-slate-400" 
                    placeholder="Nhập số điện thoại" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Tên doanh nghiệp</label>
                <input 
                  type="text" 
                  value={formData.company_name}
                  onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white font-extrabold text-slate-900 placeholder:font-semibold placeholder:text-slate-400" 
                  placeholder="Tên công ty / doanh nghiệp của bạn" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Dịch vụ quan tâm</label>
                <select 
                  value={formData.service_type}
                  onChange={(e) => setFormData({...formData, service_type: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white appearance-none font-extrabold text-slate-900"
                >
                  <option value="">-- Chọn dịch vụ --</option>
                  <option value="Hóa đơn điện tử">Hóa đơn điện tử</option>
                  <option value="Chữ ký số (CA)">Chữ ký số (CA)</option>
                  <option value="Bảo hiểm xã hội điện tử">Bảo hiểm xã hội điện tử</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Nội dung lời nhắn</label>
                <textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none bg-white font-extrabold text-slate-900 placeholder:font-semibold placeholder:text-slate-400" 
                  placeholder="Bạn cần chúng tôi tư vấn gì thêm?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-4 text-white font-bold rounded-xl shadow-lg transition-all ${loading ? 'bg-slate-400 text-slate-100' : 'bg-[#ea580c] hover:bg-[#f97316] hover:-translate-y-1'}`}
              >
                {loading ? 'Đang gửi thông tin...' : 'Gửi thông tin ngay'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
