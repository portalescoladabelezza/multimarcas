import { Product, StoreConfig } from './types';

// Nome fictício da loja: Hype Concept
export const STORE_NAME = "Hype Concept";

// Número de WhatsApp da Loja (usado como variável)
export const WHATSAPP_NUMBER = "5521969060505";

// Instagram e Facebook fictícios para a vitrine
export const INSTAGRAM_URL = "https://instagram.com/hypeconcept.demo";
export const FACEBOOK_URL = "https://facebook.com/hypeconcept.demo";

// Configurações Gerais da Loja Modelo e da Top Bio Link
export const storeConfig: StoreConfig = {
  storeName: STORE_NAME,
  tagline: "Moda, estilo e ofertas em um só lugar.",
  subtitle: "Conheça nossa seleção de roupas, calçados e acessórios multimarcas. Escolha seu produto e fale direto pelo WhatsApp para comprar.",
  whatsappNumber: WHATSAPP_NUMBER,
  // Mensagem do WhatsApp por produto:
  // "Olá! Tenho interesse no produto [NOME DO PRODUTO] que vi no site da Hype Concept. Ainda está disponível?"
  whatsappMsgTemplate: "Olá! Tenho interesse no produto {productName} que vi no site da Hype Concept. Ainda está disponível?",
  instagramUrl: INSTAGRAM_URL,
  facebookUrl: FACEBOOK_URL,
  // Contato comercial do vendedor Top Bio Link
  topBioLinkNumber: "5521969060505", // Pode ser o mesmo ou outro número de suporte/vendas
  topBioLinkMsgTemplate: "Olá! Vi o modelo de site multimarcas e quero criar uma vitrine parecida para minha loja.",
  benefits: [
    {
      title: "Produtos em Destaque",
      description: "Veja os principais produtos da loja com foto, preço real e detalhes exclusivos.",
      icon: "Tag"
    },
    {
      title: "Pedido pelo WhatsApp",
      description: "Gostou de algum produto? Chame direto no WhatsApp para consultar tamanhos e disponibilidade.",
      icon: "MessageSquareText"
    },
    {
      title: "Tudo no Celular",
      description: "Uma vitrine ultra-rápida, moderna e fácil de acessar direto pela bio do seu Instagram.",
      icon: "Smartphone"
    }
  ],
  aboutText: "A Hype Concept é uma loja multimarcas criada para quem busca estilo, praticidade e produtos selecionados de alta qualidade. Nossa vitrine online facilita a visualização e escolha de peças exclusivas das melhores marcas, conectando você de forma ágil e segura diretamente ao nosso atendimento especializado pelo WhatsApp.",
  aboutHighlights: [
    {
      title: "Produtos Selecionados",
      description: "Excelente catálogo com fotos e preços objetivos dos produtos em destaque."
    },
    {
      title: "Sem Coisas Complexas",
      description: "Sem carrinhos difíceis ou cadastros chatos: compre de forma rápida."
    },
    {
      title: "Contato Direto",
      description: "Botão integrado em cada item que leva o cliente de forma ágil para o seu WhatsApp."
    },
    {
      title: "Foco no Celular",
      description: "Layout totalmente otimizado para celulares e links na bio do Instagram."
    }
  ]
};

// Cores principais documentadas (aplicadas via Tailwind):
// - Principal: Preto (#000000)
// - Destaque (Gold / Accent): Dourado elegante (Tailwind amber-400 / yellow-500 / gold-like #D4AF37)
// - Fundo: Branco clean ou gelo (#FAFAFA, #121212 para contrastes premium)
// - Escuros: Cinza escuro (#1E1E1E ou #111111)

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Tênis Urban Red",
    category: "Calçados",
    price: 199.90,
    badge: "Mais vendido",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
    description: "Design arrojado e conforto extremo em um tom vibrante de vermelho. Perfeito para compor um visual streetwear moderno."
  },
  {
    id: "prod-2",
    name: "Moletom Essential Oversized",
    category: "Roupas",
    price: 249.00,
    badge: "Novo",
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    description: "Tecido de algodão premium com corte amplo oversized. Proporciona versatilidade e toque ultra macio."
  },
  {
    id: "prod-3",
    name: "Bolsa Casual Minimal",
    category: "Acessórios",
    price: 139.90,
    badge: "Novo",
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop",
    description: "Sofisticações contemporâneas em couro ecológico. Alça ajustável e compartimentos ideais para o dia a dia."
  },
  {
    id: "prod-4",
    name: "Camiseta Premium Black",
    category: "Roupas",
    price: 89.90,
    badge: "Promoção",
    originalPrice: 129.90,
    imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
    description: "Malha de fio penteado de altíssima qualidade com toque aveludado e costura reforçada."
  },
  {
    id: "prod-5",
    name: "Jaqueta Street Style",
    category: "Roupas",
    price: 299.90,
    badge: "Destaque",
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop",
    description: "Visual marcante com acabamentos robustos e proteção contra vento. O auge do estilo urbano moderno."
  },
  {
    id: "prod-6",
    name: "Boné Classic Gold",
    category: "Acessórios",
    price: 69.90,
    badge: "Novo",
    imageUrl: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop",
    description: "Modelagem clássica americana com logo em bordado de alta definição cor ouro. Ajuste perfeito strapback."
  },
  {
    id: "prod-7",
    name: "Tênis Low Retro",
    category: "Calçados",
    price: 179.90,
    badge: "Promoção",
    originalPrice: 229.90,
    imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600&auto=format&fit=crop",
    description: "Inspirado nos grandes clássicos das quadras dos anos 80. Confeccionado em couro sintético macio resiliente."
  },
  {
    id: "prod-8",
    name: "Óculos Urban Flex",
    category: "Acessórios",
    price: 119.90,
    badge: "Mais vendido",
    imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop",
    description: "Lentes com proteção UV400 premium e armação leve de acetato. Ideal para qualquer formato de rosto."
  }
];
