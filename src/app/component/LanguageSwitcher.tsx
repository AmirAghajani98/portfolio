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
        className="flex w-32 justify-around items-center p-2 rounded-full bg-opacity-70 bg-slate-700 border border-slate-600 hover:shadow-slate-500 hover:shadow"
      >
        <span
          className={`transition-transform duration-500 ease-in-out transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          🌍
        </span>
        <span className="ml-2 bg-slate-600 px-2 py-1 rounded-full">
          {i18n.language === "en" ? "English" : "فارسی"}
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
