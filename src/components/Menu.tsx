import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MessageSquare, Flame, Check, Search, SlidersHorizontal, Phone } from 'lucide-react';
import { menuItems, businessDetails } from '../data';
import { MenuItem } from '../types';

type CategoryType = 'All' | 'Chaat Items' | 'Papdi Chaat';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyBestSellers, setOnlyBestSellers] = useState(false);
  const [selectedSpicyLevel, setSelectedSpicyLevel] = useState<number | null>(null);

  const categories: CategoryType[] = ['All', 'Chaat Items', 'Papdi Chaat'];

  // Filter items based on active criteria
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (item.bengaliName && item.bengaliName.includes(searchQuery)) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesBestSeller = !onlyBestSellers || item.isBestSeller;
      const matchesSpicy = selectedSpicyLevel === null || item.spicyLevel === selectedSpicyLevel;

      return matchesCategory && matchesSearch && matchesBestSeller && matchesSpicy;
    });
  }, [activeCategory, searchQuery, onlyBestSellers, selectedSpicyLevel]);

  // Construct WhatsApp order message
  const getWhatsAppOrderLink = (item: MenuItem) => {
    const text = `Hello! I would like to order "${item.name} (${item.bengaliName || ''})" from Rajasthani Chat for Takeaway. Please let me know when I can pick it up! Price: ₹${item.price}. Thank you!`;
    return `https://wa.me/${businessDetails.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-saffron/10 text-saffron border border-saffron/20 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full inline-flex items-center gap-1.5 mb-4 shadow-sm animate-bounce">
            💸 AFFORDABLE STREET FOOD • ALL ITEMS UNDER ₹100!
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-espresso leading-tight">
            Explore Siliguri’s Absolute Favorite Chaat Menu
          </h2>
          <p className="text-espresso-light text-base mt-3 font-semibold italic text-saffron">
            “Taste jo dil mein bas jaaye 😋 - Swad aisa, ki baar-baar yaad aaye!”
          </p>
          <p className="text-espresso-light text-xs mt-2 max-w-xl mx-auto leading-relaxed">
            Every plate is freshly customized right in front of your eyes using purified RO mineral water and pure traditional homemade spices. Pure street magic, extremely pocket-friendly!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow via-saffron to-espresso rounded-full mx-auto mt-5" />
        </div>

        {/* Search and Filters bar */}
        <div className="bg-cream-dark/30 p-4 sm:p-6 rounded-3xl border border-saffron/10 mb-10 space-y-4" id="menu-search-filters">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-espresso/40" size={18} />
              <input
                type="text"
                placeholder="Search Bhel Muri, Papri Chaat, Batata Puri..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-espresso/15 focus:border-saffron focus:outline-none rounded-2xl text-sm transition-all shadow-sm text-espresso placeholder:text-espresso/40"
              />
            </div>

            {/* Quick Filter checkboxes */}
            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-start md:justify-end">
              <button
                onClick={() => setOnlyBestSellers(!onlyBestSellers)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold border transition-all ${
                  onlyBestSellers
                    ? 'bg-saffron text-white border-saffron shadow-sm'
                    : 'bg-white text-espresso border-espresso/10 hover:border-saffron/30'
                }`}
              >
                <Sparkles size={14} className={onlyBestSellers ? 'fill-current' : ''} />
                <span>Only Best Sellers ⭐</span>
              </button>

              {/* Spice Filters */}
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-2xl border border-espresso/10 text-xs font-semibold">
                <span className="text-espresso-light">Spice:</span>
                <button
                  onClick={() => setSelectedSpicyLevel(selectedSpicyLevel === 0 ? null : 0)}
                  className={`px-2 py-1 rounded-lg ${selectedSpicyLevel === 0 ? 'bg-amber-100 text-amber-800' : 'hover:bg-cream-dark'}`}
                  title="Sweet / No Spice"
                >
                  🍬
                </button>
                <button
                  onClick={() => setSelectedSpicyLevel(selectedSpicyLevel === 1 ? null : 1)}
                  className={`px-2 py-1 rounded-lg ${selectedSpicyLevel === 1 ? 'bg-orange-100 text-orange-800' : 'hover:bg-cream-dark'}`}
                  title="Mild Spice"
                >
                  🌶️
                </button>
                <button
                  onClick={() => setSelectedSpicyLevel(selectedSpicyLevel === 2 ? null : 2)}
                  className={`px-2 py-1 rounded-lg ${selectedSpicyLevel === 2 ? 'bg-red-100 text-red-800 font-bold' : 'hover:bg-cream-dark'}`}
                  title="Medium Hot"
                >
                  🌶️🌶️
                </button>
                <button
                  onClick={() => setSelectedSpicyLevel(selectedSpicyLevel === 3 ? null : 3)}
                  className={`px-2 py-1 rounded-lg ${selectedSpicyLevel === 3 ? 'bg-rose-100 text-rose-800 font-black' : 'hover:bg-cream-dark'}`}
                  title="Extreme Hot"
                >
                  🌶️🌶️🌶️
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Categories Horizontal Tabs */}
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none gap-2 mb-12 justify-start lg:justify-center" id="menu-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
              }}
              className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-saffron text-white shadow-md shadow-saffron/10 scale-105'
                  : 'bg-cream-dark/50 text-espresso hover:bg-cream-dark hover:text-saffron'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Menu Items */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="menu-items-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group bg-cream/30 hover:bg-white rounded-3xl overflow-hidden border border-saffron/5 hover:border-saffron/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  {/* Item Image area */}
                  <div className="relative aspect-video w-full overflow-hidden bg-cream-dark">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Tags Overlaid */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                      {item.customBadge ? (
                        <span className="bg-yellow text-espresso text-xs font-black px-3 py-1.5 rounded-xl shadow-md border border-yellow/40 flex items-center gap-1">
                          {item.customBadge}
                        </span>
                      ) : (
                        <>
                          {item.isBestSeller && (
                            <span className="bg-saffron text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                              <Sparkles size={10} className="fill-current" />
                              <span>BEST SELLER</span>
                            </span>
                          )}
                          {item.isPopular && (
                            <span className="bg-gold text-espresso text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">
                              POPULAR Choice
                            </span>
                          )}
                        </>
                      )}
                    </div>

                    {/* Price Tag in clean badge style */}
                    <div className="absolute bottom-4 right-4 bg-espresso/90 backdrop-blur-sm text-yellow px-3.5 py-1.5 rounded-2xl text-sm font-black shadow-md border border-yellow/20">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Card Info Content */}
                  <div className="p-6 flex flex-col flex-1 space-y-3">
                    <div>
                      {/* English Name */}
                      <h3 className="font-bold text-lg text-espresso group-hover:text-saffron transition-colors leading-tight">
                        {item.name}
                      </h3>
                      {/* Bengali Name */}
                      {item.bengaliName && (
                        <span className="text-xs font-semibold text-espresso-light Bengali-font mt-1 block">
                          {item.bengaliName}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-espresso/70 leading-relaxed font-light line-clamp-3">
                      {item.description}
                    </p>

                    {/* Spiciness Level & Custom Tag pillbox */}
                    <div className="flex flex-wrap gap-1.5 items-center pt-2">
                      {/* Render Chillies */}
                      {item.spicyLevel > 0 ? (
                        <div className="flex items-center bg-red-50 text-red-700 px-2 py-1 rounded-lg text-[10px] font-bold mr-1 border border-red-100">
                          <Flame size={10} className="mr-0.5 fill-current animate-pulse text-red-500" />
                          <span>
                            {Array.from({ length: item.spicyLevel }).map((_, i) => '🌶️')}
                          </span>
                        </div>
                      ) : (
                        <span className="bg-amber-50 text-amber-800 px-2 py-1 rounded-lg text-[10px] font-bold mr-1 border border-amber-100">
                          🍬 Sweet/Mild
                        </span>
                      )}

                      {item.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="bg-cream-dark/50 text-espresso-light px-2 py-1 rounded-lg text-[10px] font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Push everything up */}
                    <div className="flex-1" />

                    {/* Card Actions Button - Dual Buttons: Call & WhatsApp */}
                    <div className="pt-4 border-t border-saffron/10 flex flex-col sm:flex-row gap-2 w-full">
                      <a
                        href={`tel:${businessDetails.phone.replace(/\s+/g, '')}`}
                        className="bg-saffron hover:bg-saffron/90 text-white px-3 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all hover:shadow-md transform hover:-translate-y-0.5 w-full sm:w-1/2"
                      >
                        <Phone size={13} />
                        <span>Order via Call</span>
                      </a>
                      <a
                        href={getWhatsAppOrderLink(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all hover:shadow-md transform hover:-translate-y-0.5 w-full sm:w-1/2"
                      >
                        <MessageSquare size={13} />
                        <span>WhatsApp Order</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty Search results state */
          <div className="text-center py-16 bg-cream/10 border border-dashed border-espresso/10 rounded-3xl" id="menu-empty-state">
            <p className="text-3xl">🍲🕵️</p>
            <h3 className="text-lg font-bold text-espresso mt-4">No delicious items found!</h3>
            <p className="text-xs text-espresso-light max-w-sm mx-auto mt-1">
              Try adjusting your search keywords or switching filters back to 'All' categories.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setOnlyBestSellers(false);
                setSelectedSpicyLevel(null);
              }}
              className="mt-4 bg-saffron text-white px-5 py-2.5 rounded-full text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
