import React from "react";
import Image from "next/image";

import { FaqPageData } from "@/constants/faqs-page-data";

import { Separator } from "@/components/ui/separator";

import FaqsHeroImage from "../../public/images/faq-hero-img.png";
import { CircleHelp } from "lucide-react";

const FaqsPage = () => {
  return (
    <main>
      <section className="layout-standard section-padding-standard flex">
        <div className="w-[calc(100%-400px)] flex flex-col justify-center">
          <div
            className="w-fit py-2 px-3 rounded-sm flex items-center gap-1 bg-primary-theme mb-4"
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
          >
            <CircleHelp className="h-[14px] w-[14px] text-white/70" />
            <h1 className="text-[14px] leading-[18px] font-inter text-white font-bold tracking-wider">
              FAQs
            </h1>
          </div>

          <h1 className="text-[52px] lg:text-[88px] font-[700] leading-[120%] text-heading-color font-inter">
            Frequently Asked{" "}
            <span className="text-primary-theme">Questions</span>
          </h1>

          <p className="text-[16px] font-[400] mt-6 lg:max-w-[800px]">
            Have questions or feeling stuck? Our FAQ section is here to provide
            clear and concise answers to all your concerns in one convenient
            place. Whether you&apos;re navigating a process or seeking guidance,
            you&apos;ll find helpful tips, detailed solutions, and expert advice to
            move forward with confidence. We&apos;re dedicated to supporting you
            every step of the way.
          </p>
        </div>

        <div className={`relative flex items-start w-[400px]`}>
          <Image src={FaqsHeroImage} alt="FAQs of Legal Trademark Office" />
          <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-white to-transparent" />
        </div>
      </section>

      {/* FAQs QUESTIONS SECTION */}
      <section className="layout-standard section-margin-standard">
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-12">
          {FaqPageData.map((faq, index) => (
            <div key={index} className="col-span-1 flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <span className="w-fit p-2 border rounded-sm">{faq.icon}</span>
                <div className="flex flex-col gap-2">
                  <h1 className="font-inter font-bold text-heading-color md:text-[16px] text-[14px] md:leading-[20px] leading-[18px]">
                    {faq.question}
                  </h1>
                  <p className="md:text-[14px] md:leading-[18px] text-[12px] leading-[16px]">
                    {faq.answer}
                  </p>
                </div>
              </div>

              <Separator />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FaqsPage;
