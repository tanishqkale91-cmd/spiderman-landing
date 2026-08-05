import Logo from "../assets/Logo.png";
import Transparent from "../assets/Transparent.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black"
    >
      {/* Red Glow */}
      <div
        className="
          absolute
          right-[-250px]
          top-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          md:w-[700px]
          md:h-[700px]
          lg:w-[900px]
          lg:h-[900px]
          rounded-full
          bg-red-600/10
          blur-[220px]
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.75)_100%)]"></div>

      {/* Main Container */}
      <div
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          justify-between
          px-6
          sm:px-10
          md:px-14
          lg:px-20
          xl:px-28
          2xl:px-36
        "
      >
        {/* Left Side */}
        <div className="w-full lg:w-[55%] xl:w-[52%] pt-28 lg:pt-0">

          {/* Logo */}
          <img
            src={Logo}
            alt="Spider-Man Brand New Day"
            className="
              w-[260px]
              sm:w-[380px]
              md:w-[520px]
              lg:w-[720px]
              xl:w-[820px]
              2xl:w-[900px]
              object-contain
              select-none
              mb-8
            "
          />

          {/* Release */}
          <p className="uppercase tracking-[5px] text-zinc-400 text-xs sm:text-sm mb-6">
            ONLY IN THEATRES • JULY 31, 2026
          </p>

          {/* Description */}
          <p className="text-zinc-300 text-base sm:text-lg leading-8 max-w-2xl mb-8">
            With the world forgetting Peter Parker, a mysterious new threat
            forces Spider-Man to embrace his destiny once again while protecting
            New York from an unseen darkness.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-yellow-400 text-xl">
              ★★★★★
            </span>

            <span className="text-zinc-300">
              8.4 IMDb
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">

            <a
              href="https://in.bookmyshow.com"
              target="_blank"
              rel="noreferrer"
              className="
                w-52
                text-center
                px-9
                py-4
                rounded-xl
                bg-red-600
                text-white
                font-semibold
                transition-all
                duration-300
                hover:bg-red-700
                hover:scale-105
                shadow-lg
                shadow-red-600/30
              "
            >
              BOOK NOW
            </a>

            <a
              href="#trailer"
              className="
                w-52
                text-center
                px-9
                py-4
                rounded-xl
                border
                border-zinc-500
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
                hover:border-white
              "
            >
              WATCH TRAILER
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div
          className="
            hidden
            lg:flex
            lg:w-[45%]
            xl:w-[48%]
            justify-end
            items-end
            self-end
          "
        >

          <img
            src={Transparent}
            alt="Spider-Man"
            className="
              h-[82%]
              xl:h-[90%]
              2xl:h-[95%]
              w-auto
              object-contain
              pointer-events-none
              select-none
              translate-x-8
              drop-shadow-[0_0_50px_rgba(255,0,0,0.30)]
            "
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;