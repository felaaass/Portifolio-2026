export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a] border-b-4 border-red-600">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="text-white font-black uppercase tracking-widest text-xl">Artur.K</span>
        <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-white">
          <a href="#about" className="hover:text-red-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-red-600 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-red-600 transition-colors">Projects</a>
        </nav>
        <a href="mailto:arturkich6@gmail.com" className="text-black font-black uppercase text-sm bg-red-600 px-6 py-3 hover:bg-white transition-colors">
          Contact
        </a>
      </div>
    </header>
  );
}