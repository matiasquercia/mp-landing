import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { About } from './components/About';
import { Services } from './components/Services';
import { Alliances } from './components/Alliances';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { generatePDF } from '../utils/generatePDF';

export default function App() {
  // Exponer la función generatePDF globalmente al montar el componente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).generatePDF = generatePDF;
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <About />
        <Services />
        <Alliances />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}