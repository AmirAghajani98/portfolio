import { useTranslation } from "react-i18next";
import { GB, IR } from "country-flag-icons/react/3x2";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  return (
    <div
      className="flex items-center justify-center rounded-full select-none"
      role="group"
      aria-label="Language switcher"
    >
      <label
        htmlFor="language-toggle"
        className="relative inline-flex items-center cursor-pointer rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
      >
        <input
          id="language-toggle"
          type="checkbox"
          className="sr-only"
          checked={i18n.language === "fa"}
          onChange={toggleLanguage}
          aria-checked={i18n.language === "fa"}
          aria-label="Switch language between English and Persian"
        />

        <span
          className={`
            absolute left-0 top-0 h-full w-1/2 bg-blue-600 rounded-full transition-transform duration-300
            ${i18n.language === "fa" ? "translate-x-full" : "translate-x-0"}
          `}
        />

        <span
          className={`relative z-10 flex items-center px-4 py-3 text-lg font-semibold select-none ${
            i18n.language === "en"
              ? "text-white"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          <GB
            title="United Kingdom"
            className="w-7 h-5 m-auto rounded-sm shadow-sm"
          />
        </span>

        <span
          className={`relative z-10 flex items-center px-4 py-3 text-lg font-semibold select-none ${
            i18n.language === "fa"
              ? "text-white"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          <IR title="Iran" className="w-7 h-5 m-auto rounded-sm shadow-sm" />
        </span>
      </label>
    </div>
  );
};

export default LanguageSwitcher;
