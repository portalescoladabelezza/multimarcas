import { CheckCircle2, Award, Sparkles, MessageCircleCode, CalendarDays } from 'lucide-react';
import { storeConfig } from '../config';
import { motion } from 'motion/react';

const icons = [
  Award,
  MessageCircleCode,
  CheckCircle2,
  CalendarDays
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-zinc-900 border-t border-zinc-950 overflow-hidden relative">
      
      {/* Background soft lighting */}
      <div className="absolute top-1/4 right-1/10 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-1/10 w-80 h-80 bg-zinc-950/80 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Image Collage / Visual element representing fashion catalog (5 columns) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Elegant luxury framing */}
            <div className="absolute -inset-4 border border-gold-500/10 rounded-2xl transform rotate-3"></div>
            
            {/* Brand main stylized picture showing a rack of premium clothes or high-end aesthetic */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-950 aspect-[4/5] max-w-sm w-full border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop"
                alt="Hype Concept Premium Fashion Collection"
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle gold overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              
              {/* Bottom stylized overlay tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-950/90 backdrop-blur-md rounded-xl border border-zinc-800 flex items-center justify-between">
                <div>
                  <h4 className="text-white text-xs font-bold font-display uppercase tracking-wider">Hype Concept</h4>
                  <p className="text-[10px] text-zinc-500 font-mono">Premium Multi-Brand Store</p>
                </div>
                <div className="text-gold-500 font-bold text-xs uppercase tracking-widest font-mono">
                  ORIGINAL
                </div>
              </div>
            </div>

          </div>

          {/* Right Block: Content area (7 columns) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-gold-500 bg-gold-500/10 px-3 py-1.5 rounded-full inline-block">
                Quem somos
              </span>
              <h2 className="text-white text-3xl sm:text-4xl font-serif tracking-tight">
                Sobre a <span className="italic text-gold-500 font-medium">Hype Concept</span>
              </h2>
              <div className="w-16 h-1 bg-gold-500 rounded-full"></div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
              {storeConfig.aboutText}
            </p>

            {/* Grid of differences (4 items) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {storeConfig.aboutHighlights.map((hl, idx) => {
                const IconComponent = icons[idx % icons.length];
                return (
                  <motion.div
                    key={hl.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-zinc-950/50 border border-zinc-850/40 hover:border-gold-500/15 transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold-500/10 text-gold-500 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white text-xs sm:text-sm font-bold font-display">
                        {hl.title}
                      </h4>
                      <p className="text-zinc-400 text-[11.5px] mt-1 leading-normal">
                        {hl.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
