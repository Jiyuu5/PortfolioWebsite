import Description from "./components/Description";
import CardList from "./components/CardList";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  function handleSetLanguage(language) {
    setCurrentLanguage(language);
  }

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <Header handleSetLanguage={handleSetLanguage} />
      <main className="flex flex-row flex-wrap ">
        <section className="w-1/2">
          <div className="sticky top-0 w-full">
            <ul className="flex flex-col justify-between h-dvh">
              <Description language={currentLanguage} />
              <div>
                <SocialLinks />
                <Footer />
              </div>
            </ul>
          </div>
        </section>
        <section className="w-1/2 pt-2 px-2">
          <CardList />
        </section>
      </main>
    </div>
  );
}
