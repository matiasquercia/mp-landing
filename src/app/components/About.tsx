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
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] via-white to-[#D6ECBA]/10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D6ECBA]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D6ECBA]/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-[#D6ECBA]/40 shadow-sm">
            <Users className="w-4 h-4 text-[#2F2A29]" />
            <span className="text-sm font-medium text-[#2F2A29]">Sobre mí</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2F2A29] mb-4 tracking-tight">
            Martín Pinto
          </h2>
          <p className="text-xl text-[#6B7280]">
            Corredor Inmobiliario y Martillero Público
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Single large image */}
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={profileImage1}
                alt="Martín Pinto - Corredor Inmobiliario trabajando"
                className="w-full h-[500px] sm:h-[550px] lg:h-[600px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F2A29]/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-5 text-[#6B7280] leading-relaxed text-lg">
              <p>
                Inicié mi recorrido en el mercado inmobiliario en el año{' '}
                <span className="font-semibold text-[#2F2A29]">2006</span>, 
                como propietario de una agencia especializada en alquileres temporarios en la Ciudad de Buenos Aires: 
                <span className="font-semibold text-[#2F2A29]"> landinargentina.com</span>, donde gestioné más de 100 propiedades.
              </p>
              <p>
                A partir de esa experiencia comenzaron a surgir oportunidades de venta de inmuebles, 
                lo que marcó el inicio de mi camino como{' '}
                <span className="font-semibold text-[#2F2A29]">broker inmobiliario</span>.
              </p>
              <p>
                Me capacité en una red inmobiliaria internacional, especializándome en{' '}
                <span className="font-semibold text-[#2F2A29]">tasación y comercialización de propiedades</span>. 
                Posteriormente cursé la carrera de Corredor Inmobiliario y Martillero Público.
              </p>
              <p>
                Hoy desarrollo mi actividad de manera{' '}
                <span className="font-semibold text-[#2F2A29]">independiente</span>, 
                con una mirada estratégica y enfocada en generar valor real para cada cliente.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid gap-4 mt-10">
              {credentials.map((cred, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-[#E5E7EB]/50 shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  <div className="w-12 h-12 bg-[#D6ECBA]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-6 h-6 text-[#2F2A29]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-[#2F2A29] mb-1">{cred.title}</div>
                    <div className="text-sm text-[#6B7280]">{cred.description}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#D6ECBA]" />
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
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#2F2A29] mb-3 tracking-tight">
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
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#D6ECBA] cursor-pointer"
                    >
                      <item.icon className="w-7 h-7 text-[#2F2A29]" />
                    </motion.div>
                    {/* Connector line */}
                    <div className={`absolute left-1/2 w-0.5 h-6 bg-[#D6ECBA] transform -translate-x-1/2 ${index % 2 === 0 ? 'top-full' : 'bottom-full'}`} />
                  </div>
                  
                  {/* Content card */}
                  <motion.div 
                    whileHover={{ y: index % 2 === 0 ? 5 : -5, scale: 1.02 }}
                    className={`bg-white rounded-2xl p-6 shadow-lg border border-[#E5E7EB]/50 ${index % 2 === 0 ? 'mt-8' : 'mb-8'}`}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D6ECBA]/30 rounded-full mb-3">
                      <Calendar className="w-3.5 h-3.5 text-[#2F2A29]" />
                      <span className="text-sm font-bold text-[#2F2A29]">{item.year}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2F2A29] mb-2">{item.title}</h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-3">{item.description}</p>
                    <div className="inline-block px-2.5 py-1 bg-[#F9FAFB] rounded-md">
                      <span className="text-xs font-medium text-[#2F2A29]">{item.highlight}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8"
              >
                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#D6ECBA] to-[#D6ECBA]/30" />
                )}
                
                {/* Node */}
                <div className="absolute left-0 top-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#D6ECBA]">
                  <item.icon className="w-4 h-4 text-[#2F2A29]" />
                </div>
                
                {/* Content */}
                <div className="bg-white rounded-xl p-5 shadow-md border border-[#E5E7EB]/50 ml-4">
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

        {/* Professional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-br from-[#2F2A29] to-[#3d3735] rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D6ECBA]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#D6ECBA]/20 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-[#D6ECBA]" />
              </div>
            </div>
            <h4 className="text-2xl font-bold mb-3">Garantía profesional</h4>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
              Corredor Inmobiliario y Martillero Público matriculado en CUCICBA N° 9356, 
              conforme a la normativa vigente de la Ciudad Autónoma de Buenos Aires.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="shadow-xl shadow-[#2F2A29]/20"
          >
            Contactar ahora
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
