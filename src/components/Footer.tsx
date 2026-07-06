import React from 'react';
import { Phone, MessageSquare, MapPin, Star, Heart, Flame, Clock } from 'lucide-react';
import { businessDetails } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-cream-dark/90 pt-16 pb-8 border-t border-saffron/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5" id="footer-top-columns">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-display text-2xl text-saffron tracking-wide leading-none block">
                {businessDetails.name}
              </span>
              <span className="text-xs font-semibold tracking-wider text-gold leading-normal Bengali-font">
                {businessDetails.bengaliName}
              </span>
            </div>
            
            <p className="text-xs font-light text-cream-dark/70 leading-relaxed max-w-sm">
              We bring the royal, authentic, and mouth-watering street food culture of Rajasthan right to the heart of Siliguri. Prepared fresh daily using 100% RO mineral water.
            </p>

            <div className="flex gap-2.5 items-center">
              <span className="text-xs bg-saffron/10 text-saffron px-2 py-1 rounded font-bold border border-saffron/20 flex items-center gap-1">
                <Star size={10} className="fill-current text-gold" />
                <span>4.4⭐ Rating</span>
              </span>
              <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded font-bold border border-gold/25 flex items-center gap-1">
                <Flame size={10} className="fill-current text-saffron animate-pulse" />
                <span>Mineral Water</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-saffron transition-colors font-light">Home / Top</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-saffron transition-colors font-light">Food Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-saffron transition-colors font-light">Our Story</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-saffron transition-colors font-light">Reviews</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-saffron transition-colors font-light">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-saffron transition-colors font-light">Find Location</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Our Spot</h4>
            <ul className="space-y-3.5 text-xs text-cream-dark/70 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-saffron shrink-0" />
                <span>
                  <strong>I.T.I More, Sevoke Road</strong>,<br />
                  Opposite ITI Main Entrance, Siliguri, West Bengal 734001
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-saffron shrink-0" />
                <a href={`tel:${businessDetails.phone}`} className="hover:text-saffron transition-colors">
                  {businessDetails.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare size={14} className="text-saffron shrink-0" />
                <a
                  href={`https://wa.me/${businessDetails.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-saffron transition-colors"
                >
                  WhatsApp Order (Takeaway)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Timings overview */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Service Timings</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg border border-white/5">
                <span className="text-cream-dark/70 font-light">Every Day</span>
                <span className="font-bold text-saffron flex items-center gap-1">
                  <Clock size={12} />
                  5:00 PM – 10:00 PM
                </span>
              </div>
              <p className="text-[10px] text-cream-dark/50 leading-relaxed font-light">
                * Note: All ingredients are made fresh daily, so some high-demand items like Raj Kachori or Special Pani Puri might sell out early in the evening!
              </p>
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-dark/50" id="footer-bottom">
          <p className="text-center sm:text-left font-light">
            &copy; {year} <strong>{businessDetails.name}</strong>. All rights reserved.
          </p>

          <p className="flex items-center gap-1 font-light text-center sm:text-right">
            <span>Made with</span>
            <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span>for the food lovers of Siliguri</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
