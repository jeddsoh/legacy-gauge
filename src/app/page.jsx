import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Industries from "./components/Industries";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <Projects />
      <Industries />
    </main>
  );
}
