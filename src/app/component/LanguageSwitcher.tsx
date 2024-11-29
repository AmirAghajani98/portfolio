import { useTranslation } from "react-i18next";
import { useState } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        onClick={toggleLanguage}
        className="relative flex items-center p-2 bg-opacity-70 rounded-full bg-slate-400 dark:bg-slate-800"
      >
        <span
          className={`transition-transform duration-500 ease-in-out transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          🌍
        </span>
        <span className="ml-2">
          {i18n.language === "en" ? "English" : "فارسی"}
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
