import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
// @ts-expect-error - Image exists, TS cache issue with relative path resolution
import logoGreen from '../../assets/logo/MP-prop-02.png';

const heroVideo = '/hero-video.mp4';
const heroPoster = 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=2000&q=80';

export function Hero() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 400], [0, -80]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen overflow-hidden">
      {/* Background Video con overlay degradé */}
      <div className="absolute inset-0 bg-[#1a1a1a]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          className="w-full h-full object-cover object-center opacity-50"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay degradé: muy oscuro arriba, aclarando hacia abajo */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0.1) 100%)' }} />
      </div>

      {/* Fade suave hacia la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-52 lg:h-60 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, #F9FAFB 0%, rgba(249,250,251,0.9) 20%, rgba(249,250,251,0.5) 50%, rgba(249,250,251,0.15) 75%, transparent 100%)' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-24 lg:pb-40 min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center">
        <motion.div
          style={{ y: contentY }}
          className="w-full flex flex-col items-center"
        >
          {/* Logo verde */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-20 lg:mb-24 -mt-14 lg:-mt-20 flex justify-center"
          >
            <img 
              src={logoGreen} 
              alt="Martín Pinto Propiedades" 
              className="h-44 sm:h-56 lg:h-72 w-auto drop-shadow-[0_4px_30px_rgba(214,236,186,0.3)]"
            />
          </motion.div>

          {/* Título y contenido */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center max-w-3xl w-full"
          >
            <h1 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-8 leading-[1.2] tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10">Venta</span>
                <span className="absolute bottom-0.5 sm:bottom-1 left-0 right-0 h-1.5 sm:h-2 bg-[#D6ECBA]/40 -z-0" />
              </span>
              ,{' '}
              <span className="relative inline-block">
                <span className="relative z-10">alquiler</span>
                <span className="absolute bottom-0.5 sm:bottom-1 left-0 right-0 h-1.5 sm:h-2 bg-[#D6ECBA]/40 -z-0" />
              </span>{' '}
              y{' '}
              <span className="relative inline-block">
                <span className="relative z-10">tasaciones</span>
                <span className="absolute bottom-0.5 sm:bottom-1 left-0 right-0 h-1.5 sm:h-2 bg-[#D6ECBA]/40 -z-0" />
              </span>{' '}
              en CABA
            </h1>
            
            {/* CTA - botón verde sobre fondo oscuro */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center mb-10 lg:mb-12"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 bg-[#D6ECBA] text-[#2F2A29] rounded-xl font-semibold text-sm lg:text-base hover:bg-[#D6ECBA]/90 transition-colors shadow-lg shadow-[#D6ECBA]/20"
              >
                Consulta gratuita
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="pt-6 border-t border-white/15"
            >
              <div className="grid grid-cols-3 gap-4 text-center max-w-xs mx-auto">
                {[
                  { value: '20+', label: 'Años exp.' },
                  { value: '100+', label: 'Propiedades' },
                  { value: '90', label: 'Días máx.' }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-white/60 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
