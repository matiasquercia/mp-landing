import React from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[100vw]">
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