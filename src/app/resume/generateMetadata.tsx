import type { Metadata } from 'next';
import ProjectsClient from './page'; 

export const generateMetadata = async (): Promise<Metadata> => ({
  metadataBase: new URL("https://aghatech.ir/resume"),
  title: 'Amir Aghajani - Resume',
  description: 'Download or view the resume of Amir Aghajani, a web developer specializing in modern web technologies',
  openGraph: {
    url: "https://aghatech.ir/resume",
    title: 'Amir Aghajani - Resume',
    description: 'Download or view the resume of Amir Aghajani, a web developer specializing in modern web technologies',
    images: [
      {
        url: '/resume-opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Amir Aghajani - Resume',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amir Aghajani - Resume',
    description: 'Download or view the resume of Amir Aghajani, a web developer specializing in modern web technologies',
    images: '/resume-opengraph-image.png',
  },
});

export default function ProjectsPage() {
  return (
    <div>
      <ProjectsClient />
    </div>
  );
}