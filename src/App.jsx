import Description from "./components/Description";
import CardList from "./components/CardList";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <Header />
      <main className="flex flex-row flex-wrap py-4">
        <section className="w-1/2  px-2">
          <div className="sticky top-0 p-4 w-full">
            <ul className="flex flex-col overflow-hidden">
              <Description />
            </ul>
          </div>
          <SocialLinks />
        </section>
        <section className="w-1/2 pt-2 px-2">
          <CardList />
        </section>
      </main>
    </div>
  );
}
