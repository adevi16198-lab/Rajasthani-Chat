import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Phone, CheckCircle2, Gift, Heart, Calendar, GraduationCap, Utensils, PartyPopper } from 'lucide-react';

export default function BulkOrders() {
  const occasions = [
    {
      title: 'Birthday Parties',
      icon: Gift,
      description: 'Make your special day sweeter and tangier with a custom live pani puri counter!',
      color: 'from-pink-500/10 to-rose-500/10 text-pink-600 border-pink-500/20'
    },
    {
      title: 'Weddings & Engagements',
      icon: Heart,
      description: 'Impress your guests with authentic Rajasthani street food styled beautifully for the big day.',
      color: 'from-red-500/10 to-saffron/10 text-saffron border-saffron/20'
    },
    {
      title: 'Festivals & Family Functions',
      icon: Calendar,
      description: 'Traditional, hygienic chat preparations perfect for Pujas, Diwali, and family get-togethers.',
      color: 'from-amber-500/10 to-yellow/10 text-amber-700 border-amber-500/20'
    },
    {
      title: 'School/College Events',
      icon: GraduationCap,
      description: 'Super pocket-friendly, safe, and mouth-watering packages that students will go crazy for.',
      color: 'from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-500/20'
    },
    {
      title: 'Any Special Occasion',
      icon: PartyPopper,
      description: 'From office parties to society gatherings—customized spice levels for every guest!',
      color: 'from-purple-500/10 to-fuchsia-500/10 text-purple-600 border-purple-500/20'
    }
  ];

  const highlights = [
    { text: 'Affordable pricing designed for large groups', desc: 'No hidden fees or extra setup costs.' },
    { text: 'Freshly prepared on demand', desc: 'Made live with premium raw ingredients and pure RO mineral water.' },
    { text: 'Authentic street-style taste', desc: 'Spiced precisely according to your preference and choice.' }
  ];

  return (
    <section id="bulk-orders" className="py-20 bg-gradient-to-b from-white to-cream/20 overflow-hidden border-t border-saffron/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-saffron/10 text-saffron border border-saffron/20 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4"
          >
            <Sparkles size={12} className="fill-current animate-pulse" />
            Bulk Booking Available
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-espresso leading-tight"
          >
            🎉 Bulk Orders for Special Occasions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-saffron font-serif italic text-lg sm:text-xl mt-3 font-semibold"
          >
            Planning a celebration? We’ve got your chaat covered 😋
          </motion.p>
          <div className="w-20 h-1 bg-gradient-to-r from-saffron to-yellow rounded-full mx-auto mt-5" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Occasions (Bento Grid) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-espresso mb-2 flex items-center gap-2">
              <Utensils className="text-saffron" size={20} />
              <span>Perfect For All Kind of Celebrations</span>
            </h3>
            <p className="text-espresso-light text-sm sm:text-base font-light mb-6">
              At <strong className="text-espresso font-semibold">Rajasthani Chat</strong>, we proudly accept bulk orders for all kinds of occasions. We serve <strong className="text-saffron font-bold">fresh, hygienic, and स्वादिष्ट chaat</strong> that your guests will absolutely love ❤️
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {occasions.map((occ, idx) => {
                const Icon = occ.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-5 rounded-3xl border bg-gradient-to-br ${occ.color} shadow-sm space-y-3 flex flex-col justify-between transition-all`}
                  >
                    <div className="space-y-2">
                      <div className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl w-fit shadow-inner">
                        <Icon size={20} />
                      </div>
                      <h4 className="font-black text-espresso text-base sm:text-lg">{occ.title}</h4>
                      <p className="text-espresso-light text-xs leading-relaxed font-light">{occ.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Call To Action and Features */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Features Card list */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-saffron/10 shadow-lg space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-saffron/5 rounded-full -mr-6 -mt-6 blur-xl pointer-events-none" />
              
              <h4 className="font-black text-espresso text-lg tracking-tight border-b border-saffron/10 pb-3">
                Why Choose Us?
              </h4>

              <div className="space-y-5">
                {highlights.map((hl, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-3.5"
                  >
                    <div className="bg-green-100 text-green-600 p-1.5 rounded-full mt-0.5 shrink-0 shadow-sm">
                      <CheckCircle2 size={16} className="fill-current text-white" />
                    </div>
                    <div>
                      <span className="block text-espresso font-bold text-sm sm:text-base leading-tight">
                        👉 {hl.text}
                      </span>
                      <span className="text-espresso-light text-xs font-light mt-0.5 block leading-relaxed">
                        {hl.desc}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Calling Card CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-espresso via-espresso/95 to-espresso-light text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden text-center sm:text-left"
              id="bulk-order-call-card"
            >
              {/* Highlight Line */}
              <div className="absolute -top-3 -right-3 bg-yellow text-espresso text-[10px] font-black px-4 py-2 rounded-bl-3xl shadow-lg border border-yellow/20 flex items-center gap-1">
                <span>🌶️✨ Tadka Zaroori Hai!</span>
              </div>

              <div className="space-y-6 relative z-10 pt-2 sm:pt-0">
                <div className="space-y-2">
                  <span className="text-yellow text-xs font-extrabold uppercase tracking-widest block">📞 Book Your Order Now</span>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
                    Let’s discuss your custom catering package!
                  </h3>
                  <p className="text-white/80 font-serif italic text-sm sm:text-base mt-2">
                    “Apke function ka taste hum aur bhi special bana denge 😍”
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="tel:+919635350986"
                    className="w-full sm:w-auto bg-saffron hover:bg-saffron-hover text-white px-6 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 shadow-md transition-all group"
                  >
                    <Phone size={18} className="animate-wiggle group-hover:rotate-12 transition-transform" />
                    <span>Call +91 96353 50986</span>
                  </a>
                  <p className="text-xs text-white/60 font-light max-w-[200px] leading-tight">
                    Call anytime between 10 AM to 10 PM. Advance notice of 2-3 days preferred.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Highlight Quote strip at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center border-t border-saffron/10 pt-8"
        >
          <p className="text-espresso font-black font-serif italic text-lg sm:text-2xl tracking-wide max-w-2xl mx-auto text-saffron">
            “Har celebration mein chaat ka tadka zaroori hai 🌶️✨”
          </p>
        </motion.div>

      </div>
    </section>
  );
}
