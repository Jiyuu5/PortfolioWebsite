/* eslint-disable react/prop-types */
import LanguageSelect from "./LanguageSelect";

export default function Header({ currentLanguage, handleSetLanguage }) {
  return (
    <header className="float-end sticky top-0 ">
      <LanguageSelect
        currentLanguage={currentLanguage}
        handleSetLanguage={handleSetLanguage}
      />
    </header>
  );
}
