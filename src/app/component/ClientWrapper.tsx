"use client";

import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18";

export default function ClientWrapper({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "en" | "fa";
}) {
  if (i18n.language !== lang) {
    i18n.changeLanguage(lang);
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
