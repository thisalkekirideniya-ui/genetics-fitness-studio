export default function About() {
  return (
    <div className="pt-40 pb-20 px-6 md:px-20 bg-premium">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-gold text-xs uppercase tracking-[0.4em] mb-4">Our Heritage</h2>
          <h1 className="text-5xl font-playfair mb-8">Unrivaled Excellence Since 2018</h1>
          <p className="text-zinc-400 text-lg leading-relaxed font-light mb-8">
            We don't just provide equipment; we provide a sanctuary. Our facility is designed 
            to offer the ultimate environment for those who seek the highest level of physical training 
            and mental clarity.
          </p>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="text-3xl font-playfair text-gold">24/7</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500">Concierge Access</p>
            </div>
            <div>
              <p className="text-3xl font-playfair text-gold">Bespoke</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500">Training Programs</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1000" className="w-full grayscale border border-white/10 p-2" alt="Gym" />
        </div>
      </div>
    </div>
  );
}