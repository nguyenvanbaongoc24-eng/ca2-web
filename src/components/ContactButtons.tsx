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
      icon: <ClipboardEdit size={32} />,
      label: 'Đăng ký tư vấn',
      color: 'bg-[#ff8a00]',
      hoverColor: 'hover:bg-[#e67c00]',
      link: '/lien-he',
      pulse: true
    },
    {
      id: 'hotline',
      icon: <Phone size={32} className="fill-current" />,
      label: '0356 230 550',
      color: 'bg-[#1877f2]',
      hoverColor: 'hover:bg-[#166fe5]',
      link: 'tel:0356230550',
      pulse: true
    },
    {
      id: 'messenger',
      icon: (
        <svg viewBox="0 0 24 24" width="38" height="38" fill="white">
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
        <svg viewBox="0 0 40 40" width="42" height="42">
          <circle cx="20" cy="20" r="20" fill="white" />
          <path d="M26.3 16.2c.2-.2.3-.5.3-.8 0-.3-.1-.6-.3-.8-.4-.4-1.1-.4-1.5 0l-3.2 3c-.1.1-.1.2-.2.2-.1 0-.2 0-.2-.1l-1.3-1.3c-.4-.4-1.1-.4-1.5 0-.4.4-.4 1.1 0 1.5l2.2 2.2c.3.3.7.4 1.1.4s.8-.1 1.1-.4l3.5-3.3c.1-.2.2-.3.3-.5z" fill="#0068ff" opacity="0" />
          <path d="M10 20c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10zm11.3-4.5c.8 0 1.5.3 2.1.8.6.5.9 1.2.9 2 0 .8-.3 1.5-.9 2L20 23.7l-3.4-3.4c-.6-.5-.9-1.2-.9-2 0-.8.3-1.5.9-2 .6-.5 1.3-.8 2.1-.8.8 0 1.5.3 2.1.8.2.2.4.5.5.8.1-.3.3-.6.5-.8.6-.5 1.3-.8 2.1-.8z" fill="#0068ff" opacity="0" />
          <path d="M30 14.3c-1.3-2.6-4.1-4.3-7.1-4.3-4.4 0-8 3.6-8 8v.2c0 2.2.9 4.3 2.5 5.8 0 .1.1.2.1.3v3.7c0 .4.4.7.8.6l3.4-1.7h1.2c4.4 0 8-3.6 8-8 0-1.8-.7-3.4-1.9-4.6z" fill="#0068ff" opacity="0"/>
          <text x="7" y="25" fill="#0068ff" style={{ fontSize: '12px', fontWeight: '900', fontFamily: 'Arial' }}>Zalo</text>
        </svg>
      ),
      label: 'Zalo OA',
      color: 'bg-white',
      hoverColor: 'hover:bg-slate-50',
      link: 'https://zalo.me/0356230550',
      external: true,
      shadow: "shadow-[0_0_15px_rgba(0,104,255,0.4)]"
    }
  ];

  return (
    <div className="fixed bottom-8 right-6 z-[9999] flex flex-col gap-5 items-end pointer-events-none">
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
            <span className="absolute right-20 px-4 py-2 rounded-lg bg-white shadow-xl border border-slate-100 text-slate-700 text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0">
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
              className={`relative h-16 w-16 flex items-center justify-center rounded-full text-white shadow-2xl transition-all duration-300 ${btn.color} ${btn.hoverColor} ${btn.shadow || ''} hover:scale-110 active:scale-95`}
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
