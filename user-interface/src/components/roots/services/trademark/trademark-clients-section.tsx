import React from "react";

import { ServicesTrademarkRegistrationClientSectoinData } from "@/constants/services-trademark-registration-page-data";
import Image from "next/image";

const TrademarkClientsSection = () => {
  return (
    <section className="layout-standard section-padding-standard flex flex-col items-center gap-8">
      <h1 className="font-inter text-[34px] leading-[40px] font-bold tracking-wider text-black/20">
        As seen on
      </h1>

      <div className="grid grid-cols-5 items-center gap-12">
        {ServicesTrademarkRegistrationClientSectoinData.map((data, index) => (
          <Image key={index} src={data.img} alt="We are seen on" className="mx-auto w-[150px] h-[100px]"/>
        ))}
      </div>
    </section>
  );
};

export default TrademarkClientsSection;
