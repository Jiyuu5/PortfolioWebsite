/* eslint-disable react/prop-types */
import LanguageSelect from "./LanguageSelect";

export default function Header({ handleSetLanguage }) {
  return (
    <header className="float-end sticky top-0 mt-1">
      <LanguageSelect handleSetLanguage={handleSetLanguage} />
    </header>
  );
}
