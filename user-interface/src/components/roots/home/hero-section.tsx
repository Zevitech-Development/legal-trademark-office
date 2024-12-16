import React from "react";
import Image from "next/image";

import DraggableCard from "./drageable-card";

import HeroImage from "../../../../public/images/hero-img.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="layout-standard section-padding-standard flex">
      <div className="w-[calc(100%-600px)] flex flex-col">
        <h1 className="text-[52px] lg:text-[88px] font-[700] leading-[120%] text-heading-color font-inter">
          Legal <span className="text-primary-theme">Trademark</span> Office
        </h1>

        <p className="text-[16px] font-[400] mt-6">
          At Legal Trademark Office, we are proud to be trusted by attorneys
          across the country. Our services provide unmatched expertise in
          trademark law, helping businesses and legal professionals secure their
          intellectual property with ease and confidence.
        </p>

        <div className="my-6 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/icons/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="text-[16px] font-[700] lg:text-[20px] text-heading-color font-inter">
            428k+
            <span className="text-[16px] font-[400] ml-1 font-roboto text-paragraph-color">
              Trademarks Secured
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button className="gap-3 border whitespace-nowrap text-[16px] font-[700] px-8 !h-[50px] text-white font-inter bg-primary-theme hover:bg-primary-hovered">
            Trademark Now
          </Button>
          <Button className="gap-3 border-2 whitespace-nowrap text-[16px] font-[700] px-8 !h-[50px] font-inter bg-white hover:bg-blue-100">
            Learn More
          </Button>
        </div>
      </div>
      <div className={`relative flex items-start w-[600px]`}>
        <DraggableCard />
        <div>
          <Image src={HeroImage} alt="Legal Trademark Office" />
          <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
