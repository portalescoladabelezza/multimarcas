import React from 'react';
import { storeConfig } from '../config';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-zinc-400 py-16 border-t border-zinc-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand/Slogan details (5 columns) */}
          <div className="md:col-span-5 space-y-4 text-left">
            <a href="#inicio" className="inline-block group">
              <span className="font-serif text-2xl font-black tracking-tighter uppercase text-white transition-colors">
                Hype <span className="text-gold-500">Concept</span>
              </span>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                <span className="text-[9px] font-mono tracking-widest text-[#C5A059] uppercase font-semibold">
                  Multimarcas
                </span>
              </div>
            </a>
            
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-sm">
              Loja multimarcas modelo — roupas, calçados e acessórios selecionados de alta qualidade. Transforme visitas em vendas pelo WhatsApp.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4.5 pt-2">
              <a 
                href={storeConfig.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-gold-500 hover:text-black hover:border-gold-500/20 text-zinc-400 border border-zinc-800 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5"
                title="Instagram"
                id="footer-social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={storeConfig.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-gold-500 hover:text-black hover:border-gold-500/20 text-zinc-400 border border-zinc-800 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5"
                title="Facebook"
                id="footer-social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links header (3 columns) */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-white text-xs font-bold font-display uppercase tracking-widest text-gold-500">Navegação</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors" id="footer-link-inicio">Início</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors" id="footer-link-produtos">Produtos</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-white transition-colors" id="footer-link-categorias">Categorias</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors" id="footer-link-sobre">Sobre Nós</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors" id="footer-link-contato">Contato</a>
              </li>
            </ul>
          </div>

          {/* Business Hours / Legal (4 columns) */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-white text-xs font-bold font-display uppercase tracking-widest text-gold-500">Atendimento</h4>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              Segunda a Sexta: 09h às 19h <br />
              Sábado: 09h às 14h <br />
              Compre direto no celular com suporte especializado. Nova coleção lançada todas as semanas.
            </p>
            <div className="text-[10px] text-zinc-600 bg-zinc-950 p-3 rounded-lg border border-zinc-900 inline-block font-mono">
              VITRINE DEMONSTRATIVA COMERCIAL
            </div>
          </div>

        </div>

        {/* Footer bottom details with Top Bio Link credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 text-xs text-zinc-600 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <p>© {currentYear} {storeConfig.storeName} Model. Todos os direitos reservados.</p>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <p className="font-medium text-zinc-500">
              Modelo criado por <a href="https://topbiolink.com.br" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:underline">Top Bio Link</a>
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            id="btn-footer-scroll-top"
            className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-gold-500/40 text-gold-500 rounded-lg hover:text-white transition-colors flex items-center justify-center shadow-lg"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
