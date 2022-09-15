import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
function App() {
  return (
    <div className="p-6 lg:p-20 max-w-4xl m-auto w-full">
      <Hero />
      <div className="p-0 space-y-10">
        <Projects />
        <Stack />
        <Contact />
      </div>
    </div>
  );
}

export default App;
