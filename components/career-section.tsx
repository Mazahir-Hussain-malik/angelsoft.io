export default function CareerSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      {/* Decorative dot pattern - top left */}
      <div className="absolute left-8 top-20 grid grid-cols-9 gap-1.5 opacity-40">
        {Array.from({ length: 81 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
        ))}
      </div>

      {/* Decorative curved line - top right */}
      <div className="absolute right-20 top-8 w-64 h-48 opacity-30">
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <path
            d="M10,75 Q50,20 100,40 T190,75"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Decorative dot pattern - bottom right */}
      <div className="absolute right-8 bottom-32 grid grid-cols-9 gap-1.5 opacity-40">
        {Array.from({ length: 81 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
        ))}
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,100 480,100 720,60 C960,20 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="#f9fafb"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Career Badge */}
            <div className="inline-block">
              <span className="bg-white text-[#2c4a6f] px-8 py-3 rounded-full text-base font-medium shadow-sm border border-gray-200">
                Career
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="text-4xl lg:text-4xl font-bold text-[#937c39] leading-tight">
                Looking for a New Career?
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#264b78] leading-tight">
                Join Us
              </h3>
             
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed max-w-lg">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-[#264b78] hover:bg-[#1e3347] text-white px-8 py-4 rounded-full text-base font-medium transition-colors duration-300 shadow-lg hover:shadow-xl">
                See Open Position
              </button>
            </div>
          </div>

          {/* Right Images - Two overlapping photos */}
          <div className="relative h-[400px] lg:h-[500px] w-full">
            {/* Decorative curly line - positioned above images */}
            <div className="absolute -top-12 -left-12 w-48 h-48 opacity-30 z-0">
              <svg viewBox="0 0 200 150" className="w-full h-full">
                <path
                  d="M10,75 Q50,20 100,40 T190,75"
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M10,105 Q50,50 100,70 T190,105"
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Image 1: Man with headphones (Left, Behind) */}
            <div className="absolute top-0 left-0 w-[65%] h-[85%] z-10 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/chooseus1.png"
                alt="Team member with headphones"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2: Woman with laptop (Right, Front) */}
            <div className="absolute bottom-0 right-0 w-[65%] h-[85%] z-20 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="/chooseus2.png"
                alt="Team member working on laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
