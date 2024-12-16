import React from "react";
import Image from "next/image";

import FrequentlyAskedQuestionAnswerSection from "@/components/roots/faqs/frequently-asked-question-answer-section";

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
            place. Whether you're navigating a process or seeking guidance,
            you'll find helpful tips, detailed solutions, and expert advice to
            move forward with confidence. We're dedicated to supporting you
            every step of the way.
          </p>
        </div>

        <div className={`relative flex items-start w-[400px]`}>
          <div>
            <Image src={FaqsHeroImage} alt="FAQs Legal Trademark Office" />
            <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* FAQs QUESTIONS SECTION */}
      <FrequentlyAskedQuestionAnswerSection />
    </main>
  );
};

export default FaqsPage;
