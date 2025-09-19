import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

export default function Page() {

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
    </div>
  );
}