import React from "react";
import Image from "next/image";

import { CircleHelp } from "lucide-react";
import AboutUsHeroImg from "../../public/images/about-us-hero-img.png";

const AboutUsPage = () => {
  return (
    <main>
      <section className="layout-standard section-padding-standard flex">
        <div className="w-[calc(100%-600px)] flex flex-col justify-center">
          <div
            className="w-fit py-2 px-3 rounded-sm flex items-center gap-1 bg-primary-theme mb-4"
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
          >
            <CircleHelp className="h-[14px] w-[14px] text-white/70" />
            <h1 className="text-[14px] leading-[18px] font-inter text-white font-bold tracking-wider">
              About
            </h1>
          </div>

          <h1 className="text-[52px] lg:text-[88px] font-[700] leading-[120%] text-heading-color font-inter">
            Legal <span className="text-primary-theme">Trademark</span> Office
          </h1>

          <p className="text-[16px] font-[400] mt-6 lg:max-w-[800px]">
            At Legal Trademark Office, we specialize in protecting your
            brand&apos;s identity with expert trademark services. Our team is
            dedicated to helping businesses secure their intellectual property
            with personalized support and care. From consultation to
            registration, we provide a seamless, efficient process to safeguard
            your brands assets, ensuring long-term success in a competitive
            market.
          </p>
        </div>

        <div className={`relative flex items-start justify-end w-[600px]`}>
          <Image src={AboutUsHeroImg} alt="FAQs of Legal Trademark Office" />
          <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-white to-transparent" />
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
