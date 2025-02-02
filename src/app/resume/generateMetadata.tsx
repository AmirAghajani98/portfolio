import type { Metadata } from 'next';
import Resume from './page'; 

export const generateMetadata = async (): Promise<Metadata> => {
  const description= "Download or view the resume of Amir Aghajani, a web developer specializing in modern web technologies";
  const imageUrl = "/opengraph-image.jpg"; 

  return {
    title:"Resume",
    description,
    openGraph: {
      title:"Resume",
      description,
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
      title:"Resume",
      description,
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


