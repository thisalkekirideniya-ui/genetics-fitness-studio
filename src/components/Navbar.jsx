import { useState } from 'react'; // Added for state
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Added for icons
import { motion, AnimatePresence } from 'framer-motion'; // Added for luxury animation

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu

  return (
    <nav className="fixed w-full z-50 flex justify-between items-center px-6 md:px-16 py-6 bg-black/80 backdrop-blur-lg border-b border-white/5">
      {/* --- YOUR ORIGINAL LOGO --- */}
      <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-playfair font-bold tracking-[0.2em] text-white">
        GENETICS <span className="text-gold">GYM</span>
      </Link>

      {/* --- YOUR ORIGINAL DESKTOP LINKS --- */}
      <div className="hidden md:flex space-x-10 uppercase text-[10px] tracking-[0.3em] font-medium text-white">
        <Link to="/" className="hover:text-gold transition-colors">Home</Link>
        <Link to="/about" className="hover:text-gold transition-colors">About</Link>
        <Link to="/pricing" className="hover:text-gold transition-colors">Pricing</Link>
        <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
      </div>

      {/* --- RIGHT SECTION (Join Button + Mobile Toggle) --- */}
      <div className="flex items-center gap-4">
        {/* Your original button - now hidden on mobile to save space */}
        <Link to="/contact" className="hidden md:block px-6 py-2 border border-gold text-gold text-[10px] uppercase tracking-widest hover:bg-gold hover:text-black transition-all">
          Join Now
        </Link>

        {/* --- MOBILE TOGGLE ICON --- */}
        <button 
          className="md:hidden text-gold focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- NEW: MOBILE NAV OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 border-b border-white/10 flex flex-col items-center py-8 space-y-6 md:hidden overflow-hidden"
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="text-white uppercase tracking-[0.3em] text-[12px] hover:text-gold">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-white uppercase tracking-[0.3em] text-[12px] hover:text-gold">About</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="text-white uppercase tracking-[0.3em] text-[12px] hover:text-gold">Pricing</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white uppercase tracking-[0.3em] text-[12px] hover:text-gold">Contact</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="px-8 py-3 border border-gold text-gold text-[10px] uppercase tracking-widest">
              Join Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}