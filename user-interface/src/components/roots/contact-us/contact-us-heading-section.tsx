import React from "react";

const ContactUsHeadingSection = () => {
  return (
    <div className="w-[calc(100%-500px)] flex flex-col justify-center">
      <h1 className="text-[52px] lg:text-[88px] font-[700] leading-[120%] text-heading-color font-inter">
        Contact Us
      </h1>
      <p className="text-[16px] font-[400] mt-6 lg:max-w-[450px]">
        Email, call or complete the form to learn how Legal Trademark Office can
        solve your business problem.
      </p>
      <p className="text-[16px] font-[400] mt-6">
        info@legaltrademarkoffice.com
      </p>
      <p className="text-[16px] font-[400] mt-6">321-221-231</p>
      <p className="text-[16px] font-[400] mt-6 underline text-blue-700 cursor-pointer">
        Customer Support
      </p>

      <div className="grid grid-cols-3 w-full gap-8 mt-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-inter font-bold text-heading-color">
            Customer Support
          </h1>
          <p className="text-[16px] font-[400]">
            Our support team is available around the clock to address any
            concern or queries you may have.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-inter font-bold text-heading-color">
            Feedback & Suggestions
          </h1>
          <p className="text-[16px] font-[400]">
            We value your feedback and are continously working to improve Legal
            Trademark Office. Your input is crucial in shipping the future Legal
            Trademark Office.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-inter font-bold text-heading-color">
            Media Inquiries
          </h1>
          <p className="text-[16px] font-[400]">
            For media related questions or press inquiries, please contact us at
            media@legaltrademarkoffice.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsHeadingSection;
