import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] pt-20 flex flex-col justify-between border-b-8 border-white w-full overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="absolute top-32 right-6 md:right-12 opacity-30 z-0">
        <div className="flex gap-1 h-12 md:h-16">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`bg-white ${i % 3 === 0 ? 'w-2' : i % 5 === 0 ? 'w-4' : 'w-1'}`}></div>
          ))}
        </div>
        <p className="text-white font-black text-[10px] md:text-xs uppercase mt-2 tracking-widest text-right">SYS.DEV.01</p>
      </div>

      <div className="absolute left-4 md:left-12 top-1/3 flex flex-col gap-2 opacity-20">
        <div className="w-2 h-2 bg-red-600"></div>
        <div className="w-2 h-2 bg-red-600"></div>
        <div className="w-2 h-2 bg-red-600"></div>
        <div className="w-2 h-12 bg-white"></div>
      </div>

      <div className="flex-grow flex flex-col justify-center px-6 lg:px-12 relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative"
        >
          <p className="text-red-600 font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-1 bg-red-600 block"></span>
            Hello, I'm
          </p>
          
          <div className="relative w-full flex justify-between items-center">
            <h1 className="text-[18vw] sm:text-[15vw] md:text-[12rem] font-black text-white uppercase tracking-tighter leading-[0.85] mb-8 relative z-10">
              Artur<br />Kich
            </h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] grayscale hover:grayscale-0 transition-all duration-700 z-20"
            >
              <img
                src="/foto-perfil.jpg"
                alt="Artur Kich"
                className="w-full h-full object-cover border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-red-600 rounded-full flex items-center justify-center bg-[#0a0a0a] z-30">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  className="text-red-600 text-[10px] font-black uppercase tracking-widest text-center leading-none"
                >
                  <span className="block mb-1">BUILD</span>
                  <span className="block mb-1 text-white">*</span>
                  <span className="block">SHIP</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-8 md:gap-16 mt-8 md:mt-12 border-t-4 border-white/20 pt-8 w-full max-w-4xl">
            <div className="flex-1">
              <p className="text-red-600 font-bold uppercase text-xs tracking-widest mb-2">Role</p>
              <p className="text-white font-black text-lg md:text-xl uppercase tracking-tight">Full Stack Software Engineer</p>
            </div>
            <div className="flex-1">
              <p className="text-red-600 font-bold uppercase text-xs tracking-widest mb-2">Location</p>
              <p className="text-white font-black text-lg md:text-xl uppercase tracking-tight">Brazil</p>
            </div>
            <div className="flex-1 hidden md:block">
              <p className="text-red-600 font-bold uppercase text-xs tracking-widest mb-2">Status</p>
              <p className="text-white font-black text-lg md:text-xl uppercase tracking-tight">Available</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-red-600 py-3 md:py-4 overflow-hidden border-t-8 border-white w-full relative z-20">
        <motion.div
          className="flex whitespace-nowrap text-white font-black uppercase text-2xl md:text-4xl tracking-widest"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        >
          <span className="pr-8">FULL STACK SOFTWARE ENGINEER • REACT • PYTHON • SPRING BOOT • AWS • SQL • </span>
          <span className="pr-8">FULL STACK SOFTWARE ENGINEER • REACT • PYTHON • SPRING BOOT • AWS • SQL • </span>
        </motion.div>
      </div>
    </section>
  );
}