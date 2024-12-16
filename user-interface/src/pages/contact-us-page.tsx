import React from "react";

import ContactUsHeadingSection from "@/components/roots/contact-us/contact-us-heading-section";
import ContactUsForm from "@/components/roots/contact-us/contact-us-form";

const ContactUsPage = () => {
  return (
    <main>
      <section className="bg-secondary-bg-color w-full h-full">
        <div className="layout-standard section-padding-standard flex gap-12">
          <ContactUsHeadingSection />

          <ContactUsForm />
        </div>
      </section>

      <section className="h-[500px]">
      
      </section>
    </main>
  );
};

export default ContactUsPage;
