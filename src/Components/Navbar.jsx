import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-5">
      <nav
        className={`
          w-full
          max-w-6xl
          rounded-full
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 shadow-xl shadow-black/30"
              : "bg-transparent"
          }
        `}
      >
        {/* Top Navbar */}
        <div className="flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-black text-white hover:scale-110 transition-transform duration-300"
          >
            🕷
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#about"
              className="text-zinc-300 hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              About
            </a>

            <a
              href="#cast"
              className="text-zinc-300 hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              Cast
            </a>

            <a
              href="#trailer"
              className="text-zinc-300 hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              Trailer
            </a>

            <a
              href="https://in.bookmyshow.com"
              target="_blank"
              rel="noreferrer"
              className="
                px-5
                py-2
                rounded-full
                bg-red-600
                text-white
                font-semibold
                transition-all
                duration-300
                hover:bg-red-700
                hover:scale-105
                hover:shadow-lg
                hover:shadow-red-600/30
              "
            >
              Book Now
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-500
            ${
              menuOpen
                ? "max-h-96 opacity-100 pb-6"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="flex flex-col items-center gap-6">

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-white"
            >
              About
            </a>

            <a
              href="#cast"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-white"
            >
              Cast
            </a>

            <a
              href="#trailer"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-white"
            >
              Trailer
            </a>

            <a
              href="https://in.bookmyshow.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="
                px-6
                py-3
                rounded-full
                bg-red-600
                text-white
                font-semibold
                hover:bg-red-700
                transition-all
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