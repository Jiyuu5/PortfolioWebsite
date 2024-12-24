import Description from "./components/Description";
import ProjectList from "./components/ProjectList";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState("de");

  // Sets a new Language to the whole page
  function handleSetLanguage(language) {
    setCurrentLanguage(language);
  }

  // Website HTML main structure
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <Header
        currentLanguage={currentLanguage}
        handleSetLanguage={handleSetLanguage}
      />
      <main className="lg:flex lg:flex-row lg:gap-4">
        <section className="lg:w-1/2 px-3">
          <div className="lg:sticky lg:top-0 w-full">
            <ul className="lg:flex lg:flex-col lg:justify-between lg:h-dvh">
              <Description language={currentLanguage} />
              <div>
                <SocialLinks />
              </div>
            </ul>
          </div>
        </section>
        <section className="lg:w-1/2 px-3">
          <ProjectList />
          <p className="text-sm p-2 mb-4">
            Das Design dieser Website orientiert sich an der Portfolio-Site von
            <a
              className="text-slate-100 font-bold hover:text-teal-400"
              href="https://brittanychiang.com/"
              target="_blank"
            >
              <span> Brittany Chiang</span>
            </a>
            . Vielen Dank für die beeindruckende Vorlage!
          </p>
          <Footer />
        </section>
      </main>
    </div>
  );
}
