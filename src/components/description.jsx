/* eslint-disable react/prop-types */
import { DESCRIPTIONS } from "./data";

export default function Description({ language }) {
  const currentLanguage = DESCRIPTIONS[language];

  return (
    <div className="mt-12 lg:mt-20">
      <h1 className="text-4xl lg:text-5xl font-bold">Eric Grebe</h1>
      <h2 className="text-lg lg:text-xl font-bold mt-3">
        {currentLanguage.title}
      </h2>
      <p className="mt-4 sm:w-3/4 lg:w-2/3">{currentLanguage.description}</p>
    </div>
  );
}
