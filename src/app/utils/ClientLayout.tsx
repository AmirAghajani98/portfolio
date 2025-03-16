"use client";

import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ProviderTheme from "./ProviderTheme";
import ClientWrapper from "./ClientWrapper";
import usePageView from "./UsePageView";
import i18n from "../i18";

const ClientLayout = ({
  children,
  lang,
}: {
  children?: React.ReactNode;
  lang: "en" | "fa";
}) => {
  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  usePageView();

  return (
    <>
      <SpeedInsights />
      <ClientWrapper lang={lang}>
        <ProviderTheme>
          <Toaster
            position="bottom-center"
            toastOptions={{
              duration: 3000,
              style: {
                fontSize: "18px",
                fontFamily: "sans-serif",
                minWidth: "300px",
                maxWidth: "400px",
              },
            }}
          />
          <>{children}</>
        </ProviderTheme>
      </ClientWrapper>
    </>
  );
};

export default ClientLayout;
