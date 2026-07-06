import React from 'react';
import { motion } from 'motion/react';
import { Compass, Eye, Star, Clock, MapPin } from 'lucide-react';
import { businessDetails } from '../data';
import heroImg from '../assets/images/rajasthani_chaat_hero_1783319209516.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-cream-dark via-cream to-white">
      {/* Background Decorative Shapes */}
      <div className="absolute top-10 right-[-10%] w-[40%] h-[40%] rounded-full bg-saffron/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[35%] h-[35%] rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left z-10" id="hero-left-content">
            {/* Quick Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3" id="hero-badges">
              <span className="flex items-center gap-1 bg-saffron-light border border-saffron/20 text-saffron px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                <Star size={14} className="fill-current" />
                <span>Top Rated 4.4⭐ in Siliguri</span>
              </span>
              <span className="flex items-center gap-1 bg-amber-50 border border-gold/30 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                <Clock size={14} />
                <span>Opens Daily at 5 PM</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-espresso tracking-tight leading-tight" id="hero-title">
              Siliguri’s Best <br />
              <span className="text-saffron relative inline-block">
                Chaat Experience
                <svg className="absolute bottom-0 left-0 w-full h-3 text-gold -z-10 translate-y-1" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              🌶️
            </h1>

            {/* Bengali Sub-Headline */}
            <div className="text-lg font-bold text-espresso-light leading-relaxed Bengali-font" id="hero-bengali-tagline">
              শিলিগুড়ির সেরা রাজস্থানী চ্যাট — প্রতিটি কামড়ে আসল স্বাদ!
            </div>

            {/* English Subtext */}
            <p className="text-base sm:text-lg text-espresso/80 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed" id="hero-description">
              Craving authentic, tangy, spicy, and sweet street food? Experience the rich heritage of Rajasthani flavors crafted with filtered water and premium spices right here at <strong>I.T.I More, Siliguri</strong>.
            </p>

            {/* Quick Highlights */}
            <div className="grid grid-cols-3 gap-4 py-2 border-y border-espresso/10 max-w-md mx-auto lg:mx-0" id="hero-highlights">
              <div className="text-center lg:text-left">
                <span className="block font-display text-2xl text-saffron leading-none">100%</span>
                <span className="text-xs text-espresso-light font-medium">Hygienic (Clean Water)</span>
              </div>
              <div className="text-center lg:text-left border-x border-espresso/10 px-2">
                <span className="block font-display text-2xl text-gold leading-none">₹50</span>
                <span className="text-xs text-espresso-light font-medium">Affordable Treats</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-display text-2xl text-espresso-light leading-none">4.4⭐</span>
                <span className="text-xs text-espresso-light font-medium">Google Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2" id="hero-actions">
              <a
                href="#menu"
                className="bg-saffron hover:bg-saffron-hover text-white px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-saffron/25 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <Eye size={18} />
                <span>View Delicious Menu</span>
              </a>
              <a
                href="#contact"
                className="bg-white hover:bg-cream-dark text-espresso border-2 border-espresso/10 hover:border-saffron/40 px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-sm transition-all transform hover:-translate-y-1"
              >
                <Compass size={18} className="text-saffron" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Hero Right Visuals */}
          <div className="lg:col-span-5 relative flex justify-center items-center z-10" id="hero-right-visuals">
            {/* Main Image Container */}
            <div className="relative w-full max-w-[420px] lg:max-w-none aspect-square sm:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src={heroImg}
                alt="Siliguri Best Rajasthani Chaat"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Overlay card for active food item */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-saffron/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-saffron font-bold uppercase tracking-wider block">Today's Special</span>
                  <span className="font-display text-espresso text-base block">Classic Papri Chaat</span>
                </div>
                <div className="bg-saffron text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  ₹50 Only
                </div>
              </div>
            </div>

            {/* Floating decorative food emoji badges */}
            <div className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-lg border border-saffron/5 flex items-center gap-2 animate-bounce duration-3000 pointer-events-none">
              <span className="text-2xl">🍲</span>
              <div className="text-left">
                <span className="text-[10px] text-espresso-light font-bold block leading-none">Fresh</span>
                <span className="text-xs text-espresso font-semibold">Bhel Muri</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-saffron/5 flex items-center gap-2 animate-bounce duration-2000 pointer-events-none">
              <span className="text-2xl">🌮</span>
              <div className="text-left">
                <span className="text-[10px] text-emerald-600 font-bold block leading-none">Crispy</span>
                <span className="text-xs text-espresso font-semibold">Papri Chaat</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
