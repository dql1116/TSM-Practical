import ActionButton from "./ui/buttons/ctaButton";

export default function Hero() {

  return (
    <main className="relative w-full overflow-hidden bg-[url('/background/hero-image.jpg')] bg-cover bg-center min-h-[620px] md:min-h-[758px]">
        <span className="pointer-events-none absolute inset-y-0 left-0 w-full md:w-4/5 lg:w-3/4 bg-gradient-to-r from-[#1d1c1b] via-[#2a2a2a99] to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-45 pb-16 md:px-12 lg:px-20">
            <div className="flex flex-col gap-6 md:gap-8 max-w-120.75 h-fit">
                <div className="flex flex-col gap-5 md:gap-6 items-start">
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] text-brand">
                        DELIVERING QUALITY CONSTRUCTION
                    </p>
                    <h1 className="text-[38px] sm:text-[48px] md:text-[58px] lg:text-[70px] text-white font-bold leading-[1.1] md:leading-[1.2]">
                        Built With Strength And Precision
                    </h1>
                    <span className="block h-[0.5px] w-full bg-[#686868]" />
                    <p className="text-[15px] md:text-[17px] lg:text-[18px] text-[#959292]">
                        Reliable residential and commercial construction built with precision, clear planning, and dependable timelines.
                    </p>
                </div>
                <ActionButton
                    label="Service Request"
                    className="px-5"
                    link="/try-free"
                />
            </div>
        </div>
    </main>
  );
}
