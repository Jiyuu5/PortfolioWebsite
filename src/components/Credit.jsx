/* eslint-disable react/prop-types */
import { LANGUAGE_DATA } from "./data";

export default function Credit({ language }) {
  const currentLanguage = LANGUAGE_DATA[language];

  return (
    <>
      <p className="text-sm p-2 mb-4">
        {currentLanguage.credit[0]}
        <a
          className="text-slate-100 font-bold hover:text-teal-400"
          href="https://brittanychiang.com/"
          target="_blank"
        >
          <span> Brittany Chiang</span>
        </a>
        {currentLanguage.credit[1]}
      </p>
    </>
  );
}
