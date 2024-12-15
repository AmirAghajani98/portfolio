"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "../../public/locales/en/common.json";
import faTranslations from "../../public/locales/fa/common.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: enTranslations,
      },
      fa: {
        translation: faTranslations,
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
