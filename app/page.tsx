import About from "@/components/About";
import Intro from "@/components/Intro";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Techs from "@/components/Techs";


export default function Home() {
  return (
        <main className="flex flex-col items-center px-4">
          <Intro  />
          <SectionDivider />
          <About  />
          
          <Projects />
          <Techs  />
          <Process  />
        </main>
  );
}
