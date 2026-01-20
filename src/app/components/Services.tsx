import React, { useState } from 'react';
import { Home, TrendingUp, Camera, Globe, BarChart3, Handshake, Building2, Key, Calendar, Shield, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Services() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const processSteps = [
    {
      icon: TrendingUp,
      title: 'Tasación profesional',
      shortTitle: 'Tasación',
      description: 'Respaldada por estudio de mercado inmobiliario en CABA.',
      detail: 'Análisis exhaustivo considerando 12 variables de ponderación para determinar el precio óptimo de tu propiedad.',
      number: '01'
    },
    {
      icon: BarChart3,
      title: 'Plan estratégico',
      shortTitle: 'Estrategia',
      description: 'Comercialización adaptada al tipo de propiedad y público objetivo.',
      detail: 'Definimos juntos la estrategia de venta o alquiler más efectiva según las características de tu inmueble.',
      number: '02'
    },
    {
      icon: Camera,
      title: 'Producción visual',
      shortTitle: 'Producción',
      description: 'Fotografía, video recorrido y material comercial profesional.',
      detail: 'Creamos contenido visual de alta calidad que destaca los mejores atributos de tu propiedad.',
      number: '03'
    },
    {
      icon: Globe,
      title: 'Publicación amplia',
      shortTitle: 'Publicación',
      description: 'En múltiples portales inmobiliarios líderes.',
      detail: 'Tu propiedad visible en los principales portales y redes, llegando al público objetivo correcto.',
      number: '04'
    },
    {
      icon: Sparkles,
      title: 'Seguimiento permanente',
      shortTitle: 'Seguimiento',
      description: 'Reporte semanal sobre evolución de publicaciones y consultas.',
      detail: 'Te mantengo informado con reportes detallados sobre visitas, consultas y feedback del mercado.',
      number: '05'
    },
    {
      icon: Handshake,
      title: 'Cierre exitoso',
      shortTitle: 'Cierre',
      description: 'Desde la reserva hasta el cierre de la operación.',
      detail: 'Te acompaño en cada etapa: negociación, documentación y escrituración hasta la entrega de llaves.',
      number: '06'
    }
  ];

  const additionalServices = [
    {
      icon: Building2,
      title: 'Asesoramiento inmobiliario',
      description: 'Personalizado según tus necesidades'
    },
    {
      icon: Key,
      title: 'Alquiler residencial',
      description: 'Gestión completa de propiedades'
    },
    {
      icon: Calendar,
      title: 'Alquileres temporarios',
      description: 'Propiedades amobladas para estadías cortas'
    },
    {
      icon: Shield,
      title: 'Administración',
      description: 'De propiedades completa'
    }
  ];

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
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full mb-4 border border-[#D6ECBA]/40 shadow-sm">
            <Home className="w-3.5 h-3.5 text-[#2F2A29]" />
            <span className="text-xs font-medium text-[#2F2A29]">Servicios principales</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2F2A29] mb-3 tracking-tight">
            Gestión integral de{' '}
            <span className="relative inline-block">
              <span className="relative z-10">venta y alquiler</span>
              <span className="absolute bottom-0.5 left-0 right-0 h-2 bg-[#D6ECBA]/40 -z-0" />
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] max-w-2xl mx-auto">
            Un proceso claro y transparente en 6 pasos hacia el éxito de tu operación.
          </p>
        </motion.div>

        {/* Interactive Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-14"
        >
          {/* Step indicators - Desktop */}
          <div className="hidden lg:flex justify-center gap-2 mb-8">
              {processSteps.map((step, index) => {
                const isActive = activeStep === index;
                const isPast = index < activeStep;
                
                return (
                <motion.button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#2F2A29] border-[#2F2A29] text-white' 
                      : isPast
                        ? 'bg-[#D6ECBA]/20 border-[#D6ECBA] text-[#2F2A29]'
                        : 'bg-white border-[#E5E7EB] text-[#6B7280] hover:border-[#D6ECBA]'
                  }`}
                >
                  <span className={`text-xs font-bold ${isActive ? 'text-[#D6ECBA]' : isPast ? 'text-[#2F2A29]' : 'text-[#9CA3AF]'}`}>
                    {step.number}
                  </span>
                  <span className="text-sm font-medium">{step.shortTitle}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile step selector */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border-2 transition-all ${
                    isActive 
                      ? 'bg-[#2F2A29] border-[#2F2A29] text-white' 
                      : 'bg-white border-[#E5E7EB] text-[#6B7280]'
                  }`}
                >
                  <span className={`text-xs font-bold ${isActive ? 'text-[#D6ECBA]' : 'text-[#9CA3AF]'}`}>
                    {step.number}
                  </span>
                  <span className="text-sm font-medium">{step.shortTitle}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Active step detail card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB]/50 shadow-lg"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
                {/* Icon and number */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#D6ECBA] to-[#D6ECBA]/60 rounded-2xl flex items-center justify-center shadow-lg">
                    {React.createElement(processSteps[activeStep].icon, { 
                      className: "w-8 h-8 sm:w-10 sm:h-10 text-[#2F2A29]" 
                    })}
                  </div>
                  <div className="lg:hidden">
                    <span className="text-sm text-[#D6ECBA] font-bold">Paso {processSteps[activeStep].number}</span>
                    <h3 className="text-xl font-bold text-[#2F2A29]">{processSteps[activeStep].title}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="hidden lg:block mb-2">
                    <span className="text-sm text-[#D6ECBA] font-bold">Paso {processSteps[activeStep].number}</span>
                  </div>
                  <h3 className="hidden lg:block text-2xl font-bold text-[#2F2A29] mb-3">
                    {processSteps[activeStep].title}
                  </h3>
                  <p className="text-[#6B7280] mb-4 leading-relaxed">
                    {processSteps[activeStep].detail}
                  </p>
                  <p className="text-sm text-[#9CA3AF] italic">
                    "{processSteps[activeStep].description}"
                  </p>
                </div>

                {/* Navigation arrows */}
                <div className="flex lg:flex-col gap-2 self-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      activeStep === 0 
                        ? 'bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed' 
                        : 'bg-[#2F2A29] text-white hover:bg-[#2F2A29]/80'
                    }`}
                  >
                    <ChevronRight className="w-5 h-5 rotate-180" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveStep(prev => Math.min(processSteps.length - 1, prev + 1))}
                    disabled={activeStep === processSteps.length - 1}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      activeStep === processSteps.length - 1 
                        ? 'bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed' 
                        : 'bg-[#2F2A29] text-white hover:bg-[#2F2A29]/80'
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#2F2A29] to-[#3d3735] rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          <div className="relative">
            <div className="text-center mb-6 lg:mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-3">
                <span className="text-xs font-medium text-[#D6ECBA]">+ Servicios adicionales</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                Soluciones complementarias
              </h3>
              <p className="text-white/70 text-sm max-w-md mx-auto">
                Para todas tus necesidades inmobiliarias
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/15 transition-all group"
                >
                  <div className="w-9 h-9 bg-[#D6ECBA]/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#D6ECBA]/30 transition-colors">
                    <service.icon className="w-4 h-4 text-[#D6ECBA]" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {service.title}
                  </h4>
                  <p className="text-white/60 text-xs">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-6 lg:mt-8">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D6ECBA] text-[#2F2A29] rounded-lg hover:bg-[#D6ECBA]/90 transition-colors font-semibold text-sm shadow-lg"
              >
                Consultar servicios
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
