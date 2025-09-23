import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";

export default function Page() {

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}