import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MeetTheOwner from './components/MeetTheOwner';
import Menu from './components/Menu';
import BulkOrders from './components/BulkOrders';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="relative min-h-screen bg-cream selection:bg-saffron/20 selection:text-saffron overflow-x-hidden" id="app-root">
      {/* Navigation Header */}
      <Header />

      {/* Main Layout Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Meet the Owner Section */}
        <MeetTheOwner />

        {/* Interactive Menu Section */}
        <Menu />

        {/* Bulk Orders Section */}
        <BulkOrders />

        {/* Customer Reviews Section */}
        <Reviews />

        {/* Contact, Timings & Location Section */}
        <Contact />
      </main>

      {/* Footer Block */}
      <Footer />

      {/* Floating Speed Actions */}
      <FloatingActions />
    </div>
  );
}

