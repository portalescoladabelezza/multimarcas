import { Sparkles, MessageSquareText, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { storeConfig } from '../config';
import { motion } from 'motion/react';

export default function TopBioLinkPromo() {
  const handleTopBioLinkContact = () => {
    // "Olá! Vi o modelo de site multimarcas e quero criar uma vitrine parecida para minha loja."
    const textMsg = storeConfig.topBioLinkMsgTemplate;
    const encoded = encodeURIComponent(textMsg);
    // Open WhatsApp of Top Bio Link
    window.open(`https://wa.me/${storeConfig.topBioLinkNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section className="py-24 bg-zinc-900 border-t border-zinc-950 overflow-hidden relative">
      
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[130px] z-0"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner container with golden outline and premium look */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-zinc-950 border border-gold-500/30 p-8 sm:p-14 overflow-hidden shadow-2xl"
        >
          
          {/* Absolute corner decorative ribbon */}
          <div className="absolute top-0 right-0 overflow-hidden w-40 h-40">
            <div className="absolute transform rotate-45 bg-gradient-to-r from-gold-600 to-gold-500 text-neutral-950 text-[10px] font-bold uppercase tracking-wider text-center py-2.5 w-60 -right-16 top-8 shadow-md">
              Oportunidade Única
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Promo text (7 columns) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-500 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Demonstração Comercial Top Bio Link</span>
              </div>

              <h2 className="text-white text-3xl sm:text-4xl font-serif leading-tight tracking-tight">
                Gostou deste <span className="italic text-gold-500 font-medium">modelo</span> <br />
                para a sua loja?
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Este site é um modelo profissional criado pela <strong>Top Bio Link</strong> para lojas multimarcas, vendedores de roupas, acessórios, calçados, atacado e varejo.
              </p>

              <p className="text-zinc-400 text-xs sm:text-sm">
                Aumente suas vendas de forma extraordinária! Você também pode ter uma vitrine premium moderna como esta, totalmente otimizada para celular, com produtos organizados, preços claros e botão direto para WhatsApp.
              </p>

              {/* Check highlights list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-zinc-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Sem taxas de comissão</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Suporte rápido e humanizado</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Integração de Pix & Catálogo</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Configurado em 24 horas</span>
                </div>
              </div>

            </div>

            {/* Price Badge and Direct Purchase CTA (5 columns) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-zinc-900/60 p-8 rounded-2xl border border-zinc-850/80 relative text-center">
              
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Investimento Recomendado</p>
              
              <div className="my-5">
                <p className="text-zinc-400 text-xs font-semibold">Apenas</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-zinc-500 text-lg font-bold">12x de</span>
                  <span className="text-white text-5xl font-black font-serif tracking-tight">R$ 30</span>
                </div>
                <p className="text-gold-500 text-xs mt-1 font-bold">ou R$ 297,00 à vista</p>
              </div>

              <button
                onClick={handleTopBioLinkContact}
                id="btn-buy-topbiolink-service"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-100 text-neutral-950 font-extrabold uppercase text-xs tracking-wider rounded-xl shadow-lg shadow-gold-500/5 duration-300 transform hover:-translate-y-0.5"
              >
                Quero um site como este
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-zinc-500 mt-4 leading-normal">
                Clique acima para consultar mais modelos ou fechar seu projeto com a nossa equipe comercial no WhatsApp.
              </p>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
