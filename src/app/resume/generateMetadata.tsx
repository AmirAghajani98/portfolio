import type { Metadata } from 'next';

const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Amir Aghajani - Resume',
  description: 'Download or view the resume of Amir Aghajani, a web developer specializing in modern web technologies.',
  openGraph: {
    title: 'Amir Aghajani - Resume',
    description: 'Download or view the resume of Amir Aghajani, a web developer specializing in modern web technologies.',
    images: [
      {
        url: '/resume-opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amir Aghajani - Resume',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amir Aghajani - Resume',
    description: 'Download or view the resume of Amir Aghajani, a web developer specializing in modern web technologies.',
    images: '/resume-opengraph-image.jpg',
  },
});

export default generateMetadata;