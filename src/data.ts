import { MenuItem, Review, GalleryItem, FAQItem, BusinessDetails } from './types';

// Import our beautiful generated high-quality images
import heroImg from './assets/images/rajasthani_chaat_hero_1783319209516.jpg';
import paniPuriImg from './assets/images/pani_puri_close_up_1783319223316.jpg';
import alooTikkiImg from './assets/images/aloo_tikki_chaat_1783319236236.jpg';
import papdiChaatImg from './assets/images/classic_papri_chaat_detail_v3_1783326465926.jpg';
import bhelMuriImg from './assets/images/bhel_muri_chaat_1783323207125.jpg';
import batataPuriImg from './assets/images/batata_puri_chaat_1783323221073.jpg';
import alooChaatImg from './assets/images/aloo_chaat_crispy_1783323236511.jpg';

export const businessDetails: BusinessDetails = {
  name: 'Rajasthani Chat',
  bengaliName: 'রাজস্থানী চ্যাট',
  tagline: 'Taste jo dil mein bas jaaye 😋',
  phone: '+91 96353 50986',
  whatsapp: '+919635350986',
  address: 'I.T.I More, Sevoke Road, Siliguri',
  landmark: 'Opposite I.T.I Main Gate (Fast Food Cart)',
  city: 'Siliguri',
  state: 'West Bengal',
  zipCode: '743001',
  rating: 4.4,
  ratingCount: 142,
  priceRange: '₹20–₹100',
  opensAt: '5:00 PM',
  services: ['Roadside Standing', 'Takeaway']
};

export const menuItems: MenuItem[] = [
  {
    id: 'bhel-muri-1',
    name: 'Special Bhel Muri',
    bengaliName: 'স্পেশাল ভেলমুড়ি',
    description: 'Crunchy, spicy, and tangy mix of puffed rice with chutneys – perfect evening snack!',
    price: 30,
    category: 'Chaat Items',
    image: bhelMuriImg,
    isBestSeller: false,
    isPopular: true,
    customBadge: '🔥 Popular',
    spicyLevel: 2,
    tags: ['Crunchy', 'Spicy', 'Light', 'Evening Magic']
  },
  {
    id: 'papri-chaat-1',
    name: 'Classic Papri Chaat',
    bengaliName: 'ক্লাসিক পাপড়ি চ্যাট',
    description: 'Crispy papri topped with curd, chutneys & मसाला – sweet, spicy & irresistible!',
    price: 45,
    category: 'Papdi Chaat',
    image: papdiChaatImg,
    isBestSeller: true,
    customBadge: '⭐ Bestseller',
    spicyLevel: 1,
    tags: ['Crispy Papri', 'Sweet Curd', 'Meethi Chutney', 'Must Have']
  },
  {
    id: 'batata-puri-1',
    name: 'Batata Puri',
    bengaliName: 'টক-মিষ্টি বাটাটা পুরী',
    description: 'Soft puris filled with spicy potato mix and tangy water – burst of flavors!',
    price: 40,
    category: 'Pani Puri',
    image: batataPuriImg,
    isBestSeller: false,
    customBadge: '💥 Must Try',
    spicyLevel: 2,
    tags: ['Spicy Masala', 'Tangy Water', 'Burst of Flavor', 'Golgappa Style']
  },
  {
    id: 'aloo-chaat-1',
    name: 'Crispy Aloo Chaat',
    bengaliName: 'চটপটা আলু চ্যাট',
    description: 'Hot and crispy potatoes tossed in spices and chutneys – desi street magic!',
    price: 35,
    category: 'Chaat Items',
    image: alooChaatImg,
    isBestSeller: false,
    isPopular: true,
    customBadge: '❤️ Customer Favorite',
    spicyLevel: 2,
    tags: ['Sizzling Potatoes', 'Garlic Tadka', 'Tangy Lime', 'Full Chatpata']
  }
];

export const reviews: Review[] = [
  {
    id: 'rev-1',
    name: 'Joydeep Sen',
    rating: 5,
    comment: 'The best chaat in Siliguri! Especially the Raj Kachori and the Shahi Aloo Tikki are out of this world. Clean, tasty, and highly recommended. opens exact 5pm.',
    date: '3 days ago',
    avatar: 'JS'
  },
  {
    id: 'rev-2',
    name: 'Priyanka Sharma',
    rating: 5,
    comment: 'Extremely authentic Rajasthani taste! I spent 4 years in Jaipur and I never thought I would find the exact same papdi chaat here in Siliguri. Affordable and hygienic!',
    date: '1 week ago',
    avatar: 'PS'
  },
  {
    id: 'rev-3',
    name: 'Sourav Das',
    rating: 4,
    comment: 'Very tasty and affordable! Service is fast even though there is always a huge crowd at ITI More in the evening. Pani puri is super crispy!',
    date: '2 weeks ago',
    avatar: 'SD'
  },
  {
    id: 'rev-4',
    name: 'Neha Singhal',
    rating: 5,
    comment: 'Loved the Royal Dahi Puri and Kesar Lassi! True taste of Rajasthani spices, perfectly balanced. They maintain clean water for puchka.',
    date: '1 month ago',
    avatar: 'NS'
  },
  {
    id: 'rev-5',
    name: 'Abhishek Gupta',
    rating: 5,
    comment: 'Hands down the best Papri Chaat and Dahi Puchka in Siliguri. Their hygiene is top-notch, using only clean water. Absolute value for money!',
    date: '1 month ago',
    avatar: 'AG'
  },
  {
    id: 'rev-6',
    name: 'Subrata Paul',
    rating: 5,
    comment: 'Super crisp and authentic North Indian taste at Sevoke Road! Chutneys are delicious, especially the sweet tamarind and spicy mint. Highly addictive!',
    date: '2 months ago',
    avatar: 'SP'
  },
  {
    id: 'rev-7',
    name: 'Deepika Rai',
    rating: 4,
    comment: 'Located conveniently at ITI More. It gets incredibly crowded in the evenings which proves how much Siliguri loves their chaat. Clean and fast service!',
    date: '2 months ago',
    avatar: 'DR'
  },
  {
    id: 'rev-8',
    name: 'Rohan Sharma',
    rating: 5,
    comment: 'Outstanding cleanliness standards for a street-side food cart. The Raj Kachori is perfectly assembled and tastes incredible. Only clean water used.',
    date: '3 months ago',
    avatar: 'RS'
  },
  {
    id: 'rev-9',
    name: 'Payal Agarwal',
    rating: 5,
    comment: 'So delicious and mouthwatering! Very reasonable pricing (₹40-50) and top-tier taste. Perfectly balanced spices. My go-to evening snack spot!',
    date: '3 months ago',
    avatar: 'PA'
  },
  {
    id: 'rev-10',
    name: 'Amit Sen',
    rating: 4,
    comment: 'The crispiness of their papdi and puchka is unmatched. Great mix of sweet, tangy, and spicy flavors. Excellent service every single time.',
    date: '4 months ago',
    avatar: 'AS'
  },
  {
    id: 'rev-11',
    name: 'Nandini Dey',
    rating: 5,
    comment: 'A gem of a place on Sevoke Road for chaat lovers. Extremely hygienic preparation with clean water. The sweet dahi puchka is a masterpiece!',
    date: '4 months ago',
    avatar: 'ND'
  },
  {
    id: 'rev-12',
    name: 'Suresh Verma',
    rating: 5,
    comment: 'Authentic Rajasthani taste in North Bengal! Tastes exactly like Jaipur street food. Highly recommended for family evening outings.',
    date: '5 months ago',
    avatar: 'SV'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    image: heroImg,
    caption: 'Our Signature Dahi Papdi Chaat - Loaded with herbs, yogurts & chutneys',
    category: 'food'
  },
  {
    id: 'gal-2',
    image: paniPuriImg,
    caption: 'Crisp & crunchy Golgappa (Pani Puri) with cold herbal mint water',
    category: 'food'
  },
  {
    id: 'gal-3',
    image: alooTikkiImg,
    caption: 'Sizzling hot Aloo Tikki made fresh on our giant tawa every evening',
    category: 'vibe'
  },
  {
    id: 'gal-4',
    image: papdiChaatImg,
    caption: 'Art of spices: traditional assembly of authentic Rajasthani Chat',
    category: 'food'
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where exactly is Rajasthani Chat located in Siliguri?',
    answer: 'We are located at I.T.I More, Sevoke Road, Siliguri, West Bengal (734001). We are right opposite the ITI main entrance, making us easy to spot in the evening.'
  },
  {
    id: 'faq-2',
    question: 'What are your operating hours?',
    answer: 'We are open every day from 5:00 PM to 10:00 PM. All items are made fresh starting exactly at 5:00 PM!'
  },
  {
    id: 'faq-3',
    question: 'Do you offer home delivery or online ordering?',
    answer: 'Currently, we focus on Dine-in and Takeaway to ensure you get the absolute crispiest and freshest experience. However, you can call us in advance at +91 96353 50986 to place your takeaway order so it is ready when you arrive!'
  },
  {
    id: 'faq-4',
    question: 'Is the preparation hygienic?',
    answer: 'Hygene is our top priority! We use filtered mineral water for our Pani Puri, our staff wears gloves, and we prepare all our ingredients fresh daily.'
  }
];
