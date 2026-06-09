import { useState } from 'react';
import { products, storeConfig } from '../config';
import { Product } from '../types';
import { MessageSquareText, Eye, Sparkles, X, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);

  const categories = ['Todos', 'Roupas', 'Calçados', 'Acessórios', 'Promoções'];

  // Handle item filtration
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === 'Todos') return true;
    if (selectedCategory === 'Promoções') {
      return product.badge === 'Promoção' || (product.originalPrice && product.originalPrice > product.price);
    }
    return product.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  // Direct WhatsApp purchase click handler
  const handleWhatsAppRedirect = (productName: string) => {
    const textMsg = storeConfig.whatsappMsgTemplate.replace('{productName}', productName);
    const encoded = encodeURIComponent(textMsg);
    window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="produtos" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      
      {/* Abstract Design Lines */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold-900/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-zinc-800/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold text-gold-500 bg-gold-500/10 px-3 py-1.5 rounded-full" id="categorias">
            Coleções Ativas
          </span>
          <h2 className="text-white text-3xl sm:text-4xl font-serif mt-4 tracking-tight">
            Nossa Vitrine <span className="italic text-gold-500 font-medium">Digital</span>
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            Confira alguns itens selecionados disponíveis em nossa loja. Escolha sua peça e chame nossa equipe para fechar seu pedido.
          </p>
        </motion.div>

        {/* Filter Navigation (Categories Section) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                id={`btn-category-${category.toLowerCase()}`}
                className={`px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-95 ${
                  isActive
                    ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/10'
                    : 'bg-zinc-950 border border-white/10 text-gray-400 hover:text-white hover:border-gold-500'
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Grid of Products (Section 5) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              // Format pricing in BRL
              const formattedPrice = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
              const formattedOriginalPrice = product.originalPrice 
                ? product.originalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) 
                : null;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="group bg-zinc-900/60 rounded-2xl border border-zinc-900 overflow-hidden hover:border-gold-500/20 hover:bg-zinc-900 transition-all duration-350 flex flex-col justify-between shadow-lg"
                  id={`product-card-${product.id}`}
                >
                  
                  {/* Photo area with badges */}
                  <div className="relative aspect-[4/5] bg-zinc-950 overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient shadow inside photo footer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>

                    {/* Hover Preview Overlay */}
                    <button
                      onClick={() => setActiveProductModal(product)}
                      className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer"
                      title="Ver detalhes do produto"
                      id={`btn-view-overlay-${product.id}`}
                    >
                      <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-black/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-xl border border-gold-500/20 shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                        <Eye className="w-4 h-4 text-gold-500" />
                        Visualizar
                      </span>
                    </button>
                    
                    {/* Badge top-left */}
                    {product.badge && (
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider shadow-md ${
                        product.badge === 'Novo' 
                          ? 'bg-blue-600 text-white' 
                          : product.badge === 'Promoção' 
                          ? 'bg-red-600 text-white' 
                          : product.badge === 'Mais vendido'
                          ? 'bg-amber-500 text-black'
                          : 'bg-gold-500 text-black'
                      }`}>
                        {product.badge}
                      </div>
                    )}

                    {/* Category overlay label */}
                    <div className="absolute bottom-3 left-4 text-zinc-400 text-[10px] font-mono uppercase tracking-wider">
                      {product.category}
                    </div>
                  </div>

                  {/* Pricing and Action Footer */}
                  <div className="p-5 space-y-4 flex-grow flex flex-col justify-between">
                    
                    <div className="space-y-1">
                      <h3 className="text-white font-bold font-serif text-base tracking-tight group-hover:text-gold-500 transition-colors">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-gold-500 text-base font-serif font-bold">
                          {formattedPrice}
                        </span>
                        {formattedOriginalPrice && (
                          <span className="text-zinc-500 text-xs line-through">
                            {formattedOriginalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-zinc-800/40">
                      {/* Direct Buy button */}
                      <button
                        onClick={() => handleWhatsAppRedirect(product.name)}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-extrabold uppercase tracking-widest rounded-xl shadow-lg shadow-emerald-500/10 transition-all transform active:scale-[0.98] whitespace-nowrap"
                        id={`btn-product-buy-${product.id}`}
                      >
                        <MessageSquareText className="w-4 h-4 shrink-0" />
                        Comprar pelo WhatsApp
                      </button>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state conditional */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-500 text-sm">Nenhum produto encontrado nesta categoria no momento.</p>
          </div>
        )}

      </div>

      {/* Product Details Sheet (Modal) */}
      <AnimatePresence>
        {activeProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProductModal(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Body container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl z-10"
              id="product-modal-dialog"
            >
              
              {/* Close Button top-right */}
              <button
                onClick={() => setActiveProductModal(null)}
                className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white bg-black/60 backdrop-blur-md rounded-full border border-white/5 transition-colors cursor-pointer"
                id="btn-close-modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Product Visual Photo */}
              <div className="relative aspect-[16/10] bg-zinc-950">
                <img
                  src={activeProductModal.imageUrl}
                  alt={activeProductModal.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual shadow overlay inside header */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-black/30"></div>

                {/* Left side dynamic tag */}
                {activeProductModal.badge && (
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-gold-500 text-black text-[9px] font-bold uppercase rounded-lg shadow-md">
                    {activeProductModal.badge}
                  </div>
                )}
              </div>

              {/* Textual Details and Call actions */}
              <div className="p-6 space-y-5">
                
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase font-bold">
                    {activeProductModal.category}
                  </span>
                  <h3 className="text-white text-xl font-bold font-serif leading-tight">
                    {activeProductModal.name}
                  </h3>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[#C5A059] text-lg font-bold font-serif">
                      {activeProductModal.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                    {activeProductModal.originalPrice && (
                      <span className="text-zinc-500 text-xs line-through">
                        {activeProductModal.originalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subtext description filled inside config */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {activeProductModal.description || "Este item premium faz parte do nosso catálogo selecionado. Fale com nosso atendimento no WhatsApp para consultar outras cores, grades de tamanhos disponíveis e prazos de entrega."}
                </p>

                {/* Key attributes row */}
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850 grid grid-cols-2 gap-3 text-[11px]">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                    <div>
                      <span className="font-bold text-zinc-300">Grade:</span> P ao GG / 36 ao 44
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                    <div>
                      <span className="font-bold text-zinc-300">Envio:</span> Pronta Entrega
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                    <div>
                      <span className="font-bold text-zinc-300">Pagamento:</span> Pix, Crédito, Débito
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                    <div>
                      <span className="font-bold text-zinc-300">Atendimento:</span> Consultor Humano
                    </div>
                  </div>
                </div>

                {/* Primary Buy Action */}
                <button
                  onClick={() => {
                    handleWhatsAppRedirect(activeProductModal.name);
                    setActiveProductModal(null);
                  }}
                  id="btn-modal-checkout-whatsapp"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded-xl font-extrabold uppercase text-xs tracking-wider shadow-lg shadow-emerald-500/10 active:scale-[0.98] transition-all"
                >
                  <MessageSquareText className="w-4 h-4" />
                  Iniciar Pedido no WhatsApp
                </button>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
