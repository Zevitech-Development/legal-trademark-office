import React from "react";

import {
  PrivacyPolicyData01,
  PrivacyPolicyData02,
} from "@/constants/privacy-policy-page-data";

const PrivacyPolicyPage = () => {
  return (
    <main>
      <section className="layout-standard section-margin-standard flex flex-col gap-4">
        <h1 className="text-[52px] lg:text-[88px] font-[700] leading-[120%] text-heading-color font-inter text-center">
          Our Commitment to Your Privacy
        </h1>

        <div className="flex flex-col gap-4 my-8">
          {PrivacyPolicyData01.map((desc) => (
            <p key={desc.id} className="text-[16px] font-[400] text-justify">
              {desc.description}
            </p>
          ))}
        </div>

        {PrivacyPolicyData02.map((data) => (
          <div key={data.id} className="flex flex-col gap-3 mb-4">
            <h1 className="text-heading-color font-bold font-inter lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[28px] md:leading-[26px] leading-[24px]">
              {data.id}. {data.heading}
            </h1>

            <p className="text-[16px] font-[400] text-justify">
              {data.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
