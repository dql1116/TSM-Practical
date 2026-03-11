import ActionButton from "./ui/buttons/ctaButton";
import Image from "next/image";

export default function About() {

  return (
    <div className="w-full px-6 py-16 md:px-12 lg:px-20 lg:py-25">
        <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-20">
            <div className="w-full max-w-[620px] md:w-[44%] md:shrink-0 max-md:flex max-md:justify-center">
                <Image
                    src="/images/about-image.jpg"
                    alt="About Image"
                    width={620}
                    height={420}
                    className="h-auto w-full max-md:w-[75%] max-md:mx-auto rounded-sm object-cover"
                />
            </div>
            <div className="flex w-full md:w-[56%] md:max-w-none max-w-180 flex-col gap-8 max-md:items-center max-md:text-center lg:gap-15">
                <div className="flex w-full flex-col gap-5 lg:gap-6">
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
                        Founded in 2014, IronPeak Construction Group provides full-service construction solutions for homeowners, investors, and small businesses throughout the Bay Area. 
                        Our team specializes in residential construction, remodeling, and commercial build-outs designed to meet both functional and aesthetic goals.
                    </p>
                    <p className="text-brandGrey font-normal text-[16px] md:text-[18px]">
                        We believe every successful project begins with strong planning and transparent communication. 
                        From initial consultation to final delivery, IronPeak focuses on dependable timelines, quality workmanship, and a structured process that ensures projects are completed efficiently and professionally.
                    </p>
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
