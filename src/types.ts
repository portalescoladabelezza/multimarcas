export interface Product {
  id: string;
  name: string;
  category: 'Roupas' | 'Calçados' | 'Acessórios' | 'Promoções' | string;
  price: number;
  originalPrice?: number; // for showing promos
  badge?: 'Novo' | 'Promoção' | 'Mais vendido' | 'Destaque' | string;
  imageUrl: string;
  description?: string;
}

export interface StoreConfig {
  storeName: string;
  tagline: string;
  subtitle: string;
  whatsappNumber: string;
  whatsappMsgTemplate: string;
  instagramUrl: string;
  facebookUrl: string;
  topBioLinkNumber: string;
  topBioLinkMsgTemplate: string;
  benefits: {
    title: string;
    description: string;
    icon: string; // key of lucide icons
  }[];
  aboutText: string;
  aboutHighlights: {
    title: string;
    description: string;
  }[];
}
