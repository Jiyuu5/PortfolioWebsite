/* eslint-disable react/prop-types */
export default function LanguageSelect({ currentLanguage, handleSetLanguage }) {
  return (
    <ul className="flex gap-3 lg:mt-1 mr-1">
      <li
        className={
          currentLanguage === "de"
            ? "hover:text-teal-500 font-bold"
            : "hover:text-teal-500"
        }
      >
        <button className="min-w-6" onClick={() => handleSetLanguage("de")}>
          DE
        </button>
      </li>
      <li>|</li>
      <li
        className={
          currentLanguage === "en"
            ? "hover:text-teal-500 font-bold"
            : "hover:text-teal-500"
        }
      >
        <button className="min-w-6" onClick={() => handleSetLanguage("en")}>
          EN
        </button>
      </li>
      <li>|</li>
      <li
        className={
          currentLanguage === "jp"
            ? "hover:text-teal-500 font-bold"
            : "hover:text-teal-500"
        }
      >
        <button className="min-w-6" onClick={() => handleSetLanguage("jp")}>
          JP
        </button>
      </li>
    </ul>
  );
}
