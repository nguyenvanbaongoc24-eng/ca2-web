"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, Star, Zap, Shield, FileText, KeyRound, Calculator } from 'lucide-react';

const pricingCategories = [
  {
    id: 'hoa-don',
    title: 'Hóa đơn điện tử',
    subtitle: 'Ca2 eInvoice – Giải pháp hóa đơn điện tử chuẩn TCT',
    color: 'from-blue-500 to-indigo-600',
    icon: FileText,
    plans: [
      {
        name: 'Starter',
        price: '500.000',
        unit: 'đ/năm',
        desc: 'Phù hợp hộ kinh doanh nhỏ',
        features: ['200 hóa đơn/năm', 'Ký số Remote Signing', 'Gửi CQT tự động', 'Hỗ trợ qua email'],
        popular: false,
      },
      {
        name: 'Business',
        price: '1.500.000',
        unit: 'đ/năm',
        desc: 'Phù hợp doanh nghiệp vừa',
        features: ['1.000 hóa đơn/năm', 'Ký số Remote Signing', 'Gửi CQT tự động', 'API tích hợp', 'Hỗ trợ ưu tiên 24/7', 'Ca2 IMV đầu vào'],
        popular: true,
      },
      {
        name: 'Enterprise',
        price: 'Liên hệ',
        unit: '',
        desc: 'Doanh nghiệp lớn, không giới hạn',
        features: ['Không giới hạn hóa đơn', 'Ký số đa nền tảng', 'API tích hợp ERP', 'Account Manager riêng', 'SLA 99.99%', 'Triển khai on-premise'],
        popular: false,
      },
    ],
  },
  {
    id: 'chu-ky-so',
    title: 'Chữ ký số',
    subtitle: 'Đa dạng giải pháp chữ ký số cho mọi nhu cầu',
    color: 'from-purple-500 to-indigo-600',
    icon: KeyRound,
    plans: [
      {
        name: 'Remote Signing',
        price: '1.200.000',
        unit: 'đ/năm',
        desc: 'Ký từ xa bằng điện thoại',
        features: ['Ký mọi nơi trên mobile', 'Xác thực OTP/Sinh trắc', 'Ký HĐĐT, thuế, BHXH', 'Không cần USB Token'],
        popular: false,
      },
      {
        name: 'USB Token',
        price: '1.600.000',
        unit: 'đ/năm',
        desc: 'Chữ ký số phần cứng',
        features: ['Thiết bị USB Token', 'Tương thích mọi OS', 'Ký thuế, BHXH, ngân hàng', 'Bảo hành 12 tháng', 'Driver & hỗ trợ cài đặt'],
        popular: true,
      },
      {
        name: 'Sign Platform',
        price: 'Liên hệ',
        unit: '',
        desc: 'Nền tảng ký số doanh nghiệp',
        features: ['Ký mọi loại tài liệu', 'Quy trình phê duyệt', 'API mở tích hợp', 'Ký hàng loạt', 'Audit trail đầy đủ'],
        popular: false,
      },
    ],
  },
  {
    id: 'ke-toan',
    title: 'Phần mềm kế toán',
    subtitle: 'Ca2 Accounting – Kế toán thông minh, tích hợp sẵn HĐĐT',
    color: 'from-emerald-500 to-teal-600',
    icon: Calculator,
    plans: [
      {
        name: 'Basic',
        price: '3.000.000',
        unit: 'đ/năm',
        desc: 'Doanh nghiệp siêu nhỏ',
        features: ['1 người dùng', 'Hạch toán cơ bản', 'Báo cáo tài chính', 'Kê khai thuế GTGT', 'Tích hợp Ca2 eInvoice'],
        popular: false,
      },
      {
        name: 'Professional',
        price: '6.000.000',
        unit: 'đ/năm',
        desc: 'Doanh nghiệp vừa và nhỏ',
        features: ['5 người dùng', 'Hạch toán đầy đủ VAS', 'BCTC, CĐKT, KQKD', 'Quản lý công nợ, tồn kho', 'Tích hợp Ca2 eInvoice & IMV', 'Hỗ trợ ưu tiên'],
        popular: true,
      },
      {
        name: 'Enterprise',
        price: 'Liên hệ',
        unit: '',
        desc: 'Doanh nghiệp lớn, đa chi nhánh',
        features: ['Không giới hạn người dùng', 'Đa chi nhánh, đa tiền tệ', 'API tích hợp ERP', 'Triển khai on-premise', 'Account Manager riêng', 'SLA premium'],
        popular: false,
      },
    ],
  },
];

export default function BaoGiaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-28 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <Zap size={16} /> Bảng giá cạnh tranh
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Bảng giá <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">sản phẩm Ca2</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Chi phí phù hợp với mọi loại hình doanh nghiệp. Cam kết đồng hành và hỗ trợ tận tâm trong suốt quá trình sử dụng.
            </p>
          </div>

          {/* Pricing Categories */}
          {pricingCategories.map((category) => {
            const Icon = category.icon;
            return (
              <section key={category.id} id={category.id} className="mb-20 scroll-mt-28">
                <div className="text-center mb-10">
                  <div className={`inline-flex items-center gap-2 mb-3`}>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                  </div>
                  <p className="text-slate-500 text-sm">{category.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {category.plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                        plan.popular
                          ? 'shadow-xl border-2 border-orange-400 ring-4 ring-orange-100'
                          : 'shadow-lg border border-slate-100'
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl flex items-center gap-1">
                          <Star size={12} /> Phổ biến nhất
                        </div>
                      )}
                      <div className={`h-1.5 bg-gradient-to-r ${category.color}`}></div>
                      <div className="p-8">
                        <h3 className="font-bold text-slate-800 text-lg mb-1">{plan.name}</h3>
                        <p className="text-slate-500 text-sm mb-5">{plan.desc}</p>
                        <div className="mb-6">
                          <span className="text-3xl font-extrabold text-slate-900">{plan.price}</span>
                          {plan.unit && <span className="text-slate-500 text-sm ml-1">{plan.unit}</span>}
                        </div>
                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feat) => (
                            <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-600">
                              <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/lien-he"
                          className={`block text-center py-3 rounded-xl font-bold text-sm transition-all ${
                            plan.popular
                              ? `bg-gradient-to-r ${category.color} text-white hover:shadow-lg hover:-translate-y-0.5`
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {plan.price === 'Liên hệ' ? 'Liên hệ tư vấn' : 'Đăng ký ngay'}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Bottom CTA */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 text-center mt-10">
            <h3 className="text-2xl font-bold text-white mb-3">Cần tư vấn gói phù hợp?</h3>
            <p className="text-slate-400 mb-6">Đội ngũ chuyên gia Ca2 Digital sẵn sàng hỗ trợ bạn chọn giải pháp tối ưu nhất cho doanh nghiệp.</p>
            <div className="flex justify-center gap-4">
              <Link href="/lien-he" className="px-8 py-3.5 bg-[#f97316] text-white font-bold rounded-full hover:bg-orange-400 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Đăng ký tư vấn miễn phí
              </Link>
              <a href="tel:0339685929" className="px-8 py-3.5 bg-white/10 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                Gọi ngay: 0339.685.929
              </a>
            </div>
          </div>

          {/* Note */}
          <div className="mt-10 max-w-3xl mx-auto bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
            <p className="text-sm text-blue-700">
              <strong>Lưu ý:</strong> Giá trên chưa bao gồm VAT. Giá có thể thay đổi tùy theo yêu cầu triển khai cụ thể. Vui lòng liên hệ để nhận báo giá chi tiết nhất.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
