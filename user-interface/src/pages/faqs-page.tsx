import React from "react";

import FrequentlyAskedQuestionAnswerSection from "@/components/roots/faqs/frequently-asked-question-answer-section";

import { CircleHelp } from "lucide-react";

const FaqsPage = () => {
  return (
    <main>
      <section className="w-full h-full py-[8rem] bg-cover bg-faq-hero-section">
        <div className="h-full flex flex-col layout-standard gap-4 section-padding-standard">
          <div
            className="w-fit py-2 px-3 rounded-sm flex items-center gap-1 bg-primary-theme"
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
          <div className="flex flex-col gap-4">
            <h1 className="text-[52px] lg:text-[88px] font-[700] leading-[120%] text-heading-color font-inter">
              Frequently Asked{" "}
              <span className="text-primary-theme">Questions</span>
            </h1>
            <p className="text-[16px] font-[400]">
              Stuck on something? We're here to help with all your questions and
              answers in one place.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs QUESTIONS SECTION */}
      <FrequentlyAskedQuestionAnswerSection />
    </main>
  );
};

export default FaqsPage;
