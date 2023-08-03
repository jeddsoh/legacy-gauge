import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Industries from "./components/Industries";
import Updates from "./components/Updates";
import Modal from "./components/Sidebar";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <Projects />
      <Industries />
      <Updates />
    </main>
  );
}
