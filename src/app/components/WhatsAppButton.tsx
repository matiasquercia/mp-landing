import React from 'react';
import { motion } from 'motion/react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      'https://wa.me/5491157687121?text=Hola%20Martín,%20quiero%20consultar%20sobre%20una%20propiedad',
      '_blank'
    );
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-shadow group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      
      {/* WhatsApp Logo */}
      <WhatsAppIcon className="w-8 h-8 text-white relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-[#2F2A29] text-white text-sm font-medium rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
        ¡Chateá conmigo!
      </span>
    </motion.button>
  );
}
