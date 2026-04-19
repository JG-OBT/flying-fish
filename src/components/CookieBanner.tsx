import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineAll = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-teal-dark text-sand border border-teal-soft/20 rounded-sm shadow-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative">
            <div className="flex-grow space-y-4 text-center md:text-left">
              <h5 className="font-serif text-2xl italic text-sand font-light">Taste & Technology</h5>
              <p className="text-[10px] text-sand/70 leading-relaxed uppercase tracking-[0.2em] font-black italic">
                We use cookies to enhance your experience and analyze our traffic. By clicking "Accept All", 
                you consent to our use of cookies as described in our{' '}
                <Link to="/cookie-policy" className="text-copper underline underline-offset-8 hover:text-teal-light transition-colors">
                  Cookie Policy
                </Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto shrink-0">
              <button
                onClick={declineAll}
                className="px-8 py-4 rounded-sm border-2 border-sand/10 text-[10px] font-black text-sand/60 hover:text-sand hover:border-sand transition-all uppercase tracking-[0.3em]"
              >
                Essential Only
              </button>
              <button
                onClick={acceptAll}
                className="px-8 py-4 rounded-sm bg-sand text-teal-dark text-[10px] font-black hover:bg-copper hover:text-sand transition-all shadow-2xl uppercase tracking-[0.3em]"
              >
                Accept All
              </button>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 text-sand/20 hover:text-copper transition-colors"
              aria-label="Close banner"
            >
              <X size={24} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
