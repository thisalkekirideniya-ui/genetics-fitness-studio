export default function Contact() {
  return (
    <div className="pt-40 pb-20 px-6 bg-premium">
      <div className="max-w-4xl mx-auto border border-white/5 bg-zinc-950 p-10 md:p-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair mb-4">Inquire About Membership</h2>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">Strictly Private. Strictly Confidential.</p>
        </div>
        <form className="space-y-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase text-gold tracking-widest font-bold">Full Name</label>
              <input type="text" className="bg-transparent border-b border-zinc-800 focus:border-gold outline-none py-2 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase text-gold tracking-widest font-bold">Email Address</label>
              <input type="email" className="bg-transparent border-b border-zinc-800 focus:border-gold outline-none py-2 text-white" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase text-gold tracking-widest font-bold">Message</label>
            <textarea rows="3" className="bg-transparent border-b border-zinc-800 focus:border-gold outline-none py-2 text-white"></textarea>
          </div>
          <button className="w-full bg-gold text-black py-4 font-bold uppercase text-xs tracking-[0.3em] hover:bg-white transition-colors">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}