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
      color: 'bg-[#ff8a00]',
      hoverColor: 'hover:bg-[#e67c00]',
      link: '/lien-he',
      pulse: true
    },
    {
      id: 'hotline',
      icon: <Phone size={24} className="fill-current" />,
      label: '0356 230 550',
      color: 'bg-[#1877f2]',
      hoverColor: 'hover:bg-[#166fe5]',
      link: 'tel:0356230550',
      pulse: true
    },
    {
      id: 'messenger',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
          <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.912 1.452 5.513 3.727 7.235V22l3.39-1.86c.84.234 1.73.358 2.65.358 5.523 0 10-4.145 10-9.257C21.767 6.145 17.523 2 12 2zm1.06 12.51l-2.618-2.793-5.11 2.793 5.618-5.968 2.693 2.793 5.035-2.793-5.618 5.968z" />
        </svg>
      ),
      label: 'Messenger',
      color: 'bg-gradient-to-br from-[#00b2ff] via-[#006aff] to-[#7101fa] via-[#a033ff] to-[#ff5ad1]',
      hoverColor: 'hover:brightness-110',
      link: 'https://m.me/ca2.digital',
      external: true
    },
    {
      id: 'zalo',
      icon: (
        <svg viewBox="0 0 40 40" width="40" height="40" className="rounded-xl overflow-hidden shadow-sm">
          <rect width="40" height="40" fill="#0068ff" />
          <path 
            d="M20 9c-5.5 0-10 3.6-10 8 0 2.5 1.5 4.7 3.8 6.2-.1.5-.5 1.8-.8 2.8 0 0-.1.3 0 .3.1.1.3 0 .3 0 .9-.5 2.1-1.3 3.1-1.9.1 0 .2-.1.3-.1 1.1.4 2.2.6 3.3.6 5.5 0 10-3.6 10-8s-4.5-8-10-8z" 
            fill="white" 
          />
          <text 
            x="20" 
            y="21" 
            textAnchor="middle" 
            fill="#0068ff" 
            style={{ fontSize: '7px', fontWeight: '900', fontFamily: 'Arial, sans-serif' }}
          >
            Zalo
          </text>
        </svg>
      ),
      label: 'Zalo OA',
      color: 'bg-transparent',
      hoverColor: 'hover:opacity-90',
      link: 'https://zalo.me/0356230550',
      external: true
    }
  ];

  return (
    <div className="fixed bottom-8 right-6 z-[9999] flex flex-col gap-3 items-end pointer-events-none">
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
            <span className="absolute right-16 px-4 py-2 rounded-lg bg-white shadow-xl border border-slate-100 text-slate-700 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0">
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
              className={`relative h-12 w-12 flex items-center justify-center rounded-full text-white shadow-2xl transition-all duration-300 ${btn.color} ${btn.hoverColor} ${btn.shadow || ''} hover:scale-110 active:scale-95 overflow-hidden`}
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
