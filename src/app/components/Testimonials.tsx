import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Laura Martínez',
      location: 'Palermo, CABA',
      operation: 'Venta',
      rating: 5,
      text: 'Martín me acompañó en todo el proceso de venta. Su profesionalismo y conocimiento del mercado fueron clave para cerrar en tiempo récord y al precio que esperaba. Súper recomendable.',
      timeframe: '45 días'
    },
    {
      name: 'Carlos Fernández',
      location: 'San Isidro, GBA',
      operation: 'Compra',
      rating: 5,
      text: 'Excelente experiencia. Buscaba una casa en zona norte y Martín me encontró justo lo que necesitaba. Muy atento, siempre disponible y transparente con toda la información.',
      timeframe: '2 meses'
    },
    {
      name: 'Ana Rodríguez',
      location: 'Belgrano, CABA',
      operation: 'Alquiler',
      rating: 5,
      text: 'Gestionó el alquiler de mi departamento de forma impecable. Encontró inquilinos responsables en menos de un mes. La relación precio-servicio es excelente.',
      timeframe: '3 semanas'
    },
    {
      name: 'Roberto Gómez',
      location: 'Vicente López, GBA',
      operation: 'Venta',
      rating: 5,
      text: 'Vendí mi propiedad gracias a su estrategia comercial. Las fotos profesionales y la difusión fueron clave. Un agente confiable que cumple lo que promete.',
      timeframe: '60 días'
    },
    {
      name: 'María Silva',
      location: 'Recoleta, CABA',
      operation: 'Compra',
      rating: 5,
      text: 'Me asesoró en la compra de mi primer departamento. Explicó cada detalle del proceso y me acompañó hasta la firma. Profesional y humano a la vez.',
      timeframe: '3 meses'
    },
    {
      name: 'Diego Torres',
      location: 'Caballito, CABA',
      operation: 'Inversión',
      rating: 5,
      text: 'Busqué asesoramiento para invertir en inmuebles y Martín me orientó perfecto. Análisis de rentabilidad súper claro y honesto. Muy conforme con los resultados.',
      timeframe: '4 meses'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2647] mb-4">
            Lo que dicen mis clientes
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Testimonios reales de operaciones exitosas
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-8 md:p-12 border border-[#E5E7EB]/50 shadow-lg"
            >
              <Quote className="w-12 h-12 text-[#C9A96E]/20 mb-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-[#2C3E50] mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-semibold text-[#0A2647] text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-[#6B7280] text-sm">
                    {testimonials[currentIndex].location} · {testimonials[currentIndex].operation}
                  </div>
                </div>
                <div className="text-sm text-[#6B7280] bg-white px-4 py-2 rounded-full">
                  Tiempo: {testimonials[currentIndex].timeframe}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center hover:bg-[#F9FAFB] transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#0A2647]" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-[#0A2647]'
                      : 'w-2 bg-[#E5E7EB] hover:bg-[#C9A96E]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center hover:bg-[#F9FAFB] transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#0A2647]" />
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F9FAFB] rounded-xl p-8 border border-[#E5E7EB]/50"
          >
            <h3 className="text-xl font-semibold text-[#0A2647] mb-4">
              Caso: Depto 3 amb Palermo
            </h3>
            <div className="space-y-3 text-[#6B7280]">
              <div className="flex justify-between">
                <span>Tiempo de venta:</span>
                <span className="font-semibold text-[#0A2647]">42 días</span>
              </div>
              <div className="flex justify-between">
                <span>Visitas realizadas:</span>
                <span className="font-semibold text-[#0A2647]">18</span>
              </div>
              <div className="flex justify-between">
                <span>Precio publicado:</span>
                <span className="font-semibold text-[#C9A96E]">USD 185k</span>
              </div>
              <div className="flex justify-between">
                <span>Precio de cierre:</span>
                <span className="font-semibold text-[#C9A96E]">USD 182k</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#F9FAFB] rounded-xl p-8 border border-[#E5E7EB]/50"
          >
            <h3 className="text-xl font-semibold text-[#0A2647] mb-4">
              Caso: Casa San Isidro
            </h3>
            <div className="space-y-3 text-[#6B7280]">
              <div className="flex justify-between">
                <span>Tiempo de venta:</span>
                <span className="font-semibold text-[#0A2647]">65 días</span>
              </div>
              <div className="flex justify-between">
                <span>Visitas realizadas:</span>
                <span className="font-semibold text-[#0A2647]">24</span>
              </div>
              <div className="flex justify-between">
                <span>Precio publicado:</span>
                <span className="font-semibold text-[#C9A96E]">USD 340k</span>
              </div>
              <div className="flex justify-between">
                <span>Precio de cierre:</span>
                <span className="font-semibold text-[#C9A96E]">USD 335k</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
