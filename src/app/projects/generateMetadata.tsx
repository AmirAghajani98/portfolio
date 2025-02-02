import type { Metadata } from 'next';

const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Projects by Amir Aghajani',
  description: 'Explore the projects created by Amir Aghajani, a web developer specializing in modern web technologies.',
  openGraph: {
    title: 'Projects by Amir Aghajani',
    description: 'Explore the projects created by Amir Aghajani, a web developer specializing in modern web technologies.',
    images: [
      {
        url: '/projects-opengraph-image.jpg',
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
    images: '/projects-opengraph-image.jpg',
  },
});

export default generateMetadata;