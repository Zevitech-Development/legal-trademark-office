import React from "react";

import { PricingSectionData } from "@/constants/home-page-data";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { TiTick } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";

export const TrademarkPriceCard = () => {
  return (
    <div className="w-full flex items-end justify-center gap-8">
      {PricingSectionData.map((data) => (
        <Card
          key={data.plan}
          className="bg-white rounded-xl sm:!w-[450px] w-full !h-full max-lg:w-[500px] max-sm:w-full mx-auto"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <CardHeader className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-[24px] font-bold text-heading-color font-inter">
                {data.planName}
              </CardTitle>

              <Badge
                className={`text-[14px] font-inter font-semibold ${
                  data.plan === 1
                    ? "bg-[#f2f2f2] text-heading-color border-border"
                    : data.plan == 2
                    ? "bg-primary-theme text-white"
                    : "bg-[#ffb400] text-heading-color"
                }`}
              >
                {data.comment}
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <h1 className="text-5xl font-bold font-inter text-heading-color">
                ${data.planPrice}
              </h1>
              <CardDescription className="font-medium">
                +$350/ per class USPTO fee
              </CardDescription>
            </div>

            <p className="text-[14px] leading-[20px]">{data.packageDetail}</p>

            <Separator className="h-[2px]" />
          </CardHeader>

          <CardContent className="pb-12">
            <ul className="flex flex-col gap-4">
              {data.planDetails.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <TiTick className="text-[20px] text-primary-theme translate-y-[1px]" />
                  <div className="flex flex-col w-[calc(100%-20px)]">
                    <h1 className="text-[16px] leading-[24px] font-bold font-inter text-heading-color">
                      {feature.title}
                    </h1>
                    <p className="text-[14px] leading-[22px]">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}

              {data.notOfferedPlanDetails?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <IoIosCloseCircle className="text-[20px] text-black/30 translate-y-[1px]" />
                  <div className="flex flex-col w-[calc(100%-20px)]">
                    <h1 className="text-[16px] leading-[24px] font-bold font-inter text-black/30">
                      {feature.title}
                    </h1>
                    <p className="text-[14px] leading-[22px] text-black/20">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="flex flex-col w-full gap-2">
            <Button className="w-full h-[52px] bg-primary-theme text-white font-inter hover:bg-primary-theme">
              Get Started
            </Button>
            <Button className="w-full h-[52px] border-2 text-heading-color font-inter hover:bg-blue-100">
              Chat to Sales
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
