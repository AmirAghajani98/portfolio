import type { Metadata } from 'next';
import Resume from './page'; 

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "Resume";
  const description= 'Download or view the resume of Amir Aghajani, a web developer specializing in modern web technologies';
  const imageUrl = "/opengraph-image.jpg"; 

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://aghatech.ir/resume/", 
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
      title,
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


