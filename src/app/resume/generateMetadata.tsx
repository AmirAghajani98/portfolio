"use client";
import type { Metadata } from "next";
import Resume from "./page";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Amir Aghajani Resume",
    description:
      "Download or view the resume of Amir Aghajani, a web developer specializing in modern web technologies",
    openGraph: {
      title: "Amir Aghajani Resume",
      description:
        "Download or view the resume of Amir Aghajani, a web developer specializing in modern web technologies",
      siteName: "Amir Aghajani Portfolio",
      images: [
        {
          url: "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "amir aghajani resume",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Amir Aghajani Resume",
      description:
        "Download or view the resume of Amir Aghajani, a web developer specializing in modern web technologies",
      images: "/opengraph-image.jpg",
    },
  };
};

export default function ResumePage() {
  return (
    <div>
      <Resume />
    </div>
  );
}
