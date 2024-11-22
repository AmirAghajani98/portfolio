"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "../../public/locales/en/common.json";
import faTranslations from "../../public/locales/fa/common.json";

i18n
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      fa: {
        translation: faTranslations,
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if translation key is missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
