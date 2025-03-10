import "./globals.css";
import "./i18";
import i18n from "./i18";
import Script from "next/script";
import Head from "next/head";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import ProviderTheme from "./utils/ProviderTheme";
import ClientWrapper from "./utils/ClientWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://aghatech.ir/"),
  title: {
    default: "Amir Aghajani - Web Developer | برنامه‌نویس تحت وب",
    template: "%s | Amir Aghajani",
  },
  generator: "Next.js",
  applicationName: "Amir Aghajani Portfolio",
  keywords: [
    "Amir Aghajani",
    "امیر آقاجانی",
    "Web Developer",
    "برنامه‌نویس تحت وب",
    "Frontend Developer",
    "React Developer",
    "طراحی وب‌سایت",
    "توسعه‌دهنده وب",
  ],
  description:
    "Amir Aghajani is a skilled web developer specializing in modern web technologies, including React, Node.js, and full-stack development. Explore my portfolio for custom web solutions.",
  openGraph: {
    title: {
      default: "Amir Aghajani - Web Developer | برنامه‌نویس تحت وب",
      template: "%s | Amir Aghajani",
    },
    description:
      "Amir Aghajani is a skilled web developer specializing in modern web technologies, including React, Node.js, and full-stack development. Explore my portfolio for custom web solutions.",
    url: "https://aghatech.ir/",
    siteName: "Amir Aghajani Portfolio",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amir Aghajani Portfolio img",
        type: "image/jpeg",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Amir Aghajani - Web Developer | برنامه‌نویس تحت وب",
      template: "%s | Amir Aghajani",
    },
    description:
      "Amir Aghajani is a skilled web developer specializing in modern web technologies, including React, Node.js, and full-stack development. Explore my portfolio for custom web solutions.",
    images: "/opengraph-image.jpg",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://aghatech.ir/",
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
      <Head>
        <Script async src="//static.getclicky.com/101478845.js"></Script>
      </Head>
      <body className="h-screen">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-full">
              Loading...
            </div>
          }
        >
          <SpeedInsights />
          <ClientWrapper lang={lang}>
            <ProviderTheme>
              <Toaster
                position="bottom-center"
                toastOptions={{
                  className: "",
                  duration: 3000,
                  style: {
                    fontSize: "18px",
                    fontFamily: "sans",
                    minWidth: "300px",
                    maxWidth: "400px",
                  },
                }}
              />
              <>{children}</>
            </ProviderTheme>
          </ClientWrapper>
        </Suspense>
      </body>
    </html>
  );
}
