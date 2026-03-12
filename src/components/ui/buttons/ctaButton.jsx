"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ActionButton({ label, className, link }) {
  const router = useRouter();
  return (
    <button
      aria-label="Try Whitepace Free"
      aria-controls="try-free-button"
      onClick={() => router.push(link)}
      className={`bg-brand font-bold z-10 flex w-fit h-10 md:h-11 lg:h-15 gap-1.5 md:gap-2 py-1.5 md:py-2 ${className} rounded-sm text-white text-[14px] md:text-[15px] lg:text-[18px] items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1`}
    >
      <span>{label}</span>
      <Image
        src="/icons/cta-arrow.png"
        alt="Right arrow"
        width={20}
        height={20}
        className="h-3.5 w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5"
      />
    </button>
  );
}
