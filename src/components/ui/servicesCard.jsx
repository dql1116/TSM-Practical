import Image from "next/image";
import Link from "next/link";

export default function ServicesCard({ img, name, description }) {
  return (
    <div className="flex w-full max-w-[340px] flex-col gap-5 rounded-sm bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all duration-400 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(15,23,42,0.14)] md:max-w-[437.33px] md:gap-6 md:h-[498.46px] md:p-6">
      <div className="relative h-44 md:h-200 w-full overflow-hidden rounded-sm md:h-56">
        <Image
          src={img}
          alt="Service Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col h-full justify-between">
        <h2 className="text-brandBlack font-bold text-[20px] md:text-[24px]">
          {name}
        </h2>
        <p className="text-brandGrey font-normal text-[15px] md:text-[16px]">
          {description}
        </p>
      </div>
      <Link href="/services" className="flex items-center gap-2">
        <p>View More</p>
        <Image
          src="/icons/black-cta-arrow.png"
          alt="Right arrow"
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
}
