import CastCard from "./CastCard";

import Peter from "../assets/peter.jpeg";
import MJ from "../assets/mj.jpeg";
import Ned from "../assets/ned.jpeg";
import Frank from "../assets/Frank.jpeg";

function Cast() {

  const cast = [
    {
      image: Peter,
      character: "Peter Parker",
      actor: "Tom Holland",
      role: "Hero",
    },
    {
      image: MJ,
      character: "MJ",
      actor: "Zendaya",
      role: "Lead",
    },
    {
      image: Ned,
      character: "Ned Leeds",
      actor: "Jacob Batalon",
      role: "Friend",
    },
    {
      image: Frank,
      character: "Frank Castle",
      actor: "Jon Bernthal",
      role: "Supporting",
    },
  ];

  return (
    <section
      id="cast"
      className="relative bg-black py-28 overflow-hidden scroll-mt-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_65%)]"></div>

      {/* Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/5 rounded-full blur-[180px]"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-4 py-2 rounded-full bg-red-600 text-white text-sm font-semibold tracking-widest">
            STAR CAST
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mt-8">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white">
            MEET THE CAST
          </h1>

          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto leading-8">
            The talented actors bringing Marvel's newest Spider-Man adventure
            to life.
          </p>

          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-8"></div>

        </div>

        {/* Cards */}

        <div className="max-w-7xl mx-auto px-6 mt-20">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {cast.map((member, index) => (
              <CastCard
                key={index}
                image={member.image}
                character={member.character}
                actor={member.actor}
                role={member.role}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Cast;