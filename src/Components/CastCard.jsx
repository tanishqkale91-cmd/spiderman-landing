function CastCard({ image, character, actor, role }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-zinc-900/80
        backdrop-blur-md
        border
        border-zinc-800
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-red-600
        hover:shadow-2xl
        hover:shadow-red-600/25
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={character}
          className="
            w-full
            h-[480px]
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        {/* Hover Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-red-900/30
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
          "
        ></div>

        {/* Role Badge */}
        <div
          className="
            absolute
            top-5
            left-5
            bg-red-600
            text-white
            text-xs
            font-bold
            uppercase
            tracking-[2px]
            px-4
            py-2
            rounded-full
            shadow-lg
          "
        >
          {role}
        </div>

        {/* Character Info */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-6
          "
        >
          <h2
            className="
              text-3xl
              font-black
              text-white
              leading-none
              transition-all
              duration-300
              group-hover:text-red-400
            "
          >
            {character}
          </h2>

          <p
            className="
              mt-2
              text-zinc-300
              tracking-wide
              text-lg
            "
          >
            {actor}
          </p>

          {/* Bottom Line */}
          <div
            className="
              mt-4
              w-0
              h-[3px]
              bg-red-600
              rounded-full
              transition-all
              duration-500
              group-hover:w-20
            "
          ></div>

        </div>

      </div>
    </div>
  );
}

export default CastCard;