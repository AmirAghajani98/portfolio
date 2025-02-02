import type { Metadata } from 'next';
import ProjectsClient from './page'; 

export const generateMetadata = async (): Promise<Metadata> => ({
  metadataBase: new URL("https://aghatech.ir/projects"),
  title: 'Projects by Amir Aghajani',
  description: 'Explore the projects created by Amir Aghajani, a web developer specializing in modern web technologies.',
  openGraph: {
    url: "https://aghatech.ir/projects",
    title: 'Projects by Amir Aghajani',
    description: 'Explore the projects created by Amir Aghajani, a web developer specializing in modern web technologies.',
    images: [
      {
        url: '/projects-opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Projects by Amir Aghajani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects by Amir Aghajani',
    description: 'Explore the projects created by Amir Aghajani, a web developer specializing in modern web technologies.',
    images: '/projects-opengraph-image.png',
  },
});

export default function ProjectsPage() {
  return (
    <div>
      <ProjectsClient />
    </div>
  );
}