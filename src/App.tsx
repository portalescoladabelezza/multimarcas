import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProductShowcase from './components/ProductShowcase';
import AboutSection from './components/AboutSection';
import CTASection from './components/CTASection';
import TopBioLinkPromo from './components/TopBioLinkPromo';
import Footer from './components/Footer';
import WhatsAppFloatingBtn from './components/WhatsAppFloatingBtn';

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-gold-500 selection:text-black antialiased relative">
      {/* Premium Top Navigation Bar */}
      <Navbar />

      <main>
        {/* Dynamic first fold hero with visual CSS smartphone */}
        <Hero />

        {/* Seamless 3 step commercial benefits explanation */}
        <Benefits />

        {/* Statefull interactive category filter and product catalog */}
        <ProductShowcase />

        {/* Full-width editorial brand about section with drop key highlights */}
        <AboutSection />

        {/* Dark gold focused action CTA conversion banner */}
        <CTASection />

        {/* Sales opportunity promotional detail card for the Top Bio Link service */}
        <TopBioLinkPromo />
      </main>

      {/* Structured quick navigation and information footer */}
      <Footer />

      {/* Global persistent WhatsApp conversion bubble */}
      <WhatsAppFloatingBtn />
    </div>
  );
}

