import React from 'react';
import { Home, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, useScroll, useTransform } from 'motion/react';
import logoFull from '../../assets/MP-prop-01.png';

// Video de Buenos Aires - archivo local en public/
const heroVideo = '/hero-video.mp4';
// Poster: imagen del Obelisco de Buenos Aires como fallback
const heroPoster = 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=2000&q=80';

export function Hero() {
  const { scrollY } = useScroll();
  
  // Transform logo: starts centered and big, moves to header position
  const logoOpacity = useTransform(scrollY, [200, 350], [1, 0]);
  const logoY = useTransform(scrollY, [0, 300], [0, -80]);

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
          className="w-full h-full object-cover object-center"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60 lg:via-white/70 lg:to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-28 lg:pb-16 min-h-[90vh] lg:min-h-screen flex flex-col justify-center">
        {/* Logo prominente - Grande y centrado */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ 
            opacity: logoOpacity,
            y: logoY,
          }}
          className="mb-12 lg:mb-16 flex justify-center"
        >
          <motion.img 
            src={logoFull} 
            alt="Martín Pinto Propiedades" 
            className="h-40 sm:h-52 lg:h-64 w-auto drop-shadow-xl"
          />
        </motion.div>

        <div className="max-w-xl lg:max-w-2xl mx-auto text-center">
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F2A29] mb-4 lg:mb-5 leading-[1.15] tracking-tight"
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
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#4B5563] mb-5 lg:mb-6 leading-relaxed"
          >
            Asesoramiento inmobiliario con{' '}
            <span className="font-semibold text-[#2F2A29]">más de 20 años de experiencia</span>. 
            Te acompaño hasta el cierre exitoso de tu operación.
          </motion.p>

          {/* Key points - Compact */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-5 lg:mb-6"
          >
            {[
              'Tasaciones profesionales',
              'Seguimiento transparente',
              'Resultados en 90 días'
            ].map((point, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D6ECBA]/30 rounded-full text-sm text-[#2F2A29] font-medium"
              >
                <svg className="w-3 h-3 text-[#2F2A29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                {point}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center gap-3"
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
            <Button 
              variant="ghost" 
              size="lg"
              onClick={() => scrollToSection('properties')}
              className="gap-2 bg-white/60 backdrop-blur-sm hover:bg-white/80 text-sm lg:text-base"
            >
              <Home className="w-4 h-4" />
              Ver propiedades
            </Button>
          </motion.div>
        </div>

        {/* Stats - Bottom - Compact and Centered */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-4 mt-8 lg:mt-10 pt-6 border-t border-[#2F2A29]/10 max-w-md mx-auto text-center"
        >
          {[
            { value: '20+', label: 'Años exp.' },
            { value: '100+', label: 'Propiedades' },
            { value: '90', label: 'Días máx.' }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-xl sm:text-2xl font-bold text-[#2F2A29] mb-0.5">{stat.value}</div>
              <div className="text-xs text-[#6B7280]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
