import ActionButton from "./ui/buttons/ctaButton";

export default function Hero() {
  const stats = [
    {
      title: "LICENSED CREW",
      value: "85",
      subtitle: "CERTIFIED FIELD PROFESSIONALS",
    },
    {
      title: "PROJECTS",
      value: "370+",
      subtitle: "PROJECTS COMPLETED",
    },
    {
      title: "ON-TIME RATE",
      value: "96%",
      subtitle: "DELIVERED ON SCHEDULE",
    },
  ];

  return (
    <main className="relative w-full overflow-hidden bg-[url('/background/hero-image.jpg')] bg-cover bg-center min-h-[620px] md:min-h-[758px]">
        <span className="pointer-events-none absolute inset-y-0 left-0 w-full md:w-4/5 lg:w-3/4 bg-gradient-to-r from-[#1d1c1b] via-[#2a2a2a99] to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-45 pb-16">
            <div className="flex flex-col gap-6 md:gap-8 max-w-120.75 h-fit">
                <div className="flex flex-col gap-5 md:gap-6 items-start">
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] text-brand">
                        DELIVERING QUALITY CONSTRUCTION
                    </p>
                    <h1 className="text-[38px] sm:text-[48px] md:text-[58px] lg:text-[70px] text-white font-bold leading-[1.1] md:leading-[1.2]">
                        Built With Strength And Precision
                    </h1>
                    <span className="block h-[0.5px] w-full bg-white" />
                    <p className="text-[15px] md:text-[17px] lg:text-[18px] text-white">
                        Reliable residential and commercial construction built with precision, clear planning, and dependable timelines.
                    </p>
                </div>
                <div className="flex gap-10">
                    <ActionButton
                        label="Service Request"
                        className="px-5"
                        link="/try-free"
                    />
                    <div className="flex flex-col w-fit gap-1 items-center justify-center">
                        <span className="text-[21px] leading-none tracking-[2px] text-[#f5b500]">
                            ★★★★★
                        </span>
                        <p className="text-[14px] md:text-[16px] font-semibold text-white">
                            2k+ Reviews
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-12 grid w-full grid-cols-1 rounded-sm border border-white/15 bg-black/20 backdrop-blur-[2px] md:mt-16 md:grid-cols-3">
                {stats.map((stat, index) => (
                    <div
                        key={stat.title}
                        className={`px-6 py-7 md:px-10 md:py-9 ${index !== 0 ? "border-t border-white/15 md:border-t-0 md:border-l" : ""}`}
                    >
                        <p className="text-[16px] md:text-[18px] font-semibold tracking-wide text-white/65">
                            {stat.title}
                        </p>
                        <p className="mt-2 text-[54px] leading-none font-bold text-white md:text-[64px]">
                            {stat.value}
                        </p>
                        <p className="mt-4 text-[14px] md:text-[16px] font-semibold tracking-wide text-[#f3c46e]">
                            {stat.subtitle}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </main>
  );
}
