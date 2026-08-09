import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4 transition-all duration-300">
      <nav
        className={`
          w-full
          max-w-6xl
          rounded-full
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-1"
              : "bg-transparent py-2"
          }
        `}
      >
        {/* Top Bar Container */}
        <div className="flex items-center justify-between px-6 py-3">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group relative flex items-center gap-2 text-2xl font-black text-white transition-transform duration-300 hover:scale-110"
          >
            <span className="drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">🕷️</span>
            <span className="hidden sm:inline-block text-xs tracking-widest text-zinc-400 group-hover:text-red-500 transition-colors uppercase">
              Brand New Day
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#about"
              className="text-zinc-300 hover:text-white transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </a>

            <a
              href="#cast"
              className="text-zinc-300 hover:text-white transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
            >
              Cast
            </a>

            <a
              href="#trailer"
              className="text-zinc-300 hover:text-white transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
            >
              Trailer
            </a>

            <a
              href="https://in.bookmyshow.com"
              target="_blank"
              rel="noreferrer"
              className="
                px-6
                py-2.5
                rounded-full
                bg-gradient-to-r
                from-red-600
                to-red-700
                text-white
                font-semibold
                text-xs
                tracking-wider
                uppercase
                transition-all
                duration-300
                hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]
                hover:scale-105
                active:scale-95
              "
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-zinc-200 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-500
            ease-in-out
            ${menuOpen ? "max-h-80 opacity-100 pb-6 pt-2 px-6" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col items-center gap-5 border-t border-zinc-800/60 pt-4">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-white text-base font-medium transition-colors"
            >
              About
            </a>

            <a
              href="#cast"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-white text-base font-medium transition-colors"
            >
              Cast
            </a>

            <a
              href="#trailer"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-white text-base font-medium transition-colors"
            >
              Trailer
            </a>

            <a
              href="https://in.bookmyshow.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="
                w-full
                text-center
                py-3
                rounded-full
                bg-red-600
                text-white
                font-semibold
                text-sm
                shadow-lg
                shadow-red-600/30
              "
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;