import React from 'react';
import { Home, TrendingUp, Camera, Globe, BarChart3, Handshake, Building2, Key, Calendar, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Services() {
  const mainServices = [
    {
      icon: TrendingUp,
      title: 'Tasación profesional',
      description: 'Respaldada por estudio de mercado inmobiliario en CABA.',
      number: '01'
    },
    {
      icon: BarChart3,
      title: 'Plan estratégico',
      description: 'Comercialización adaptada al tipo de propiedad y público objetivo.',
      number: '02'
    },
    {
      icon: Camera,
      title: 'Producción visual',
      description: 'Fotografía y material comercial profesional.',
      number: '03'
    },
    {
      icon: Globe,
      title: 'Publicación amplia',
      description: 'En múltiples portales inmobiliarios líderes.',
      number: '04'
    },
    {
      icon: Sparkles,
      title: 'Seguimiento permanente',
      description: 'Reporte semanal sobre evolución de publicaciones y consultas.',
      number: '05'
    },
    {
      icon: Handshake,
      title: 'Acompañamiento integral',
      description: 'Desde la reserva hasta el cierre de la operación.',
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
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-[#F9FAFB] to-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Service */}
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
            Servicio completo para propietarios que buscan eficiencia y transparencia.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10 lg:mb-14">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-[#E5E7EB]/50 overflow-hidden"
            >
              <span className="absolute -top-2 -right-1 text-5xl sm:text-6xl font-bold text-[#D6ECBA]/15 select-none">
                {service.number}
              </span>
              
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-[#D6ECBA] to-[#D6ECBA]/60 rounded-lg flex items-center justify-center mb-3 shadow-md shadow-[#D6ECBA]/20 group-hover:scale-105 transition-transform">
                  <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#2F2A29]" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#2F2A29] mb-1">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

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
