import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import BlogImage from "../../../../public/images/blog-image-01.jpg";
import { ArrowUpRight } from "lucide-react";

const LargeBlogCard = () => {
  return (
    <Card className="w-full bg-transparent shadow-none rounded-none col-span-1 flex flex-col gap-8 border-none">
      <CardHeader
        className="p-0 m-0 w-full md:h-[500px] h-[300px] bg-no-repeat bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${BlogImage.src})` }}
      />
      <CardContent className="flex flex-col gap-2 px-0">
        <p className="lg:text-[16px] lg:leading-[24px] md:text-[14px] md:leading-[22px] text-[12px] leading-[20px]">
          Olivia Rhye, 20 Jan 2024
        </p>

        <div className="w-full flex items-center justify-between mt-1">
          <h1 className="font-inter font-bold text-heading-color lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[28px] md:leading-[24px] leading-[22px]">
            Coversation with London Makr & Co.
          </h1>

          <ArrowUpRight className="h-[20px] w-[20px] -translate-y-2 cursor-pointer animation-standard hover:scale-110" />
        </div>
        <p className="lg:text-[16px] lg:leading-[24px] md:text-[14px] md:leading-[22px] text-[12px] leading-[20px] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo
          nobis magni tempora minus, incidunt quasi minima nesciunt fuga
          perferendis. Dolorum, omnis rerum incidunt accusantium porro officia
          pariatur illo laboriosam?
        </p>

        <div className="mt-2 flex items-center gap-2">
          <Badge className="!border-none font-medium !bg-primary-theme !shadow-none md:text-[14px] text-[12px] text-white rounded-3xl py-1 px-5">
            Research
          </Badge>

          <Badge className="!border-none font-light !bg-primary-theme !shadow-none md:text-[14px] text-[12px] text-white rounded-3xl py-1 px-5">
            Interview
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default LargeBlogCard;
