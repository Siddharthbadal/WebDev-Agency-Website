import About from "@/components/About";
import Intro from "@/components/Intro";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Techs from "@/components/Techs";
import Contact from "../components/Contact";


export default function Home() {
  return (
        <main className="flex flex-col items-center px-4">
          <Intro  />
          <SectionDivider />
          <About  />
          
          <Projects />
          <Techs  />
          <Process  />
          <Contact  />
        </main>
  );
}
