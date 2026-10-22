import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Security } from "@/components/security";
import { CesbeHub } from "@/components/cesbe-hub";
import { Fros } from "@/components/fros";
import { Garim } from "@/components/garim";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <About />
        <CesbeHub />
        <Fros />
        <Garim />
        <Skills />
        <Security />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
