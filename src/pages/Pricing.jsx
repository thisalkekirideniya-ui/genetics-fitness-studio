import { Check } from 'lucide-react';

const plans = [
  { 
    name: "Silver", 
    price: "15,500", 
    services: ["24/7 Access", "Luxury Locker Room", "Sauna Access"] 
  },
  { 
    name: "Gold", 
    price: "28,000", 
    services: ["Private Trainer", "Nutrition Plans", "Guest Passes", "Spa Access", "Steam Room"] 
  },
  { 
    name: "Platinum", 
    price: "55,000", 
    services: ["Personal Chef", "Physiotherapy", "Unlimited PT Sessions", "Valet Parking", "Laundry Service"] 
  }
];

export default function Pricing() {
  return (
    <div className="pt-40 pb-20 px-6 bg-black">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-playfair mb-4 italic text-gold">Membership Packages</h1>
        <p className="text-zinc-500 uppercase tracking-widest text-[10px]">Select your tier of excellence</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div key={i} className="bg-zinc-950 border border-white/5 p-12 hover:border-gold transition-all group relative overflow-hidden">
            {/* Subtle glow effect for Platinum */}
            {plan.name === "Platinum" && (
              <div className="absolute top-0 right-0 bg-gold text-black text-[8px] font-bold px-4 py-1 uppercase tracking-tighter transform rotate-45 translate-x-4 translate-y-2">
                Most Exclusive
              </div>
            )}

            <h3 className="text-xl font-playfair tracking-widest mb-2 uppercase">{plan.name}</h3>
            
            <div className="text-4xl font-bold mb-8 font-playfair text-gold flex items-baseline gap-1">
              <span className="text-lg">LKR</span> 
              {plan.price}
              <span className="text-xs text-zinc-600 italic">/mo</span>
            </div>

            <ul className="space-y-4 mb-12">
              {plan.services.map((s, idx) => (
                <li key={idx} className="flex items-center gap-4 text-xs text-zinc-400 uppercase tracking-widest font-light">
                  <Check size={14} className="text-gold shrink-0" /> 
                  {s}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 border border-zinc-800 group-hover:border-gold group-hover:text-gold transition-all uppercase text-[10px] tracking-[0.2em] font-bold">
              Inquire Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}