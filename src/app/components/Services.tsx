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
      description: 'Amoblados con fines específicos'
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
    <section id="services" className="py-24 bg-gradient-to-br from-white via-[#F9FAFB] to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D6ECBA]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D6ECBA]/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Service */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 border border-[#D6ECBA]/40 shadow-sm">
            <Home className="w-4 h-4 text-[#2F2A29]" />
            <span className="text-sm font-medium text-[#2F2A29]">Servicios principales</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2F2A29] mb-6 tracking-tight">
            Gestión integral de venta{' '}
            <span className="relative inline-block">
              <span className="relative z-10">y alquiler</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#D6ECBA]/40 -z-0" />
            </span>
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Brindo un servicio completo, pensado para propietarios que buscan eficiencia, transparencia y acompañamiento profesional.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl p-7 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 border border-[#E5E7EB]/50 cursor-default overflow-hidden"
            >
              {/* Number background */}
              <span className="absolute -top-4 -right-2 text-8xl font-bold text-[#D6ECBA]/20 select-none transition-all group-hover:text-[#D6ECBA]/30">
                {service.number}
              </span>
              
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D6ECBA] to-[#D6ECBA]/60 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-[#D6ECBA]/30 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-[#2F2A29]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2F2A29] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
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
          className="bg-gradient-to-br from-[#2F2A29] via-[#2F2A29] to-[#3d3735] rounded-3xl p-10 sm:p-14 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D6ECBA]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-4">
                <span className="text-xs font-medium text-[#D6ECBA]">+ Servicios adicionales</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                Soluciones complementarias
              </h3>
              <p className="text-white/70 text-lg max-w-xl mx-auto">
                Para todas tus necesidades inmobiliarias
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 hover:border-[#D6ECBA]/30 transition-all group cursor-default"
                >
                  <div className="w-11 h-11 bg-[#D6ECBA]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#D6ECBA]/30 transition-colors">
                    <service.icon className="w-5 h-5 text-[#D6ECBA]" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1.5">
                    {service.title}
                  </h4>
                  <p className="text-white/60 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#D6ECBA] text-[#2F2A29] rounded-xl hover:bg-[#D6ECBA]/90 transition-colors font-semibold text-lg shadow-xl shadow-[#D6ECBA]/20"
              >
                Consultar por servicios
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
