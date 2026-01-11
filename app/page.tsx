import ContactMe from "@/components/ContactMe";
import Expirence from "@/components/Expirence";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
    <main className="p-4  bg-(--color-primary) md:px-20 lg:px-60">
      <Hero />
      <Expirence />
      <Projects />
      <ContactMe />
    </main>
    </>
  );
}
