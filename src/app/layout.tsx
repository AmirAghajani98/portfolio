import type { Metadata } from "next";
import "./globals.css";
import "./i18";
import { Suspense } from "react";
import ProviderTheme from "./component/ProviderTheme";

export const metadata: Metadata = {
  title: "Amir Aghajani - Web Developer",
  description: "software engineer and web developer",
  openGraph: {
    title: "Amir Aghajani",
    description: "software engineer and web developer",
    url: "https://amiraghajani.liara.run/",
    siteName: "Amir Aghajani Portfolio",
    images: [
      {
        url: "./img/alogo.jpg",
        width: 800,
        height: 600,
        alt: "Amir Aghajani",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amir Aghajani",
    description: "software engineer and web developer",
    images: ["./img/alogo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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
    <html
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
      lang={lang}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <head>
        <link rel="canonical" href="https://amiraghajani.liara.run/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <ProviderTheme>
            <>{children}</>
          </ProviderTheme>
        </Suspense>
      </body>
    </html>
  );
}
