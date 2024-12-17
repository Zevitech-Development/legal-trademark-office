import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import HowToStartSection01Img from "../../../../../public/images/trademark-how-to-start-section-01-img.webp";
import HowToStartSection02Img from "../../../../../public/images/trademark-how-to-start-section-02-img.webp";
import HowToStartSection03Img from "../../../../../public/images/trademark-how-to-start-section-03-img.webp";
import HowToStartSection04Img from "../../../../../public/images/trademark-how-to-start-section-04-img.webp";
import HowToStartSection05Img from "../../../../../public/images/trademark-how-to-start-section-05-img.webp";
import HowToStartSection06Img from "../../../../../public/images/trademark-how-to-start-section-06-img.webp";

const TrademarkHowToStartSection = () => {
  return (
    <section className="w-full bg-secondary-bg-color section-padding-standard">
      <div className="layout-standard section-padding-standard grid grid-cols-7 gap-12 items-center">
        <div className="col-span-4 grid grid-cols-3 gap-4 h-[400px]">
          <div className="grid grid-cols-1 gap-2">
            <Image
              src={HowToStartSection01Img}
              alt="Not Sure How To start"
              className="rounded-lg h-full object-cover"
            />
            <Image
              src={HowToStartSection02Img}
              alt="Not Sure How To start"
              className="rounded-lg h-full object-cover"
            />
          </div>

          <Image
            src={HowToStartSection03Img}
            alt="Not Sure How To start"
            className="col-span-1 h-full object-cover rounded-lg"
          />

          <div className="grid grid-cols-4 gap-2">
            <Image
              src={HowToStartSection04Img}
              alt="Not Sure How To start"
              className="rounded-lg col-span-2 h-full object-cover"
            />
            <Image
              src={HowToStartSection05Img}
              alt="Not Sure How To start"
              className="rounded-lg col-span-2 h-full object-cover"
            />
            <Image
              src={HowToStartSection06Img}
              alt="Not Sure How To start"
              className="rounded-lg col-span-4 h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 col-span-3">
          <h1 className="text-[42px] leading-[50px] font-inter text-heading-color font-bold">
            Not sure where to begin?
          </h1>
          <p className="text-[16px] leading-[24px] max-w-[600px]">
            Contact our team today to start your trademark registration process.
            We are here to guide you every step of the way, ensuring a smooth
            and efficient trademark registration experience.
          </p>

          <div className="flex items-center gap-2">
            <Button className="h-[46px] w-[200px] bg-white text-[16px] leading-[24px] font-inter text-heading-color mt-8 !rounded-sm hover:bg-blue-100">
              Register Now
            </Button>
            <Button className="h-[46px] w-[200px] bg-primary-theme text-[16px] leading-[24px] font-inter text-white mt-8 !rounded-sm hover:bg-primary-hovered">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrademarkHowToStartSection;
