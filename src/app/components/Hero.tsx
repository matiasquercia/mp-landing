import React from 'react';
import { Home, TrendingUp, ArrowRight, Award, FileCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, useScroll, useTransform } from 'motion/react';
import heroImage from '../../assets/fotos/2.jpeg';
import logoFull from '../../assets/MP-prop-01.png';
import logoReduced from '../../assets/MP-prop-03.png';

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
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Image - Full width with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Martín Pinto - Corredor Inmobiliario"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40 lg:via-white/60 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232F2A29' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 min-h-screen flex flex-col justify-center">
        {/* Logo prominente - centrado y grande, se mueve al scrollear */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ 
            opacity: logoOpacity,
            y: logoY,
          }}
          className="mb-10"
        >
          <motion.img 
            src={logoFull} 
            alt="Martín Pinto Propiedades" 
            className="h-24 sm:h-32 lg:h-40 w-auto"
          />
        </motion.div>

        <div className="max-w-2xl">
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2F2A29] mb-6 leading-[1.1] tracking-tight"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Venta</span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-[#D6ECBA]/70 -z-0" />
            </span>
            ,{' '}
            <span className="relative inline-block">
              <span className="relative z-10">alquiler</span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-[#D6ECBA]/70 -z-0" />
            </span>{' '}
            y{' '}
            <span className="relative inline-block">
              <span className="relative z-10">tasaciones</span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-[#D6ECBA]/70 -z-0" />
            </span>{' '}
            profesionales en CABA
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#4B5563] mb-8 leading-relaxed"
          >
            Asesoramiento inmobiliario estratégico con{' '}
            <span className="font-semibold text-[#2F2A29]">más de 20 años de experiencia</span>. 
            Te acompaño desde la evaluación inicial hasta el cierre exitoso de tu operación.
          </motion.p>

          {/* Key points */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3 mb-8"
          >
            {[
              'Tasaciones basadas en estudio de mercado',
              'Seguimiento semanal y transparente',
              'Resultados estimados en 90 días'
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-[#D6ECBA] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-3 h-3 text-[#2F2A29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#2F2A29] font-medium">{point}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="shadow-xl shadow-[#2F2A29]/20 gap-2"
            >
              Solicitar consulta gratuita
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              onClick={() => scrollToSection('properties')}
              className="gap-2 bg-white/60 backdrop-blur-sm hover:bg-white/80"
            >
              <Home className="w-5 h-5" />
              Ver propiedades
            </Button>
          </motion.div>

          {/* Credential Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="inline-flex items-center gap-4 bg-[#2F2A29] text-white rounded-2xl px-5 py-4 shadow-xl"
          >
            <div className="w-12 h-12 bg-[#D6ECBA]/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-6 h-6 text-[#D6ECBA]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">CUCICBA</span>
                <span className="text-[#D6ECBA] font-semibold">N° 9356</span>
              </div>
              <div className="text-sm text-white/70">Corredor Inmobiliario y Martillero Público</div>
            </div>
          </motion.div>
        </div>

        {/* Stats - Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#2F2A29]/10 max-w-xl"
        >
          {[
            { value: '20+', label: 'Años de experiencia' },
            { value: '100+', label: 'Propiedades gestionadas' },
            { value: '90', label: 'Días máx. estimados' }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-2xl sm:text-3xl font-bold text-[#2F2A29] mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[#6B7280]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
