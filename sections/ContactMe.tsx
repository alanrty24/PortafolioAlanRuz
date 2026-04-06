import React from "react";
import ContactDesc from "@/components/ui/ContactDesc";
import ContactForm from "@/components/forms/ContactForm";

const ContactMe: React.FC = () => {
  return (
    <section 
    className="scroll-m-20 w-full mx-auto px-4 md:py-12 lg:max-w-5xl md:max-w-2xl undefined"
    id="contactMe"
    >
      {/* Contact Me Component */}
      <article className="flex flex-col gap-8 md:flex-row">
        <ContactDesc />
        <ContactForm />
      </article>
    </section>
  );
};

export default ContactMe;
