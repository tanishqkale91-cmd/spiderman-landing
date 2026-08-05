
function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-black border-t border-zinc-800 overflow-hidden"
    >
      {/* Red Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.12),transparent_55%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* CTA */}

        <div className="text-center">

          <h2 className="text-5xl font-black text-white">
            READY TO SWING INTO ACTION?
          </h2>

          <p className="text-zinc-400 mt-5 text-lg max-w-2xl mx-auto">
            Experience Spider-Man on the biggest screen and witness the next
            chapter of Peter Parker's journey.
          </p>

          <a
            href="https://in.bookmyshow.com"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              mt-10
              px-8
              py-4
              bg-red-600
              rounded-lg
              text-white
              font-semibold
              hover:bg-red-700
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              shadow-red-600/30
            "
          >
            BOOK TICKETS
          </a>

        </div>

        {/* Divider */}

        <div className="border-t border-zinc-800 my-16"></div>

        {/* Navigation */}

        <div className="flex justify-center flex-wrap gap-8">

          <a href="#home" className="text-zinc-400 hover:text-white transition">
            Home
          </a>

          <a href="#about" className="text-zinc-400 hover:text-white transition">
            About
          </a>

          <a href="#cast" className="text-zinc-400 hover:text-white transition">
            Cast
          </a>

          <a href="#trailer" className="text-zinc-400 hover:text-white transition">
            Trailer
          </a>

        </div>

        {/* Copyright */}

        <div className="mt-16 text-center">

          <h3 className="text-2xl font-bold text-white">
            Spider-Man: Brand New Day
          </h3>

          <p className="mt-5 text-zinc-500 max-w-3xl mx-auto leading-8">
            This is a fan-made educational project built using React and
            Tailwind CSS for learning purposes. Spider-Man and all related
            characters, logos and trademarks belong to Marvel Studios and Sony
            Pictures.
          </p>

          <p className="mt-8 text-zinc-400">
            Made with ❤️ by <span className="text-red-500 font-semibold">Tanishq Kale</span>
          </p>

          <p className="mt-3 text-zinc-600 text-sm">
            © 2026 All Rights Reserved
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;