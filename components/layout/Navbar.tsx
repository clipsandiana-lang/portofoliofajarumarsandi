import { navigation } from "@/data/navigation";
export default function Navbar() {
    return (
    <header className="fixed inset-x-0 top-6 z-50">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-8 backdrop-blur-xl">
          {/* Logo */}
          <a
            href="/"
        className="text-3xl font-black tracking-tight"
        >
        <span className="text-white">F</span>
        <span className="text-gold">U</span>
        </a>
  
          {/* Menu */}
          <nav className="hidden items-center gap-10 md:flex">
            {navigation.map((item) => (
            <a
            key={item.title}
        href={item.href}
            className="text-sm transition hover:text-gold"
            >
            {item.title}
    </a>
  ))}
        </nav>
  
          {/* Button */}
          <a
              href="/resumefajarumarsandi.pdf"
              download
              className="rounded-full border border-gold px-8 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-black"
            >
              Download CV
            </a>
        </div>
      </header>
    );
  }