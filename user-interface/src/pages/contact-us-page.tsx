import React from "react";
import Image from "next/image";

import ContactUsHeadingSection from "@/components/roots/contact-us/contact-us-heading-section";
import ContactUsForm from "@/components/roots/contact-us/contact-us-form";

import ContactusImage from "../../public/images/map-img.jpg";

const ContactUsPage = () => {
  return (
    <main>
      <section className="bg-secondary-bg-color w-full h-full">
        <div className="layout-standard section-padding-standard flex gap-12">
          <ContactUsHeadingSection />

          <ContactUsForm />
        </div>
      </section>

      <section className="layout-standard section-margin-standard section-padding-standard flex gap-8 items-center">
        <Image
          src={ContactusImage}
          alt="Map"
          className="w-[700px] h-[420px] rounded-lg"
        />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-[18px] leading-[24px] font-light text-heading-color font-inter">
              Our Location
            </h2>
            <h1 className="text-[24px] leading-[30px] font-bold font-inter text-heading-color">
              Connecting Near and Far
            </h1>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-[18px] leading-[24px] font-semibold text-heading-color font-inter">
              Our Location
            </h2>
            <div className="text-[14px]">
              <p>Legal Trademark Office Inc.</p>
              <p>San Francisco, USA</p>
              <p>123, Tech Boulevard, Suite 456</p>
              <p>San Francisco, CA 12345</p>
              <p>United States</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;
