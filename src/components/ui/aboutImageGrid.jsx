import Image from "next/image";

export default function About() {
  return (
    <div className="w-full md:shrink-0">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {/* Left Tall Image */}
            <div className="flex flex-col gap-2">
                <div className="relative h-[420px] overflow-hidden rounded-sm sm:h-[560px]">
                    <Image
                        src="/images/about-image.jpg"
                        alt="Construction planning"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex h-[110px] items-center gap-3 justify-center rounded-sm bg-brand px-5 text-white">
                    <div className="rounded-lg bg-white p-2">
                        <Image
                            src="/icons/check-point.png"
                            alt="Clients icon"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div>
                        <p className="text-[24px] font-bold">430+ Clients</p>
                        <p className="text-[16px]">Satisfied By Us</p>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-2">
                {/* Top Badge Card */}
                <div className="flex h-[110px] items-center gap-3 justify-center rounded-sm bg-brand px-5 text-white">
                    <div className="rounded-lg bg-white p-2">
                        <Image
                            src="/icons/check-point.png"
                            alt="Experience Icon"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div>
                        <p className="text-[24px] font-bold">10+ Years</p>
                        <p className="text-[16px]">Of Experience</p>
                    </div>
                </div>
                <div className="relative h-[420px] overflow-hidden rounded-sm sm:h-[560px]">
                    <Image
                        src="/images/about-image2.jpg"
                        alt="Construction planning"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    </div>

  );
}
