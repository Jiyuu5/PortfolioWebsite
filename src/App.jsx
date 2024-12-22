import Description from "./components/Description";
import CardList from "./components/CardList";
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
      <Header handleSetLanguage={handleSetLanguage} />
      <main className="flex flex-row flex-wrap ">
        <section className="w-1/2">
          <div className="sticky top-0 w-full">
            <ul className="flex flex-col justify-between h-dvh">
              <Description language={currentLanguage} />
              <div>
                <p>
                  Das Design orientiert an der Portfolio-Site der Entwicklerin
                  <a href="https://brittanychiang.com/"> Brittany Chiang</a>.
                  Vielen Dank für die beeindruckende Vorlage zum Nachbauen!
                </p>
                <SocialLinks />
              </div>
            </ul>
          </div>
        </section>
        <section className="w-1/2 pt-2 px-2">
          <CardList />
          <Footer />
        </section>
      </main>
    </div>
  );
}
