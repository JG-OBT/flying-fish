import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';
import gallery6 from '../assets/images/gallery-6.jpg';
import heroHome from '../assets/images/hero-home.jpg';
import menuPreview from '../assets/images/menu-preview.jpg';
import chefPlate from '../assets/images/chef-plate.jpg';

const galleryImages = [
  { src: gallery1, alt: "Private Dining Setup", category: "Interior" },
  { src: gallery2, alt: "Main Hall Evening", category: "Interior" },
  { src: gallery3, alt: "Chef preparing heritage dish", category: "Food" },
  { src: gallery4, alt: "Signature Somerset Cocktail", category: "Food" },
  { src: gallery5, alt: "Terrace Dining in Summer", category: "Atmosphere" },
  { src: gallery6, alt: "Garden view from Snug", category: "Atmosphere" },
  { src: heroHome, alt: "The Flying Fish Exterior", category: "Atmosphere" },
  { src: menuPreview, alt: "Plated Venison", category: "Food" },
  { src: chefPlate, alt: "Plating Desserts", category: "Food" }
];

const categories = ["All", "Interior", "Food", "Atmosphere"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="bg-sand min-h-screen">
      {/* Header */}
      <section className="bg-mist pt-48 pb-20 border-b border-teal-soft">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-px bg-copper mx-auto mb-10"></div>
            <span className="text-copper uppercase tracking-[0.4em] text-[10px] font-black block mb-4">Visual Journey</span>
            <h1 className="text-5xl md:text-8xl text-teal-dark italic font-serif leading-tight">The Gallery</h1>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 pt-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-10 py-3 rounded-sm text-[10px] font-black uppercase tracking-[0.3em] transition-all border ${
                  filter === cat 
                  ? 'bg-teal-dark text-sand border-teal-dark shadow-lg' 
                  : 'bg-transparent text-teal-dark/50 hover:text-teal-dark border-teal-dark/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 md:py-40 px-6 bg-sand">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <AnimatePresence mode='popLayout'>
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl cursor-pointer group border border-teal-soft bg-mist"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-teal-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="p-5 border-2 border-sand/40 text-sand rounded-sm">
                        <Maximize2 size={24} strokeWidth={3} />
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sand text-[10px] uppercase tracking-[0.4em] font-black block mb-2">{img.category}</span>
                    <p className="text-sand font-serif italic text-2xl">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-teal-dark/95 flex items-center justify-center p-6 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-6xl w-full h-full max-h-[85vh] flex flex-col items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 text-sand hover:text-copper transition-colors"
                aria-label="Close lightbox"
              >
                <X size={40} />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-full object-contain rounded-sm border border-sand/10 shadow-3xl"
                referrerPolicy="no-referrer"
              />
              <div className="mt-12 text-center text-sand">
                <p className="text-teal-light text-[10px] uppercase tracking-[0.5em] font-black mb-4">{selectedImage.category}</p>
                <h3 className="text-3xl md:text-4xl font-serif italic">{selectedImage.alt}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instagram Feed Callout */}
      <section className="py-32 border-t border-teal-soft bg-mist">
        <div className="max-w-4xl mx-auto text-center space-y-12 px-6">
          <div className="w-16 h-px bg-copper mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-7xl font-serif text-teal-dark italic leading-tight">Keep up with <br className="md:hidden" /> the catch.</h2>
          <p className="text-ink/70 font-medium text-lg lg:text-xl italic">Follow our stories for live menu updates and glimpses into the Somerset kitchen.</p>
          <a href="#" className="inline-flex items-center gap-4 text-copper font-black uppercase tracking-[0.4em] text-xs hover:text-teal-dark transition-colors border-b-2 border-copper/30 hover:border-teal-dark pb-3">
            @TheFlyingFishIlminster
          </a>
        </div>
      </section>
    </div>
  );
}
