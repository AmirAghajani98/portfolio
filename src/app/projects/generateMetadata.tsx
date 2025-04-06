import type { Metadata } from "next";
import Projects from "./page";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Projects",
    description:
      "Explore the projects created by Amir Aghajani, a web developer specializing in modern web technologies.",
    openGraph: {
      title: "Projects",
      description:
        "Explore the projects created by Amir Aghajani, a web developer specializing in modern web technologies.",
      siteName: "Amir Aghajani Portfolio",
      images: [
        {
          url: "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Projects",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Projects",
      description:
        "Explore the projects created by Amir Aghajani, a web developer specializing in modern web technologies.",
      images: "/opengraph-image.jpg",
    },
  };
};

export default function ProjectsPage() {
  return (
    <div>
      <Projects />
    </div>
  );
}
