import Poster from "../assets/Poster.png";
import Pattern2 from "../assets/Pattern2.jpeg"
function About() {
  return (
    <section id="about" className="relative bg-black py-24 overflow-hidden scroll-mt-32">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.12),transparent_45%)]"></div>

    <div className="absolute inset-0 opacity-5"
         style={{
             backgroundImage:`url(${Pattern2})`,
             backgroundSize:"700px"
         }}>
    </div>
   
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-wide">
          ABOUT THE MOVIE
        </h1>

        <p className="mt-4 text-zinc-400 text-lg tracking-wide">
          The Next Chapter Begins
        </p>

        <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
      </div>

     
      <div className="max-w-7xl mx-auto px-6 mt-16">

        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col lg:flex-row">

         
          <div className="lg:w-1/3">

            <img
              src={Poster}
              alt="Spider-Man Poster"
              className="w-full h-full object-cover"
            />

          </div>

        
          <div className="lg:w-2/3 p-10">

            <h2 className="text-4xl font-black text-white">
              Spider-Man: Brand New Day
            </h2>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-yellow-400 text-xl">
                ★★★★★
              </span>

              <span className="text-zinc-300">
                8.4 IMDb
              </span>
            </div>

            <p className="text-zinc-300 leading-8 mt-8 text-lg max-w-3xl">
              Following the events that erased Peter Parker's identity from
              the world's memory, he begins a completely new life while
              continuing to protect New York as Spider-Man. As mysterious
              enemies emerge from the shadows, Peter faces difficult choices
              that test his courage, sacrifice, and what it truly means to be
              a hero.
            </p>

           

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

              <div>
                <h3 className="text-red-500 font-semibold uppercase tracking-wider">
                  Release Date
                </h3>

                <p className="text-white mt-2">
                  July 31, 2026
                </p>
              </div>

              <div>
                <h3 className="text-red-500 font-semibold uppercase tracking-wider">
                  Genre
                </h3>

                <p className="text-white mt-2">
                  Action • Adventure • Superhero
                </p>
              </div>

              <div>
                <h3 className="text-red-500 font-semibold uppercase tracking-wider">
                  Director
                </h3>

                <p className="text-white mt-2">
                  Destin Daniel Cretton
                </p>
              </div>

              <div>
                <h3 className="text-red-500 font-semibold uppercase tracking-wider">
                  Studio
                </h3>

                <p className="text-white mt-2">
                  Marvel Studios
                </p>
              </div>

              <div>
                <h3 className="text-red-500 font-semibold uppercase tracking-wider">
                  Language
                </h3>

                <p className="text-white mt-2">
                  English
                </p>
              </div>

              <div>
                <h3 className="text-red-500 font-semibold uppercase tracking-wider">
                  Runtime
                </h3>

                <p className="text-white mt-2">
                  TBA
                </p>
              </div>

            </div>

           

            <div className="mt-12">

              <button
  onClick={() => {
    document.getElementById("trailer")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="
    inline-flex
    items-center
    justify-center
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
</button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;