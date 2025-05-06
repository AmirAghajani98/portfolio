import "./globals.css";
import "./i18";
import type { Metadata } from "next";
import { Suspense } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import ClientLayout from "./utils/ClientLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://aghatech.ir/"),
  title: {
    default:
      "Amir Aghajani - Web Developer | امیر آقاجانی - برنامه‌نویس تحت وب",
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
      default:
        "Amir Aghajani - Web Developer | امیر آقاجانی - برنامه‌نویس تحت وب",
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
      default:
        "Amir Aghajani - Web Developer | امیر آقاجانی - برنامه‌نویس تحت وب",
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

  return (
    <html lang={lang} dir={isRtl ? "rtl" : "ltr"} className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "qehzs1inz3");
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <GoogleTagManager gtmId="GTM-WVH4VZ6K" />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WVH4VZ6K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              Loading...
            </div>
          }
        >
          <ClientLayout lang={lang}>{children}</ClientLayout>
        </Suspense>
      </body>
    </html>
  );
}
