import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-8 space-y-12">
        <Intro />
        <Skills />
        <Projects />
        <Resume />
      </main>
    </>
  );
}
