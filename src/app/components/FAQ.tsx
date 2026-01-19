import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export function FAQ() {
  const faqs = [
    {
      question: '¿Cuál es el plazo estimado para vender mi propiedad?',
      answer: 'Trabajo con un objetivo de resultados medibles en un plazo máximo estimado de 90 días, aunque esto puede variar según las características del inmueble y las condiciones actuales del mercado. Cada propiedad es única y recibe un plan estratégico personalizado.'
    },
    {
      question: '¿Qué incluye el servicio de gestión integral?',
      answer: 'El servicio incluye: tasación profesional basada en estudio de mercado, plan estratégico de comercialización, producción visual profesional (fotografía y material comercial), publicación en portales líderes, seguimiento permanente con reportes semanales, y acompañamiento integral desde la reserva hasta el cierre de la operación.'
    },
    {
      question: '¿Cómo se realiza la tasación de mi propiedad?',
      answer: 'La tasación se basa en un estudio exhaustivo del mercado inmobiliario de CABA, considerando 12 variables denominadas ponderaciones positivas o negativas de acuerdo a los comparables seleccionados: piso, disposición, antigüedad, expensas, confort, edificio sin ascensor, estado de conservación, categoría del edificio, vista, luminosidad/orientación, ubicación, días de publicación y precios comparables de propiedades similares en la zona. El objetivo es determinar un precio competitivo y realista.'
    },
    {
      question: '¿Con qué frecuencia recibo información sobre mi propiedad?',
      answer: 'Realizo un seguimiento permanente con reportes semanales sobre la evolución de las publicaciones, cantidad y calidad de consultas recibidas, visitas realizadas, y feedback del mercado. Mantengo comunicación constante para que estés siempre informado.'
    },
    {
      question: '¿En qué portales se publica mi propiedad?',
      answer: 'Publico en los principales portales inmobiliarios de Argentina y tengo presencia en redes profesionales. Cada plan de comercialización se adapta al perfil de la propiedad y al público objetivo que queremos alcanzar.'
    },
    {
      question: '¿Qué tipo de material visual profesional incluye el servicio?',
      answer: 'La producción visual incluye fotografía profesional de alta calidad y video recorrido que resaltan los mejores atributos de la propiedad, con correcta iluminación, encuadres estratégicos y postproducción. También creo material comercial optimizado para publicaciones digitales.'
    },
    {
      question: '¿Trabajás solo con ventas o también con alquileres?',
      answer: 'Trabajo tanto con venta como con alquiler de propiedades. También ofrezco servicios de alquileres temporarios amoblados para fines específicos y administración de propiedades. Mi experiencia comenzó precisamente en la gestión de alquileres temporarios.'
    },
    {
      question: '¿Qué garantías tengo sobre tu profesionalismo?',
      answer: 'Soy Corredor Inmobiliario y Martillero Público matriculado en CUCICBA bajo el número 9356, conforme a la normativa vigente de la Ciudad Autónoma de Buenos Aires. Cuento con más de 20 años de experiencia en el mercado inmobiliario y formación continua en tasación y comercialización.'
    },
    {
      question: '¿Ofrecés asesoramiento para comprar una propiedad?',
      answer: 'Sí, brindo asesoramiento inmobiliario personalizado también para compradores. Te ayudo a encontrar la propiedad adecuada según tus necesidades, presupuesto y objetivos, y te acompaño en todo el proceso de compra hasta el cierre de la operación.'
    },
    {
      question: '¿Cómo es el proceso de administración de propiedades?',
      answer: 'En el servicio de administración me encargo de la gestión completa: búsqueda y selección de inquilinos, elaboración de contratos, cobro de alquileres, pago de expensas e impuestos, coordinación de reparaciones y mantenimiento, y reportes mensuales al propietario.'
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#D6ECBA]/20 to-[#F9FAFB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-[#D6ECBA]/40">
            <span className="text-sm font-medium text-[#2F2A29]">Preguntas frecuentes</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2F2A29] mb-6">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-[#6B7280]">
            Respuestas a las consultas más comunes sobre mis servicios
          </p>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Accordion.Item
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-6 py-5 flex items-center justify-between text-left group">
                    <span className="font-semibold text-[#2F2A29] pr-4 text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown className="w-5 h-5 text-[#6B7280] transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                  <div className="px-6 pb-5 text-[#6B7280] leading-relaxed">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-[#2F2A29] mb-3">
            ¿Tenés otra consulta?
          </h3>
          <p className="text-[#6B7280] mb-6 text-lg">
            Contactame sin compromiso para una primera evaluación
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
            className="px-8 py-4 bg-[#2F2A29] text-white rounded-xl hover:bg-[#2F2A29]/90 transition-colors font-semibold text-lg"
          >
            Contactar ahora
          </button>
        </motion.div>
      </div>
    </section>
  );
}
