import Image from "next/image";
import ActionButton from "./ui/buttons/ctaButton";
import AboutImageGrid from "./ui/aboutImageGrid";

export default function About() {
  const bulletPoints = [
    "Licensed and experienced construction professionals",
    "Residential renovations, additions, and commercial build-outs",
    "Clear communication and structured project planning",
    "Quality workmanship built for long-term durability",
  ];

  return (
    <div className="w-full px-6 py-16 md:px-12 lg:px-20 lg:py-25">
        <section className="relative mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-20">
            {/* Top-left corner accent */}
            <span className="pointer-events-none absolute -left-2 -top-2 h-12 w-12 border-l-4 border-t-4 border-brand" />

            {/* Bottom-right corner accent */}
            <span className="pointer-events-none absolute -bottom-2 -right-2 h-12 w-12 border-b-4 border-r-4 border-brand" />
                        
            <div className="w-full max-w-[620px] md:w-[44%] md:shrink-0 max-md:flex max-md:justify-center">
                <AboutImageGrid/>
            </div>

            {/* Left Column Content */}
            <div className="flex w-full md:w-[56%] md:max-w-none max-w-180 flex-col gap-10 max-md:items-center max-md:text-center lg:gap-12">
                <div className="flex w-full flex-col gap-6 lg:gap-7">
                    <div className="flex gap-3 items-center max-md:justify-center">
                        <span className="rounded-full block w-2 h-2 bg-brand"/>
                        <p className="text-[14px] md:text-[16px] text-brandGrey font-semibold">
                            ABOUT IRONPEAK CONSTRUCTION GROUP
                        </p>
                    </div>
                    <h2 className="text-brandBlack font-bold text-[34px] leading-[1.2] md:text-[44px] lg:text-[54px]">
                        Reliable Construction Backed by Experience
                    </h2>
                    <p className="text-brandGrey font-normal text-[16px] md:text-[18px]">
                        At IronPeak Construction Group, we deliver dependable residential and small commercial construction services across the Bay Area. 
                        Since 2014, our team has focused on combining careful planning, skilled craftsmanship, and transparent communication to ensure every project is completed to the highest standards.
                    </p>
                    <ul className="flex flex-col gap-3 text-brandBlack font-bold text-[16px] md:text-[18px]">
                        {bulletPoints.map((point) => (
                            <li key={point} className="flex items-center gap-3 max-md:justify-center">
                                <Image
                                    src="/icons/check-point.png"
                                    alt="Check Point"
                                    width={16}
                                    height={16}
                                />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <ActionButton
                    label="Discover More"
                    className="px-5 max-md:mx-auto"
                    link="/get-started"
                />
            </div>
        </section>
    </div>
  );
}
