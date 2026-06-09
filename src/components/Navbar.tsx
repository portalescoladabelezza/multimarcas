import { useState, useEffect } from 'react';
import { Menu, X, MessageSquareText } from 'lucide-react';
import { storeConfig } from '../config';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Estou navegando pela vitrine da Hype Concept e gostaria de tirar algumas dúvidas.");
    window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${message}`, '_blank');
  };

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Categorias', href: '#categorias' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md py-3 border-b border-gold-500/15 shadow-xl' 
        : 'bg-gradient-to-b from-black/80 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Brand elements */}
          <div className="flex items-center justify-start">
            <a href="#inicio" className="group flex flex-col">
              <span className="font-serif text-2xl font-black tracking-tighter uppercase text-white transition-colors">
                Hype <span className="text-gold-500">Concept</span>
              </span>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
                <span className="text-[9px] font-mono tracking-widest text-[#C5A059] uppercase font-semibold">
                  Multimarcas
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-gold-500 hover:border-b hover:border-gold-500/50 pb-1"
                id={`nav-desktop-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action Button */}
          <div className="hidden md:block">
            <button
              onClick={handleWhatsAppClick}
              id="btn-desktop-nav-whatsapp"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-black text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg hover:from-gold-500 hover:to-gold-100 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageSquareText className="w-4 h-4" />
              Comprar pelo WhatsApp
            </button>
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-zinc-900 focus:outline-none transition-colors"
              aria-expanded="false"
              id="btn-mobile-nav-toggle"
            >
              <span className="sr-only">Abrir menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation with Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-zinc-950 border-b border-zinc-900"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-lg text-base font-semibold text-gray-300 hover:text-white hover:bg-zinc-900 transition-all"
                  id={`nav-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <button
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsOpen(false);
                  }}
                  id="btn-mobile-nav-whatsapp"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 text-black rounded-lg text-sm font-bold uppercase tracking-wider shadow-lg hover:opacity-90 active:scale-95 transition-all"
                >
                  <MessageSquareText className="w-5 h-5" />
                  Comprar pelo WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
