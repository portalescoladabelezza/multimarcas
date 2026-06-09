import { MessageSquareText } from 'lucide-react';
import { storeConfig } from '../config';
import { motion } from 'motion/react';

export default function CTASection() {
  const handleWhatsAppContact = () => {
    const textMsg = "Olá! Vi a vitrine da Hype Concept e gostaria de saber mais sobre os produtos disponíveis.";
    const encoded = encodeURIComponent(textMsg);
    window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      
      {/* Background radial effects */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.06),transparent)]"></div>
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-14 rounded-3xl bg-zinc-900/60 border border-zinc-850 backdrop-blur-md space-y-6"
        >
          
          <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <MessageSquareText className="w-7 h-7 fill-emerald-500/10" />
          </div>

          <h2 className="text-white text-3xl sm:text-4xl font-serif tracking-tight">
            Gostou de algum <span className="italic text-gold-500 font-medium font-serif">produto</span>?
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fale agora com nosso atendimento pelo WhatsApp e consulte disponibilidade, tamanhos, cores e formas de pagamento com nossa equipe estilosa.
          </p>

          <div className="pt-4">
            <button
              onClick={handleWhatsAppContact}
              id="btn-cta-section-whatsapp"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-extrabold uppercase text-xs tracking-wider rounded-xl shadow-xl shadow-emerald-500/5 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <MessageSquareText className="w-5 h-5" />
              Chamar no WhatsApp
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-zinc-500 pt-4 border-t border-zinc-800/40">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Resposta Veloz
            </span>
            <span className="text-zinc-700 font-bold">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Envio p/ Todo Brasil
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
