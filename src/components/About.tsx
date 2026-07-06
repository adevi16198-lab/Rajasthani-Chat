import React from 'react';
import { ShieldCheck, Flame, Heart, Smile, Users, HeartHandshake } from 'lucide-react';
import { businessDetails } from '../data';
import papdiChaatImg from '../assets/images/classic_papri_chaat_detail_v3_1783326465926.jpg';

export default function About() {
  const highlights = [
    {
      icon: <ShieldCheck className="text-emerald-600 h-6 w-6" />,
      title: '100% Hygienic Prep',
      desc: 'We use filtered mineral water for our spicy/tangy water and prepare everything fresh daily under sanitary guidelines.',
    },
    {
      icon: <Flame className="text-saffron h-6 w-6" />,
      title: 'Authentic Spices',
      desc: 'Our secret chat masalas and sweet tamarind chutneys are prepared using family recipes brought directly from Rajasthan.',
    },
    {
      icon: <Heart className="text-rose-500 h-6 w-6" />,
      title: 'Super Affordable',
      desc: 'Enjoy premium gourmet street food starting at just ₹50 only that fits everyone’s pocket.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-cream-dark/40 border-y border-saffron/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* About Left: Images Grid / Collage */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative" id="about-images-collage">
            <div className="relative w-full aspect-square max-w-[400px] mx-auto">
              {/* Main Circular Background */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-saffron/20 animate-spin-slow pointer-events-none" />
              
              {/* Focus Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img
                  src={papdiChaatImg}
                  alt="Authentic Rajasthani Spices"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Little Floating Badges */}
              <div className="absolute -top-2 right-4 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-saffron/10 flex items-center gap-2">
                <Smile className="text-gold fill-gold/20" size={20} />
                <div className="text-left">
                  <span className="block text-xs font-bold text-espresso leading-none">100+ Happy</span>
                  <span className="text-[10px] text-espresso-light font-medium">Daily Visitors</span>
                </div>
              </div>

              <div className="absolute -bottom-2 left-4 bg-saffron text-white px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2">
                <Users size={20} />
                <div className="text-left">
                  <span className="block text-xs font-bold leading-none">Siliguri’s</span>
                  <span className="text-[10px] text-saffron-light font-medium">Local Favorite</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Right: Story & Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-center lg:text-left" id="about-story-text">
            <div>
              <span className="text-saffron font-bold text-xs uppercase tracking-widest block mb-2">Our Sweet & Tangy Story</span>
              <h2 className="text-3xl sm:text-4xl font-black text-espresso leading-tight">
                Serving Love & Spices in Siliguri Since Evening One
              </h2>
              <div className="w-16 h-1 bg-saffron rounded-full mx-auto lg:mx-0 mt-3" />
            </div>

            <p className="text-espresso/80 text-base font-light leading-relaxed">
              Every evening as the sun sets over Sevoke Road, the air around **I.T.I More** fills with the tempting aroma of roasting cumin, sizzling aloo tikkis, and crisp puris. That is where we set up **Rajasthani Chat**.
            </p>
            
            <p className="text-espresso/80 text-base font-light leading-relaxed">
              Our founder started with a simple vision: to bring the true, uncompromised street food culture of Rajasthan to Siliguri. No shortcuts, no compromise on health. We boil our water, prepare fresh curd every morning, and source our tamarind and spices carefully to match that authentic *Khara-Meetha* taste.
            </p>

            {/* Feature Cards list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left" id="about-feature-cards">
              {highlights.map((h, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-saffron/5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-2 w-fit bg-cream-dark rounded-xl mb-3">
                    {h.icon}
                  </div>
                  <h3 className="font-bold text-espresso text-sm mb-1">{h.title}</h3>
                  <p className="text-xs text-espresso-light leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick trust banner */}
            <div className="flex items-center justify-center lg:justify-start gap-4 p-4 bg-saffron-light/50 border border-saffron/10 rounded-2xl" id="about-trust-banner">
              <HeartHandshake className="text-saffron shrink-0" size={24} />
              <p className="text-xs text-espresso font-semibold text-left">
                “Bihari tastebuds, Rajasthani Tadka! We are fully committed to hygiene, using only clean water for our chaat and drinking.”
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
