"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Edit3, ShieldCheck, CheckCircle, ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Giải pháp Chuyển đổi số toàn diện",
    highlight: "Sáng tạo & Đột phá",
    desc: "Tối ưu hóa quy trình vận hành với hệ sinh thái thông minh của Ca2.Digital. Đồng hành cùng hơn 10,000 doanh nghiệp Việt vươn tầm thế giới.",
    img: "/ca2-web/ca2-sansang.webp",
    bgColor: "from-blue-900 via-[#0f172a] to-slate-900",
    accent: "text-blue-400",
    button: "Khám phá ngay"
  },
  {
    id: 2,
    title: "Chữ Ký Số Ca2 - Ký số mọi lúc mọi nơi",
    highlight: "An toàn & Bảo mật",
    desc: "Giải pháp chữ ký số USB Token và Remote Signing tin cậy. Ký kết mọi văn bản, hợp đồng, khai thuế chỉ trong vài giây với độ bảo mật và pháp lý tối đa.",
    img: "/ca2-web/ca2-usb-token-v2.png",
    bgColor: "from-purple-900 via-[#0f172a] to-slate-900",
    accent: "text-purple-400",
    button: "Đăng ký CKS"
  },
  {
    id: 3,
    title: "Hóa Đơn Điện Tử Chuẩn Tổng Cục Thuế",
    highlight: "Minh bạch & Thông minh",
    desc: "Hệ thống Ca2 eInvoice với hạ tầng chịu tải lớn, phát hành hàng triệu hóa đơn không gián đoạn. Tự động đồng bộ dữ liệu với mọi phần mềm kế toán.",
    img: "/ca2-web/ca2-einvoice-banner.png",
    bgColor: "from-orange-900 via-[#0f172a] to-slate-900",
    accent: "text-orange-400",
    button: "Dùng thử miễn phí"
  },
  {
    id: 4,
    title: "Ca2 POS - Quản lý bán hàng thông minh",
    highlight: "Kinh doanh hiện đại",
    desc: "Giải pháp quản lý bán hàng chuyên sâu trên Mobile và Tablet. Tích hợp thanh toán, quản lý kho và báo cáo doanh thu realtime ngay trong lòng bàn tay.",
    img: "/ca2-web/ca2-pos.png",
    bgColor: "from-emerald-900 via-[#0f172a] to-slate-900",
    accent: "text-emerald-400",
    button: "Tải app ngay"
  }
];

function HeroSlider() {
  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState(0); // 1 for right, -1 for left

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.8, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.6 }
          }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[current].bgColor} flex items-center`}
        >
          <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center py-20">
            <div className="z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-6"
              >
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span>{slides[current].highlight}</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              >
                {slides[current].title.split(' - ').map((part, i) => (
                  <span key={i}>
                    {i > 0 && <br className="hidden lg:block"/>}
                    {part}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl"
              >
                {slides[current].desc}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button className="px-8 py-4 rounded-full bg-[#f97316] text-white font-bold hover:bg-orange-600 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  {slides[current].button}
                </button>
                <button className="px-8 py-4 rounded-full bg-white/10 text-white font-bold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Xem chi tiết
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1, type: "spring" }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-125 opacity-30"></div>
              <div className="relative p-4 bg-white/5 backdrop-blur-sm rounded-[32px] border border-white/10 shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 group">
                <img
                  src={slides[current].img}
                  alt={slides[current].title}
                  className="w-full h-auto rounded-2xl shadow-xl transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full bg-black/20 text-white backdrop-blur-md border border-white/10 hover:bg-[#f97316] hover:scale-110 transition-all duration-300 pointer-events-auto"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 rounded-full bg-black/20 text-white backdrop-blur-md border border-white/10 hover:bg-[#f97316] hover:scale-110 transition-all duration-300 pointer-events-auto"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className={`h-2 transition-all duration-500 rounded-full ${idx === current ? 'w-10 bg-[#f97316]' : 'w-2 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* 1. HERO SLIDER SECTION */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0f172a]">
        <HeroSlider />
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
