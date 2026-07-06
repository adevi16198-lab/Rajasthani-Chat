export interface MenuItem {
  id: string;
  name: string;
  bengaliName?: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isBestSeller: boolean;
  isPopular?: boolean;
  customBadge?: string; // e.g. "🔥 Popular", "⭐ Bestseller", "💥 Must Try", "❤️ Customer Favorite"
  spicyLevel: 0 | 1 | 2 | 3; // 0 = not spicy, 3 = very spicy
  tags: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  category: 'food' | 'shop' | 'vibe';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessDetails {
  name: string;
  bengaliName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  zipCode: string;
  rating: number;
  ratingCount: number;
  priceRange: string;
  opensAt: string;
  services: string[];
}
