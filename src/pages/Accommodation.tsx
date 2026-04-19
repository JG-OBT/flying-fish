import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bed, Coffee, Wind, Heart, Phone, Mail, MapPin, X, Maximize2, ExternalLink, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Local images for accommodation
import accHero from '../assets/images/private-dining-hero.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';
import gallery6 from '../assets/images/gallery-6.jpg';
import interiorDetail from '../assets/images/interior-detail.jpg';

const room1 = gallery4;
const room2 = gallery5;
const room3 = gallery6;

const features = [
  {
    icon: <Bed className="text-teal-mid" />,
    title: "8 Motel-Style Rooms",
    desc: "Convenient parking directly outside your door for a seamless arrival."
  },
  {
    icon: <Wind className="text-teal-mid" />,
    title: "Private Verandas",
    desc: "Each room features outdoor seating with views over the rolling Somerset landscape."
  },
  {
    icon: <Coffee className="text-teal-mid" />,
    title: "Inclusive Breakfast",
    desc: "Freshly prepared 'Flying Fish' breakfast served in our neighboring restaurant."
  },
  {
    icon: <Heart className="text-teal-mid" />,
    title: "Accessible Stays",
    desc: "Dedicated accessible rooms with ramps and specialized bathroom facilities."
  }
];

const galleryImages = [
  { src: room1, alt: "The Master Suite", category: "Rooms" },
  { src: room2, alt: "En-suite Bathroom Details", category: "Details" },
  { src: room3, alt: "Guest Lounge Area", category: "Interior" },
  { src: interiorDetail, alt: "Historic Coaching Inn Exterior", category: "Atmosphere" }
];

export default function Accommodation() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry. Our team will verify availability and get back to you shortly.");
  };

  return (
    <div className="bg-sand overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center pt-20 border-b border-teal-soft overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={accHero} 
            alt="The Flying Fish Accommodation" 
            className="w-full h-full object-cover opacity-60" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/50 via-teal-dark/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-10"
          >
            <div className="w-16 h-px bg-sand mb-6"></div>
            <span className="text-sand uppercase tracking-[0.4em] text-[10px] font-black block">Stay With Us</span>
            <h1 className="text-5xl md:text-8xl text-sand leading-[1.05] tracking-tight font-serif italic drop-shadow-lg">
              Countryside <br /><span className="font-light not-italic text-teal-light">Sanctuaries</span>
            </h1>
            <p className="text-sand/90 text-xl font-medium leading-relaxed italic max-w-lg drop-shadow-md">
              Extend your evening at The Flying Fish. Our boutique rooms offer a refined retreat in the heart of Somerset, blending historic charm with modern comfort.
            </p>
            <Link to="/contact" className="inline-block px-12 py-5 bg-sand text-teal-dark rounded-sm text-xs font-bold uppercase tracking-[0.3em] hover:bg-copper hover:text-sand transition-all shadow-2xl">
              Book Your Stay
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 px-6 bg-sand">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-7xl text-teal-dark font-serif italic text-balance leading-tight">Your Self-Contained <span className="font-light not-italic text-teal-mid underline decoration-copper/30 decoration-offset-8">Country Retreat.</span></h2>
          <p className="text-ink/80 text-xl md:text-2xl leading-relaxed font-medium italic opacity-90 max-w-3xl mx-auto">
            Our 8 motel-style rooms offer the perfect blend of convenience and tranquility. With parking directly outside each room and a private veranda with seating, you can truly relax and enjoy the sweeping views of the Somerset countryside.
          </p>
          <div className="w-24 h-px bg-copper mx-auto"></div>
        </div>
      </section>

      {/* Room Configurations */}
      <section className="py-24 bg-mist border-y border-teal-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
               <h3 className="text-3xl md:text-5xl font-serif italic text-teal-dark font-medium">Room Configurations</h3>
               <div className="space-y-8">
                  <div className="bg-sand p-8 border border-teal-soft rounded-sm shadow-sm">
                    <p className="text-copper uppercase tracking-[0.3em] text-[10px] font-black mb-4">Super King Rooms</p>
                    <p className="text-2xl font-serif italic text-teal-dark">6 Stunning super king-size bed rooms, featuring wet-room style shower areas and separate baths for ultimate relaxation.</p>
                  </div>
                  <div className="bg-sand p-8 border border-teal-soft rounded-sm shadow-sm">
                    <p className="text-copper uppercase tracking-[0.3em] text-[10px] font-black mb-4">Twin Rooms</p>
                    <p className="text-2xl font-serif italic text-teal-dark">2 Comfortable twin single bed rooms, equipped with wet-room style showers and separate baths.</p>
                  </div>
               </div>
            </div>
            
            <div className="space-y-12">
               <h3 className="text-3xl md:text-5xl font-serif italic text-teal-dark font-medium">Accessibility</h3>
               <div className="bg-teal-dark text-sand p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
                  <div className="relative z-10 space-y-8">
                    <p className="text-teal-light uppercase tracking-[0.4em] text-[10px] font-black">Thoughtful Design</p>
                    <p className="text-xl md:text-2xl font-serif italic leading-relaxed">
                      We offer 1 Super King and 1 Twin room designated as 'accessible'. These rooms are equipped with:
                    </p>
                    <ul className="space-y-4 text-sand/80 font-medium italic">
                      <li className="flex gap-4"><span>—</span> Access ramps to the entrance</li>
                      <li className="flex gap-4"><span>—</span> Grab rails for safety</li>
                      <li className="flex gap-4"><span>—</span> Specialized seating in the wet-rooms</li>
                      <li className="flex gap-4 text-copper font-bold uppercase tracking-wider text-xs bg-sand/10 p-2 inline-block"><span>Note:</span> Accessible rooms do not have baths</li>
                    </ul>
                  </div>
                  <div className="absolute -bottom-10 -right-10 opacity-10">
                    <Maximize2 size={240} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Details */}
      <section className="py-24 md:py-32 px-6 bg-mist text-teal-dark border-y border-teal-soft">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="space-y-8 bg-sand/60 p-10 border border-teal-dark/5 hover:border-teal-mid rounded-sm transition-all shadow-sm group"
              >
                <div className="w-14 h-14 rounded-sm bg-teal-dark/5 flex items-center justify-center text-teal-mid group-hover:bg-teal-dark group-hover:text-sand transition-all duration-500 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif italic text-teal-dark font-medium">{feature.title}</h3>
                <p className="text-ink/70 text-sm font-medium leading-relaxed uppercase tracking-widest italic">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Testimonials */}
      <section className="py-24 bg-sand border-b border-teal-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                name: "JW", 
                text: "Stayed at the Flying Fish Stables for two nights with my son and grandson. Could not have had a better welcome! Food was great and accommodation perfect."
              },
              { 
                name: "Paddie", 
                text: "Enjoyed a 2 night break. Great food and a comfortable clean room with all amenities. Staff were excellent, very friendly and welcoming. View from conservatory was lovely."
              },
              { 
                name: "Matt", 
                text: "We booked two rooms on the way back from Devon and it was a great place to stop and break up the journey. Superb standard throughout."
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-mist/30 p-10 border border-teal-soft rounded-sm space-y-6"
              >
                <div className="flex gap-1 text-copper">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" className="text-copper" />)}
                </div>
                <p className="text-ink/80 italic font-medium leading-relaxed">"{review.text}"</p>
                <p className="text-[10px] items-center flex gap-3 uppercase tracking-[0.3em] font-black text-teal-dark">
                  <span className="w-8 h-px bg-copper"></span> {review.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-24 md:py-32 px-6 bg-sand">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8 border-l-4 border-copper pl-8 py-4">
            <h3 className="text-2xl md:text-4xl font-serif italic text-teal-dark font-medium">Family Friendly</h3>
            <p className="text-ink/70 text-lg font-medium italic leading-relaxed">
              We welcome families and can accommodate up to 2 children aged 17 or under on 'camp beds' for £20 each per night.
            </p>
          </div>
          <div className="space-y-8 border-l-4 border-teal-mid pl-8 py-4">
            <h3 className="text-2xl md:text-4xl font-serif italic text-teal-dark font-medium">Pet Friendly</h3>
            <p className="text-ink/70 text-lg font-medium italic leading-relaxed">
              Bring your four-legged friends along. We charge £10 per night for dogs (£5 for an additional dog, maximum of 2 per room).
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 md:py-48 px-6 bg-mist text-teal-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 order-2 lg:order-1">
             <div className="relative">
              <img 
                src={room2} 
                alt="Room detail" 
                className="w-full h-[650px] object-cover rounded-sm shadow-2xl border border-teal-soft" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-teal-dark p-12 rounded-sm shadow-2xl hidden md:block border border-teal-soft">
                <p className="text-3xl font-serif italic mb-3 text-sand">The Breakfast</p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-sand/60">A great start to your day.</p>
              </div>
            </div>
          </div>
          <div className="space-y-12 order-1 lg:order-2">
            <h2 className="text-4xl md:text-7xl text-teal-dark leading-tight font-serif italic">Fresh Morning <br /><span className="font-light not-italic text-teal-mid">Offerings.</span></h2>
            <div className="space-y-8 text-ink/80 text-xl leading-relaxed italic font-medium">
              <p>
                Your room rate includes The Flying Fish breakfast – a choice of freshly prepared offerings served in our restaurant just next door. 
              </p>
              <p>
                It is here that we also offer a range of refreshing drinks and delicious evening meals to complete your stay.
              </p>
              <div className="bg-mist p-8 border border-teal-soft rounded-sm italic text-sm text-ink/60 space-y-2">
                <p>* Please note, we do not offer evening meals on Sundays.</p>
                <p>* We are closed all day on Mondays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-mist border-y border-teal-soft">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-4xl md:text-7xl text-teal-dark font-serif italic mb-8 underline decoration-copper/30 underline-offset-8">Room <span className="not-italic font-light">Showcase.</span></h2>
          <p className="text-ink/60 text-[10px] uppercase tracking-[0.4em] font-black">A visual tour of our guest spaces</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl cursor-pointer group border border-teal-soft bg-sand"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-teal-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <div className="p-4 border-2 border-sand/40 text-sand rounded-sm">
                    <Maximize2 size={24} strokeWidth={3} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-teal-dark/95 flex items-center justify-center p-6 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl w-full h-full max-h-[85vh] flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)} className="absolute -top-16 right-0 text-sand hover:text-copper transition-colors">
              <X size={40} />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-full object-contain rounded-sm border border-sand/10 shadow-3xl" referrerPolicy="no-referrer" />
            <div className="mt-8 text-center text-sand">
                <p className="text-teal-light text-[10px] uppercase tracking-[0.5em] font-black mb-4">{selectedImage.category}</p>
                <h3 className="text-3xl font-serif italic">{selectedImage.alt}</h3>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 md:py-48 px-6 bg-sand">
        <div className="max-w-4xl mx-auto rounded-sm bg-mist p-12 md:p-24 text-center space-y-14 border border-teal-soft shadow-xl">
          <h2 className="text-4xl md:text-7xl text-teal-dark font-serif italic font-light leading-tight">Make Your Visit <br /><span className="not-italic text-teal-mid underline decoration-copper/30 decoration-offset-8">Complete.</span></h2>
          <p className="text-ink/80 text-xl font-medium max-w-xl mx-auto leading-relaxed italic">
            Why rush home? Combine a signature tasting menu dinner with an elegant overnight stay for the ultimate Flying Fish experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
             <Link to="/contact" className="px-12 py-6 bg-teal-dark text-sand rounded-sm text-xs font-bold uppercase tracking-[0.3em] hover:bg-copper transition-all shadow-2xl">
                Enquire Now
             </Link>
             <a href="tel:01823442990" className="px-12 py-6 border-2 border-teal-dark text-teal-dark rounded-sm text-xs font-bold uppercase tracking-[0.3em] hover:bg-teal-dark hover:text-sand transition-all">
                Call to Book
             </a>
          </div>
        </div>
      </section>

      {/* Contact / Booking Info */}
      <section className="py-24 md:py-40 px-6 bg-sand border-t border-teal-soft">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div className="space-y-8">
               <h3 className="text-3xl md:text-5xl font-serif italic text-teal-dark font-medium underline decoration-copper/20 underline-offset-8">Stay Information</h3>
               <p className="text-ink/70 text-lg font-medium italic">Our rooms provide a peaceful base for exploring Somerset. Please review our child and pet policies above, and note our restaurant hours for evening meals.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <div className="flex items-center gap-4 text-copper uppercase tracking-[0.4em] text-[10px] font-black">
                      <Phone size={14} className="text-teal-mid" /> Enquiries
                  </div>
                  <a href="tel:01823442990" className="block text-3xl font-serif italic text-teal-dark hover:text-copper transition-colors font-medium">01823 442 990</a>
               </div>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 text-copper uppercase tracking-[0.4em] text-[10px] font-black">
                      <Mail size={14} className="text-teal-mid" /> Stay With Us
                  </div>
                  <a href="mailto:stays@theflyingfish.co.uk" className="block text-xl font-serif text-teal-dark hover:text-copper transition-colors font-medium">stays@theflyingfish.co.uk</a>
               </div>
               <div className="space-y-4">
                <div className="flex items-center gap-4 text-copper uppercase tracking-[0.4em] text-[10px] font-black">
                    <MapPin size={14} className="text-teal-mid" /> Location
                </div>
                <p className="text-xl font-serif text-teal-dark italic font-medium leading-relaxed">Wood Road, Windmill Hill,<br />near Ilminster, Somerset, TA19 9NX</p>
              </div>
            </div>
          </div>

          <div className="bg-mist text-teal-dark p-10 md:p-16 rounded-sm border border-teal-soft shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-copper">Full Name</label>
                <input 
                  required 
                  type="text" 
                  className="w-full bg-transparent border-b-2 border-teal-dark/10 py-4 focus:outline-none focus:border-copper transition-all text-teal-dark font-serif italic text-lg"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black text-copper">Preferred Date</label>
                  <input 
                    required 
                    type="date" 
                    className="w-full bg-transparent border-b-2 border-teal-dark/10 py-4 focus:outline-none focus:border-copper transition-all text-teal-dark font-serif italic text-lg"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black text-copper">Guests</label>
                  <select className="w-full bg-transparent border-b-2 border-teal-dark/10 py-4 focus:outline-none focus:border-copper transition-all text-teal-dark font-serif italic text-lg">
                    <option className="bg-sand text-teal-dark">1 Guest</option>
                    <option className="bg-sand text-teal-dark" selected>2 Guests</option>
                    <option className="bg-sand text-teal-dark">3 Guests</option>
                    <option className="bg-sand text-teal-dark">4+ Guests</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-copper">Message</label>
                <textarea 
                  rows={3}
                  className="w-full bg-transparent border-b-2 border-teal-dark/10 py-4 focus:outline-none focus:border-copper transition-all resize-none text-teal-dark font-serif italic text-lg placeholder:text-ink/40"
                  placeholder="Tell us about your visit..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-6 bg-teal-dark text-sand rounded-sm text-xs font-bold uppercase tracking-[0.4em] hover:bg-copper transition-all shadow-xl"
              >
                Send Stay Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
