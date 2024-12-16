import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FooterColumnProps } from "@/interfaces/layout-interfaces";

import {
  FooterContactInfoData,
  FooterPagesNavigationData,
  FooterSocialsData,
} from "@/constants/layout-data";

import Logo from "../../../public/logos/logo.svg";

const Footer = () => {
  return (
    <footer className="flex-center mb-12 border-t">
      <div className="w-full flex flex-col gap-14">
        <div className="layout-standard section-padding-standard">
          <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
            <Link href="/" className="mb-10">
              <Image src={Logo} alt="logo" width={114} height={49} />
            </Link>

            <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
              {FooterPagesNavigationData.map((columns, index) => (
                <FooterColumn key={index} title={columns.title}>
                  <ul className="text-[14px] font-[400] flex flex-col gap-4">
                    {columns.links.map((item, columnIndex) => (
                      <Link href={item.href} key={columnIndex} className="hover:text-primary-theme">
                        {item.title}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}

              <div className="flex flex-col gap-5">
                <FooterColumn title={FooterContactInfoData.title}>
                  {FooterContactInfoData.links.map((link) => (
                    <Link
                      href="/"
                      key={link.label}
                      className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <p className="text-[14px] whitespace-nowrap">
                        {link.label}:
                      </p>
                      <p className="text-[14px] font-[600] whitespace-nowrap text-blue-70">
                        {link.value}
                      </p>
                    </Link>
                  ))}
                </FooterColumn>
              </div>

              <div className="flex flex-col gap-5">
                <FooterColumn title={FooterSocialsData.title}>
                  <ul className="text-[14px] font-[400] flex gap-4">
                    {FooterSocialsData.links.map((link) => (
                      <Link href="/" key={link}>
                        <Image src={link} alt="logo" width={24} height={24} />
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              </div>
            </div>
          </div>
        </div>

        <div className="border bg-border" />

        <p className="layout-standard text-[14px] font-[400] font-inter w-full text-center text-heading-color">
          2024 Legal Trademark Office | All rights reserved
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-[18px] font-[700] font-inter text-heading-color whitespace-nowrap">
        {title}
      </h4>
      {children}
    </div>
  );
};

export default Footer;
