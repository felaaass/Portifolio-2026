export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-8 px-6 lg:px-12 text-white border-t-8 border-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-none hover:text-red-600 transition-colors duration-500 cursor-pointer">
          Let's Work
        </h2>
        <div className="mt-12 flex flex-col md:flex-row gap-8 md:gap-16 border-t-4 border-white/20 w-full pt-12 justify-center items-center">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arturkich6@gmail.com" target="_blank" rel="noreferrer" className="text-xl md:text-3xl font-black uppercase tracking-tight hover:text-red-600 transition-colors">
            arturkich6@gmail.com
          </a>
          <span className="hidden md:block text-red-600 text-3xl font-black">•</span>
          <a href="https://wa.me/5546999797727" target="_blank" rel="noreferrer" className="text-xl md:text-3xl font-black uppercase tracking-tight hover:text-red-600 transition-colors">
            +55 46 99979-7727
          </a>
          <span className="hidden md:block text-red-600 text-3xl font-black">•</span>
          <a href="https://linkedin.com/in/artur-roberto-müller-kich-2235b5269" target="_blank" rel="noreferrer" className="text-xl md:text-3xl font-black uppercase tracking-tight hover:text-red-600 transition-colors">
            LinkedIn
          </a>
        </div>
        <div className="mt-24 w-full flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
          <span>© 2026 Artur Roberto Müller Kich</span>
          <span>Planalto, PR, Brazil</span>
        </div>
      </div>
    </footer>
  );
}