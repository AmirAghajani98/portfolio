import "./globals.css";
import "./i18";
import i18n from "./i18";
import type { Metadata } from "next";
import { Suspense } from "react";
import ProviderTheme from "./component/ProviderTheme";
import ClientWrapper from "./component/ClientWrapper";

export const metadata: Metadata = {
  title: {
    default: "Amir Aghajani - Web Developer",
    template: "%s | Amir Aghajani",
  },
  description:
    "Software engineer and web developer specializing in modern web technologies and building dynamic apps.",
  openGraph: {
    title: "Amir Aghajani - Web Developer",
    description:
      "Software engineer and web developer specializing in modern web technologies and building dynamic apps.",
    url: "https://amiraghajani.liara.run/",
    siteName: "amir-aghajani-portfolio",
    images: {
      url: "/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "Amir Aghajani Portfolio Image",
      type: "",
    },
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amir Aghajani - Web Developer",
    description:
      "Software engineer and web developer specializing in modern web technologies and building dynamic apps.",
    images: "/opengraph-image.jpg",
  },
};

export default function RootLayout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "en" | "fa";
}) {
  const isRtl = lang === "fa";
  if (i18n.language !== lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <html lang={lang} dir={isRtl ? "rtl" : "ltr"} className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="image"
          content="https://amiraghajani.liara.run/opengraph-image.jpg"
        />
        <meta
          property="og:image"
          content="https://amiraghajani.liara.run/opengraph-image.jpg"
        />
        <meta
          name="twitter:image"
          content="https://amiraghajani.liara.run/opengraph-image.jpg"
        />
        <link rel="canonical" href="https://amiraghajani.liara.run/" />
        <link rel="icon" href="/favicon.ico" />
        <title>Amir Aghajani - Web Developer</title>
      </head>
      <body className="h-screen">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-full">
              Loading...
            </div>
          }
        >
          <ClientWrapper lang={lang}>
            <ProviderTheme>
              <>{children}</>
            </ProviderTheme>
          </ClientWrapper>
        </Suspense>
      </body>
    </html>
  );
}
