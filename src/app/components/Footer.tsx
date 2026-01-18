import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin, Award, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from '../../assets/MP-prop-04.png';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Inicio', href: 'hero' },
    { label: 'Sobre mí', href: 'about' },
    { label: 'Servicios', href: 'services' },
    { label: 'Alianzas', href: 'alliances' },
    { label: 'Contacto', href: 'contact' }
  ];

  const services = [
    'Venta de propiedades',
    'Alquiler residencial',
    'Tasaciones profesionales',
    'Administración de propiedades'
  ];

  return (
    <footer className="bg-gradient-to-br from-[#2F2A29] to-[#1a1817] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6ECBA]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top section with CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 mb-12 border-b border-white/10">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">¿Listo para dar el próximo paso?</h3>
            <p className="text-white/60">Contactame para una consulta sin compromiso</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-6 py-3 bg-[#D6ECBA] text-[#2F2A29] rounded-xl font-semibold hover:bg-[#D6ECBA]/90 transition-colors shadow-lg shadow-[#D6ECBA]/20"
          >
            Contactar ahora
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.button 
              onClick={scrollToTop}
              className="mb-6 block"
              whileHover={{ opacity: 0.8 }}
            >
              <img 
                src={logoImage} 
                alt="Martín Pinto Propiedades" 
                className="h-14 w-auto" 
              />
            </motion.button>
            <div className="flex items-center gap-2 text-[#D6ECBA] mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">CUCICBA N° 9356</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Corredor Inmobiliario y Martillero Público. Más de 20 años de experiencia en CABA.
            </p>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://instagram.com', '_blank')}
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#D6ECBA] hover:text-[#2F2A29] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://linkedin.com', '_blank')}
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#D6ECBA] hover:text-[#2F2A29] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-5 text-white">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-[#D6ECBA] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D6ECBA]/50" />
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-5 text-white">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/60 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D6ECBA]/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-white">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5491157687121"
                  className="flex items-center gap-3 text-white/60 hover:text-[#D6ECBA] transition-colors group"
                >
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#D6ECBA]/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+54 9 11 5768-7121</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:martin.pinto@inmobiliaria.com"
                  className="flex items-center gap-3 text-white/60 hover:text-[#D6ECBA] transition-colors group"
                >
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#D6ECBA]/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">martin.pinto@inmobiliaria.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/60">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">CABA, Argentina</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Martín Pinto Propiedades. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <button className="hover:text-white/60 transition-colors">
              Política de privacidad
            </button>
            <button className="hover:text-white/60 transition-colors">
              Términos y condiciones
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}