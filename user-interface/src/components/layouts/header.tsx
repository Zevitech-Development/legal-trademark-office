"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import Logo from "../../../public/logos/logo.svg";
import { HeaderPagesNavigationData } from "@/constants/layout-data";
import { Button } from "../ui/button";
import { Headset } from "lucide-react";
import { Separator } from "../ui/separator";

const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className="w-full h-[90px] bg-white sticky top-0 left-0 z-50"
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
    >
      <div className="layout-standard h-full flex items-center justify-between">
        {/* WEBSITE LOGO */}
        <Link href={"/"} passHref>
          <Image
            src={Logo}
            alt="Legal Trademark Office"
            className="w-full h-full"
            priority
          />
        </Link>

        {/* PAGE NAVIGATION LINKS */}
        <ul className="lg:flex items-center gap-8 translate-x-16 hidden">
          {HeaderPagesNavigationData.map((pages, index) => (
            <Link key={index} passHref href={pages.path}>
              <li
                className={`text-[16px] font-inter leading-[24px] ${
                  pages.path === pathname
                    ? "text-primary-theme"
                    : "text-heading-color hover:text-primary-theme"
                }`}
              >
                {pages.title}
              </li>
            </Link>
          ))}
        </ul>

        {/* CALL TO ACTION BUTTON */}
        <div className="lg:flex items-center gap-4 hidden">
          <Link
            href={"/contact-us"}
            className="flex flex-col group"
          >
            <p className="font-inter font-bold text-[18px] text-heading-color leading-[24px]">
              Contact Us
            </p>
            <Separator className="bg-heading-color h-[3px] rounded-lg group-hover:translate-y-[2px] animation-standard" />
          </Link>
          <Link
            href={"/registration/trademark/step-1"}
            className="flex flex-col group"
          >
            <p className="font-inter font-bold text-[18px] text-primary-theme leading-[24px]">
              Register Your Trademark Now
            </p>
            <Separator className="bg-primary-theme h-[3px] rounded-lg group-hover:translate-y-[2px] animation-standard" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
