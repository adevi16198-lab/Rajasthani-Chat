import React from 'react';
import { motion } from 'motion/react';
import { Quote, Award, Sparkles } from 'lucide-react';

export default function MeetTheOwner() {
  return (
    <section id="meet-the-owner" className="py-20 bg-gradient-to-b from-cream to-cream-dark/30 border-t border-saffron/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Badges */}
        <div className="text-center space-y-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <span className="bg-saffron/10 text-saffron border border-saffron/20 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Sparkles size={12} className="fill-current" />
              Meet the Owner
            </span>
            <span className="bg-yellow/20 text-espresso border border-yellow/30 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Award size={12} />
              10+ Years Experience
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-espresso leading-tight"
          >
            Vinod Kumar Sha
            <span className="text-saffron font-medium font-serif block text-2xl sm:text-3xl mt-2">
              The Soul of Our Flavors
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-saffron via-yellow to-saffron rounded-full mx-auto"
          />
        </div>

        {/* Narrative & Quote Card */}
        <div className="space-y-10" id="owner-story-content">
          
          {/* Paragraphs with highly readable storytelling layout */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 text-espresso/90 text-base sm:text-lg leading-relaxed font-normal text-left sm:text-justify bg-white/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-saffron/5 shadow-sm"
            id="owner-paragraphs"
          >
            <p>
              Born in Rajasthan, <strong className="text-espresso font-semibold">Vinod Kumar Sha</strong> carried the rich culinary traditions and authentic local spices of his homeland deep in his heart. After marriage, he took a brave step and decided to move to Siliguri — with a simple dream of securing a better lifestyle, premium education, and a bright future for his child.
            </p>
            <p>
              Starting with next to nothing, he set up a humble street food stall at <strong className="text-saffron font-bold">I.T.I More</strong>. With extremely limited resources but boundless determination, his core goal remained pure and simple — to serve <strong className="text-espresso font-semibold">tasty, hygienic, and affordable street delicacies that put a radiant smile on every customer’s face</strong>.
            </p>
            <p>
              Over the past <strong className="text-saffron font-bold">10+ years</strong>, Vinod Ji has masterfully perfected the delicate craft of chaat-making in Siliguri. His magic formula lies in finding the ultimate harmony between pure ground spices, tang-packed homemade chutneys, and plenty of love — giving his plates a distinct, unforgettable home-cooked flavor.
            </p>
            <p>
              His path was paved with struggles, long exhausting hours, and daily challenges. Yet, his sheer hard work (<em>मेहनत</em>) and pure passion for gastronomy turned his modest cart into one of Siliguri's most loved local evening hangouts.
            </p>
            <div className="border-l-4 border-saffron pl-4 italic text-espresso-light font-serif text-lg bg-saffron/5 py-3 rounded-r-2xl pr-4">
              Today, Rajasthani Chat is celebrated across ITI More for its clean, standardized service, incredibly friendly prices, and a rich, bold taste that wins the hearts of families and food enthusiasts alike.
            </div>
          </motion.div>

          {/* Vinod Ji's Message Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-gradient-to-br from-saffron/15 to-yellow/10 border border-saffron/20 rounded-3xl p-6 sm:p-10 shadow-lg text-center"
            id="owner-quote-card"
          >
            {/* Quote Icon watermark */}
            <div className="absolute top-6 right-6 text-saffron/10 pointer-events-none">
              <Quote size={80} className="fill-current" />
            </div>
            <div className="absolute bottom-6 left-6 text-saffron/10 pointer-events-none">
              <Quote size={80} className="fill-current rotate-180" />
            </div>

            <div className="space-y-4 relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex p-3 bg-saffron rounded-2xl text-white shadow-md mx-auto">
                <Quote size={24} className="fill-current" />
              </div>
              <h4 className="text-espresso font-black text-xs uppercase tracking-widest text-saffron">Message from Vinod Ji</h4>
              <p className="text-espresso font-black font-serif italic text-lg sm:text-2xl leading-relaxed">
                “Dil se banaya hua chaat, sirf aapke liye ❤️ <br className="hidden sm:inline" />
                Ek baar zaroor try kijiye… taste aisa jo dil mein bas jaaye 😋 <br />
                Aapka pyaar hi meri sabse badi kamai hai 🙏”
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
