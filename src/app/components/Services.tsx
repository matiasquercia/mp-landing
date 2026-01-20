import React, { useState } from 'react';
import { Home, TrendingUp, Camera, Globe, BarChart3, Handshake, Building2, Key, Calendar, Shield, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Fotos representativas de cada paso del proceso
const stepImages = {
  // Tasación: persona trabajando con papeles y documentos de propiedad
  tasacion: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
  // Estrategia: planificación, pizarra con plan, reunión estratégica
  estrategia: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
  // Producción: fotógrafo sacando fotos a un interior/ambiente
  produccion: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  // Publicación: laptop con publicación, trabajo digital
  publicacion: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  // Seguimiento: enviando reportes, informando, dashboard con métricas
  seguimiento: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  // Cierre: apretón de manos, acuerdo
  cierre: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80'
};

export function Services() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const processSteps = [
    {
      icon: TrendingUp,
      image: stepImages.tasacion,
      title: 'Tasación profesional',
      shortTitle: 'Tasación',
      description: 'Respaldada por estudio de mercado inmobiliario en CABA.',
      detail: 'Análisis exhaustivo considerando 12 variables de ponderación para determinar el precio óptimo de tu propiedad.',
      number: '1'
    },
    {
      icon: BarChart3,
      image: stepImages.estrategia,
      title: 'Plan estratégico',
      shortTitle: 'Estrategia',
      description: 'Comercialización adaptada al tipo de propiedad y público objetivo.',
      detail: 'Definimos juntos la estrategia de venta o alquiler más efectiva según las características de tu inmueble.',
      number: '2'
    },
    {
      icon: Camera,
      image: stepImages.produccion,
      title: 'Producción visual',
      shortTitle: 'Producción',
      description: 'Fotografía, video recorrido y material comercial profesional.',
      detail: 'Creamos contenido visual de alta calidad que destaca los mejores atributos de tu propiedad.',
      number: '3'
    },
    {
      icon: Globe,
      image: stepImages.publicacion,
      title: 'Publicación amplia',
      shortTitle: 'Publicación',
      description: 'En múltiples portales inmobiliarios líderes.',
      detail: 'Tu propiedad visible en los principales portales y redes, llegando al público objetivo correcto.',
      number: '4'
    },
    {
      icon: Sparkles,
      image: stepImages.seguimiento,
      title: 'Seguimiento permanente',
      shortTitle: 'Seguimiento',
      description: 'Reporte semanal sobre evolución de publicaciones y consultas.',
      detail: 'Te mantengo informado con reportes detallados sobre visitas, consultas y feedback del mercado.',
      number: '5'
    },
    {
      icon: Handshake,
      image: stepImages.cierre,
      title: 'Cierre exitoso',
      shortTitle: 'Cierre',
      description: 'Desde la reserva hasta el cierre de la operación.',
      detail: 'Te acompaño en cada etapa: negociación, documentación y escrituración hasta la entrega de llaves.',
      number: '6'
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
      title: 'Alquileres amoblados y equipados',
      description: 'Con fines específicos (de 6 meses a 1 año renovables)'
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

  const progressPercentage = ((activeStep + 1) / processSteps.length) * 100;

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
          {/* Progress bar - Desktop */}
          <div className="hidden lg:block relative mb-8">
            <div className="absolute top-6 left-0 right-0 h-1 bg-[#E5E7EB] rounded-full">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#D6ECBA] to-[#2F2A29] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
            
            {/* Step indicators */}
            <div className="relative flex justify-between">
              {processSteps.map((step, index) => {
                const isActive = activeStep === index;
                const isPast = index < activeStep;
                
                return (
                  <motion.button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className="flex flex-col items-center group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Circle indicator */}
                    <motion.div 
                      animate={{ 
                        scale: isActive ? 1.2 : 1,
                        backgroundColor: isActive || isPast ? '#D6ECBA' : '#ffffff'
                      }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 transition-all duration-300 cursor-pointer ${
                        isActive ? 'border-[#2F2A29]' : isPast ? 'border-[#D6ECBA]' : 'border-[#E5E7EB]'
                      }`}
                    >
                      <step.icon className={`w-5 h-5 transition-colors ${
                        isActive || isPast ? 'text-[#2F2A29]' : 'text-[#9CA3AF]'
                      }`} />
                    </motion.div>
                    
                    {/* Label */}
                    <span className={`mt-3 text-xs font-medium transition-colors ${
                      isActive ? 'text-[#2F2A29]' : 'text-[#9CA3AF]'
                    }`}>
                      {step.shortTitle}
                    </span>
                    
                    {/* Step number badge */}
                    <span className={`absolute -top-2 text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-[#2F2A29] text-white' : 'bg-[#E5E7EB] text-[#6B7280]'
                    }`}>
                      {step.number}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Mobile step selector - diseño de proceso/recorrido */}
          <div className="lg:hidden pb-4 mb-4">
            {/* Línea de progreso de fondo */}
            <div className="relative">
              {/* Línea base */}
              <div className="absolute top-4 left-4 right-4 h-0.5 bg-[#E5E7EB]" />
              {/* Línea de progreso activa */}
              <motion.div 
                className="absolute top-4 left-4 h-0.5 bg-[#D6ECBA]"
                initial={{ width: '0%' }}
                animate={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
                transition={{ duration: 0.4 }}
                style={{ maxWidth: 'calc(100% - 32px)' }}
              />
              
              {/* Nodos del proceso */}
              <div className="relative flex justify-between">
                {processSteps.map((step, index) => {
                  const isActive = activeStep === index;
                  const isPast = index < activeStep;
                  
                  return (
                    <motion.button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      whileTap={{ scale: 0.9 }}
                      className="flex flex-col items-center"
                    >
                      {/* Círculo del nodo */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1.2 : 1,
                          backgroundColor: isActive ? '#2F2A29' : isPast ? '#D6ECBA' : '#ffffff',
                        }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors z-10 ${
                          isActive 
                            ? 'border-[#2F2A29] shadow-lg' 
                            : isPast 
                              ? 'border-[#D6ECBA]' 
                              : 'border-[#E5E7EB]'
                        }`}
                      >
                        <span className={`text-xs font-bold ${
                          isActive ? 'text-[#D6ECBA]' : isPast ? 'text-[#2F2A29]' : 'text-[#9CA3AF]'
                        }`}>
                          {step.number}
                        </span>
                      </motion.div>
                      
                      {/* Título debajo */}
                      <span className={`text-[8px] sm:text-[9px] font-medium mt-1.5 leading-tight text-center max-w-[50px] ${
                        isActive ? 'text-[#2F2A29]' : 'text-[#9CA3AF]'
                      }`}>
                        {step.shortTitle}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active step detail card with image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-[#E5E7EB]/50"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image - mejor proporción en móvil */}
                <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto md:min-h-[320px]">
                  <img 
                    src={processSteps[activeStep].image} 
                    alt={processSteps[activeStep].title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                  
                  {/* Step number badge en móvil */}
                  <div className="absolute top-4 left-4 md:hidden">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-[#D6ECBA] rounded-full text-lg font-bold text-[#2F2A29] shadow-lg">
                      {processSteps[activeStep].number}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2F2A29] mb-3 md:mb-4">
                      {processSteps[activeStep].title}
                    </h3>
                    <p className="text-[#6B7280] text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                      {processSteps[activeStep].detail}
                    </p>
                    <p className="text-xs sm:text-sm text-[#9CA3AF] italic border-l-2 border-[#D6ECBA] pl-3 md:pl-4">
                      {processSteps[activeStep].description}
                    </p>
                  </div>
                  
                  {/* Navigation - Minimalista */}
                  <div className="flex items-center justify-between mt-5 md:mt-8 pt-4 md:pt-6 border-t border-[#E5E7EB]/50">
                    <button
                      onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                      disabled={activeStep === 0}
                      className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium transition-all ${
                        activeStep === 0 
                          ? 'text-[#D1D5DB] cursor-not-allowed' 
                          : 'text-[#6B7280] hover:text-[#2F2A29]'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                      <span className="hidden sm:inline">Anterior</span>
                    </button>
                    
                    {/* Dots - más pequeños en móvil */}
                    <div className="flex gap-1.5 sm:gap-2">
                      {processSteps.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveStep(index)}
                          className={`transition-all duration-300 rounded-full ${
                            index === activeStep 
                              ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-[#2F2A29]' 
                              : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#E5E7EB] hover:bg-[#D6ECBA]'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={() => setActiveStep(prev => Math.min(processSteps.length - 1, prev + 1))}
                      disabled={activeStep === processSteps.length - 1}
                      className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium transition-all ${
                        activeStep === processSteps.length - 1 
                          ? 'text-[#D1D5DB] cursor-not-allowed' 
                          : 'text-[#6B7280] hover:text-[#2F2A29]'
                      }`}
                    >
                      <span className="hidden sm:inline">Siguiente</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
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
