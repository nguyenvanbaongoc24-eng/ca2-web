"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardEdit, Phone } from 'lucide-react';
import Link from 'next/link';

const ContactButtons = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const buttons = [
    {
      id: 'register',
      icon: <ClipboardEdit size={24} />,
      label: 'Đăng ký tư vấn',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      link: '/lien-he',
      pulse: true
    },
    {
      id: 'hotline',
      icon: <Phone size={24} />,
      label: '0356 230 550',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      link: 'tel:0356230550',
      pulse: true
    },
    {
      id: 'messenger',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.912 1.452 5.513 3.727 7.235V22l3.39-1.86c.84.234 1.73.358 2.65.358 5.523 0 10-4.145 10-9.257C21.767 6.145 17.523 2 12 2zm1.06 12.51l-2.618-2.793-5.11 2.793 5.618-5.968 2.693 2.793 5.035-2.793-5.618 5.968z" />
        </svg>
      ),
      label: 'Messenger',
      color: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',
      hoverColor: 'opacity-90',
      link: 'https://m.me/ca2.digital', // Giả định link Messenger, user có thể update sau
      external: true
    },
    {
      id: 'zalo',
      icon: (
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden">
           <img src="/ca2-web/globe.svg" alt="Zalo" className="w-full h-full grayscale opacity-20" /> {/* Placeholder SVG if no real one */}
           <span className="absolute text-[10px] font-bold text-blue-600">Zalo</span>
        </div>
      ),
      label: 'Zalo OA',
      color: 'bg-[#0068ff]',
      hoverColor: 'hover:bg-[#0056d2]',
      link: 'https://zalo.me/0356230550',
      external: true
    }
  ];

  return (
    <div className="fixed bottom-8 right-6 z-[9999] flex flex-col gap-4 items-end pointer-events-none">
      <AnimatePresence>
        {isVisible && buttons.map((btn, index) => (
          <motion.div
            key={btn.id}
            initial={{ opacity: 0, x: 50, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              delay: index * 0.1, 
              type: 'spring', 
              stiffness: 260, 
              damping: 20 
            }}
            className="pointer-events-auto group relative flex items-center justify-end"
          >
            {/* Label on hover */}
            <span className="absolute right-16 px-4 py-2 rounded-lg bg-white shadow-xl border border-slate-100 text-slate-700 text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {btn.label}
            </span>

            {/* Ripple effect for important buttons */}
            {btn.pulse && (
              <span className={`absolute inset-0 rounded-full ${btn.color} animate-ping opacity-25`}></span>
            )}

            <Link
              href={btn.link}
              target={btn.external ? '_blank' : undefined}
              rel={btn.external ? 'noopener noreferrer' : undefined}
              className={`relative h-14 w-14 flex items-center justify-center rounded-full text-white shadow-2xl transition-all duration-300 ${btn.color} ${btn.hoverColor} hover:scale-110 active:scale-95`}
            >
              {btn.icon}
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ContactButtons;
