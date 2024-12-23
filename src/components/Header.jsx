/* eslint-disable react/prop-types */
import LanguageSelect from "./LanguageSelect";

export default function Header({ currentLanguage, handleSetLanguage }) {
  return (
    <header className="mx-4 lg:sticky lg:top-0 lg:float-end mt-3">
      <LanguageSelect
        currentLanguage={currentLanguage}
        handleSetLanguage={handleSetLanguage}
      />
    </header>
  );
}
