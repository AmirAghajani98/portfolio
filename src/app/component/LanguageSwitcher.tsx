import { useTranslation } from "next-i18next";
import { useState } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={toggleLanguage}
        className="relative flex items-center p-2 rounded-full bg-gray-800 text-white shadow-md"
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

      <div
        className={`absolute top-0 right-0 mt-8 bg-white p-4 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
      >
        <p className="text-sm text-gray-700">Change language</p>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
