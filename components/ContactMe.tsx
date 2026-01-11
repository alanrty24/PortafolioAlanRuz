import React from "react";
import ContactDesc from "./ui/ContactDesc";
import ContactForm from "./forms/ContactForm";
import Subtitle from "./ui/Subtitle";
import { bebasNeue } from "@/app/fonts";
import { FaPerson } from "react-icons/fa6";

const ContactMe: React.FC = () => {
  return (
    <section 
    className="scroll-m-20 w-full mx-auto py-24 md:py-12 lg:max-w-4xl md:max-w-2xl undefined"
    id="contactMe"
    data-aos="fade-up"
    >
      <Subtitle
        className={`${bebasNeue.className} text-(--color-secundary) text-center`}
        variant="4xl"
        icon={<FaPerson className="text-(--color-tertiary)" />}
      >
        CONTACTAME
      </Subtitle>
      {/* Contact Me Component */}
      <article className="flex flex-col gap-8 md:flex-row">
        <ContactDesc />
        <ContactForm />
      </article>
    </section>
  );
};

export default ContactMe;
