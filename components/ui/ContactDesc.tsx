import { bebasNeue } from "@/app/fonts";
import React from "react";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { DescInfo, DescInfoContent, DescInfoIcon, DescInfoTitle } from "./DescInfo";

interface ContactDescProps {
  title?: string;
  value?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const ContactList: ContactDescProps[] = [
  {
    title: "Email",
    value: "alanruz245@gmail.com",
    icon: MdEmail,
  },
  {
    title: "Teléfono",
    value: "+58 424-1727312",
    icon: MdPhoneIphone,
  },
];

const ContactDesc: React.FC = () => {
  return (
    <article className="flex flex-col gap-4 flex-1">
      <h3 className={`text-xl font-semibold ${bebasNeue.className}`}>
        Estamos aqui para ayudarte
      </h3>
      <h3 className="text-4xl font-bold w-full lg:text-6xl">
        <span className="font-bold text-(--color-secundary)">Hablemos</span> de
        tus necesidades
      </h3>
      <p>
        Convierte más, vende mejor. Creamos la página perfecta para tu negocio.
        Escríbeme y lleva tu empresa al siguiente nivel.
      </p>
      {ContactList.map((contact, index) => (
        <DescInfoContent key={index} className="text-(--color-secundary)">
          <DescInfoIcon>
            {contact.icon && <contact.icon className="text-4xl" />}
          </DescInfoIcon>
          <DescInfo>
            <DescInfoTitle className="text-lg">
                {contact.title}
            </DescInfoTitle>
            <DescInfoTitle className="text-lg">
                {contact.value}
            </DescInfoTitle>
          </DescInfo>
        </DescInfoContent>
      ))}
    </article>
  );
};

export default ContactDesc;
