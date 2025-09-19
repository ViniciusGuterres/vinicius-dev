import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import settings from "./settings/settings.json";
import { useEffect } from "react";

export default function Page() {

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Placeholder sections for future development */}
      <section id="projects" className="min-h-screen bg-gray-900 flex items-center justify-center pt-20">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Projects Section</h2>
          <p className="text-gray-400">Coming soon...</p>
        </div>
      </section>
    </div>
  );
}