import ContactMe from "@/sections/ContactMe";
import Expirence from "@/sections/Expirence";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <>
    <main className="bg-(--color-primary) w-full mx-auto">
      <Hero />
      <Expirence />
      <Projects />
      <ContactMe />
    </main>
    </>
  );
}
