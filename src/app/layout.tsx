import "./globals.css";
import "./i18";
import i18n from "./i18";
import Script from "next/script";
import Head from "next/head";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import ProviderTheme from "./component/ProviderTheme";
import ClientWrapper from "./component/ClientWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://aghatech.ir/"),
  title: {
    default: "Amir Aghajani - Web Developer",
    template: "%s | Amir-Aghajani",
  },
  generator: "Next.js",
  keywords: ["Next.js", "React", "JavaScript"],
  description:
    "Software engineer and web developer specializing in modern web technologies and building dynamic apps.",
  openGraph: {
    title: {
      default: "Amir Aghajani - Web Developer",
      template: "%s | Amir-Aghajani",
    },
    description:
      "Software engineer and web developer specializing in modern web technologies and building dynamic apps.",
    url: "https://aghatech.ir/",
    siteName: "amir-aghajani-portfolio",
    images: {
      url: "/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "Amir Aghajani Portfolio Image",
      type: "image/jpeg",
    },
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Amir Aghajani - Web Developer",
      template: "%s | Amir-Aghajani",
    },
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
      <Head>
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "qehzs1inz3");
          `}
        </Script>
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
