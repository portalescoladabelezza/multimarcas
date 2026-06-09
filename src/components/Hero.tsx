import React from 'react';
import { ArrowRight, MessageSquareText, Sparkles, Tag, Link as LinkIcon, Laptop, Smartphone, Zap } from 'lucide-react';
import { storeConfig } from '../config';
import { motion } from 'motion/react';

export default function Hero() {
  const handleScrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Acessei a vitrine da Hype Concept e gostaria de falar com um atendente.");
    window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen pt-28 flex items-center bg-zinc-950 overflow-hidden">
      
      {/* Background elegant abstract decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.9),transparent)]"></div>
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] bg-zinc-900/40 blur-[100px] rounded-full"></div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-45"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content Column (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Minimal Multibrand Tag */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-start items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-500 text-xs font-semibold uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Plano Essencial Top Bio Link</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] mb-2"
              id="hero-title"
            >
              Moda, estilo e <br />
              <span className="text-gold-500 italic font-medium">ofertas</span> <br />
              em um só lugar.
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed"
              id="hero-subtitle"
            >
              {storeConfig.subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#produtos"
                onClick={handleScrollToProducts}
                id="btn-hero-view-products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-100 text-neutral-950 font-bold uppercase text-xs tracking-wider rounded-xl shadow-xl hover:shadow-gold-500/10 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Ver produtos
                <ArrowRight className="w-4 h-4 text-neutral-950" />
              </a>
              <button
                onClick={handleWhatsAppContact}
                id="btn-hero-whatsapp"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-gold-500/40 text-white font-bold uppercase text-xs tracking-wider rounded-xl hover:bg-zinc-800/80 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageSquareText className="w-4 h-4 text-emerald-400" />
                Chamar no WhatsApp
              </button>
            </motion.div>

            {/* Decorative Mini Cards/Badges Row representing exactly what basic plan delivers */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-10 border-t border-zinc-900 mt-8"
            >
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/30 border border-zinc-900">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gold-500/10 text-gold-500 shrink-0 mt-0.5">
                  <Tag className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-tight">Até 8 produtos</p>
                  <p className="text-zinc-500 text-[10px]">Vitrine em destaque</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/30 border border-zinc-900">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gold-500/10 text-gold-500 shrink-0 mt-0.5">
                  <MessageSquareText className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-tight">Pedido no Zap</p>
                  <p className="text-zinc-500 text-[10px]">Links direto no item</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/30 border border-zinc-900">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gold-500/10 text-gold-500 shrink-0 mt-0.5">
                  <LinkIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-tight">Pronto para bio</p>
                  <p className="text-zinc-500 text-[10px]">Instagram e Redes</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/30 border border-zinc-900">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gold-500/10 text-gold-500 shrink-0 mt-0.5">
                  <Laptop className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-tight">Site Responsivo</p>
                  <p className="text-zinc-500 text-[10px]">Celular e Desktop</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Beautiful CSS 3D Mobile Mockup (5 cols on desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative py-8 px-4">
            
            {/* Ambient Background Sphere for Mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold-500/10 rounded-full blur-[80px]"></div>

            {/* CSS Smartphone Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-72 h-[560px] rounded-[40px] border-4 border-zinc-800 bg-zinc-950 p-2.5 shadow-2xl shadow-black ring-1 ring-zinc-700/50 hover:border-gold-500/50 transition-all duration-500"
            >
              {/* Speaker Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-800 rounded-full flex items-center justify-center z-30">
                <div className="w-12 h-1 bg-zinc-900 rounded-full mr-2"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-950"></div>
              </div>

              {/* Side Buttons Graphics */}
              <div className="absolute -left-1.5 top-24 w-1 h-12 bg-zinc-800 rounded-r"></div>
              <div className="absolute -left-1.5 top-38 w-1.5 h-16 bg-zinc-800 rounded-r"></div>
              <div className="absolute -right-1.5 top-28 w-1.5 h-14 bg-zinc-800 rounded-l"></div>

              {/* Screen Area */}
              <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-zinc-900 flex flex-col justify-between p-4 border border-zinc-800/50 select-none">
                
                {/* Mockup Header */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-col">
                    <span className="text-[11px] font-extrabold tracking-wider text-white">HYPE</span>
                    <span className="text-[7.5px] font-mono tracking-widest text-[#C5A059] uppercase -mt-1 font-semibold">Concept</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-zinc-850 border border-zinc-800 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="text-[7px] text-zinc-300 font-bold uppercase">Online</span>
                  </div>
                </div>

                {/* Mockup Showcase Center Card */}
                <div className="my-auto py-1 space-y-3.5">
                  <div className="relative rounded-2xl overflow-hidden bg-zinc-950 aspect-[4/3] group-hover:scale-105 border border-zinc-800/50">
                    <img 
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop" 
                      alt="Product Sneaker Mock" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-amber-500 text-black text-[8px] font-bold uppercase tracking-wider">
                      Mais Vendido
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-semibold font-mono">Calçados</span>
                    <h3 className="text-white text-sm font-extrabold font-serif leading-tight">Tênis Urban Red</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-gold-500 text-xs font-bold">R$ 199,90</span>
                      <span className="text-zinc-600 line-through text-[9px]">R$ 299,90</span>
                    </div>
                  </div>

                  {/* Mockup Click Buy Button */}
                  <div className="py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-extrabold text-[10px] rounded-lg tracking-wider text-center uppercase flex items-center justify-center gap-1 shadow-sm">
                    <MessageSquareText className="w-3.5 h-3.5 fill-emerald-400/20" />
                    Enviar pedido no Zap
                  </div>
                </div>

                {/* Bottom App Controls bar */}
                <div className="flex items-center justify-between border-t border-zinc-800/40 pt-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400 font-bold">VIP</div>
                    <div>
                      <p className="text-[8px] text-white font-semibold">Tamanho: Único</p>
                      <p className="text-[6.5px] text-zinc-500">Últimas unidades em estoque</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg animate-pulse">
                    <Zap className="w-2.5 h-2.5 fill-current" />
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Overlay floating micro-tag indicators */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 right-1/10 bg-zinc-900/90 border border-gold-500/40 text-white rounded-xl py-2 px-3 shadow-2xl flex items-center gap-2 z-20"
            >
              <div className="w-2 h-2 rounded-full bg-gold-500 animate-ping"></div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-gold-100">Vitrine Virtual</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-6 -left-4 bg-zinc-900/90 border border-zinc-800 text-white rounded-xl py-2.5 px-3.5 shadow-2xl flex items-center gap-2 z-20"
            >
              <span className="text-emerald-400">⚡</span>
              <span className="text-[10px] font-bold text-zinc-300">Foco em Conversão</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
