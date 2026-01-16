import React from 'react';
import { Home, TrendingUp, ArrowRight, Award, FileCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, useScroll, useTransform } from 'motion/react';
import heroImage from '../../assets/fotos/1.jpeg';
import logoFull from '../../assets/MP-prop-01.png';

export function Hero() {
  const { scrollY } = useScroll();
  
  // Transform logo: starts centered and big, moves to header position
  const logoHeight = useTransform(scrollY, [0, 300], [160, 48]);
  const logoOpacity = useTransform(scrollY, [200, 350], [1, 0]);
  const logoX = useTransform(scrollY, [0, 300], ['0%', '0%']);
  const logoY = useTransform(scrollY, [0, 300], [0, -80]);
  const logoScale = useTransform(scrollY, [0, 300], [1, 0.4]);
  const containerJustify = useTransform(scrollY, [0, 150], ['center', 'flex-start']);

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
    <section id="hero" className="relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] via-white to-[#D6ECBA]/20" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232F2A29' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#D6ECBA]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D6ECBA]/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 w-full">
        {/* Logo prominente - centrado y grande, se mueve al scrollear */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ 
            opacity: logoOpacity,
            y: logoY,
          }}
          className="flex justify-center mb-12"
        >
          <motion.img 
            src={logoFull} 
            alt="Martín Pinto Propiedades" 
            style={{ height: logoHeight }}
            className="w-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2F2A29] mb-6 leading-[1.1] tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10">Venta</span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-[#D6ECBA]/50 -z-0" />
              </span>
              ,{' '}
              <span className="relative inline-block">
                <span className="relative z-10">alquiler</span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-[#D6ECBA]/50 -z-0" />
              </span>{' '}
              y{' '}
              <span className="relative inline-block">
                <span className="relative z-10">tasaciones</span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-[#D6ECBA]/50 -z-0" />
              </span>{' '}
              profesionales en CABA
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#6B7280] mb-8 leading-relaxed max-w-xl">
              Asesoramiento inmobiliario estratégico con{' '}
              <span className="font-semibold text-[#2F2A29]">más de 20 años de experiencia</span>. 
              Te acompaño desde la evaluación inicial hasta el cierre exitoso de tu operación.
            </p>

            {/* Key points */}
            <div className="space-y-3 mb-8">
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
                  <div className="w-5 h-5 rounded-full bg-[#D6ECBA] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#2F2A29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#2F2A29] font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
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
                className="gap-2"
              >
                <Home className="w-5 h-5" />
                Ver propiedades
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-3 gap-6 mt-10 pt-6 border-t border-[#E5E7EB]/50"
            >
              {[
                { value: '20+', label: 'Años de experiencia' },
                { value: '100+', label: 'Propiedades gestionadas' },
                { value: '90', label: 'Días máx. estimados' }
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-[#2F2A29] mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-[#6B7280]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D6ECBA]/40 to-transparent rounded-[2.5rem] blur-sm" />
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#2F2A29]/20 border-4 border-white">
                <img
                  src={heroImage}
                  alt="Martín Pinto - Corredor Inmobiliario"
                  className="w-full h-[450px] sm:h-[500px] lg:h-[550px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F2A29]/50 via-transparent to-transparent" />
              </div>

              {/* Floating Card - Experience */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-[#E5E7EB]/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#D6ECBA] to-[#D6ECBA]/60 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#D6ECBA]/30">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-[#2F2A29]" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[#2F2A29]">Desde 2006</div>
                    <div className="text-xs sm:text-sm text-[#6B7280]">En el mercado inmobiliario</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Credential Card - Debajo de la foto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 bg-[#2F2A29] text-white rounded-2xl p-5 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#D6ECBA]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-7 h-7 text-[#D6ECBA]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl font-bold">CUCICBA</span>
                    <span className="text-[#D6ECBA] font-semibold">N° 9356</span>
                  </div>
                  <div className="text-sm text-white/70">Corredor Inmobiliario y Martillero Público matriculado</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
