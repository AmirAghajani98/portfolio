"use client";
import "./globals.css";
import "./i18";
import ProviderTheme from "./component/ProviderTheme";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

  const currentLocale = i18n.language;

  return (
    <html
      lang={currentLocale}
      dir={currentLocale === "fa" ? "rtl" : "ltr"}
      className="scroll-smooth"
    >
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <ProviderTheme>
            <>{children}</>
          </ProviderTheme>
        </Suspense>
      </body>
    </html>
  );
}
