import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Facebook, Loader2, Mail, Phone, MapPin, Instagram, Linkedin, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { Input } from './ui/Input';
import { TextArea } from './ui/TextArea';
import { Button } from './ui/Button';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    operation: 'sell',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [humanCheck, setHumanCheck] = useState(false);
  const [humanCheckError, setHumanCheckError] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: si se llenó, es un bot
    if (honeypot) return;

    if (!humanCheck) {
      setHumanCheckError('Por favor confirmá que no sos un robot.');
      return;
    }

    setHumanCheckError('');
    setSubmitError('');
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/contacto@martinpinto.com.ar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Consulta - ${formData.name || 'Contacto'}`,
          _template: 'table',
          _captcha: 'false',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          operation: formData.operation,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          operation: 'sell',
          message: ''
        });
        setHumanCheck(false);
      }, 4000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitError('No se pudo enviar el mensaje. Intentá de nuevo en unos minutos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2F2A29] mb-2">
            Contacto
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280]">
            Hablemos de tu proyecto. Primera consulta sin cargo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#F9FAFB] rounded-xl p-5 sm:p-6 border border-[#E5E7EB]/50">
              <h3 className="text-lg sm:text-xl font-bold text-[#2F2A29] mb-4">
                Enviá tu consulta
              </h3>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-green-800 mb-2">
                    ¡Mensaje enviado!
                  </h4>
                  <p className="text-green-700">
                    Gracias por tu consulta. Te responderé a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Nombre completo"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Juan Pérez"
                  />
                  
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="juan@ejemplo.com"
                  />
                  
                  <Input
                    label="Teléfono"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+54 9 11 5768-7121"
                  />
                  
                  <div className="w-full">
                    <label className="block mb-2 text-sm text-[#2C3E50]">
                      Tipo de operación
                    </label>
                    <select
                      name="operation"
                      value={formData.operation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2F2A29]/20 focus:border-[#2F2A29]"
                    >
                      <option value="sell">Quiero vender</option>
                      <option value="buy">Quiero comprar</option>
                      <option value="rent-out">Quiero alquilar mi propiedad</option>
                      <option value="rent">Busco alquiler</option>
                      <option value="valuation">Necesito tasación</option>
                      <option value="other">Otra consulta</option>
                    </select>
                  </div>
                  
                  <TextArea
                    label="Mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Contame qué necesitás..."
                    rows={5}
                  />

                  {/* Honeypot - oculto para humanos, visible para bots */}
                  <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10" aria-hidden="true">
                    <input
                      type="text"
                      name="_honey"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Checkbox de verificación */}
                  <div
                    className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer select-none transition-colors ${
                      humanCheck
                        ? 'bg-[#D6ECBA]/20 border-[#D6ECBA]'
                        : humanCheckError
                          ? 'bg-red-50 border-red-300'
                          : 'bg-white border-[#E5E7EB] hover:border-[#D6ECBA]/60'
                    }`}
                    onClick={() => {
                      setHumanCheck(!humanCheck);
                      setHumanCheckError('');
                    }}
                  >
                    <div
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        humanCheck
                          ? 'bg-[#2F2A29] border-[#2F2A29]'
                          : 'border-[#D1D5DB] bg-white'
                      }`}
                    >
                      {humanCheck && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <span className="text-sm text-[#2F2A29]">
                      Confirmo que no soy un robot
                    </span>
                  </div>
                  {humanCheckError && (
                    <div className="flex items-center gap-2 text-red-600">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <p className="text-sm">{humanCheckError}</p>
                    </div>
                  )}

                  {submitError && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm">{submitError}</p>
                    </div>
                  )}
                  
                  <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar consulta
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-[#2F2A29] to-[#3d3735] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                ¿Preferís hablar directamente?
              </h3>
              <p className="text-white/80 mb-6">
                Contactame por WhatsApp y coordinamos una reunión
              </p>
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => window.open('https://wa.me/5491157687121?text=Hola%20Martín,%20quiero%20consultar%20sobre%20una%20propiedad', '_blank')}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Escribir por WhatsApp
              </Button>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#2F2A29]">
                Información de contacto
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D6ECBA]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#2F2A29]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2F2A29]">Teléfono</div>
                    <div className="text-[#6B7280]">+54 9 11 5768-7121</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D6ECBA]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#2F2A29]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2F2A29]">Email</div>
                    <div className="text-[#6B7280]">contacto@martinpinto.com.ar</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D6ECBA]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#2F2A29]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2F2A29]">Zona de trabajo</div>
                    <div className="text-[#6B7280]">CABA, GBA Norte</div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-[#F9FAFB] rounded-xl p-6 border border-[#E5E7EB]/50">
                <h4 className="font-semibold text-[#2F2A29] mb-3">
                  Horarios de atención
                </h4>
                <div className="space-y-2 text-sm text-[#6B7280]">
                  <div className="flex justify-between">
                    <span>Lunes a Viernes:</span>
                    <span className="font-medium text-[#2F2A29]">9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-medium text-[#2F2A29]">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-medium text-[#2F2A29]">Con turno previo</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-[#2F2A29] mb-4">
                  Seguime en redes
                </h4>
                <div className="flex gap-3">
                  <button
                    onClick={() => window.open('https://www.instagram.com/martinpinto.com.ar/', '_blank')}
                    className="w-12 h-12 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg flex items-center justify-center hover:bg-[#2F2A29] hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => window.open('https://www.linkedin.com/in/martin-pinto-106a1713/', '_blank')}
                    className="w-12 h-12 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg flex items-center justify-center hover:bg-[#2F2A29] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => window.open('https://www.facebook.com/Martinpintopropiedades', '_blank')}
                    className="w-12 h-12 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg flex items-center justify-center hover:bg-[#2F2A29] hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}