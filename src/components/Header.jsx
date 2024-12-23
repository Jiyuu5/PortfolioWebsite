/* eslint-disable react/prop-types */
import LanguageSelect from "./LanguageSelect";

export default function Header({ handleSetLanguage }) {
  return (
    <header className="float-end sticky top-0 ">
      <LanguageSelect handleSetLanguage={handleSetLanguage} />
    </header>
  );
}
