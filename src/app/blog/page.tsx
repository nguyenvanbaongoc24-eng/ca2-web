"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

const categories = [
  { id: 'all', label: 'Tất cả' },
  { id: 'promo', label: 'Tin khuyến mãi' },
  { id: 'tech', label: 'Tin chuyên ngành' },
  { id: 'news', label: 'Thông báo' },
];

const blogPosts = [
  {
    id: 1,
    category: 'tech',
    title: 'Hướng dẫn đăng ký chữ ký số CA2 cho doanh nghiệp mới thành lập',
    excerpt: 'Quy trình đơn giản, nhanh chóng giúp doanh nghiệp sớm ổn định việc khai thuế và ký kết hợp đồng điện tử...',
    date: '12/03/2026',
    author: 'CA2 Team',
    image: '/ca2-web/ca2-sansang.webp',
  },
  {
    id: 2,
    category: 'promo',
    title: 'Siêu Ưu Đãi: Giảm 50% phí duy trì gói Ca2 eInvoice trong tháng 3',
    excerpt: 'Chương trình tri ân khách hàng thân thiết và chào mừng các doanh nghiệp mới gia nhập hệ sinh thái Ca2.Digital...',
    date: '10/03/2026',
    author: 'Marketing CA2',
    image: '/ca2-web/ca2-einvoice-banner.png',
  },
  {
    id: 3,
    category: 'tech',
    title: 'Cách chuyển đổi sang Remote Signing (Ký số từ xa) không cần USB Token',
    excerpt: 'Giải pháp ký số linh hoạt ngay trên Mobile và Tablet, đảm bảo an toàn theo tiêu chuẩn quốc tế...',
    date: '08/03/2026',
    author: 'Kỹ thuật CA2',
    image: '/ca2-web/ca2-usb-token-v2.png',
  },
  {
    id: 4,
    category: 'news',
    title: 'Thông báo nâng cấp hệ thống máy chủ chứng thực định kỳ tháng 3/2026',
    excerpt: 'Hệ thống sẽ tạm dừng trong khung giờ thấp điểm để nâng cấp hạ tầng, đảm bảo tốc độ xử lý hàng triệu chứng thư số...',
    date: '05/03/2026',
    author: 'IT Center',
    image: '/ca2-web/ca2-hatang.webp',
  },
];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPosts = activeTab === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeTab);

  return (
    <main className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-blue-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/ca2-web/ca2-solution-bg.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-6"
          >
            Tin tức & Sự kiện
          </motion.h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Cập nhật những tin tức mới nhất về công nghệ số, chính sách pháp luật và các chương trình ưu đãi độc quyền từ Ca2.Digital.
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-12 border-b border-slate-200 bg-white sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex bg-slate-100 p-1.5 rounded-xl gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeTab === cat.id 
                  ? 'bg-white text-blue-600 shadow-md' 
                  : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Tìm kiếm bài viết..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-blue-600 uppercase tracking-wider shadow-sm">
                      {categories.find(c => c.id === post.category)?.label}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-slate-400 text-xs mb-4 font-medium">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold group/link">
                    Đọc tiếp <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg italic">Chưa có bài viết nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
