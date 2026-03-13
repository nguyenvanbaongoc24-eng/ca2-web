"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calculator, FileText, Store } from 'lucide-react';

const tools = [
  {
    title: 'Tính thuế TNCN',
    desc: 'Công cụ tính thuế thu nhập cá nhân theo biểu thuế lũy tiến từng phần. Hỗ trợ tính từ lương NET và GROSS.',
    href: '/tien-ich/tinh-thue-tncn',
    icon: Calculator,
    color: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50',
  },
  {
    title: 'Tính hoàn thuế TNCN',
    desc: 'Ước tính số tiền thuế thu nhập cá nhân được hoàn lại theo năm dựa trên tổng thu nhập và các khoản giảm trừ.',
    href: '/tien-ich/tinh-hoan-thue-tncn',
    icon: FileText,
    color: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50',
  },
  {
    title: 'Tính thuế HKD',
    desc: 'Công cụ tính thuế dành cho Hộ kinh doanh cá thể. Hỗ trợ tính thuế GTGT và thuế TNCN theo ngành nghề.',
    href: '/tien-ich/tinh-thue-hkd',
    icon: Store,
    color: 'from-orange-500 to-red-500',
    bgLight: 'bg-orange-50',
  },
];

export default function TienIchPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-28 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <Calculator size={16} /> Tiện ích trực tuyến
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Bộ Công cụ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Tính Thuế</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Tính toán nhanh chóng, chính xác và hoàn toàn miễn phí. Cập nhật biểu thuế mới nhất theo quy định pháp luật Việt Nam.
            </p>
          </div>

          {/* Tool Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="group relative bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${tool.color}`}></div>
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-2xl ${tool.bgLight} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon size={32} className="text-slate-700" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{tool.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">{tool.desc}</p>
                    <div className={`inline-flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${tool.color}`}>
                      Sử dụng ngay →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Info Notice */}
          <div className="mt-16 max-w-3xl mx-auto bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
            <p className="text-sm text-blue-700">
              <strong>Lưu ý:</strong> Kết quả tính toán chỉ mang tính chất tham khảo. Để được tư vấn chính xác nhất, vui lòng liên hệ bộ phận kế toán hoặc cơ quan thuế.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
