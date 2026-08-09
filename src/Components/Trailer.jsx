function Trailer() {
  const scrollToTrailer = () => {
    document.getElementById("trailer-video")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      id="trailer"
      className="relative bg-black py-28 overflow-hidden scroll-mt-32"
    >

      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_60%)]"></div>

     
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[180px]"></div>

     
      <div className="relative z-10 max-w-7xl mx-auto px-6">

       
        <div className="flex justify-center">

          <button
            onClick={scrollToTrailer}
            className="
              group
              flex
              items-center
              gap-3
              px-5
              py-2.5
              rounded-full
              bg-red-600
              text-white
              font-semibold
              tracking-widest
              text-sm
              transition-all
              duration-300
              hover:bg-red-700
              hover:scale-105
              hover:shadow-lg
              hover:shadow-red-600/30
            "
          >
            <span className="text-base transition-transform duration-300 group-hover:scale-110">
              ▶
            </span>

            PLAY NOW
          </button>

        </div>

    
        <div className="text-center mt-8">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white">
            OFFICIAL TRAILER
          </h1>

          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto leading-8">
            Witness the beginning of Peter Parker's new journey as Spider-Man
            in Marvel Studios' next cinematic adventure.
          </p>

          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-8"></div>

        </div>

  
        <div
          id="trailer-video"
          className="mt-16 scroll-mt-32"
        >

          <div
            className="
              rounded-3xl
              overflow-hidden
              border
              border-zinc-800
              bg-zinc-900/40
              backdrop-blur-xl
              shadow-2xl
              shadow-red-600/20
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-red-600/40
              hover:shadow-red-600/40
            "
          >

            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/62bIsvRcPv0"
              title="Spider-Man Brand New Day Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>

        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">

          <div>
            <h3 className="text-red-500 uppercase tracking-wider text-sm">
              Studio
            </h3>

            <p className="text-white mt-2 font-semibold">
              Marvel Studios
            </p>
          </div>

          <div>
            <h3 className="text-red-500 uppercase tracking-wider text-sm">
              Runtime
            </h3>

            <p className="text-white mt-2 font-semibold">
              2m 31s
            </p>
          </div>

          <div>
            <h3 className="text-red-500 uppercase tracking-wider text-sm">
              Quality
            </h3>

            <p className="text-white mt-2 font-semibold">
              4K Ultra HD
            </p>
          </div>

          <div>
            <h3 className="text-red-500 uppercase tracking-wider text-sm">
              Language
            </h3>

            <p className="text-white mt-2 font-semibold">
              English
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Trailer;