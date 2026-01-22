import React from 'react';
import { Handshake } from 'lucide-react';
import { motion } from 'motion/react';
// @ts-ignore - TypeScript no maneja bien espacios en nombres de carpetas
import escribaniaImg from '../../assets/fotos/alianzas profesionales/escribania.jpg';
// @ts-ignore
import estudioJuridicoImg from '../../assets/fotos/alianzas profesionales/estudio juridico.jpg';
// @ts-ignore
import disenoInterioresImg from '../../assets/fotos/alianzas profesionales/diseño interiores.jpg';

// Imágenes representativas de cada profesión
const allyImages = {
  escribania: escribaniaImg,
  juridico: estudioJuridicoImg,
  interiorismo: disenoInterioresImg
};

export function Alliances() {
  const allies = [
    {
      image: allyImages.escribania,
      title: 'Escribanía asociada',
      description: 'Para garantizar seguridad jurídica y agilidad en las operaciones.',
      accent: '#3B82F6'
    },
    {
      image: allyImages.juridico,
      title: 'Estudio jurídico especializado',
      description: 'Especializado en sucesiones complejas, acompañando procesos patrimoniales que requieren un abordaje legal específico.',
      accent: '#10B981'
    },
    {
      image: allyImages.interiorismo,
      title: 'Diseñador/a de interiores',
      description: 'Orientado a la optimización y puesta en valor de propiedades destinadas a alquiler temporario, mejorando su rentabilidad y atractivo comercial.',
      accent: '#8B5CF6'
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
            Alianzas profesionales
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] max-w-2xl mx-auto">
            Para brindar un servicio integral y de excelencia, trabajo en conjunto con un equipo de profesionales especializados, seleccionados por su trayectoria y confiabilidad.
          </p>
        </motion.div>

        {/* Allies Grid - Card with Image */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allies.map((ally, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E5E7EB]/50"
            >
              {/* Image container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={ally.image} 
                  alt={ally.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Accent bar */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: ally.accent }}
                />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2F2A29] mb-2 group-hover:text-[#2F2A29] transition-colors">
                  {ally.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {ally.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 lg:mt-12 text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#E5E7EB]/50"
        >
          <p className="text-sm sm:text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Estas alianzas permiten ofrecer soluciones completas, cuidando cada detalle del proceso y brindando tranquilidad al propietario.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
