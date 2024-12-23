/* eslint-disable react/prop-types */
export default function LanguageSelect({ handleSetLanguage }) {
  return (
    <ul className="flex gap-3 mt-1 mr-1">
      <li className="hover:text-teal-500">
        <button onClick={() => handleSetLanguage("de")}>DE</button>
      </li>
      <li>|</li>
      <li className="hover:text-teal-500">
        <button onClick={() => handleSetLanguage("en")}>EN</button>
      </li>
      <li>|</li>
      <li className="hover:text-teal-500">
        <button onClick={() => handleSetLanguage("jp")}>JP</button>
      </li>
    </ul>
  );
}
