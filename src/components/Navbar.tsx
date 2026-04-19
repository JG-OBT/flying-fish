import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Accommodation', path: '/accommodation' },
  { name: 'Weddings', path: '/weddings' },
  { name: 'About', path: '/about' },
  { name: 'Private Dining', path: '/private-dining' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-sand/95 backdrop-blur-sm py-4 border-b border-teal-soft shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Utensils className={`w-8 h-8 transition-colors ${isScrolled ? 'text-teal-mid' : 'text-teal-dark'}`} />
          <span className={`font-serif text-2xl tracking-tight transition-colors ${
            isScrolled ? 'text-teal-dark' : 'text-teal-dark'
          }`}>
            The Flying Fish
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] xl:text-xs font-bold tracking-[0.2em] uppercase transition-colors hover:text-copper whitespace-nowrap ${
                isScrolled ? 'text-teal-dark' : 'text-teal-dark'
              } ${location.pathname === link.path ? 'text-copper opacity-100' : 'opacity-60'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-teal-dark text-sand px-5 xl:px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-copper transition-all shrink-0"
          >
            Book a Table
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-teal-dark' : 'text-teal-dark'}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="fixed inset-0 h-screen bg-sand text-teal-dark flex flex-col items-center justify-center gap-8 lg:hidden z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-serif tracking-widest hover:text-copper transition-colors ${
                  location.pathname === link.path ? 'text-copper italic' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-6 bg-teal-dark text-sand px-10 py-4 rounded-sm text-lg font-bold uppercase tracking-widest hover:bg-copper transition-all"
            >
              Book a Table
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
