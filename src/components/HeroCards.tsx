const cards = [
  {
    title: "Starting from",
    value: "AED 199/month",
    subtitle: "ERPNext Hosting",
  },
  {
    title: "Active Users",
    value: "1200+",
    subtitle: "Trusted businesses",
  },
  {
    title: "Projects Delivered",
    value: "500+",
    subtitle: "Enterprise clients",
  },
];

const cardBaseClasses =
  "bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] rounded-2xl px-5 py-4 hover:scale-105 transition-all duration-300 ease-out";

const HeroCards = () => {
  return (
    <>
      {/* Card 1: top-right */}
      <div
        className="absolute top-6 right-6 z-30 w-[calc(100%-1rem)] max-w-[200px] sm:max-w-[220px] animate-float animate-float-delay-0"
      >
        <div className={cardBaseClasses}>
          <p className="text-xs sm:text-sm font-medium text-white/70 uppercase tracking-wide">
            {cards[0].title}
          </p>
          <p className="font-heading text-lg sm:text-xl font-bold text-white mt-1">
            {cards[0].value}
          </p>
          <p className="text-xs sm:text-sm text-white/60 mt-0.5">
            {cards[0].subtitle}
          </p>
        </div>
      </div>

      {/* Card 2: middle-left */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-30 w-[calc(100%-1rem)] max-w-[180px] sm:max-w-[220px] animate-float animate-float-delay-1"
      >
        <div className={cardBaseClasses}>
          <p className="text-xs sm:text-sm font-medium text-white/70 uppercase tracking-wide">
            {cards[1].title}
          </p>
          <p className="font-heading text-lg sm:text-xl font-bold text-white mt-1">
            {cards[1].value}
          </p>
          <p className="text-xs sm:text-sm text-white/60 mt-0.5">
            {cards[1].subtitle}
          </p>
        </div>
      </div>

      {/* Card 3: bottom-right */}
      <div
        className="absolute bottom-6 right-12 z-30 w-[calc(100%-1rem)] max-w-[180px] sm:max-w-[220px] animate-float animate-float-delay-2"
      >
        <div className={cardBaseClasses}>
          <p className="text-xs sm:text-sm font-medium text-white/70 uppercase tracking-wide">
            {cards[2].title}
          </p>
          <p className="font-heading text-lg sm:text-xl font-bold text-white mt-1">
            {cards[2].value}
          </p>
          <p className="text-xs sm:text-sm text-white/60 mt-0.5">
            {cards[2].subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroCards;
