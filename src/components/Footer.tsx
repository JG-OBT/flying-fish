import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Utensils, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mist text-teal-dark pt-24 pb-12 border-t border-teal-soft">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand & Socials */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <Utensils className="w-8 h-8 text-teal-mid" />
            <span className="font-serif text-2xl tracking-tight text-teal-dark">The Flying Fish</span>
          </Link>
          <p className="text-sm text-ink/70 leading-relaxed max-w-xs text-balance font-medium">
            Refined dining in the heart of Somerset. Celebrating local ingredients and modern British craftsmanship.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 border border-teal-dark/10 rounded-sm hover:bg-teal-dark hover:text-mist transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 border border-teal-dark/10 rounded-sm hover:bg-teal-dark hover:text-mist transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 border border-teal-dark/10 rounded-sm hover:bg-teal-dark hover:text-mist transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg mb-8 text-teal-dark italic">Explore</h4>
          <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.2em]">
            <li><Link to="/menu" className="hover:text-copper transition-colors opacity-70 hover:opacity-100">Menu</Link></li>
            <li><Link to="/accommodation" className="hover:text-copper transition-colors opacity-70 hover:opacity-100">Stay</Link></li>
            <li><Link to="/weddings" className="hover:text-copper transition-colors opacity-70 hover:opacity-100">Weddings</Link></li>
            <li><Link to="/about" className="hover:text-copper transition-colors opacity-70 hover:opacity-100">About</Link></li>
            <li><Link to="/private-dining" className="hover:text-copper transition-colors opacity-70 hover:opacity-100">Events</Link></li>
            <li><Link to="/gallery" className="hover:text-copper transition-colors opacity-70 hover:opacity-100">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-copper transition-colors opacity-70 hover:opacity-100">Contact</Link></li>
          </ul>
        </div>

        {/* Opening Times */}
        <div>
          <h4 className="font-serif text-lg mb-8 text-teal-dark italic">Opening Hours</h4>
          <ul className="space-y-3 text-sm text-ink/80">
            <li className="flex justify-between border-b border-teal-dark/5 pb-1"><span>Mon</span> <span>Closed</span></li>
            <li className="flex justify-between border-b border-teal-dark/5 pb-1"><span>Tue - Thu</span> <span>17:00 - 23:00</span></li>
            <li className="flex justify-between border-b border-teal-dark/5 pb-1"><span>Fri - Sat</span> <span>12:00 - 23:00</span></li>
            <li className="flex justify-between border-b border-teal-dark/5 pb-1"><span>Sunday</span> <span>12:00 - 18:00</span></li>
            <li className="pt-4 italic text-teal-mid text-[10px] leading-tight font-medium uppercase tracking-widest">See Contact page for food service times</li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-4">
          <h4 className="font-serif text-lg mb-8 text-teal-dark italic">Find Us</h4>
          <div className="flex gap-3 text-sm text-ink/80">
            <MapPin className="text-teal-mid shrink-0" size={18} />
            <address className="not-italic font-medium">
              Wood Road, Windmill Hill,<br />
              near Ilminster, Somerset, TA19 9NX
            </address>
          </div>
          <div className="flex gap-3 text-sm text-ink/80">
            <Phone className="text-teal-mid shrink-0" size={18} />
            <a href="tel:01823442990" className="hover:text-copper transition-colors font-medium">01823 442 990</a>
          </div>
          <div className="flex gap-3 text-sm text-ink/80">
            <Mail className="text-teal-mid shrink-0" size={18} />
            <a href="mailto:hello@theflyingfish.co.uk" className="hover:text-copper transition-colors font-medium">hello@theflyingfish.co.uk</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-10 border-t border-teal-dark/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-teal-dark/50 font-bold">
        <p>© {currentYear} The Flying Fish Limited. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="/privacy-policy" className="hover:text-copper transition-colors">Privacy Policy</Link>
          <Link to="/cookie-policy" className="hover:text-copper transition-colors">Cookie Policy</Link>
          <button className="hover:text-copper transition-colors">Manage Cookies</button>
        </div>
      </div>
    </footer>
  );
}
