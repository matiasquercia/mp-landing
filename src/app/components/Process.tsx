import React from 'react';
import { MessageCircle, FileSearch, Camera, Eye, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Process() {
  const steps = [
    {
      icon: MessageCircle,
      number: '01',
      title: 'Reunión inicial',
      description: 'Conversamos sobre tus objetivos, tiempos y expectativas. Análisis de la propiedad y situación actual.'
    },
    {
      icon: FileSearch,
      number: '02',
      title: 'Tasación + estrategia',
      description: 'Valuación profesional basada en datos de mercado. Definimos precio, estrategia comercial y plan de acción.'
    },
    {
      icon: Camera,
      number: '03',
      title: 'Preparación',
      description: 'Fotografía profesional, copy efectivo y publicación en todos los portales relevantes del mercado.'
    },
    {
      icon: Eye,
      number: '04',
      title: 'Visitas + negociación',
      description: 'Coordino y realizo visitas. Califico interesados. Negocio condiciones para obtener la mejor oferta.'
    },
    {
      icon: CheckCircle,
      number: '05',
      title: 'Cierre + acompañamiento',
      description: 'Gestión de documentación, coordinación con escribanía y acompañamiento hasta la firma definitiva.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2647] mb-4">
            Proceso de trabajo
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Metodología clara y transparente, paso a paso
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - Desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E5E7EB] -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}`}>
                  <div className={`inline-block bg-white rounded-2xl p-8 shadow-lg border border-[#E5E7EB]/50 ${
                    index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
                  }`}>
                    <div className="flex items-start gap-4 lg:block">
                      <div className={`flex-shrink-0 lg:mb-6 ${index % 2 === 0 ? 'lg:flex lg:justify-end' : ''}`}>
                        <div className="w-16 h-16 bg-[#0A2647] rounded-xl flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-bold text-[#C9A96E] mb-2 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                          PASO {step.number}
                        </div>
                        <h3 className={`text-2xl font-bold text-[#0A2647] mb-3 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                          {step.title}
                        </h3>
                        <p className={`text-[#6B7280] leading-relaxed ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot - Desktop only */}
                <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2">
                  <div className="w-4 h-4 bg-[#C9A96E] rounded-full border-4 border-[#F9FAFB]" />
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden lg:block ${index % 2 === 0 ? '' : 'lg:col-start-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center bg-white rounded-2xl p-8 border border-[#E5E7EB]/50"
        >
          <h3 className="text-xl font-semibold text-[#0A2647] mb-3">
            Claridad y transparencia en cada etapa
          </h3>
          <p className="text-[#6B7280] mb-6">
            Mantené el control total del proceso. Te mantengo informado en cada paso.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="px-6 py-3 bg-[#0A2647] text-white rounded-lg hover:bg-[#144272] transition-colors"
          >
            Comenzar proceso
          </button>
        </motion.div>
      </div>
    </section>
  );
}
