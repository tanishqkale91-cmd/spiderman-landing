function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-black border-t border-zinc-800/80 overflow-hidden"
    >
      {/* Background Radial Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.12),transparent_55%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        
        {/* Call To Action Box */}
        <div className="p-10 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 shadow-2xl text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            READY TO SWING INTO ACTION?
          </h2>

          <p className="text-zinc-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience Spider-Man on the biggest screen and witness the next
            chapter of Peter Parker's journey.
          </p>

          <a
            href="https://in.bookmyshow.com"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              mt-8
              px-10
              py-4
              bg-gradient-to-r
              from-red-600
              to-red-700
              rounded-xl
              text-white
              font-bold
              tracking-wider
              text-sm
              hover:scale-105
              transition-all
              duration-300
              shadow-[0_0_25px_rgba(220,38,38,0.4)]
              active:scale-95
            "
          >
            BOOK TICKETS NOW
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800/80 my-16"></div>

        {/* Links Navigation */}
        <div className="flex justify-center flex-wrap gap-10 text-sm font-medium">
          <a href="#home" className="text-zinc-400 hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="text-zinc-400 hover:text-white transition-colors">
            About
          </a>
          <a href="#cast" className="text-zinc-400 hover:text-white transition-colors">
            Cast
          </a>
          <a href="#trailer" className="text-zinc-400 hover:text-white transition-colors">
            Trailer
          </a>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-white tracking-wide">
            Spider-Man: Brand New Day
          </h3>

          <p className="mt-4 text-zinc-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            This is a fan-made educational project built using React and
            Tailwind CSS for learning purposes[cite: 4]. Spider-Man and all related
            characters, logos, and trademarks belong to Marvel Studios and Sony
            Pictures[cite: 4].
          </p>

          <p className="mt-6 text-zinc-400 text-sm">
            Made with ❤️ by <span className="text-red-500 font-semibold">Tanishq Kale</span>[cite: 4]
          </p>

          <p className="mt-2 text-zinc-600 text-xs">
            © 2026 All Rights Reserved[cite: 4]
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;