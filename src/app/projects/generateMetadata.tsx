import type { Metadata } from 'next';
import Projects from './page'; 

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "Projects";
  const description = "Explore the projects created by Amir Aghajani, a web developer specializing in modern web technologies.";
  const imageUrl = "/opengraph-image.jpg"; 

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://aghatech.ir/projects/", 
      siteName: "Amir Aghajani Portfolio",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Projects",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl,
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