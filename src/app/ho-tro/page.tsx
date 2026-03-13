"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Download, Key, Info, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const supportTools = [
  {
    title: 'Tra cứu Chữ ký số',
    desc: 'Kiểm tra trạng thái CTS, thời hạn và thông báo từ hệ thống chứng thực.',
    icon: Shield,
    color: 'bg-indigo-100 text-indigo-600',
    action: 'Tra cứu ngay'
  },
  {
    title: 'Tra cứu Hóa đơn',
    desc: 'Tìm kiếm và kiểm tra tính hợp lệ của hóa đơn điện tử đã phát hành.',
    icon: FileText,
    color: 'bg-blue-100 text-blue-600',
    action: 'Liên kết tra cứu'
  },
  {
    title: 'Tải phần mềm',
    desc: 'Download Driver USB Token, Tool ký số và các ứng dụng kê khai mới nhất.',
    icon: Download,
    color: 'bg-emerald-100 text-emerald-600',
    action: 'Vào kho tải'
  },
  {
    title: 'Hướng dẫn sử dụng',
    desc: 'Tài liệu hướng dẫn chi tiết, video mockup thao tác cài đặt và sử dụng.',
    icon: Key,
    color: 'bg-amber-100 text-amber-600',
    action: 'Xem tài liệu'
  }
];

const faqs = [
  { q: 'Làm thế nào để gia hạn chữ ký số CA2?', a: 'Quý khách có thể liên hệ trực tiếp tổng đài 1900 5454 07 hoặc thực hiện gửi yêu cầu gia hạn ngay trên phần mềm Token Manager.' },
  { q: 'Hóa đơn điện tử có giá trị pháp lý như hóa đơn giấy không?', a: 'Có, hóa đơn điện tử của CA2 đảm bảo tính pháp lý tuyệt đối theo Nghị định 123 và Thông tư 78 của Bộ Tài chính.' },
  { q: 'Cần làm gì khi bị mất USB Token?', a: 'Quý khách cần liên hệ ngay với CA2 để tạm dừng dịch vụ và thực hiện thủ tục cấp lại thiết bị mới để đảm bảo an toàn.' },
];

export default function SupportPage() {
  const [formData, setFormData] = React.useState({
    full_name: '',
    phone: '',
    ultraview_id: '',
    ultraview_pass: '',
    issue_type: ''
  });
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const { error } = await supabase
      .from('support_requests')
      .insert([formData]);

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
        ultraview_id: '',
        ultraview_pass: '',
        issue_type: ''
      });
    }
  };

  return (
    <main className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-[#0f172a] py-20 relative">
        <div className="absolute inset-0 opacity-10">
          <img src="/ca2-web/ca2-solution-bg.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-orange-500/20"
          >
            <HelpCircle size={40} className="text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-6"
          >
            Trung tâm Hỗ trợ Khách hàng
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Tìm kiếm nhanh các công cụ tra cứu, tải phần mềm hoặc xem hướng dẫn chi tiết bên dưới.
          </p>
        </div>
      </section>

      {/* Quick Tools Grid */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-[32px] shadow-xl border border-white hover:border-blue-100 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${tool.color} group-hover:scale-110 transition-transform`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{tool.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">{tool.desc}</p>
                  <button className="flex items-center gap-2 text-blue-600 font-bold text-sm group/btn">
                    {tool.action} 
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Support Form Section */}
      <section id="quick-support" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-[40px] p-8 lg:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <HelpCircle size={120} className="text-blue-900" />
            </div>
            
            <div className="relative z-10">
              <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Gửi yêu cầu Hỗ trợ nhanh</h2>
                <p className="text-slate-500">Điền thông tin Ultraview/Anydesk để kỹ thuật viên hỗ trợ bạn ngay lập tức.</p>
              </div>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-8 p-6 bg-green-100 border border-green-200 text-green-700 rounded-3xl flex items-center gap-4">
                  <CheckCircle2 size={24} />
                  <span className="font-bold">Yêu cầu đã được gửi thành công! Kỹ thuật viên sẽ liên hệ bạn ngay.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <div className="mb-8 p-6 bg-red-100 border border-red-200 text-red-700 rounded-3xl font-bold">
                  <div>Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại hoặc gọi Hotline.</div>
                  {errorMessage && <div className="mt-2 text-sm font-normal opacity-80">Chi tiết lỗi: {errorMessage}</div>}
                </div>
              )}

              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Họ và Tên</label>
                  <input 
                    required
                    type="text" 
                    value={formData.full_name}
                    onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                    placeholder="Nguyễn Văn A" 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white font-extrabold text-slate-900 placeholder:font-semibold placeholder:text-slate-400" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Số điện thoại</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="09xx xxx xxx" 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white font-extrabold text-slate-900 placeholder:font-semibold placeholder:text-slate-400" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">ID Ultraview / Anydesk</label>
                  <input 
                    required
                    type="text" 
                    value={formData.ultraview_id}
                    onChange={(e) => setFormData({...formData, ultraview_id: e.target.value})}
                    placeholder="12 345 678" 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white font-extrabold text-slate-900 placeholder:font-semibold placeholder:text-slate-400" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Mật khẩu (Password)</label>
                  <input 
                    required
                    type="text" 
                    value={formData.ultraview_pass}
                    onChange={(e) => setFormData({...formData, ultraview_pass: e.target.value})}
                    placeholder="xxxx" 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white font-extrabold text-slate-900 placeholder:font-semibold placeholder:text-slate-400" 
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Nội dung cần hỗ trợ</label>
                  <select 
                    required
                    value={formData.issue_type}
                    onChange={(e) => setFormData({...formData, issue_type: e.target.value})}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white appearance-none font-extrabold text-slate-900"
                  >
                    <option value="">-- Chọn vấn đề cần xử lý --</option>
                    <option value="cks">Cài đặt chữ ký số (USB Token)</option>
                    <option value="app">Cài đặt app ký số trên máy tính</option>
                    <option value="invoice">Lỗi xuất hóa đơn điện tử</option>
                    <option value="bhxh">Lỗi kê khai BHXH</option>
                    <option value="other">Vấn đề khác...</option>
                  </select>
                </div>
                <div className="md:col-span-2 mt-4">
                  <button 
                    disabled={loading}
                    type="submit" 
                    className={`w-full py-5 text-white font-extrabold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3 group ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'}`}
                  >
                    {loading ? 'Đang gửi yêu cầu...' : 'Gửi yêu cầu kỹ thuật'} 
                    {!loading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Contact */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Info className="text-blue-600" /> Câu hỏi thường gặp
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-slate-800 mb-2 flex items-start gap-2">
                    <span className="text-blue-600">Q:</span> {faq.q}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed pl-6">
                    <span className="font-semibold text-slate-400">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-blue-900 rounded-[40px] p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Bạn cần hỗ trợ trực tiếp?</h2>
              <p className="text-blue-100 mb-8">Nếu không tìm thấy câu trả lời, hãy kết nối ngay với đội ngũ kỹ thuật viên của chúng tôi.</p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">Hotline 24/7</div>
                    <div className="text-xl font-bold">1900 5454 07</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">Email kỹ thuật</div>
                    <div className="text-xl font-bold">support@cavn.vn</div>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-[#f97316] hover:bg-orange-600 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-orange-900/20">
                Gửi yêu cầu hỗ trợ ngay
              </button>
            </div>
            {/* Background Decoration */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
