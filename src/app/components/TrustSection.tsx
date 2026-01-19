import React from 'react';
import { Shield, CheckCircle, BarChart3, Users, Clock, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import workingImage from '../../assets/fotos/4.jpeg';

export function TrustSection() {
  const benefits = [
    {
      icon: Shield,
      title: 'Transparencia total',
      description: 'Gestión clara y profesional con reportes semanales sobre el avance de tu operación.',
      color: 'from-[#D6ECBA]/40 to-[#D6ECBA]/20'
    },
    {
      icon: BarChart3,
      title: 'Análisis de mercado',
      description: 'Tasaciones respaldadas por estudio profundo del mercado inmobiliario de CABA.',
      color: 'from-blue-100/60 to-blue-50/40'
    },
    {
      icon: CheckCircle,
      title: 'Orientación a resultados',
      description: 'Plan estratégico diseñado para lograr resultados medibles en tiempo estimado.',
      color: 'from-emerald-100/60 to-emerald-50/40'
    },
    {
      icon: Users,
      title: 'Experiencia comprobada',
      description: 'Más de 20 años en el mercado con gestión exitosa de más de 100 propiedades.',
      color: 'from-amber-100/60 to-amber-50/40'
    },
    {
      icon: Clock,
      title: 'Seguimiento permanente',
      description: 'Acompañamiento integral desde el primer día hasta el cierre de la operación.',
      color: 'from-purple-100/60 to-purple-50/40'
    },
    {
      icon: Award,
      title: 'Matrícula profesional',
      description: 'CUCICBA N° 9356 - Corredor Inmobiliario y Martillero Público habilitado.',
      color: 'from-rose-100/60 to-rose-50/40'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#D6ECBA]/30 rounded-full mb-4 border border-[#D6ECBA]/30">
            <Shield className="w-3.5 h-3.5 text-[#2F2A29]" />
            <span className="text-xs font-medium text-[#2F2A29]">Confianza y profesionalismo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2F2A29] mb-3 tracking-tight">
            ¿Por qué trabajar conmigo?
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] max-w-2xl mx-auto">
            Más de dos décadas de experiencia respaldando cada operación con profesionalismo
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-[#E5E7EB]/50 group"
            >
              <div className={`w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                <benefit.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#2F2A29]" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[#2F2A29] mb-1">
                {benefit.title}
              </h3>
              <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 lg:mt-14 rounded-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0">
            <img 
              src={workingImage} 
              alt="" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2F2A29]/95 via-[#2F2A29]/90 to-[#2F2A29]/80" />
          </div>
          
          <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Evaluación sin compromiso
              </h3>
              <p className="text-sm sm:text-base text-white/80 max-w-lg">
                Primera consulta y evaluación profesional de tu propiedad. Sin costo.
              </p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2 px-5 py-3 bg-[#D6ECBA] text-[#2F2A29] rounded-lg hover:bg-[#D6ECBA]/90 transition-colors font-semibold text-sm shadow-lg whitespace-nowrap"
            >
              Consulta gratuita
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
