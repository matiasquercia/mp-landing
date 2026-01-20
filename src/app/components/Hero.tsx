import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, useScroll, useTransform } from 'motion/react';
import logoFull from '../../assets/logo/MP-prop-01.png';

// Video de Buenos Aires - archivo local en public/
const heroVideo = '/hero-video.mp4';
// Poster: imagen del Obelisco de Buenos Aires como fallback
const heroPoster = 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=2000&q=80';

export function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax transforms for all hero content (sin fade out)
  const contentY = useTransform(scrollY, [0, 400], [0, -100]);
  
  // Logo moves slightly faster for depth effect
  const logoY = useTransform(scrollY, [0, 300], [0, -120]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen overflow-hidden">
      {/* Background Video - Ciudad */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          className="w-full h-full object-cover object-center opacity-80"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Gradient overlays for readability - balance entre video visible y texto legible */}
        <div className="absolute inset-0 bg-white/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/20 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-28 lg:pb-16 min-h-[90vh] lg:min-h-screen flex flex-col justify-center">
        {/* All Hero Content with Parallax */}
        <motion.div
          style={{
            y: contentY,
          }}
        >
          {/* Logo prominente - Grande y centrado, flotando sobre el video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ y: logoY }}
            className="mb-10 lg:mb-14 flex justify-center"
          >
            <div className="relative inline-block">
              {/* Halo suave para separar del video sin placa sólida */}
              <div className="absolute inset-0 scale-110 rounded-full bg-white/30 blur-2xl pointer-events-none" />
              <img 
                src={logoFull} 
                alt="Martín Pinto Propiedades" 
                className="relative z-10 h-48 sm:h-64 lg:h-80 w-auto drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              />
            </div>
          </motion.div>

          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2F2A29] mb-4 lg:mb-5 leading-[1.15] tracking-tight sm:whitespace-nowrap"
            style={{ textShadow: '0 2px 10px rgba(255, 255, 255, 0.8)' }}
          >
            <span className="relative inline-block">
              <span className="relative z-10">Venta</span>
              <span className="absolute bottom-0.5 sm:bottom-1 left-0 right-0 h-1.5 sm:h-2 bg-[#D6ECBA]/70 -z-0" />
            </span>
            ,{' '}
            <span className="relative inline-block">
              <span className="relative z-10">alquiler</span>
              <span className="absolute bottom-0.5 sm:bottom-1 left-0 right-0 h-1.5 sm:h-2 bg-[#D6ECBA]/70 -z-0" />
            </span>{' '}
            y{' '}
            <span className="relative inline-block">
              <span className="relative z-10">tasaciones</span>
              <span className="absolute bottom-0.5 sm:bottom-1 left-0 right-0 h-1.5 sm:h-2 bg-[#D6ECBA]/70 -z-0" />
            </span>{' '}
            en CABA
          </motion.h1>
          
          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center mt-10"
          >
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="shadow-lg shadow-[#2F2A29]/15 gap-2 text-sm lg:text-base"
            >
              Consulta gratuita
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

          {/* Stats - Bottom - Minimalist */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 lg:mt-12 pt-6 border-t border-[#2F2A29]/20 max-w-md mx-auto"
          >
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { value: '20+', label: 'Años exp.' },
                { value: '100+', label: 'Propiedades' },
                { value: '90', label: 'Días máx.' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl sm:text-3xl font-bold text-[#2F2A29]">{stat.value}</div>
                  <div className="text-xs text-[#6B7280] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
