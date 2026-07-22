import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Security } from "@/components/security";
import { Cicd } from "@/components/cicd";
import { CesbeHub } from "@/components/cesbe-hub";
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
        <Skills />
        <Security />
        <Cicd />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
