import {
  Html,
  Head,
  Body,
  Container,
  Tailwind,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  firstName: string;
  email: string;
  message: string;
}

export default function EmailTemplate({ firstName, email, message }: EmailProps) {
  return (
    <Html>
      <Head />
      <Body>
        <Tailwind
          config={{
            theme: {
              extend: {},
            },
          }}
        >
          <Container className="min-w-1/2 min-h-1/2 flex justify-center items-center overflow-hidden">  
          <Container className={`p-4 bg-slate-500 rounded-2xl w-full h-full font-mono`}>
            <Section>
              <Text className={`px-4 py-2 bg-white font-bold rounded-2xl text-4xl`}>Hola Alan, Tienes un nuevo mensaje</Text>
            </Section>
            <Section>
              <Text className="text-2xl font-semibold text-white">Nombre👤: {firstName}</Text>
              <Text className="text-2xl font-semibold text-white">Email📧: {email}</Text>
              <Text className="text-2xl font-semibold text-white">Mensaje📨: {message}</Text>
            </Section>
            <Section>
              <Text className="text-2xl font-bold text-white">¡Saludos!</Text>
            </Section>
          </Container>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
}
