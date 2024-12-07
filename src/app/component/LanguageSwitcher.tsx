import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex items-center rounded-full">
      <label
        htmlFor="language-toggle"
        className="inline-flex items-center p-1 cursor-pointer dark:bg-gray-700 dark:text-gray-100 rounded-full bg-opacity-70 hover:shadow-slate-500 hover:shadow"
      >
        <input
          id="language-toggle"
          type="checkbox"
          className="hidden peer rounded-full"
          checked={i18n.language === "fa"}
          onChange={toggleLanguage}
        />
        <span className="px-4 py-2 dark:bg-gray-500 font-sans font-medium peer-checked:dark:bg-gray-700 rounded-full">
          En
        </span>
        <span className="px-4 py-2 dark:bg-gray-700 font-sans font-medium peer-checked:dark:bg-gray-500 rounded-full">
          Fa
        </span>
      </label>
    </div>
  );
};

export default LanguageSwitcher;
