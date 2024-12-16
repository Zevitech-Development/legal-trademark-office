"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import Logo from "../../../public/logos/logo.svg";
import { HeaderPagesNavigationData } from "@/constants/layout-data";
import { Button } from "../ui/button";
import { Headset } from "lucide-react";

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
        <ul className="lg:flex items-center gap-8 translate-x-12 hidden">
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
        <div className="lg:flex items-center gap-2 hidden">
          <Button className="font-inter h-[50px] rounded-sm px-4 border-2 border-primary-theme text-primary-theme tracking-wide hover:bg-blue-100 text-[16px] leading-[24px]">
            <Headset />
            Contant Us
          </Button>
          <Button className="font-inter h-[50px] rounded-sm px-8 bg-primary-theme text-white tracking-wide hover:bg-primary-hovered text-[16px] leading-[24px]">
            Trademark Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
