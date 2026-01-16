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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232F2A29' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D6ECBA]/30 rounded-full mb-6 border border-[#D6ECBA]/30">
            <Shield className="w-4 h-4 text-[#2F2A29]" />
            <span className="text-sm font-medium text-[#2F2A29]">Confianza y profesionalismo</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2F2A29] mb-6 tracking-tight">
            ¿Por qué trabajar conmigo?
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Más de dos décadas de experiencia respaldando cada operación con profesionalismo y resultados
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-7 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 border border-[#E5E7EB]/50 group cursor-default"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm`}>
                <benefit.icon className="w-7 h-7 text-[#2F2A29]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2F2A29] mb-2">
                {benefit.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 rounded-3xl overflow-hidden relative"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img 
              src={workingImage} 
              alt="" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2F2A29]/95 via-[#2F2A29]/90 to-[#2F2A29]/80" />
          </div>
          
          <div className="relative p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Evaluación sin compromiso
              </h3>
              <p className="text-lg text-white/80 max-w-xl">
                Contactame para una primera consulta y evaluación profesional de tu propiedad. Sin costo y sin obligación.
              </p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-3 px-8 py-4 bg-[#D6ECBA] text-[#2F2A29] rounded-xl hover:bg-[#D6ECBA]/90 transition-colors font-semibold text-lg shadow-xl shadow-[#D6ECBA]/30 whitespace-nowrap"
            >
              Solicitar consulta gratuita
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
