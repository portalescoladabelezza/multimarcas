import { MessageSquareText } from 'lucide-react';
import { storeConfig } from '../config';
import { motion } from 'motion/react';

export default function WhatsAppFloatingBtn() {
  const handleWhatsAppContact = () => {
    const textMsg = "Olá! Vi a vitrine da Hype Concept e gostaria de saber mais sobre os produtos disponíveis.";
    const encoded = encodeURIComponent(textMsg);
    window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none pointer-events-auto">
      
      {/* Outer Glow Pulsing Effect */}
      <div className="absolute inset-0 rounded-full bg-emerald-500 blur-[8px] animate-pulse opacity-75"></div>

      <button
        onClick={handleWhatsAppContact}
        id="btn-whatsapp-floating"
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-neutral-950 rounded-full shadow-2xl transition-all duration-300 hover:scale-115 active:scale-95 group focus:outline-none cursor-pointer"
        title="Falar no WhatsApp"
      >
        {/* Tooltip on hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-neutral-950 text-white text-[11px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-zinc-800">
          Como comprar? Chame aqui!
        </span>

        {/* Dynamic icon inside support action */}
        <MessageSquareText className="w-6 h-6 fill-neutral-950/10 text-neutral-950 group-hover:rotate-12 transition-transform duration-300" />
      </button>

    </div>
  );
}
