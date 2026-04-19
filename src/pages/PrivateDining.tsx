import { motion } from 'motion/react';
import { GlassWater, Users, Calendar, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

import privateDiningHero from '../assets/images/private-dining-hero.jpg';
import gallery1 from '../assets/images/gallery-1.jpg';

const eventTypes = [
  {
    icon: <GlassWater className="text-teal-mid" />,
    title: "Birthdays & Anniversaries",
    desc: "Mark your milestone in style with a personalized tasting menu and bespoke wine pairings."
  },
  {
    icon: <Users className="text-teal-mid" />,
    title: "Corporate Dinners",
    desc: "Professional yet warm, our private spaces are ideal for product launches, networking, and team celebrations."
  },
  {
    icon: <Calendar className="text-teal-mid" />,
    title: "Intimate Weddings",
    desc: "Exchange vows in our nearby parish church and enjoy a refined reception in the countryside with up to 60 guests."
  },
  {
    icon: <Music className="text-teal-mid" />,
    title: "Shooting Parties",
    desc: "A traditional favorite in Somerset. We offer early breakfasts and late-night hearty banquets for sporting groups."
  }
];

export default function PrivateDining() {
  return (
    <div className="bg-sand">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center pt-20 border-b border-teal-soft overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={privateDiningHero} 
            alt="Private Dining Table Setup" 
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
            <span className="text-sand uppercase tracking-[0.4em] text-[10px] font-black block">Private Dining</span>
            <h1 className="text-5xl md:text-8xl text-sand leading-[1.05] tracking-tight font-serif italic italic drop-shadow-lg">
              Spaces for <br /><span className="font-light not-italic text-teal-light">Connections</span>
            </h1>
            <p className="text-sand/90 text-xl font-medium leading-relaxed italic max-w-lg drop-shadow-md">
              From intimate candlelit dinners in 'The Snug' to grand celebrations in our Garden Room, 
              we offer the perfect sanctuary for your most important gatherings.
            </p>
            <Link to="/contact" className="inline-block px-12 py-5 bg-sand text-teal-dark rounded-sm text-xs font-bold uppercase tracking-[0.3em] hover:bg-copper hover:text-sand transition-all shadow-2xl">
              Start Planning
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro info */}
      <section className="py-24 md:py-48 px-6 bg-sand">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-7xl text-teal-dark leading-tight font-serif italic">Tailored to your <span className="font-light not-italic text-teal-mid">vision.</span></h2>
            <p className="text-ink/80 text-xl leading-relaxed font-normal">
              We understand that every event is unique. Our dedicated events team works closely with you to curate every detail—from floral arrangements to custom menus that tell your story.
            </p>
            <div className="grid grid-cols-2 gap-10 border-t border-teal-dark/10 pt-12">
              <div>
                <p className="text-teal-mid text-2xl font-serif italic font-medium">The Snug</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-ink/40 mt-3 font-black font-sans">Up to 12 Guests</p>
              </div>
              <div>
                <p className="text-teal-mid text-2xl font-serif italic font-medium">Garden Room</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-ink/40 mt-3 font-black font-sans">Up to 40 Guests</p>
              </div>
              <div>
                <p className="text-teal-mid text-2xl font-serif italic font-medium">Full Hire</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-ink/40 mt-3 font-black font-sans">Up to 90 Guests</p>
              </div>
              <div>
                <p className="text-teal-mid text-2xl font-serif italic font-medium">Terrace</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-ink/40 mt-3 font-black font-sans">Up to 50 Guests</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <img 
              src={gallery1} 
              alt="Events layout" 
              className="w-full h-[650px] object-cover rounded-sm shadow-2xl border border-teal-soft" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-teal-dark p-12 rounded-sm shadow-2xl hidden md:block border border-teal-soft">
              <p className="text-3xl font-serif italic mb-3 text-sand">Bespoke</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-sand/60">Unique culinary experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 md:py-48 px-6 bg-mist text-teal-dark border-y border-teal-soft">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {eventTypes.map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="space-y-8 bg-sand/60 p-10 border border-teal-dark/5 hover:border-teal-mid rounded-sm transition-all shadow-sm"
              >
                <div className="w-14 h-14 rounded-sm bg-teal-dark/5 flex items-center justify-center text-teal-mid group-hover:bg-teal-dark group-hover:text-sand transition-all duration-500 shadow-sm">
                  {event.icon}
                </div>
                <h3 className="text-2xl font-serif italic text-teal-dark font-medium">{event.title}</h3>
                <p className="text-ink/70 text-sm font-medium leading-relaxed uppercase tracking-wider">
                  {event.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Callout */}
      <section className="py-24 md:py-48 px-6 bg-sand">
        <div className="max-w-4xl mx-auto rounded-sm bg-mist p-12 md:p-24 text-center space-y-14 border border-teal-soft shadow-xl">
          <h2 className="text-4xl md:text-7xl text-teal-dark font-serif italic font-light leading-tight">Let’s Start <span className="not-italic text-teal-mid underline decoration-copper/30 decoration-offset-8">Planning.</span></h2>
          <p className="text-ink/80 text-xl font-medium max-w-xl mx-auto leading-relaxed italic">
            Ready to discuss your event? Our events manager, Sarah, is available to walk you through our spaces and menu options.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
             <Link to="/contact" className="px-12 py-6 bg-teal-dark text-sand rounded-sm text-xs font-bold uppercase tracking-[0.3em] hover:bg-copper transition-all shadow-2xl">
                Contact Events Team
             </Link>
             <button className="px-12 py-6 border-2 border-teal-dark text-teal-dark rounded-sm text-xs font-bold uppercase tracking-[0.3em] hover:bg-teal-dark hover:text-sand transition-all">
                Events Brochure
             </button>
          </div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-teal-mid font-black">
            Average response time: 24 Hours
          </p>
        </div>
      </section>
    </div>
  );
}
