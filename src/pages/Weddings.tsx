import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  Sparkles, 
  Utensils, 
  Music, 
  Trees, 
  GlassWater, 
  Home, 
  Flower2, 
  Users, 
  Award, 
  Settings, 
  Map, 
  ChevronRight, 
  X, 
  Maximize2, 
  Phone, 
  Mail, 
  Calendar,
  CheckCircle2,
  Sticker
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Local images for weddings
import heroHome from '../assets/images/hero-home.jpg';
import privateDiningHero from '../assets/images/private-dining-hero.jpg';
import mainAboutHero from '../assets/images/about-intro.jpg';
import chefPlate from '../assets/images/chef-plate.jpg';
import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';

const weddingHero = heroHome;
const barnInterior = privateDiningHero;
const outdoorCeremony = mainAboutHero;
const receptionTable = gallery4;

const inclusions = [
  { icon: <Home size={20} />, label: "Private Wedding Barn" },
  { icon: <GlassWater size={20} />, label: "On-site Bar" },
  { icon: <Music size={20} />, label: "PA System" },
  { icon: <Sparkles size={20} />, label: "Disco Lighting" },
  { icon: <Sticker size={20} />, label: "Fairy Light Stage" },
  { icon: <Users size={20} />, label: "Private Restrooms" },
];

const decorHighlights = [
  "Rustic Farm-style Tables",
  "Beautiful Chiavari Chairs",
  "Love Ladder & Bunting",
  "Fairy Light Canopy",
  "Romantic Candelabras",
  "Traditional Flower Arch"
];

const outdoorHighlights = [
  { icon: <Trees size={20} />, label: "Private Garden Area" },
  { icon: <Flower2 size={20} />, label: "Gazebo & Flower Arch" },
  { icon: <Sparkles size={20} />, label: "Festoon & Uplit Trees" },
  { icon: <ChevronRight size={20} />, label: "Plenty of Seating" },
];

const upsells = [
  {
    icon: <Map className="text-teal-mid" />,
    title: "Idyllic Somerset Setting",
    desc: "Breathtaking views of the South Somerset countryside provide the perfect backdrop."
  },
  {
    icon: <Heart className="text-teal-mid" />,
    title: "Intimate Atmosphere",
    desc: "We focus on quality and connection, making every guest feel truly special."
  },
  {
    icon: <Utensils className="text-teal-mid" />,
    title: "Exceptional Dining",
    desc: "Restaurant-quality food that stands as a highlight of your celebration."
  },
  {
    icon: <Settings className="text-teal-mid" />,
    title: "Tailored to You",
    desc: "No two weddings are the same. We offer absolute flexibility in planning."
  },
  {
    icon: <Users className="text-teal-mid" />,
    title: "Family-Run Heart",
    desc: "Our family is here to look after yours with genuine, warm hospitality."
  },
  {
    icon: <Award className="text-teal-mid" />,
    title: "Expert Guidance",
    desc: "Years of experience in hosting seamless, unforgettable special events."
  }
];

const galleryImages = [
  { src: gallery1, alt: "The Barn Reception Setup", cat: "Venue" },
  { src: gallery2, alt: "Floral Arch Detail", cat: "Outdoor" },
  { src: gallery3, alt: "Signature Wedding Menu", cat: "Dining" },
  { src: gallery4, alt: "Evening Festoon Lighting", cat: "Atmosphere" },
];

export default function Weddings() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry. Julie, our wedding coordinator, will be in touch shortly to discuss your big day.");
  };

  return (
    <div className="bg-sand overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center pt-20 border-b border-teal-soft overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={weddingHero} 
            alt="Weddings at The Flying Fish" 
            className="w-full h-full object-cover opacity-70" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/60 via-teal-dark/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <div className="w-20 h-px bg-sand mx-auto mb-8"></div>
            <h1 className="text-6xl md:text-9xl text-sand leading-[0.95] tracking-tight font-serif italic drop-shadow-2xl">
              Weddings at <br /><span className="font-light not-italic text-teal-light">The Flying Fish</span>
            </h1>
            <p className="text-sand text-xl md:text-2xl font-medium leading-relaxed italic max-w-2xl mx-auto drop-shadow-lg opacity-90">
              Celebrate your love in the heart of the Somerset countryside with a personal, intimate approach to your big day.
            </p>
            <div className="pt-8">
              <a href="#enquiry" className="inline-block px-14 py-6 bg-sand text-teal-dark rounded-sm text-xs font-black uppercase tracking-[0.4em] hover:bg-copper hover:text-sand transition-all shadow-3xl">
                Enquire About Weddings
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-48 px-6 bg-sand">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="flex justify-center mb-6">
            <Heart className="text-copper w-12 h-12 opacity-30" />
          </div>
          <h2 className="text-4xl md:text-7xl text-teal-dark font-serif italic leading-tight">A Venue with <span className="font-light not-italic text-teal-mid">Soul.</span></h2>
          <p className="text-ink/80 text-xl md:text-2xl leading-relaxed font-medium italic opacity-90 max-w-3xl mx-auto">
            Enjoy an unforgettable wedding day here at the Flying Fish, in our beautiful barn – a traditional family-run venue situated amid stunning South Somerset Countryside, yet just 5 minutes from the A303 and 10 minutes from the M5.
          </p>
          <div className="w-24 h-px bg-copper mx-auto"></div>
        </div>
      </section>

      {/* The Barn Venue */}
      <section className="py-32 md:py-48 bg-mist border-y border-teal-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <span className="text-copper uppercase tracking-[0.4em] text-[10px] font-black block">The Venue</span>
              <h2 className="text-4xl md:text-7xl text-teal-dark font-serif italic">The Historic <br /><span className="font-light not-italic text-teal-mid">Wedding Barn.</span></h2>
              <div className="space-y-8 text-ink/80 text-xl leading-relaxed italic font-medium">
                <p>
                  Our barn is full of character and charm but don’t be fooled by its rustic exterior… it is packed to the beams with all mod-cons including its own bar, restrooms, PA system, and disco lighting.
                </p>
                <p>
                  The Flying Fish Barn is fully licensed for marriage ceremonies and makes the most amazing rural wedding venue. We specialise in relaxed, informal weddings and work closely with you to help you create the wedding you want – the barn is a blank canvas for you to make your own.
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src={barnInterior} 
                alt="Barn Interior" 
                className="w-full h-[600px] object-cover rounded-sm shadow-2xl border border-teal-soft" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-teal-dark p-12 rounded-sm shadow-2xl border border-teal-soft hidden md:block">
                 <p className="text-sand font-serif italic text-3xl mb-2">Countryside Escape</p>
                 <p className="text-sand/50 text-[10px] uppercase tracking-[0.4em] font-black">5 mins from A303 | 10 mins from M5</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* What's Included */}
            <div className="space-y-16">
               <h3 className="text-3xl font-serif italic text-teal-dark border-b border-teal-dark/10 pb-6 uppercase tracking-widest text-[14px] font-black">What's Included</h3>
               <div className="grid grid-cols-2 gap-8">
                  {inclusions.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-ink font-medium">
                      <div className="w-10 h-10 rounded-sm bg-teal-dark/5 flex items-center justify-center text-teal-mid shadow-sm">{item.icon}</div>
                      <span className="text-xs uppercase tracking-widest font-black text-teal-dark/70">{item.label}</span>
                    </div>
                  ))}
               </div>
               <div className="bg-sand/60 p-10 border border-teal-dark/5 rounded-sm">
                  <p className="text-copper text-[10px] uppercase tracking-[0.4em] font-black mb-8">Decor & Atmosphere</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {decorHighlights.map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-ink/80 text-sm italic font-medium">
                        <CheckCircle2 size={16} className="text-teal-mid" /> {text}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

            {/* Outdoor Space */}
            <div className="space-y-16">
               <h3 className="text-3xl font-serif italic text-teal-dark border-b border-teal-dark/10 pb-6 uppercase tracking-widest text-[14px] font-black">The Gardens</h3>
               <div className="relative mb-12">
                 <img src={outdoorCeremony} alt="Outdoor Wedding Space" className="w-full h-72 object-cover rounded-sm shadow-xl" referrerPolicy="no-referrer" />
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {outdoorHighlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-ink font-medium">
                      <div className="w-10 h-10 rounded-sm bg-teal-dark/5 flex items-center justify-center text-teal-mid shadow-sm">{item.icon}</div>
                      <span className="text-xs uppercase tracking-widest font-black text-teal-dark/70">{item.label}</span>
                    </div>
                  ))}
               </div>
               <p className="text-ink/60 text-sm leading-relaxed italic font-medium border-l-2 border-copper/30 pl-6">
                 From festoon-lit evenings to uplit trees, our private gardens offer a magical setting for your arrival drinks and photography.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-48 px-6 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 space-y-6">
            <span className="text-copper uppercase tracking-[0.4em] text-[10px] font-black block">Our Advantage</span>
            <h2 className="text-4xl md:text-7xl text-teal-dark font-serif italic">Why The Flying Fish?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {upsells.map((upsell, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 border border-teal-soft bg-mist/20 hover:border-teal-mid transition-all rounded-sm group shadow-sm"
              >
                <div className="w-14 h-14 bg-sand rounded-sm flex items-center justify-center mb-8 shadow-sm group-hover:bg-teal-dark group-hover:text-sand transition-all duration-500">
                  {upsell.icon}
                </div>
                <h3 className="text-2xl font-serif italic text-teal-dark mb-4">{upsell.title}</h3>
                <p className="text-ink/70 text-sm font-medium leading-relaxed italic line-clamp-3">{upsell.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Food */}
      <section className="py-24 md:py-48 bg-teal-dark text-sand relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-light opacity-5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-7xl font-serif italic leading-[1.1] text-sand">
                Your Day, <br />
                <span className="font-light not-italic text-teal-light block md:translate-x-12">Your Way.</span>
              </h2>
              <div className="space-y-8 text-sand/80 text-xl leading-relaxed italic font-light">
                 <p>
                    From a traditional country affair with straw bales and a tractor to a Caribbean theme with a steel band and delicious home-made Rum Punch… we are here to bring your vision to life.
                 </p>
                 <p>
                    We offer a variety of food options including sumptuous hot, cold and mixed buffets, hog roasts and authentic Caribbean food. Our barn has to be seen to be believed – photographs just can’t do it justice.
                 </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-px bg-copper"></div>
                <p className="font-serif italic text-sand/60 text-xl">Restaurant Quality, Every Plate</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <img src={receptionTable} alt="Table Setting" className="w-full h-96 object-cover rounded-sm shadow-3xl border border-sand/10 mt-12" referrerPolicy="no-referrer" />
                <img src={chefPlate} alt="Plated Dish" className="w-full h-80 object-cover rounded-sm shadow-3xl border border-sand/10" referrerPolicy="no-referrer" />
            </div>
         </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 mb-24">
             <div className="space-y-6 text-center md:text-left">
                <span className="text-copper uppercase tracking-[0.4em] text-[10px] font-black block">Visual Inspiration</span>
                <h2 className="text-4xl md:text-7xl text-teal-dark font-serif italic">Your Future <span className="not-italic font-light text-teal-mid">Memories.</span></h2>
             </div>
             <Link to="/gallery" className="text-copper font-black uppercase tracking-[0.4em] text-[10px] border-b-2 border-copper/30 pb-3 hover:text-teal-dark hover:border-teal-dark transition-all">Full Gallery</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl cursor-pointer group border border-teal-soft bg-mist"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-teal-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px]">
                   <p className="text-teal-light text-[10px] uppercase tracking-[0.4em] font-black mb-4">{img.cat}</p>
                   <div className="p-3 border-2 border-sand/40 text-sand rounded-sm mb-4">
                      <Maximize2 size={24} />
                   </div>
                   <h4 className="text-sand font-serif italic text-lg">{img.alt}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-teal-dark/95 flex items-center justify-center p-6 backdrop-blur-lg" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl w-full h-full max-h-[85vh] flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)} className="absolute -top-16 right-0 text-sand hover:text-copper transition-colors">
              <X size={44} />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-full object-contain rounded-sm border border-sand/10 shadow-3xl" referrerPolicy="no-referrer" />
            <div className="mt-8 text-center text-sand">
                <p className="text-teal-light text-[10px] uppercase tracking-[0.5em] font-black mb-4">{selectedImage.cat}</p>
                <h3 className="text-3xl font-serif italic">{selectedImage.alt}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Personal Support Section */}
      <section className="py-24 md:py-48 px-6 bg-mist border-y border-teal-soft">
        <div className="max-w-5xl mx-auto rounded-sm bg-sand p-12 md:p-24 shadow-2xl border border-teal-soft relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-teal-dark flex items-center justify-center shadow-xl">
             <Heart className="text-sand w-10 h-10" />
          </div>
          <div className="text-center space-y-12">
            <h2 className="text-4xl md:text-7xl text-teal-dark font-serif italic underline decoration-copper/20 underline-offset-8">Blank Canvas, <span className="not-italic font-light">Endless Ideas.</span></h2>
            <div className="space-y-8 text-ink/80 text-xl leading-relaxed italic font-medium max-w-3xl mx-auto">
               <p>
                 Our Wedding Co-ordinator, Julie, will be on hand from your initial enquiry to the big day itself, to help you plan and execute your perfect Wedding day. Stuck for ideas? We can recommend everyone from DJs and bands to bouncy castles, magic mirrors, and photo booths.
               </p>
               <p>
                 We also offer 8 very spacious en-suite rooms known as The Flying Fish Stables, next to the barn, for your close friends and family, and can recommend additional accommodation nearby for your other guests.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section id="enquiry" className="py-24 md:py-48 px-6 bg-sand">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div className="space-y-8">
               <span className="text-copper uppercase tracking-[0.4em] text-[10px] font-black block">Get in Touch</span>
               <h3 className="text-4xl md:text-6xl text-teal-dark font-serif italic leading-tight">Start Planning <br />Your Day.</h3>
               <p className="text-ink/70 text-lg font-medium italic max-w-lg">
                 Whether you have a date in mind or are just beginning your search, we’d love to hear about your vision for a perfect wedding.
               </p>
            </div>
            
            <div className="space-y-8">
               <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-mist rounded-full flex items-center justify-center text-teal-mid">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-[0.3em] text-copper mb-1">Call Buddy or Kate</p>
                    <a href="tel:01823480467" className="text-2xl font-serif text-teal-dark hover:text-copper transition-colors">01823 480 467</a>
                  </div>
               </div>
               <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-mist rounded-full flex items-center justify-center text-teal-mid">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-[0.3em] text-copper mb-1">Email Us</p>
                    <a href="mailto:tffweddings@gmail.com" className="text-2xl font-serif text-teal-dark hover:text-copper transition-colors">tffweddings@gmail.com</a>
                  </div>
               </div>
            </div>
            
            <div className="p-10 bg-teal-dark text-sand rounded-sm shadow-xl inline-block">
               <div className="flex items-center gap-3 mb-4">
                 <Award size={16} className="text-teal-light" />
                 <p className="text-[10px] uppercase tracking-[0.4em] font-black text-teal-light">As seen on Hitched.co.uk</p>
               </div>
               <p className="font-serif italic text-2xl uppercase tracking-tighter">Limited 2025 Saturdays</p>
               <p className="text-xs mt-2 opacity-60">Enquire for seasonal mid-week offers</p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-mist p-12 md:p-16 rounded-sm border border-teal-soft shadow-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black text-copper">Full Name</label>
                  <input required type="text" className="w-full bg-transparent border-b-2 border-teal-dark/10 py-4 focus:outline-none focus:border-copper transition-all text-teal-dark font-serif italic text-lg" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black text-copper">Email Address</label>
                  <input required type="email" className="w-full bg-transparent border-b-2 border-teal-dark/10 py-4 focus:outline-none focus:border-copper transition-all text-teal-dark font-serif italic text-lg" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black text-copper">Wedding Date</label>
                  <input type="text" placeholder="Desired Month/Year" className="w-full bg-transparent border-b-2 border-teal-dark/10 py-4 focus:outline-none focus:border-copper transition-all text-teal-dark font-serif italic text-lg placeholder:text-ink/40" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black text-copper">Guest Count</label>
                  <input type="number" placeholder="Est. Numbers" className="w-full bg-transparent border-b-2 border-teal-dark/10 py-4 focus:outline-none focus:border-copper transition-all text-teal-dark font-serif italic text-lg placeholder:text-ink/40" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-copper">How can we help?</label>
                <textarea rows={4} className="w-full bg-transparent border-b-2 border-teal-dark/10 py-4 focus:outline-none focus:border-copper transition-all resize-none text-teal-dark font-serif italic text-lg placeholder:text-ink/40" placeholder="Tell us about your dream wedding..."></textarea>
              </div>
              <button type="submit" className="w-full py-6 bg-teal-dark text-sand rounded-sm text-xs font-bold uppercase tracking-[0.5em] hover:bg-copper transition-all hover:scale-[1.02] shadow-2xl">
                Send Wedding Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
