import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry. Our team will get back to you shortly.");
  };

  return (
    <div className="bg-sand min-h-screen">
      {/* Header */}
      <section className="bg-mist pt-48 pb-24 relative overflow-hidden border-b border-teal-soft">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-px bg-copper mx-auto mb-10"></div>
            <span className="text-copper uppercase tracking-[0.4em] text-[10px] font-black block mb-4">Reservations</span>
            <h1 className="text-5xl md:text-8xl text-teal-dark italic font-serif leading-tight">Join Us</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-40 px-6 bg-sand">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Booking Info */}
          <div className="space-y-20">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl text-teal-dark leading-tight font-serif italic text-balance">Book a <span className="font-light not-italic text-teal-mid underline decoration-copper/30 decoration-offset-8">Table</span></h2>
              <p className="text-ink/80 font-medium leading-relaxed text-lg lg:text-xl italic">
                We strongly recommend booking in advance, especially for weekend dining. For groups larger than 8, please contact us directly via phone or the enquiry form.
              </p>
              <div className="flex gap-6 pt-6">
                <a 
                  href="https://www.opentable.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-12 py-6 bg-teal-dark text-sand rounded-sm text-xs font-bold uppercase tracking-[0.3em] hover:bg-copper transition-all flex items-center gap-4 shadow-xl"
                >
                  Book via OpenTable <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-copper uppercase tracking-[0.3em] text-[10px] font-black">
                    <Phone size={14} className="text-teal-mid" /> Call Us
                </div>
                <a href="tel:01823442990" className="block text-3xl font-serif italic text-teal-dark hover:text-copper transition-colors font-medium">01823 442 990</a>
                <p className="text-[10px] text-ink/40 italic uppercase tracking-[0.4em] font-black">10am - 10pm daily</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-copper uppercase tracking-[0.3em] text-[10px] font-black">
                    <Mail size={14} className="text-teal-mid" /> Email Us
                </div>
                <a href="mailto:hello@theflyingfish.co.uk" className="block text-xl font-serif text-teal-dark hover:text-copper transition-colors font-medium">hello@theflyingfish.co.uk</a>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-copper uppercase tracking-[0.3em] text-[10px] font-black">
                    <MapPin size={14} className="text-teal-mid" /> Find Us
                </div>
                <p className="text-xl font-serif text-teal-dark italic font-medium">Wood Road, Windmill Hill, near Ilminster, Somerset, TA19 9NX</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-copper uppercase tracking-[0.3em] text-[10px] font-black">
                    <Clock size={14} className="text-teal-mid" /> Hours
                </div>
                <div className="space-y-4 text-xs text-ink/70 font-bold uppercase tracking-[0.2em]">
                    <div className="border-b border-teal-dark/5 pb-2">
                        <p>Tue - Thu: 5pm - 11pm</p>
                        <p className="text-[10px] italic text-teal-mid opacity-70">(Food 5.30pm - 8.30pm)</p>
                    </div>
                    <div className="border-b border-teal-dark/5 pb-2">
                        <p>Fri: 12pm - 3pm & 5pm - 11pm</p>
                        <p className="text-[10px] italic text-teal-mid opacity-70">(Food 12pm - 2pm & 5.30pm - 8.30pm)</p>
                    </div>
                    <div className="border-b border-teal-dark/5 pb-2">
                        <p>Sat: 12pm - 11pm</p>
                        <p className="text-[10px] italic text-teal-mid opacity-70">(Food 12pm - 2pm & 5.30pm - 8.30pm)</p>
                    </div>
                    <div className="border-b border-teal-dark/5 pb-2">
                        <p>Sun: 12pm - 6pm</p>
                        <p className="text-[10px] italic text-teal-mid opacity-70">(Food 12pm - 2.30pm)</p>
                    </div>
                    <p className="italic pt-2 text-copper font-black opacity-80">Closed on Mondays</p>
                </div>
              </div>
            </div>

            {/* Interactive Google Map */}
            <div className="h-96 w-full bg-mist rounded-sm overflow-hidden border border-teal-soft relative group transition-all duration-700 shadow-sm hover:shadow-xl">
               <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=Wood%20Road%2C%20Windmill%20Hill%2C%20near%20Ilminster%2C%20Somerset%2C%20TA19%209NX&t=&z=14&ie=UTF8&iwloc=&output=embed"
                title="The Flying Fish Location"
                className="filter grayscale-[20%] contrast-[1.1] brightness-[0.9] hover:grayscale-0 transition-all duration-1000"
               ></iframe>
            </div>
          </div>

          {/* Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-mist text-teal-dark p-10 md:p-20 rounded-sm border border-teal-soft shadow-2xl h-fit relative mt-12 lg:mt-0"
          >
            <div className="space-y-8 mb-16 text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-serif italic text-teal-dark font-medium">General Enquiry</h3>
              <p className="text-ink/70 text-base font-medium leading-relaxed italic">If you have a question about our menu, events, or accessibility, please use the form below.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black text-copper">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-transparent border-b-2 border-teal-dark/10 py-5 focus:outline-none focus:border-copper transition-all placeholder:text-ink/40 text-teal-dark font-serif italic text-lg"
                  />
                </div>
                <div className="space-y-4">
                   <label className="text-[10px] uppercase tracking-[0.4em] font-black text-copper">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-transparent border-b-2 border-teal-dark/10 py-5 focus:outline-none focus:border-copper transition-all placeholder:text-ink/40 text-teal-dark font-serif italic text-lg"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-copper">Nature of enquiry</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b-2 border-teal-dark/10 py-5 focus:outline-none focus:border-copper transition-all appearance-none cursor-pointer text-teal-dark font-serif italic text-lg">
                    <option className="bg-sand text-teal-dark">General Message</option>
                    <option className="bg-sand text-teal-dark">Private Event Enquiry</option>
                    <option className="bg-sand text-teal-dark">Large Group Booking (8+)</option>
                    <option className="bg-sand text-teal-dark">Press & Marketing</option>
                    <option className="bg-sand text-teal-dark">Careers</option>
                  </select>
                  <div className="absolute right-0 bottom-6 pointer-events-none">
                    <ExternalLink size={14} className="text-copper opacity-50" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-copper">Your Message</label>
                <textarea 
                  required 
                  rows={4} 
                  placeholder="How can we help?"
                  className="w-full bg-transparent border-b-2 border-teal-dark/10 py-5 focus:outline-none focus:border-copper transition-all resize-none placeholder:text-ink/40 text-teal-dark font-serif italic text-lg"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-6 bg-teal-dark text-sand rounded-sm text-xs font-bold uppercase tracking-[0.4em] hover:bg-copper transition-all mt-10 shadow-xl border-none"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
