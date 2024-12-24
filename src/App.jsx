import Header from "./components/Header";
import Description from "./components/Description";
import SocialLinks from "./components/SocialLinks";
import ProjectList from "./components/ProjectList";
import Credit from "./components/Credit";
import Footer from "./components/Footer";
import { useState } from "react";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState("de");
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);

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
          <ProjectList language={currentLanguage} />
          <Credit language={currentLanguage} />
          <Footer
            isImpressumOpen={isImpressumOpen}
            onToggleImpressum={setIsImpressumOpen}
            isDatenschutzOpen={isDatenschutzOpen}
            onToggleDatenschutz={setIsDatenschutzOpen}
          />
          <Impressum
            isImpressumOpen={isImpressumOpen}
            handleCloseImpressum={setIsImpressumOpen}
          />
          <Datenschutz
            isDatenschutzOpen={isDatenschutzOpen}
            handleCloseDatenschutz={setIsDatenschutzOpen}
          />
        </section>
      </main>
    </div>
  );
}
