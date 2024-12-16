import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import BlogImage from "../../../../public/images/blog-image-01.jpg";
import { ArrowUpRight } from "lucide-react";

const BlogCard = () => {
  return (
    <Card
      className="w-full bg-transparent border p-4 rounded-md"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <CardHeader
        className="p-0 m-0 w-full h-[200px] bg-no-repeat bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${BlogImage.src})` }}
      />

      <CardContent className="flex flex-col gap-2 px-0 py-4">
        <p className="text-[14px]">Olivia Rhye, 20 Jan 2024</p>

        <div className="w-full flex items-start justify-between mt-2">
          <h1 className="font-inter font-medium text-heading-color text-[16px] leading-[22px]">
            Coversation with London Makr & Co.
          </h1>

          <ArrowUpRight className="w-[20px] h-[20px] cursor-pointer animation-standard hover:scale-110" />
        </div>
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

export default BlogCard;
