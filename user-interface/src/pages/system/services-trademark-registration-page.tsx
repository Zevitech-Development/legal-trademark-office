import React from "react";
import Image from "next/image";

import TrademarkClientsSection from "@/components/roots/services/trademark/trademark-clients-section";
import TrademarkPricingSection from "@/components/roots/services/trademark/trademark-pricing-section";
import TrademarkImportanceSection from "@/components/roots/services/trademark/trademark-importance-section";
import TrademarkHowToStartSection from "@/components/roots/services/trademark/trademark-how-to-start-section";
import TrademarkClientsTestamonialSection from "@/components/roots/services/trademark/trademark-clients-testamonial-section";

import ServiceTrademarkRegistrationHeroImg from "../../../public/images/services-trademark-registration-hero-img.png";
import { Copyright } from "lucide-react";

const ServicesTrademarkRegistrationPage = () => {
  return (
    <main>
      {/* PAGE HEADING */}
      <section className="layout-standard section-padding-standard flex">
        <div className="w-[calc(100%-500px)] flex flex-col justify-center">
          <div
            className="w-fit py-2 px-3 rounded-sm flex items-center gap-1 bg-primary-theme mb-4"
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
          >
            <Copyright className="h-[14px] w-[14px] text-white/70" />
            <h1 className="text-[14px] leading-[18px] font-inter text-white font-bold tracking-wider">
              Trademark Registration
            </h1>
          </div>

          <h1 className="text-[52px] lg:text-[88px] font-[700] leading-[120%] text-heading-color font-inter">
            Expert Trademark{" "}
            <span className="text-primary-theme">Services</span>
          </h1>

          <p className="text-[16px] font-[400] mt-6 lg:max-w-[800px]">
            Protect your brand&apos;s identity and ensure its uniqueness with
            our comprehensive trademark registration services. At Legal
            Trademark Office, we provide end-to-end solutions, including
            trademark registration, monitoring, and enforcement, to safeguard
            your business in today&apos;s competitive marketplace. Our team of
            experts simplifies the process, guiding you every step of the way to
            ensure your intellectual property is secured efficiently and
            effectively. From initial consultation to final approval, we&apos;re
            here to protect what matters most—your brand's integrity and
            long-term success.
          </p>
        </div>

        <div className={`relative flex items-start w-[500px]`}>
          <Image
            src={ServiceTrademarkRegistrationHeroImg}
            alt="Service Trademark Registration"
          />
          <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-white to-transparent" />
        </div>
      </section>

      <TrademarkClientsSection />

      {/* WHY TRADEMARK IS IMPORTANT */}
      <TrademarkImportanceSection />

      {/* HOW TO REGISTER YOUR BRAND */}
      <div className="h-[70vh] w-full"></div>

      <TrademarkHowToStartSection />
      <TrademarkPricingSection />
      <TrademarkClientsTestamonialSection />
    </main>
  );
};

export default ServicesTrademarkRegistrationPage;
