import React, { useState } from 'react';
import { Award, GraduationCap, Building2, Users, Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import profileImage1 from '../../assets/fotos/4.jpeg';
import profileImage2 from '../../assets/fotos/2.jpeg';
import profileImage3 from '../../assets/fotos/1.jpeg';

export function About() {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState<number | null>(null);
  const timeline = [
    {
      year: '2006',
      title: 'Inicio en el mercado',
      description: 'Fundación de landinargentina.com, agencia especializada en alquileres temporarios en CABA con más de 100 propiedades gestionadas.',
      icon: Briefcase,
      highlight: 'landinargentina.com'
    },
    {
      year: '2010s',
      title: 'Transición a broker inmobiliario',
      description: 'Inicio en venta de propiedades, capacitación en red inmobiliaria internacional especializada en tasación y comercialización.',
      icon: Building2,
      highlight: 'Red internacional'
    },
    {
      year: 'Hoy',
      title: 'Corredor Inmobiliario Matriculado',
      description: 'Matrícula profesional CUCICBA N° 9356. Actividad independiente con enfoque estratégico y orientado a resultados.',
      icon: Award,
      highlight: 'CUCICBA N° 9356'
    }
  ];

  const credentials = [
    {
      icon: Award,
      title: 'Matrícula CUCICBA N° 9356',
      description: 'Corredor Inmobiliario y Martillero Público'
    },
    {
      icon: GraduationCap,
      title: 'Formación profesional',
      description: 'Carrera de Corredor Inmobiliario y Martillero Público'
    },
    {
      icon: Building2,
      title: 'Red inmobiliaria internacional',
      description: 'Capacitación en tasación y comercialización'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] via-white to-[#D6ECBA]/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full mb-4 border border-[#D6ECBA]/40 shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#2F2A29]" />
            <span className="text-xs font-medium text-[#2F2A29]">Sobre mí</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2F2A29] mb-2 tracking-tight">
            Martín Pinto
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280]">
            Corredor Inmobiliario y Martillero Público
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex gap-3 h-[350px] sm:h-[420px] lg:h-[480px]">
              {/* Main large image - left, full height */}
              <div className="flex-[2] relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={profileImage1}
                  alt="Martín Pinto - Corredor Inmobiliario trabajando"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F2A29]/20 to-transparent" />
              </div>
              {/* Two smaller images - right, stacked */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex-1 relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={profileImage2}
                    alt="Martín Pinto profesional"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={profileImage3}
                    alt="Martín Pinto"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="space-y-3 text-[#6B7280] leading-relaxed text-sm sm:text-base">
              <p>
                Inicié mi recorrido en el mercado inmobiliario en{' '}
                <span className="font-semibold text-[#2F2A29]">2006</span>, 
                como propietario de <span className="font-semibold text-[#2F2A29]">landinargentina.com</span>, 
                agencia de alquileres temporarios con más de 100 propiedades gestionadas.
              </p>
              <p>
                Surgieron oportunidades de venta de inmuebles, marcando mi camino como{' '}
                <span className="font-semibold text-[#2F2A29]">broker inmobiliario</span>. 
                Me capacité en una red internacional, especializándome en tasación y comercialización.
              </p>
              <p>
                Hoy desarrollo mi actividad de manera{' '}
                <span className="font-semibold text-[#2F2A29]">independiente</span>, 
                con enfoque estratégico y orientado a resultados.
              </p>
            </div>

            {/* Credentials Grid - Compact */}
            <div className="grid gap-2.5 mt-6">
              {credentials.map((cred, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-[#E5E7EB]/50 shadow-sm"
                >
                  <div className="w-9 h-9 bg-[#D6ECBA]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-4 h-4 text-[#2F2A29]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[#2F2A29]">{cred.title}</div>
                    <div className="text-xs text-[#6B7280]">{cred.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline - Trayectoria profesional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="text-center mb-10 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2F2A29] mb-3 tracking-tight">
              Trayectoria profesional
            </h3>
            <p className="text-[#6B7280]">Más de 18 años de evolución en el mercado inmobiliario</p>
          </div>

          {/* Desktop Timeline - Interactive */}
          <div className="hidden md:block relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-[#E5E7EB] rounded-full">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#D6ECBA] to-[#D6ECBA]/70 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: activeTimelineIndex !== null ? `${((activeTimelineIndex + 1) / timeline.length) * 100}%` : '100%' }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 relative">
              {timeline.map((item, index) => {
                const isActive = activeTimelineIndex === index;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative pt-20 cursor-pointer"
                    onClick={() => setActiveTimelineIndex(isActive ? null : index)}
                  >
                    {/* Timeline node - centered at top */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        animate={{ 
                          scale: isActive ? 1.15 : 1,
                          backgroundColor: isActive ? '#D6ECBA' : '#ffffff'
                        }}
                        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 transition-colors duration-300 ${
                          isActive ? 'border-[#2F2A29]' : 'border-[#D6ECBA]'
                        }`}
                      >
                        <item.icon className={`w-7 h-7 transition-colors duration-300 ${isActive ? 'text-[#2F2A29]' : 'text-[#6B7280]'}`} />
                      </motion.div>
                    </div>
                    
                    {/* Content card */}
                    <motion.div 
                      animate={{ 
                        scale: isActive ? 1.03 : 1,
                        y: isActive ? -5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-2xl p-5 shadow-lg border-2 transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#2F2A29] border-[#2F2A29] text-white' 
                          : 'bg-white border-[#E5E7EB]/50 hover:border-[#D6ECBA]'
                      }`}
                    >
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 ${
                        isActive ? 'bg-[#D6ECBA]' : 'bg-[#D6ECBA]/30'
                      }`}>
                        <Calendar className="w-3.5 h-3.5 text-[#2F2A29]" />
                        <span className="text-sm font-bold text-[#2F2A29]">{item.year}</span>
                      </div>
                      <h4 className={`text-lg font-semibold mb-2 ${isActive ? 'text-white' : 'text-[#2F2A29]'}`}>
                        {item.title}
                      </h4>
                      <p className={`text-sm leading-relaxed mb-3 ${isActive ? 'text-white/80' : 'text-[#6B7280]'}`}>
                        {item.description}
                      </p>
                      <div className={`inline-block px-2.5 py-1 rounded-md ${
                        isActive ? 'bg-white/20' : 'bg-[#F9FAFB]'
                      }`}>
                        <span className={`text-xs font-medium ${isActive ? 'text-[#D6ECBA]' : 'text-[#2F2A29]'}`}>
                          {item.highlight}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline - Interactive */}
          <div className="md:hidden space-y-4">
            {timeline.map((item, index) => {
              const isActive = activeTimelineIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 cursor-pointer"
                  onClick={() => setActiveTimelineIndex(isActive ? null : index)}
                >
                  {/* Timeline line */}
                  {index < timeline.length - 1 && (
                    <div className={`absolute left-[19px] top-12 bottom-0 w-0.5 transition-colors duration-300 ${
                      activeTimelineIndex !== null && activeTimelineIndex > index ? 'bg-[#D6ECBA]' : 'bg-[#E5E7EB]'
                    }`} />
                  )}
                  
                  {/* Node */}
                  <motion.div 
                    animate={{ 
                      scale: isActive ? 1.15 : 1,
                      backgroundColor: isActive ? '#D6ECBA' : '#ffffff'
                    }}
                    className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center shadow-md border-2 transition-colors duration-300 ${
                      isActive ? 'border-[#2F2A29]' : 'border-[#D6ECBA]'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-[#2F2A29]' : 'text-[#6B7280]'}`} />
                  </motion.div>
                  
                  {/* Content */}
                  <motion.div 
                    animate={{ scale: isActive ? 1.02 : 1 }}
                    className={`rounded-xl p-4 shadow-md border-2 transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#2F2A29] border-[#2F2A29] text-white' 
                        : 'bg-white border-[#E5E7EB]/50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-sm font-bold px-2 py-0.5 rounded ${
                        isActive ? 'bg-[#D6ECBA] text-[#2F2A29]' : 'bg-[#D6ECBA]/30 text-[#2F2A29]'
                      }`}>{item.year}</span>
                      <span className={`text-xs ${isActive ? 'text-[#D6ECBA]' : 'text-[#6B7280]'}`}>{item.highlight}</span>
                    </div>
                    <h4 className={`text-base font-semibold mb-1 ${isActive ? 'text-white' : 'text-[#2F2A29]'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-sm ${isActive ? 'text-white/80' : 'text-[#6B7280]'}`}>
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
