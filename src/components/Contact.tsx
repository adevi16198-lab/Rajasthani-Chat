import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, ArrowRight, ChevronDown, HelpCircle, Navigation } from 'lucide-react';
import { businessDetails, faqItems } from '../data';

export default function Contact() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // Google Map embed URL targeting I.T.I More, Sevoke Road, Siliguri
  const mapEmbedUrl = "https://maps.google.com/maps?q=I.T.I%20More,%20Sevoke%20Road,%20Siliguri,%20West%20Bengal%20734001&t=&z=16&ie=UTF8&iwloc=&output=embed";
  
  // Directions link
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessDetails.address + ', ' + businessDetails.city)}`;

  return (
    <section id="contact" className="py-20 bg-cream-dark/15 border-t border-saffron/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-saffron font-bold text-xs uppercase tracking-widest block mb-2">Find Us Tonight</span>
          <h2 className="text-3xl sm:text-4xl font-black text-espresso leading-tight">
            Location & Contact Details
          </h2>
          <div className="w-16 h-1 bg-saffron rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16" id="contact-details-grid">
          
          {/* Contact Cards Panel */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between" id="contact-left-panel">
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-saffron/10 shadow-sm space-y-6">
              <h3 className="font-bold text-espresso text-lg border-b border-saffron/10 pb-3 flex items-center gap-2">
                <Clock size={18} className="text-saffron" />
                <span>Shop Status & Hours</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="text-saffron shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="block text-xs font-bold text-espresso">Opening Time</span>
                    <span className="text-xs text-espresso-light font-light">Opens at 5:00 PM Daily</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-saffron shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="block text-xs font-bold text-espresso">Closing Time</span>
                    <span className="text-xs text-espresso-light font-light">Closes around 10:00 PM (or until stocks last!)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-saffron/10 shadow-sm space-y-6 flex-1">
              <h3 className="font-bold text-espresso text-lg border-b border-saffron/10 pb-3 flex items-center gap-2">
                <MapPin size={18} className="text-saffron" />
                <span>Our Address</span>
              </h3>

              <div className="space-y-4">
                <p className="text-xs text-espresso/80 leading-relaxed font-light">
                  <strong>{businessDetails.address}</strong><br />
                  {businessDetails.landmark}<br />
                  {businessDetails.city}, {businessDetails.state} - {businessDetails.zipCode}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {/* Call Button */}
                  <a
                    href={`tel:${businessDetails.phone}`}
                    className="flex-1 bg-saffron hover:bg-saffron-hover text-white px-4 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Phone size={14} />
                    <span>Call +91 96353 50986</span>
                  </a>

                  {/* Directions Button */}
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-espresso hover:bg-espresso-light text-white px-4 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Navigation size={14} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Map Embed Panel */}
          <div className="lg:col-span-7" id="contact-map-panel">
            <div className="w-full h-full min-h-[350px] lg:min-h-[450px] rounded-3xl overflow-hidden border-4 border-white shadow-md relative group">
              <iframe
                title="Rajasthani Chat Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              {/* Overlaid quick guide card */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg max-w-xs border border-saffron/10 pointer-events-none group-hover:opacity-30 transition-opacity">
                <span className="text-[10px] text-saffron font-bold uppercase tracking-wider block">Landmark Guide</span>
                <p className="text-xs text-espresso mt-1 font-medium">
                  Located directly opposite the **I.T.I Main Gate** on Sevoke Road, Siliguri.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* FAQs Accordion Block */}
        <div className="max-w-4xl mx-auto pt-12 border-t border-saffron/10" id="contact-faqs">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-black text-espresso">Frequently Asked Questions</h3>
            <p className="text-xs text-espresso-light mt-1">Have queries? Here are quick answers to our customer's frequent questions.</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-saffron/5 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-cream/10 transition-colors focus:outline-none"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <HelpCircle className="text-saffron shrink-0" size={18} />
                      <span className="font-bold text-espresso text-xs sm:text-sm leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-espresso-light shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-espresso/70 font-light leading-relaxed border-t border-saffron/5 bg-cream/10">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
