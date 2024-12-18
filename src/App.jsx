import Descripton from "./components/description";

export default function App() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <div className="flex flex-row flex-wrap py-4">
        <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
          <div className="sticky top-0 p-4 w-full">
            <ul className="flex flex-col overflow-hidden">
              <Descripton />
            </ul>
          </div>
        </aside>
        <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2"></main>
      </div>
      <footer className="mt-auto">...</footer>
    </div>
  );
}
