import React from 'react';
import { Award, GraduationCap, Building2, Users, Briefcase, Calendar } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'motion/react';
import profileImage1 from '../../assets/fotos/4.jpeg';
import profileImage2 from '../../assets/fotos/2.jpeg';
import profileImage3 from '../../assets/fotos/1.jpeg';

export function About() {
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
            <div className="grid grid-cols-2 gap-3">
              {/* Main large image */}
              <div className="col-span-2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={profileImage2}
                    alt="Martín Pinto - Corredor Inmobiliario"
                    className="w-full h-[250px] sm:h-[300px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2F2A29]/20 to-transparent" />
                </div>
              </div>
              {/* Two smaller images */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={profileImage3}
                  alt="Martín Pinto profesional"
                  className="w-full h-[140px] sm:h-[160px] object-cover object-top"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={profileImage1}
                  alt="Martín Pinto trabajando"
                  className="w-full h-[140px] sm:h-[160px] object-cover object-top"
                />
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
                    <div className="text-xs text-[#6B7280] truncate">{cred.description}</div>
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

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#D6ECBA] via-[#D6ECBA] to-[#D6ECBA]/50 rounded-full transform -translate-y-1/2" />
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative ${index % 2 === 0 ? 'pt-24' : 'pb-24'}`}
                >
                  {/* Timeline node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 ${index % 2 === 0 ? 'top-0' : 'bottom-0'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#D6ECBA]"
                    >
                      <item.icon className="w-6 h-6 text-[#2F2A29]" />
                    </motion.div>
                    <div className={`absolute left-1/2 w-0.5 h-5 bg-[#D6ECBA] transform -translate-x-1/2 ${index % 2 === 0 ? 'top-full' : 'bottom-full'}`} />
                  </div>
                  
                  {/* Content card */}
                  <motion.div 
                    whileHover={{ y: index % 2 === 0 ? 5 : -5, scale: 1.02 }}
                    className={`bg-white rounded-2xl p-5 shadow-lg border border-[#E5E7EB]/50 ${index % 2 === 0 ? 'mt-6' : 'mb-6'}`}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D6ECBA]/30 rounded-full mb-3">
                      <Calendar className="w-3.5 h-3.5 text-[#2F2A29]" />
                      <span className="text-sm font-bold text-[#2F2A29]">{item.year}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2F2A29] mb-2">{item.title}</h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-2">{item.description}</p>
                    <div className="inline-block px-2.5 py-1 bg-[#F9FAFB] rounded-md">
                      <span className="text-xs font-medium text-[#2F2A29]">{item.highlight}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-5">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10"
              >
                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-[17px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-[#D6ECBA] to-[#D6ECBA]/30" />
                )}
                
                {/* Node */}
                <div className="absolute left-0 top-0 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#D6ECBA]">
                  <item.icon className="w-4 h-4 text-[#2F2A29]" />
                </div>
                
                {/* Content */}
                <div className="bg-white rounded-xl p-4 shadow-md border border-[#E5E7EB]/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-[#2F2A29] bg-[#D6ECBA]/30 px-2 py-0.5 rounded">{item.year}</span>
                    <span className="text-xs text-[#6B7280]">{item.highlight}</span>
                  </div>
                  <h4 className="text-base font-semibold text-[#2F2A29] mb-1">{item.title}</h4>
                  <p className="text-[#6B7280] text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8"
        >
          <Button
            variant="primary"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="shadow-lg text-sm"
          >
            Contactar ahora
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
