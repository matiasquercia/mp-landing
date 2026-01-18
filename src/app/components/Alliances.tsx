import React from 'react';
import { Handshake, Scale, Calculator, Palette, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function Alliances() {
  const allies = [
    {
      icon: Scale,
      title: 'Escribanía Asociada',
      description: 'Profesionales especializados en operaciones inmobiliarias, garantizando seguridad jurídica en cada transacción.',
      color: 'from-blue-100/60 to-blue-50/40'
    },
    {
      icon: Calculator,
      title: 'Estudio Contable Especializado',
      description: 'Asesoramiento impositivo y contable para optimizar tu inversión inmobiliaria.',
      color: 'from-emerald-100/60 to-emerald-50/40'
    },
    {
      icon: Palette,
      title: 'Diseñador de Interiores',
      description: 'Home staging y diseño para potenciar el valor y atractivo de tu propiedad.',
      color: 'from-purple-100/60 to-purple-50/40'
    },
    {
      icon: Users,
      title: 'Aliados Estratégicos',
      description: 'Red de profesionales del sector para cubrir todas tus necesidades inmobiliarias.',
      color: 'from-amber-100/60 to-amber-50/40'
    }
  ];

  return (
    <section id="alliances" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#F9FAFB] via-white to-[#D6ECBA]/10 relative overflow-hidden">
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
            <Handshake className="w-3.5 h-3.5 text-[#2F2A29]" />
            <span className="text-xs font-medium text-[#2F2A29]">Trabajo en equipo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2F2A29] mb-3 tracking-tight">
            Alianzas Profesionales
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] max-w-2xl mx-auto">
            Para brindar un servicio integral y de excelencia, trabajo en conjunto con un equipo de profesionales especializados.
          </p>
        </motion.div>

        {/* Allies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {allies.map((ally, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-5 shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 border border-[#E5E7EB]/50 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${ally.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                <ally.icon className="w-6 h-6 text-[#2F2A29]" />
              </div>
              <h3 className="text-base font-semibold text-[#2F2A29] mb-2">
                {ally.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {ally.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 lg:mt-10 text-center"
        >
          <p className="text-xs text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Las alianzas con escribanías, estudios contables y profesionales independientes se realizan a efectos de brindar un servicio integral. 
            Cada profesional opera de manera independiente bajo su propia matrícula y responsabilidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
