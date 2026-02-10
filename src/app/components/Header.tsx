import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
// @ts-expect-error - Image exists, TS cache issue with relative path resolution
import logoImage from '../../assets/logo/MP-prop-03.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollY } = useScroll();
  const logoOpacity = useTransform(scrollY, [150, 250], [0, 1]);
  const logoScale = useTransform(scrollY, [150, 250], [0.8, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 20);
      
      // Ocultar header cuando estamos en el Hero (viewport top)
      // Mostrar cuando se scrollea más allá del hero
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const heroBottom = heroEl.offsetHeight - 100;
        setIsVisible(scrollPos > heroBottom);
      } else {
        setIsVisible(scrollPos > 300);
      }
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'services', 'alliances', 'faq', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Inicio', href: 'hero' },
    { label: 'Sobre mí', href: 'about' },
    { label: 'Servicios', href: 'services' },
    { label: 'Alianzas', href: 'alliances' },
    { label: 'FAQ', href: 'faq' },
    { label: 'Contacto', href: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isVisible
        ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-[#E5E7EB]/50 translate-y-0'
        : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="w-40 flex-shrink-0">
            <motion.button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 group"
              style={{ 
                opacity: logoOpacity,
                scale: logoScale
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img 
                src={logoImage} 
                alt="Martín Pinto Propiedades" 
                className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:opacity-80" 
              />
            </motion.button>
          </div>

          {/* Desktop Navigation - Centrado */}
          <nav className="hidden lg:flex items-center justify-center gap-1 flex-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item.href
                    ? 'text-[#2F2A29]'
                    : 'text-[#6B7280] hover:text-[#2F2A29]'
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-lg -z-10 bg-[#D6ECBA]/30"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Spacer para balance (mismo ancho que el logo) */}
          <div className="hidden lg:block w-40 flex-shrink-0" />

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl ml-auto bg-[#F9FAFB] border border-[#E5E7EB]/50 text-[#2F2A29]"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E5E7EB]/50 overflow-hidden"
          >
            <nav className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                    activeSection === item.href
                      ? 'bg-[#D6ECBA]/30 text-[#2F2A29]'
                      : 'text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#2F2A29]'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
