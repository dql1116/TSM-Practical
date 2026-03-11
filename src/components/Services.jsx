"use client";

import { SERVICES } from "@/data/services";
import ServicesCard from "./ui/servicesCard";

export default function Services() {
  return (
    <div className="flex flex-col w-full px-6 py-16 gap-12 bg-[#f4f4f4] md:px-12 lg:px-20 lg:py-25 lg:gap-15">
        <div className="flex flex-col gap-6 items-center justify-center text-center">
          <div className="flex gap-3 items-center">
              <span className="rounded-full block w-2 h-2 bg-brand"/>
              <p className="text-[14px] md:text-[16px] text-brandGrey font-semibold">
                  OUR SERVICES
              </p>
          </div>
          <h2 className="text-brandBlack font-bold text-[34px] leading-[1.2] md:text-[44px] lg:text-[54px]">
              Construction Services <br/> Built for Quality and Reliability
          </h2>
          <p className="text-brandGrey w-full max-w-[900px] font-normal text-[16px] md:text-[18px] md:w-[75%] lg:w-[50%]">
              From residential renovations to commercial build-outs, 
              IronPeak Construction Group delivers dependable construction solutions tailored to every project.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((r) => (
              <div key={r.id}>
                <ServicesCard
                  img={r.img}
                  name={r.name}
                  description={r.description}
                />
              </div>
            ))}
        </div>
    </div>
  );
}
