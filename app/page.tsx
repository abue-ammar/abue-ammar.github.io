import Contacts from "@/components/Contacts";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="p-4 lg:pt-20 lg:pl-20 lg:pr-20 max-w-4xl m-auto w-full">
      <Intro />
      <div className="flex flex-col gap-4">
        <Resume />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contacts />
        <Footer />
      </div>
    </main>
  );
}
