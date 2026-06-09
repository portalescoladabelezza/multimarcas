import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { motion } from 'motion/react';

interface Testimonial {
  name: string;
  role: string;
  product: string;
  comment: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Clara Souza",
    role: "São Paulo, SP",
    product: "Bolsa Casual Minimal",
    comment: "Comprei a Bolsa Casual Minimal e me surpreendeu demais! O acabamento é impecável, com costura forte e alça regulável super confortável para o dia a dia. O atendimento pelo WhatsApp foi extremamente ágil e carinhoso.",
    rating: 5
  },
  {
    name: "Matheus Becker",
    role: "Porto Alegre, RS",
    product: "Óculos Urban Flex & Boné Classic Gold",
    comment: "Comprei o óculos e o boné clássico. O óculos é extremamente leve com lentes ótimas para dirigir, e o boné tem um bordado dourado luxuoso de altíssima definição. Praticidade nota 10 para comprar direto no atendimento.",
    rating: 5
  },
  {
    name: "Juliana Ribeiro",
    role: "Rio de Janeiro, RJ",
    product: "Óculos Urban Flex",
    comment: "Melhor experiência de compra de acessórios que já tive! Encontrei o link no Instagram, escolhi meu óculos e em minutos já tinha fechado no WhatsApp. O produto chegou lindo, muito bem embalado e idêntico às fotos.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-zinc-900 overflow-hidden relative border-t border-zinc-950" id="depoimentos">
      
      {/* Background Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold text-gold-500 bg-gold-500/10 px-3 py-1.5 rounded-full">
            Opinião de quem usa
          </span>
          <h2 className="text-white text-3xl sm:text-4xl font-serif mt-4 tracking-tight">
            Estilo aprovado por <span className="italic text-gold-500 font-medium font-sans">nossos clientes</span>
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between"
              id={`testimonial-card-${idx}`}
            >
              {/* Decorative design aesthetics */}
              <div className="absolute top-4 right-4 text-zinc-800 group-hover:text-gold-500/10 transition-colors">
                <MessageSquareQuote className="w-8 h-8" />
              </div>

              <div className="space-y-4">
                
                {/* Gold Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-zinc-300 text-sm leading-relaxed italic pr-4">
                  "{item.comment}"
                </p>

              </div>

              {/* Client Info Info */}
              <div className="mt-8 pt-4 border-t border-zinc-900 flex flex-col gap-2">
                <div>
                  <h4 className="text-white text-sm font-bold font-sans tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-zinc-500 text-xs">
                    {item.role}
                  </p>
                </div>
                
                {/* Specific Tag of what accessory was purchased */}
                <div className="mt-1">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-gold-500 bg-gold-500/5 px-2.5 py-1 rounded-md border border-gold-500/10">
                    🛍️ Compra: {item.product}
                  </span>
                </div>
              </div>

              {/* Bottom decorative aesthetic lines */}
              <div className="w-0 h-0.5 bg-gradient-to-r from-gold-500 to-amber-300 group-hover:w-full mt-4 rounded-full transition-all duration-500"></div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
