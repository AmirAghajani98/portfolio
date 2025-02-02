import type { Metadata } from "next";
import Resume from "./page";

export const generateMetadata = async (): Promise<Metadata> => {
  const imageUrl = "/opengraph-image.jpg";

  return {
    title: "Resume",
    description:
      "Download or view the resume of Amir Aghajani, a web developer specializing in modern web technologies",
    openGraph: {
      title: "Resume",
      description:
        "Download or view the resume of Amir Aghajani, a web developer specializing in modern web technologies",
      siteName: "Amir Aghajani Portfolio",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "resume",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Resume",
      description:
        "Download or view the resume of Amir Aghajani, a web developer specializing in modern web technologies",
      images: imageUrl,
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
