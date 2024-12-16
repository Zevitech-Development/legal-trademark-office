import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import BlogImage from "../../../../public/images/blog-image-01.jpg";


type Props = {};

const SmallBlogCard = ({}: Props) => {
  return (
    <Card className="w-full bg-transparent flex md:flex-row flex-col gap-8 border px-4 pt-4 rounded-md">
      <CardHeader
        className="p-0 m-0 md:w-[300px] w-full h-[200px] bg-no-repeat bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${BlogImage.src})` }}
      />

      <CardContent className="md:w-[calc(100%-300px)] w-full flex flex-col gap-2 px-0">
        <p className="text-[14px]">Olivia Rhye, 20 Jan 2024</p>

        <h1 className="font-inter font-medium text-heading-color text-[16px] leading-[22px]">
          Coversation with London Makr & Co.
        </h1>

        <p className="text-[14px] leading-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo
          nobis magni tempora minus, incidunt quasi minima nesciunt fuga
          perferendis. Dolorum, omnis rerum incidunt accusantium porro officia
          pariatur illo laboriosam?
        </p>

        <div className="mt-2 flex items-center gap-2">
          <Badge className="!border-none font-light !bg-primary-theme !shadow-none text-[12px] text-white rounded-3xl py-1 px-5">
            Research
          </Badge>

          <Badge className="!border-none font-light !bg-primary-theme !shadow-none text-[12px] text-white rounded-3xl py-1 px-5">
            Interview
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmallBlogCard;
