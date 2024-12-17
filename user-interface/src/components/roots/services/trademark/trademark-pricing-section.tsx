import React from "react";

import { Badge } from "@/components/ui/badge";
import { TrademarkPriceCard } from "@/components/partials/price-cards";

const TrademarkPricingSection = () => {
  return (
    <section className="layout-standard section-padding-standard section-margin-standard flex flex-col gap-12 items-center">
      <div className="w-full flex flex-col items-center gap-4 mb-8">
        <Badge className="w-[128px] h-[42px] flex items-center justify-center bg-primary-theme backdrop-blur-md mb-2 text-white text-[16px] font-inter">
          Pricing
        </Badge>

        <h1 className="text-[40px] leading-[45px] text-center text-black font-inter font-bold max-w-[480px]">
          Choose The Package That Fits Your Needs.
        </h1>

        <p className="max-w-[550px] text-center text-paragraph-color">
          Choose from our tailored trademark packages designed to protect your
          brand, whether you&apos;re a startup or an established business.
        </p>
      </div>

      <TrademarkPriceCard />
    </section>
  );
};

export default TrademarkPricingSection;
