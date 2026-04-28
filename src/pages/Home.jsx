import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative h-screen bg-black flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070" 
          className="w-full h-full object-cover opacity-40 grayscale" 
          alt="Luxury Gym" 
        />
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center px-4"
      >
        <p className="text-gold uppercase tracking-[0.5em] text-xs mb-4">Exclusive Private Membership</p>
        <h1 className="text-6xl md:text-9xl font-playfair font-bold text-white mb-8 tracking-tighter">
          THE <span className="italic">ELITE</span> CLUB
        </h1>
        <div className="flex justify-center gap-6">
          <button className="px-10 py-4 bg-gold text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-all">Book a Tour</button>
        </div>
      </motion.div>
    </div>
  );
}