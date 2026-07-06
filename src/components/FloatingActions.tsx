import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { businessDetails } from '../data';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end" id="floating-actions-container">
      {/* Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-espresso text-white p-3.5 rounded-full shadow-lg hover:bg-espresso-light transition-all transform hover:-translate-y-1 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${businessDetails.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hi! I'm visiting your website and I'd like to ask a question or place a takeaway order.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-600 text-white p-4 rounded-full shadow-xl hover:bg-emerald-700 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={20} className="fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-out text-xs font-bold whitespace-nowrap">
          Chat With Us
        </span>
      </a>

      {/* Call Button (Primary Mobile, hidden/dimmed on large desktop unless hovered) */}
      <a
        href={`tel:${businessDetails.phone}`}
        className="bg-saffron text-white p-4 rounded-full shadow-xl hover:bg-saffron-hover transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center group"
        aria-label="Call Shop"
      >
        <Phone size={20} className="fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-out text-xs font-bold whitespace-nowrap">
          Call Now
        </span>
      </a>
    </div>
  );
}
