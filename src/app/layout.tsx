import "./globals.css";
import "./i18";
import type { Metadata } from "next";
import { Suspense } from "react";
import ProviderTheme from "./component/ProviderTheme";

export const metadata: Metadata = {
  title: {
    default: "Amir Aghajani - Web Developer",
    template: "%s | Amir Aghajani",
  },
  description:
    "Software engineer and web developer specializing in modern web technologies.",
  openGraph: {
    title: "Amir Aghajani - Web Developer",
    description:
      "Software engineer and web developer specializing in modern web technologies.",
    url: "https://amiraghajani.liara.run/",
    siteName: "amir-aghajani-portfolio",
    images: [
      {
        url: "/site.png",
        width: "1200px",
        height: "630px",
        alt: "Amir Aghajani Portfolio Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amir Aghajani - Web Developer",
    description:
      "Software engineer and web developer specializing in modern web technologies.",
    images: ["/site.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
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

  return (
    <html lang={lang} dir={isRtl ? "rtl" : "ltr"} className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://amiraghajani.liara.run/" />
        <link rel="icon" href="/favicon.ico" />
        <title>Amir Aghajani - Web Developer</title>
      </head>
      <body className={"h-screen"}>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-full">
              Loading...
            </div>
          }
        >
          <ProviderTheme>
            <>{children}</>
          </ProviderTheme>
        </Suspense>
      </body>
    </html>
  );
}
