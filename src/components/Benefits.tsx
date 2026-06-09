import React from 'react';
import { Tag, MessageSquareText, Smartphone } from 'lucide-react';
import { storeConfig } from '../config';
import { motion } from 'motion/react';

// Map icons dynamically
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Tag: Tag,
  MessageSquareText: MessageSquareText,
  Smartphone: Smartphone
};

export default function Benefits() {
  return (
    <section className="py-20 bg-zinc-900 overflow-hidden relative border-t border-zinc-950">
      
      {/* Background Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest font-bold text-gold-500 bg-gold-500/10 px-3 py-1.5 rounded-full">
            Praticidade absoluta
          </span>
          <h2 className="text-white text-3xl sm:text-4xl font-serif mt-4 tracking-tight">
            Comprar ficou mais <span className="italic text-gold-500 font-medium">simples</span>
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storeConfig.benefits.map((benefit, idx) => {
            const IconComponent = iconMap[benefit.icon] || Tag;
            
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between"
                id={`benefit-card-${idx}`}
              >
                {/* Decorative corner lines */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-gold-500/20 rounded-tr-xl transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-transparent group-hover:border-gold-500/20 rounded-bl-xl transition-all duration-300"></div>

                <div className="space-y-5">
                  
                  {/* Icon wrap with gradient background on hover */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-850 border border-zinc-850 flex items-center justify-center text-gold-500 group-hover:text-black group-hover:from-gold-600 group-hover:to-gold-500 shadow-lg transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-white text-lg font-bold font-display group-hover:text-gold-500 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                </div>

                {/* Bottom line accent */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-gold-500 to-amber-300 group-hover:w-full mt-6 rounded-full transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
