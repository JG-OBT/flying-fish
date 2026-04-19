import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Clock, MapPin, Phone } from 'lucide-react';

// Relative image imports
import heroImage from '../assets/images/hero-home.jpg';
import aboutImage from '../assets/images/about-intro.jpg';
import menuPreviewImage from '../assets/images/menu-preview.jpg';
import eventsImage from '../assets/images/private-dining-hero.jpg';
import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';

const testimonials = [
  {
    name: "Crystal G",
    review: "Absolutely brilliant food and fantastic service, nothing was too much trouble for the staff. The view over the valley was great and it's in a brilliant, easily accessible location.",
    stars: 5
  },
  {
    name: "Sasha",
    review: "Amazing stay at the Fish! Lovely comfortable, spotless rooms, delicious food and really good breakfasts. Buddy and Kate are so welcoming and ready to suggest lovely local spots to visit.",
    stars: 5
  },
  {
    name: "BlackLabradorMan",
    review: "Loved the sailfish and the mutton curry. Buddy, and other staff, couldn’t do enough for you and were welcoming and helpful. Lovely location too. A real treat.",
    stars: 5
  }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-sand">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 pb-24 md:pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="The Flying Fish Restaurant Dining Room" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-dark/40 via-transparent to-sand"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-px bg-teal-mid mb-10"></div>
            <h1 className="text-5xl md:text-8xl text-teal-dark mb-10 leading-[1.05] tracking-tight font-serif drop-shadow-sm">
              Refined Dining in the <br /><span className="italic font-light">heart of Somerset.</span>
            </h1>
            <p className="text-teal-dark/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Locally sourced, expertly crafted. Experience the modern taste of the British countryside in an atmosphere that feels like home.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/menu" className="w-full sm:w-auto px-10 py-5 border border-teal-dark text-teal-dark rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-teal-dark hover:text-sand transition-all">
                View Season Menu
              </Link>
              <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-teal-dark text-sand rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-copper transition-all shadow-xl">
                Reserve Now
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Contact Link */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-10 text-teal-dark/60 text-[10px] uppercase tracking-[0.3em] font-black hidden md:flex border-t border-teal-soft pt-8 px-16 z-20">
          <div className="flex items-center gap-2"><MapPin size={14} className="text-teal-mid"/> ILMINSTER, SOMERSET</div>
          <div className="flex items-center gap-2"><Clock size={14} className="text-teal-mid"/> OPEN TUE-SUN</div>
          <div className="flex items-center gap-2"><Phone size={14} className="text-teal-mid"/> 01823 442 990</div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-40 px-6 bg-sand">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-teal-soft"
            >
              <img src={aboutImage} alt="Our Heritage and Philosphy" className="w-full h-[650px] object-cover grayscale-[10%]" referrerPolicy="no-referrer" />
            </motion.div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-teal-light/20 rounded-full blur-3xl z-0"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <div className="w-12 h-px bg-copper mb-4"></div>
            <span className="text-copper uppercase tracking-[0.3em] text-[10px] font-bold block">Our Story</span>
            <h2 className="text-4xl md:text-6xl text-teal-dark leading-tight font-serif">Born from a passion for <br /><span className="italic font-light text-teal-mid">local provenance.</span></h2>
            <div className="space-y-6 text-ink/80 text-lg leading-relaxed font-normal">
              <p>
                Nestled in the rolling hills of Somerset, The Flying Fish began as a dream to bridge the gap between farm and table. We believe that true luxury lies in the quality of the ingredient and the honesty of the preparation.
              </p>
              <p>
                Our chefs work directly with local growers, foragers, and fishmongers to bring you a menu that evolves with the seasons, telling the story of the British landscape on every plate.
              </p>
            </div>
            <Link to="/about" className="inline-flex items-center gap-3 text-teal-dark font-bold uppercase tracking-[0.2em] text-[10px] group underline underline-offset-[12px] decoration-copper/40 hover:decoration-copper transition-all">
              Discover Our History <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hub Grid Section */}
      <section className="py-24 md:py-32 bg-mist border-y border-teal-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-sand p-14 border border-teal-soft rounded-sm flex flex-col justify-between h-96 group hover:border-teal-mid transition-all shadow-sm">
              <div>
                <h3 className="text-3xl font-serif italic text-teal-dark mb-6 font-light">The Menu</h3>
                <p className="text-ink/70 text-sm leading-relaxed max-w-sm font-medium">Explore our seasonal selections, from West Country beef to fresh coastal catches.</p>
              </div>
              <Link to="/menu" className="text-[10px] items-center flex gap-3 uppercase tracking-[0.3em] text-teal-mid font-black transition-all group">
                Full Menu <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-copper"/>
              </Link>
            </div>
            
            <div className="bg-sand p-14 border border-teal-soft rounded-sm flex flex-col justify-between h-96 group hover:border-teal-mid transition-all shadow-sm">
              <div>
                <h3 className="text-3xl font-serif italic text-teal-dark mb-6 font-light">Private Dining</h3>
                <p className="text-ink/70 text-sm leading-relaxed max-w-sm font-medium">Host your intimate gatherings in our bespoke garden suite or private cellar room.</p>
              </div>
              <Link to="/private-dining" className="text-[10px] items-center flex gap-3 uppercase tracking-[0.3em] text-teal-mid font-black transition-all group">
                Enquire Now <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-copper"/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlight */}
      <section className="py-24 md:py-40 bg-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
            <div className="max-w-3xl space-y-6">
              <span className="text-copper uppercase tracking-[0.3em] text-[10px] font-bold">The Cuisine</span>
              <h2 className="text-4xl md:text-7xl leading-tight text-teal-dark font-serif">Crafted with Precision, <br />Served with <span className="italic font-light text-teal-mid">Warmth.</span></h2>
            </div>
            <Link to="/menu" className="pb-3 border-b-2 border-copper text-copper font-bold uppercase tracking-[0.2em] text-[10px] hover:text-teal-dark hover:border-teal-dark transition-all">
              View All Dishes
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Pan-Seared Scallops", desc: "Wild-caught scallops, heritage cauliflower, crisp pancetta, lemon emulsion.", category: "Starter" },
              { title: "Somerset Venison Loin", desc: "Locally sourced venison, juniper-infused jus, braised red cabbage, parsnip puree.", category: "Main" },
              { title: "Dark Chocolate Fondant", desc: "70% cocoa, salted caramel center, Tahitian vanilla bean gelato.", category: "Afters" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group p-12 border border-teal-soft hover:border-teal-mid bg-mist/30 transition-all duration-500 rounded-sm hover:-translate-y-2 shadow-sm"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[10px] text-copper uppercase tracking-[0.3em] font-bold opacity-80">{item.category}</span>
                </div>
                <h3 className="text-2xl mb-6 text-teal-dark group-hover:text-copper transition-colors font-serif italic">{item.title}</h3>
                <p className="text-ink/70 font-medium text-sm italic leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events / Private Dining */}
      <section className="py-24 md:py-40 px-6 bg-mist overflow-hidden border-y border-teal-soft">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 space-y-12 order-2 lg:order-1">
            <div className="space-y-8">
              <span className="text-copper uppercase tracking-[0.3em] text-[10px] font-bold block">Celebrations</span>
              <h2 className="text-4xl md:text-7xl text-teal-dark leading-tight font-serif italic">Host Your Unforgettable <br /><span className="font-light not-italic text-teal-mid">Gathering.</span></h2>
              <p className="text-ink/80 text-xl leading-relaxed font-normal italic opacity-90 border-l-4 border-copper/30 pl-8">
                Our garden-view private dining room and rustic-luxe main hall offer the perfect backdrops for birthdays, corporate events, and intimate wedding receptions.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-4">
              {[
                "Bespoke Menus",
                "Garden Terrace",
                "AV Equipment",
                "Event Manager"
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-4 text-teal-dark font-bold text-[10px] tracking-[0.2em] uppercase">
                  <ChevronRight className="text-copper" size={18} strokeWidth={3} /> {service}
                </li>
              ))}
            </ul>
            <Link to="/private-dining" className="inline-block px-12 py-5 bg-teal-dark text-sand rounded-sm text-[xs] font-bold uppercase tracking-[0.3em] hover:bg-copper transition-all shadow-xl">
              Enquire Now
            </Link>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative">
              <img src={eventsImage} alt="Private Dining Room" className="w-full h-[600px] object-cover rounded-sm shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute top-10 -right-4 bg-sand py-6 px-10 rounded-sm border border-teal-soft shadow-2xl">
                <p className="text-[10px] uppercase font-black tracking-[0.3em] text-copper mb-2 text-center">Capacity</p>
                <p className="font-serif text-3xl text-teal-dark text-center">Up to 40 Guests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          <h2 className="text-4xl md:text-6xl text-teal-dark font-serif text-center md:text-left leading-tight">Capture the <span className="italic block md:inline">moment.</span></h2>
          <Link to="/gallery" className="text-copper font-bold uppercase tracking-[0.3em] text-[10px] hover:text-teal-dark transition-colors border-b-2 border-copper/30 hover:border-teal-dark pb-2">Full Gallery</Link>
        </div>
        <div className="flex gap-10 overflow-hidden px-6 lg:px-20 mb-8">
          {[gallery1, gallery2, gallery3].map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02, y: -10 }}
              className="w-full md:w-1/3 aspect-[4/5] rounded-sm overflow-hidden border border-teal-soft shadow-lg flex-shrink-0 bg-mist"
            >
              <img src={img} alt={`Gallery image ${i+1}`} className="w-full h-full object-cover transition-opacity hover:opacity-90" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-48 px-6 bg-mist/50 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-20 relative">
          <div className="w-12 h-px bg-copper mx-auto mb-12"></div>
          <span className="text-copper uppercase tracking-[0.4em] text-[10px] font-black mb-10 block">Guest Experiences</span>
          
          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="space-y-16"
              >
                <p className="text-3xl md:text-5xl text-teal-dark font-serif italic font-light leading-[1.3] text-balance">
                  "{testimonials[activeTestimonial].review}"
                </p>
                <div className="flex flex-col items-center gap-4">
                  <p className="font-black text-teal-dark uppercase tracking-[0.3em] text-xs">{testimonials[activeTestimonial].name}</p>
                  <div className="flex gap-1 text-copper">
                    {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 pt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${i === activeTestimonial ? 'bg-copper w-8' : 'bg-teal-dark/20'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-40 px-6 bg-teal-dark text-sand relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-light opacity-10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-copper opacity-10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
          <h2 className="text-5xl md:text-8xl text-sand font-serif mb-6 leading-tight">Ready for a <span className="italic font-light text-teal-light/80 border-b-4 border-copper/30">Taste?</span></h2>
          <p className="text-sand/80 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed italic">
            Tables are limited and we highly recommend booking in advance. 
            We look forward to welcoming you to Ilminster soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <Link to="/contact" className="px-14 py-6 bg-sand text-teal-dark rounded-sm text-xs font-bold uppercase tracking-[0.4em] hover:bg-copper hover:text-sand transition-all shadow-2xl">
              Book Your Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
