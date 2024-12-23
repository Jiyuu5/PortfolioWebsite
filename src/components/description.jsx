/* eslint-disable react/prop-types */
import { DESCRIPTIONS } from "./data";

export default function Description({ language }) {
  const currentLanguage = DESCRIPTIONS[language];

  return (
    <div className="lg:mt-20">
      <h1 className="text-4xl lg:text-5xl font-bold">Eric Grebe</h1>
      <h2 className="text-lg lg:text-xl font-bold mt-3">
        {currentLanguage.title}
      </h2>
      <p className="mt-4 w-2/3">{currentLanguage.description}</p>
    </div>
  );
}
