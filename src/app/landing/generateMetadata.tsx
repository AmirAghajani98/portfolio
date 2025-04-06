import type { Metadata } from "next";
import Landing from "./page";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Professional Website & Online Store Design | aghatech",
    description:
      "Design professional websites and online stores with top quality and affordable prices. 24/7 support and fast delivery. Request a free consultation today!",
    keywords: [
      "طراحی وب‌سایت",
      "Amir Aghajani",
      "Web Developer",
      "aghatech",
      "Website design",
      "e-commerce development",
      "custom website",
      "website maintenance",
      "corporate website design",
      "online store design",
    ],
    openGraph: {
      title: "Professional Website & Online Store Design | aghatech",
      description:
        "Design professional websites and online stores with top quality and affordable prices. 24/7 support and fast delivery. Request a free consultation today!",
      siteName: "Amir Aghajani Portfolio",
      images: [
        {
          url: "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "landing",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Professional Website & Online Store Design | aghatech",
      description:
        "Design professional websites and online stores with top quality and affordable prices. 24/7 support and fast delivery. Request a free consultation today!",
      images: "/opengraph-image.jpg",
    },
  };
};

export default function LangingPage() {
  return (
    <div>
      <Landing />
    </div>
  );
}
