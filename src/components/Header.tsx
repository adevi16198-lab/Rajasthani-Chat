import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Clock, Award } from 'lucide-react';
import { businessDetails } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shopStatus, setShopStatus] = useState({
    isOpen: false,
    text: 'Closed',
    color: 'bg-red-500',
    timeMsg: 'Opens daily at 5:00 PM'
  });

  // Track scroll position to make navbar background solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update shop status dynamically
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      // Siliguri time is IST (GMT+5:30), but we can read local browser time
      const hours = now.getHours();
      // Shop opens at 5:00 PM (17:00) and closes at 10:00 PM (22:00)
      const open = hours >= 17 && hours < 22;
      
      setShopStatus({
        isOpen: open,
        text: open ? 'OPEN NOW' : 'CLOSED',
        color: open ? 'bg-emerald-600 text-emerald-50' : 'bg-amber-700 text-amber-50',
        timeMsg: open ? 'Hurry, closes at 10:00 PM!' : 'Opens daily at 5:00 PM'
      });
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Meet Owner', href: '#meet-the-owner' },
    { name: 'Menu', href: '#menu' },
    { name: 'Bulk Orders', href: '#bulk-orders' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#contact' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cream/95 backdrop-blur-md shadow-md py-3 border-b border-saffron/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col select-none" id="logo-container">
            <span className="font-display text-2xl sm:text-3xl text-saffron tracking-wide leading-none">
              {businessDetails.name}
            </span>
            <span className="text-xs font-semibold tracking-wider text-espresso-light leading-normal Bengali-font">
              {businessDetails.bengaliName}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-espresso hover:text-saffron font-medium text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Status Badge & CTA actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dynamic Open Indicator */}
            <div className={`flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-sm ${shopStatus.color}`}>
              <span className="relative flex h-2 w-2 mr-2">
                {shopStatus.isOpen && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                )}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              {shopStatus.text}
            </div>

            {/* Quick Call */}
            <a
              href={`tel:${businessDetails.phone}`}
              className="bg-saffron hover:bg-saffron-hover text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Phone size={14} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Right Action Area (Status + Menu Toggle) */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Dynamic Status Badge (Compact) */}
            <div className={`flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold shadow-sm ${shopStatus.color}`}>
              <span className={`h-1.5 w-1.5 rounded-full mr-1.5 bg-white ${shopStatus.isOpen ? 'animate-pulse' : ''}`}></span>
              {shopStatus.text}
            </div>

            {/* Call Action Button */}
            <a
              href={`tel:${businessDetails.phone}`}
              className="bg-saffron text-white p-2 rounded-full shadow-md"
              aria-label="Call Business"
            >
              <Phone size={16} />
            </a>

            {/* Menu Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-espresso p-1.5 rounded-md hover:bg-cream-dark transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden bg-cream border-b border-saffron/20 animate-fade-in" id="mobile-drawer">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-espresso hover:text-saffron hover:bg-cream-dark transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-4 border-t border-saffron/10 flex flex-col gap-3">
              <div className="text-xs text-espresso-light flex items-center gap-2 px-3">
                <Clock size={14} className="text-saffron" />
                <span>{shopStatus.timeMsg}</span>
              </div>
              <div className="flex gap-2 px-3">
                <a
                  href={`https://wa.me/${businessDetails.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg text-center font-semibold text-sm flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${businessDetails.phone}`}
                  className="flex-1 bg-saffron hover:bg-saffron-hover text-white py-2 rounded-lg text-center font-semibold text-sm flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
