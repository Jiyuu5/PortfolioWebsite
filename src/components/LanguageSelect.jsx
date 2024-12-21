/* eslint-disable react/prop-types */
export default function LanguageSelect({ handleSetLanguage }) {
  return (
    <ul className="flex gap-3">
      <li>
        <button onClick={() => handleSetLanguage("de")}>DE</button>
      </li>
      <li>|</li>
      <li>
        <button onClick={() => handleSetLanguage("en")}>EN</button>
      </li>
      <li>|</li>
      <li>
        <button onClick={() => handleSetLanguage("jp")}>JP</button>
      </li>
    </ul>
  );
}
