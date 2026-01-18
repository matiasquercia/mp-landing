import React from 'react';
import { Award, GraduationCap, Building2, Users, Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'motion/react';
import profileImage1 from '../../assets/fotos/4.jpeg';

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
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={profileImage1}
                alt="Martín Pinto - Corredor Inmobiliario trabajando"
                className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F2A29]/20 to-transparent" />
            </motion.div>
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

        {/* Timeline - Trayectoria profesional - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="text-center mb-6 lg:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F2A29] mb-2 tracking-tight">
              Trayectoria profesional
            </h3>
            <p className="text-sm text-[#6B7280]">Más de 18 años en el mercado inmobiliario</p>
          </div>

          {/* Timeline - Simplified for all screens */}
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-md border border-[#E5E7EB]/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-[#D6ECBA]/30 rounded-lg flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-[#2F2A29]" />
                  </div>
                  <span className="text-xs font-bold text-[#2F2A29] bg-[#D6ECBA]/30 px-2 py-0.5 rounded">{item.year}</span>
                </div>
                <h4 className="text-sm font-semibold text-[#2F2A29] mb-1">{item.title}</h4>
                <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Note - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 lg:mt-12 bg-gradient-to-br from-[#2F2A29] to-[#3d3735] rounded-2xl p-5 sm:p-6 text-white text-center relative overflow-hidden"
        >
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="w-10 h-10 bg-[#D6ECBA]/20 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-[#D6ECBA]" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-base font-bold">Garantía profesional</h4>
              <p className="text-white/80 text-sm">
                CUCICBA N° 9356 - Corredor Inmobiliario matriculado en CABA
              </p>
            </div>
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
