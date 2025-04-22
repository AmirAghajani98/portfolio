import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  return (
    <div className="flex items-center rounded-full">
      <label
        htmlFor="language-toggle"
        className="inline-flex items-center p-1 cursor-pointer dark:bg-gray-900 bg-base-100 dark:text-gray-100 text-gray-300 rounded-full outline outline-1 dark:outline-gray-600 outline-gray-400"
      >
        <input
          id="language-toggle"
          type="checkbox"
          className="checkbox checkbox-success hidden peer rounded-full"
          checked={i18n.language === "fa"}
          onChange={toggleLanguage}
        />
        <span className="px-4 py-2 dark:bg-gray-600 bg-gray-400 font-sans font-medium text-sm sm:text-base peer-checked:dark:bg-gray-900 peer-checked:bg-base-100 text-slate-900 dark:text-slate-200 peer-checked:text-slate-100 peer-checked:dark:text-slate-200 rounded-full">
          En
        </span>
        <span className="px-4 py-2 dark:bg-gray-900 bg-base-100 font-sans font-medium text-sm sm:text-base peer-checked:dark:bg-gray-600 peer-checked:bg-gray-400 text-slate-100 dark:text-slate-200 peer-checked:text-slate-900 peer-checked:dark:text-slate-200 rounded-full">
          Fa
        </span>
      </label>
    </div>
  );
};

export default LanguageSwitcher;
