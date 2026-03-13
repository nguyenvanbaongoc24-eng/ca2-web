import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Check, Star, Zap, Shield, Globe, Smartphone, Clock, FileText, Calculator, HeartPulse, Inbox, KeyRound, UsbIcon } from 'lucide-react';

const ALL_SLUGS = [
  'ca2-einvoice', 'ca2-imv', 'ca2-accounting', 'ca2-pos',
  'chung-tu-thue-tncn', 'ke-khai-bhxh', 'remote-signing',
  'sign-platform', 'usb-token', 'ca2-hsm', 'ca2-ssl', 'ca2-tsa',
];

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

const PRODUCTS: Record<string, {
  name: string;
  tagline: string;
  description: string;
  color: string;
  icon: React.ElementType;
  features: string[];
  benefits: { title: string; desc: string }[];
  cta: string;
  pricingAnchor: string;
}> = {
  'ca2-einvoice': {
    name: 'Ca2 eInvoice',
    tagline: 'Hóa đơn điện tử chuẩn Tổng cục Thuế',
    description: 'Giải pháp hóa đơn điện tử toàn diện, đáp ứng đầy đủ quy định theo Nghị định 123/2020/NĐ-CP và Thông tư 78/2021/TT-BTC. Tích hợp chữ ký số, tự động gửi CQT, quản lý hóa đơn tập trung trên nền tảng cloud.',
    color: 'from-blue-500 to-indigo-600',
    icon: FileText,
    pricingAnchor: '#hoa-don',
    features: [
      'Phát hành hóa đơn điện tử theo Nghị định 123/2020',
      'Tự động gửi hóa đơn đến Tổng cục Thuế (CQT)',
      'Hỗ trợ đa loại hóa đơn: GTGT, Bán hàng, Xuất kho',
      'Tích hợp chữ ký số Ca2 Remote Signing',
      'Quản lý tập trung trên nền tảng Cloud',
      'Xuất báo cáo, thống kê theo thời gian thực',
      'API tích hợp với phần mềm ERP, Kế toán',
      'Hỗ trợ tra cứu hóa đơn trực tuyến 24/7',
    ],
    benefits: [
      { title: 'Tiết kiệm chi phí', desc: 'Giảm 80% chi phí so với hóa đơn giấy truyền thống' },
      { title: 'An toàn & Hợp pháp', desc: 'Đáp ứng 100% quy định pháp luật về HĐĐT' },
      { title: 'Nhanh chóng', desc: 'Phát hành và gửi hóa đơn chỉ trong vài giây' },
    ],
    cta: 'Đăng ký dùng thử Ca2 eInvoice',
  },
  'ca2-imv': {
    name: 'Ca2 IMV',
    tagline: 'Hóa đơn đầu vào thông minh',
    description: 'Giải pháp quản lý hóa đơn đầu vào tự động cho doanh nghiệp. Ca2 IMV giúp thu thập, phân loại, đối soát và lưu trữ toàn bộ hóa đơn mua hàng từ nhà cung cấp. Tích hợp AI nhận dạng tự động, giảm thiểu sai sót thủ công.',
    color: 'from-violet-500 to-purple-600',
    icon: Inbox,
    pricingAnchor: '#hoa-don',
    features: [
      'Tự động thu thập hóa đơn đầu vào từ email, CQT',
      'AI phân loại và nhận dạng nội dung hóa đơn',
      'Đối soát hóa đơn mua hàng với đơn đặt hàng',
      'Kiểm tra tính hợp lệ hóa đơn trên hệ thống TCT',
      'Cảnh báo hóa đơn sai, trùng, hết hạn',
      'Lưu trữ & tìm kiếm hóa đơn đầu vào nhanh chóng',
      'Tích hợp phần mềm kế toán Ca2 Accounting',
      'Báo cáo chi tiết chi phí đầu vào theo kỳ',
    ],
    benefits: [
      { title: 'Tự động hóa', desc: 'Giảm 90% thời gian xử lý hóa đơn thủ công' },
      { title: 'Chính xác', desc: 'AI nhận dạng với độ chính xác trên 99%' },
      { title: 'Kiểm soát rủi ro', desc: 'Phát hiện sớm hóa đơn bất thường' },
    ],
    cta: 'Đăng ký dùng thử Ca2 IMV',
  },
  'ca2-accounting': {
    name: 'Ca2 Accounting',
    tagline: 'Phần mềm kế toán thông minh',
    description: 'Phần mềm kế toán online thế hệ mới, tích hợp sẵn hóa đơn điện tử và chữ ký số của Ca2. Quản lý sổ sách, lập báo cáo tài chính, kê khai thuế tự động – tất cả trên một nền tảng duy nhất.',
    color: 'from-emerald-500 to-teal-600',
    icon: Calculator,
    pricingAnchor: '#ke-toan',
    features: [
      'Hạch toán tự động theo chuẩn VAS',
      'Tích hợp sẵn Ca2 eInvoice & Ca2 IMV',
      'Lập báo cáo tài chính tự động (BCTC, CĐKT, KQKD)',
      'Kê khai thuế GTGT, TNCN, TNDN trực tuyến',
      'Quản lý công nợ, tồn kho, tài sản cố định',
      'Phân quyền người dùng đa cấp độ',
      'Sao lưu dữ liệu tự động trên Cloud',
      'Hỗ trợ đa chi nhánh, đa đơn vị tiền tệ',
    ],
    benefits: [
      { title: 'All-in-One', desc: 'Kế toán + HĐĐT + CKS trên một nền tảng' },
      { title: 'Tuân thủ VAS', desc: 'Đáp ứng chuẩn kế toán Việt Nam mới nhất' },
      { title: 'Tiết kiệm nhân sự', desc: 'Tự động hóa 70% công việc kế toán' },
    ],
    cta: 'Đăng ký dùng thử Ca2 Accounting',
  },
  'ca2-pos': {
    name: 'Ca2 POS',
    tagline: 'Quản lý bán hàng trên Mobile',
    description: 'Ứng dụng quản lý bán hàng di động tích hợp hóa đơn điện tử. Phù hợp cho cửa hàng bán lẻ, nhà hàng, quán cafe. Xuất hóa đơn ngay tại quầy, quản lý tồn kho và doanh thu theo thời gian thực.',
    color: 'from-orange-500 to-red-500',
    icon: Smartphone,
    pricingAnchor: '#hoa-don',
    features: [
      'Bán hàng & xuất HĐĐT ngay trên điện thoại',
      'Quản lý tồn kho đa kho theo thời gian thực',
      'Hỗ trợ thanh toán QR Code, Momo, ZaloPay',
      'Báo cáo doanh thu theo ngày/tuần/tháng',
      'Quản lý nhân viên và ca làm việc',
      'Tích hợp máy in bill nhiệt, máy quét mã vạch',
      'Hoạt động kể cả khi mất mạng (offline mode)',
      'Đồng bộ dữ liệu lên Ca2 Cloud tự động',
    ],
    benefits: [
      { title: 'Di động', desc: 'Bán hàng mọi nơi chỉ với 1 chiếc điện thoại' },
      { title: 'Đa tiện ích', desc: 'Tích hợp POS + HĐĐT + Quản lý kho' },
      { title: 'Offline mode', desc: 'Hoạt động ổn định ngay cả khi mất mạng' },
    ],
    cta: 'Đăng ký dùng thử Ca2 POS',
  },
  'chung-tu-thue-tncn': {
    name: 'Chứng từ thuế TNCN',
    tagline: 'Khởi tạo & phát hành chứng từ điện tử',
    description: 'Giải pháp khởi tạo, phát hành và quản lý chứng từ khấu trừ thuế TNCN điện tử theo quy định. Đáp ứng đầy đủ mẫu 03/KK-TNCN, tự động gửi cho người lao động qua email và lưu trữ trên hệ thống.',
    color: 'from-rose-500 to-pink-600',
    icon: FileText,
    pricingAnchor: '#hoa-don',
    features: [
      'Khởi tạo chứng từ khấu trừ thuế TNCN điện tử',
      'Đáp ứng mẫu 03/KK-TNCN theo quy định TCT',
      'Ký số và gửi CQT tự động',
      'Gửi chứng từ cho người lao động qua email',
      'Tra cứu, in lại chứng từ mọi lúc mọi nơi',
      'Quản lý tập trung toàn bộ chứng từ đã phát hành',
      'Tích hợp phần mềm kế toán Ca2 Accounting',
      'Hỗ trợ phát hành chứng từ hàng loạt (batch)',
    ],
    benefits: [
      { title: 'Tiết kiệm thời gian', desc: 'Phát hành hàng loạt chỉ trong vài phút' },
      { title: 'Đúng quy định', desc: '100% tuân thủ quy định TCT về chứng từ điện tử' },
      { title: 'Tự động hóa', desc: 'Từ ký số đến gửi CQT đều tự động hoàn toàn' },
    ],
    cta: 'Đăng ký dùng thử',
  },
  'ke-khai-bhxh': {
    name: 'Kê khai BHXH điện tử',
    tagline: 'Kê khai bảo hiểm xã hội online',
    description: 'Giải pháp kê khai BHXH, BHYT, BHTN điện tử dành cho doanh nghiệp. Tích hợp chữ ký số, gửi hồ sơ trực tiếp đến cơ quan BHXH, theo dõi trạng thái xử lý online.',
    color: 'from-green-500 to-emerald-600',
    icon: HeartPulse,
    pricingAnchor: '#chu-ky-so',
    features: [
      'Kê khai BHXH, BHYT, BHTN trực tuyến',
      'Tích hợp chữ ký số Ca2 ký số tự động',
      'Gửi hồ sơ đến cơ quan BHXH trực tiếp',
      'Theo dõi trạng thái xử lý hồ sơ online',
      'Quản lý danh sách lao động tham gia BHXH',
      'Tự động tính mức đóng BHXH theo quy định',
      'Lưu trữ hồ sơ BHXH trên Cloud an toàn',
      'Cập nhật biểu mẫu mới nhất từ BHXH Việt Nam',
    ],
    benefits: [
      { title: 'Nhanh chóng', desc: 'Kê khai và gửi hồ sơ chỉ trong vài phút' },
      { title: 'Chính xác', desc: 'Tự động tính toán mức đóng theo quy định' },
      { title: 'Tiện lợi', desc: 'Theo dõi trạng thái xử lý mọi lúc mọi nơi' },
    ],
    cta: 'Đăng ký dùng thử Kê khai BHXH',
  },
  'remote-signing': {
    name: 'Ca2 Remote Signing',
    tagline: 'Chữ ký số từ xa – Ký mọi nơi',
    description: 'Dịch vụ chữ ký số từ xa cho phép ký số mọi lúc mọi nơi bằng thiết bị di động. Không cần USB Token, không cần cài phần mềm. Xác thực bằng OTP/sinh trắc học, đảm bảo an toàn cao nhất.',
    color: 'from-purple-500 to-indigo-600',
    icon: Smartphone,
    pricingAnchor: '#chu-ky-so',
    features: [
      'Ký số từ xa bằng điện thoại di động',
      'Không cần USB Token hay cài phần mềm',
      'Xác thực bằng OTP, PIN hoặc sinh trắc học',
      'Hỗ trợ ký hóa đơn, hợp đồng, văn bản điện tử',
      'Tích hợp Ca2 eInvoice, Ca2 Accounting',
      'Quản lý nhiều chứng thư số trên 1 tài khoản',
      'Ký hàng loạt (batch signing) nhanh chóng',
      'Tuân thủ Luật Giao dịch điện tử 2023',
    ],
    benefits: [
      { title: 'Tiện lợi', desc: 'Ký số mọi nơi chỉ bằng điện thoại di động' },
      { title: 'An toàn', desc: 'Xác thực đa lớp: OTP + Sinh trắc học' },
      { title: 'Chi phí thấp', desc: 'Tiết kiệm hơn nhiều so với USB Token' },
    ],
    cta: 'Đăng ký Ca2 Remote Signing',
  },
  'sign-platform': {
    name: 'Ca2 Sign Platform',
    tagline: 'Nền tảng ký số tích hợp',
    description: 'Nền tảng ký số doanh nghiệp toàn diện, hỗ trợ ký điện tử mọi loại tài liệu. Tích hợp quy trình phê duyệt, quản lý tập trung, API mở cho phép kết nối với mọi phần mềm.',
    color: 'from-indigo-500 to-blue-600',
    icon: KeyRound,
    pricingAnchor: '#chu-ky-so',
    features: [
      'Ký điện tử mọi loại tài liệu PDF, Office',
      'Quy trình phê duyệt đa cấp tùy chỉnh',
      'API mở tích hợp với ERP, CRM, DMS',
      'Hỗ trợ ký hàng loạt (batch signing)',
      'Dashboard quản lý tài liệu đã ký tập trung',
      'Hỗ trợ cả chữ ký số USB Token và Remote Signing',
      'Mã hóa tài liệu end-to-end',
      'Log kiểm toán chi tiết (audit trail)',
    ],
    benefits: [
      { title: 'Toàn diện', desc: 'Một nền tảng cho mọi nhu cầu ký số' },
      { title: 'Linh hoạt', desc: 'API mở, tích hợp với mọi hệ thống' },
      { title: 'Bảo mật', desc: 'Mã hóa end-to-end và audit trail đầy đủ' },
    ],
    cta: 'Đăng ký Ca2 Sign Platform',
  },
  'usb-token': {
    name: 'Ca2 USB Token',
    tagline: 'Chữ ký số phần cứng phổ biến',
    description: 'Thiết bị USB Token chữ ký số chuẩn quốc tế, tương thích mọi hệ điều hành. Sử dụng cho kê khai thuế, ký hóa đơn, BHXH, ngân hàng điện tử. Bảo mật phần cứng cao nhất.',
    color: 'from-sky-500 to-blue-600',
    icon: UsbIcon,
    pricingAnchor: '#chu-ky-so',
    features: [
      'Chữ ký số phần cứng chuẩn FIPS 140-2',
      'Tương thích Windows, MacOS, Linux',
      'Sử dụng cho Thuế, HĐĐT, BHXH, Ngân hàng',
      'Hỗ trợ ký trên tất cả trình duyệt web',
      'Bảo mật khóa bí mật trên chip phần cứng',
      'Có thể lưu nhiều chứng thư số cùng lúc',
      'Driver cài đặt đơn giản, hỗ trợ kỹ thuật 24/7',
      'Bảo hành phần cứng 12 tháng',
    ],
    benefits: [
      { title: 'An toàn tuyệt đối', desc: 'Khóa bí mật lưu trên chip hardware' },
      { title: 'Đa năng', desc: 'Dùng cho Thuế, BHXH, Ngân hàng, HĐĐT' },
      { title: 'Tương thích', desc: 'Hoạt động trên mọi hệ điều hành' },
    ],
    cta: 'Đăng ký Ca2 USB Token',
  },
  'ca2-hsm': {
    name: 'Ca2 HSM',
    tagline: 'Chữ ký số chuyên dụng server',
    description: 'Module bảo mật phần cứng (HSM) chuyên dụng cho server, dành cho doanh nghiệp lớn cần ký số khối lượng lớn. Hiệu suất ký cao, bảo mật cấp doanh nghiệp, đáp ứng tiêu chuẩn quốc tế.',
    color: 'from-red-500 to-rose-600',
    icon: Shield,
    pricingAnchor: '#chu-ky-so',
    features: [
      'Module HSM chuyên dụng lắp trên server',
      'Hiệu suất ký lên đến 10.000 chữ ký/giây',
      'Đáp ứng tiêu chuẩn FIPS 140-2 Level 3',
      'Quản lý khóa tập trung và an toàn',
      'API tích hợp với hệ thống ERP, HĐĐT',
      'Hỗ trợ ký hàng loạt không giới hạn',
      'Redundancy và failover tự động',
      'Hỗ trợ triển khai on-premise',
    ],
    benefits: [
      { title: 'Hiệu suất', desc: 'Ký 10.000+ chữ ký mỗi giây' },
      { title: 'Enterprise', desc: 'Dành cho doanh nghiệp quy mô lớn' },
      { title: 'Bảo mật cao nhất', desc: 'FIPS 140-2 Level 3 certified' },
    ],
    cta: 'Liên hệ tư vấn Ca2 HSM',
  },
  'ca2-ssl': {
    name: 'Ca2 SSL',
    tagline: 'Chữ ký số bảo mật Website',
    description: 'Chứng chỉ SSL/TLS bảo mật website của bạn, mã hóa dữ liệu truyền tải giữa người dùng và máy chủ. Hỗ trợ DV, OV, EV SSL cho mọi quy mô từ cá nhân đến doanh nghiệp lớn.',
    color: 'from-teal-500 to-green-600',
    icon: Globe,
    pricingAnchor: '#chu-ky-so',
    features: [
      'Chứng chỉ SSL/TLS quốc tế uy tín',
      'Hỗ trợ DV, OV, EV SSL Certificate',
      'Mã hóa 256-bit AES, khóa RSA 2048-bit',
      'Wildcard SSL cho đa tên miền phụ',
      'Kích hoạt HTTPS và biểu tượng ổ khóa',
      'Tự động gia hạn chứng chỉ',
      'Bảo vệ chống tấn công man-in-the-middle',
      'Hỗ trợ cài đặt miễn phí',
    ],
    benefits: [
      { title: 'SEO tốt hơn', desc: 'Google ưu tiên xếp hạng website có SSL' },
      { title: 'Tăng uy tín', desc: 'Hiển thị biểu tượng ổ khóa an toàn' },
      { title: 'Bảo mật', desc: 'Mã hóa 256-bit chuẩn quốc tế' },
    ],
    cta: 'Đăng ký Ca2 SSL',
  },
  'ca2-tsa': {
    name: 'Ca2 TSA',
    tagline: 'Dịch vụ dấu thời gian',
    description: 'Dịch vụ gán dấu thời gian (Timestamp Authority) cho tài liệu đã ký số, đảm bảo xác thực thời điểm ký. Tuân thủ tiêu chuẩn RFC 3161, tương thích với mọi hệ thống ký số.',
    color: 'from-amber-500 to-orange-600',
    icon: Clock,
    pricingAnchor: '#chu-ky-so',
    features: [
      'Gán dấu thời gian chính xác cho chữ ký số',
      'Tuân thủ tiêu chuẩn RFC 3161',
      'Đảm bảo tính pháp lý lâu dài của chữ ký',
      'Tích hợp với Ca2 Remote Signing, Sign Platform',
      'API đơn giản cho tích hợp tự động',
      'Uptime 99.99% – hoạt động 24/7',
      'Hỗ trợ cả SHA-256 và SHA-512',
      'Lưu trữ log dấu thời gian vĩnh viễn',
    ],
    benefits: [
      { title: 'Pháp lý', desc: 'Xác thực thời điểm ký có giá trị pháp lý' },
      { title: 'Tin cậy', desc: 'Uptime 99.99% với hạ tầng redundant' },
      { title: 'Chuẩn quốc tế', desc: 'RFC 3161 – tương thích toàn cầu' },
    ],
    cta: 'Đăng ký Ca2 TSA',
  },
};

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS[slug];

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-slate-50 pt-28 pb-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Sản phẩm không tồn tại</h1>
            <Link href="/" className="text-blue-600 hover:underline">← Quay lại trang chủ</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const Icon = product.icon;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero */}
        <section className={`pt-28 pb-20 bg-gradient-to-br ${product.color} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors">
              <ArrowLeft size={16} /> Quay lại
            </Link>
            <div className="max-w-3xl">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Icon size={32} className="text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">{product.name}</h1>
              <p className="text-xl text-white/90 font-medium mb-4">{product.tagline}</p>
              <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{product.description}</p>
              <div className="flex gap-4 mt-8">
                <Link href="/lien-he" className="px-8 py-3.5 bg-white text-slate-900 font-bold rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  {product.cta}
                </Link>
                <Link href={`/bao-gia${product.pricingAnchor}`} className="px-8 py-3.5 bg-white/10 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                  Xem báo giá
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-4">Tính năng nổi bật</h2>
            <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">Giải pháp công nghệ tiên tiến, đáp ứng mọi nhu cầu doanh nghiệp</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center shrink-0 mt-0.5`}>
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-sm text-slate-700 leading-relaxed font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">Lợi ích khi sử dụng</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="text-center p-8 bg-white rounded-3xl shadow-lg border border-slate-100">
                  <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-5`}>
                    <Star size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`py-16 bg-gradient-to-r ${product.color}`}>
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Sẵn sàng bắt đầu?</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Liên hệ ngay với đội ngũ tư vấn của Ca2 Digital để được hỗ trợ triển khai nhanh chóng.</p>
            <div className="flex justify-center gap-4">
              <Link href="/lien-he" className="px-8 py-3.5 bg-white text-slate-900 font-bold rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Đăng ký tư vấn miễn phí
              </Link>
              <Link href={`/bao-gia${product.pricingAnchor}`} className="px-8 py-3.5 bg-white/10 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                Xem bảng giá
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
