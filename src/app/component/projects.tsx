"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Projects: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const openModal = (src: string) => {
    setModalImageSrc(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImageSrc("");
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <main
      id="projects"
      className="sm:min-h-screen sm:w-full mx-auto sm:py-10 pb-10 pt-24 opacity-95 bg-slate-400 projectback justify-center flex flex-col"
    >
      <h1 className="sm:text-5xl text-4xl text-center mx-auto sm:my-8 pb-10 font-mono dark:text-slate-100 text-[#121a23] font-bold border-b border-slate-500 dark:border-slate-600 w-[50%]">
        Projects
      </h1>
      <div className="w-10/12 sm:my-20 mx-auto sm:flex gap-16">
        <div className="my-4 sm:my-auto sm:w-full z-50 py-4 p-4 sm:py-8 sm:h-[480px] dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-100 bg-opacity-70 sm:text-justify text-start rounded-3xl shadow shadow-slate-500 dark:shadow-slate-900 ">
          <div className="inline-flex justify-center items-center dark:text-slate-100 text-[#121a23] w-full">
            <Image
              src="./img/karjoo-landing.png"
              width={500}
              height={400}
              alt="karjoo-landing"
              className="my-2 mx-auto p-0.5 z-10 dark:bg-slate-90 dark:bg-opacity-90 rounded-2xl hover:shadow-md hover:shadow-slate-700 cursor-pointer"
              onClick={() => openModal("./img/weatherapp.png")}
            />
          </div>
          <h2 className="font-mono sm:text-justify mt-2 sm:w-[90%] mx-auto my-2 font-semibold text-lg dark:text-slate-100 text-[#121a23]">
            Karjoo+ Landing
          </h2>
          <p className="font-sans text-justify sm:mt-1 block sm:w-[90%] mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            Karjoo.plus is a comprehensive platform for human resource
            management, featuring an exhibition calendar, a list of job fairs,
            and detailed pages for each exhibition. Built with Astro and
            Tailwind CSS, it offers a seamless user experience and responsive
            design.
          </p>
          <span className="font-sans text-right sm:mt-1 block sm:w-[90%] mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            <a href="https://karjoo.plus/" target="blank">
              visit site
            </a>
          </span>
        </div>
        <div className="my-4 sm:my-auto sm:w-full z-50 py-4 p-4 sm:py-8 sm:h-[480px] dark:z-10 dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-100 bg-opacity-70 sm:text-justify text-start rounded-3xl shadow shadow-slate-500 dark:shadow-slate-900 ">
          <div className="inline-flex justify-center items-center dark:text-slate-100 text-[#121a23] w-full">
            <Image
              src="./img/sara-photo.png"
              width={500}
              height={400}
              alt="sara-photography"
              className="my-2 mx-auto p-0.5 z-10 dark:bg-slate-90 dark:bg-opacity-90 rounded-2xl hover:bg-opacity-20 hover:shadow-md hover:shadow-slate-700 cursor-pointer"
            />
          </div>
          <h2 className="mt-2 sm:text-justify font-mono sm:w-[90%] mx-auto my-2 font-semibold text-lg dark:text-slate-100 text-[#121a23]">
            Photography Website
          </h2>
          <p className="sm:mt-1 text-justify font-sans block sm:w-[90%] mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            website photography specializing in capturing precious moments for
            families, newborns, first birthdays, pregnancies, and other
            significant occasions. The site features a blog, inspiration, and
            stories to help families create lasting memories through
            photography.
          </p>
          <span className="font-sans text-right sm:mt-1 block sm:w-[90%] mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            <a href="https://saraphotography.com.au/en/" target="blank">
              visit site
            </a>
          </span>
        </div>
        <div className="my-4 sm:my-auto sm:w-full z-50 py-4 p-4 sm:py-8 sm:h-[480px] dark:z-10 dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-100 bg-opacity-70 sm:text-justify text-start rounded-3xl shadow shadow-slate-500 dark:shadow-slate-900 ">
          <div className="inline-flex justify-center items-center dark:text-slate-100 text-[#121a23] w-full">
            <Image
              src="./img/qazvinjobs.png"
              width={500}
              height={400}
              alt="Exhibition Event Web App"
              className="my-2 mx-auto p-0.5 z-10 dark:bg-slate-90 dark:bg-opacity-90 rounded-2xl hover:bg-opacity-20 hover:shadow-md hover:shadow-slate-700 cursor-pointer"
            />
          </div>
          <h2 className="mt-2 sm:text-justify font-mono sm:w-[90%] mx-auto my-2 font-semibold text-lg dark:text-slate-100 text-[#121a23]">
            Exhibition Event Web App
          </h2>
          <p className="sm:mt-1 text-justify font-sans block sm:w-[90%] mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            The exhibitions web app provides real-time access to company
            profiles, booth locations, navigation routes, and job listings,
            enhancing the event experience and facilitating direct connections
            between job seekers and employers.
          </p>
          <span className="font-sans text-right sm:mt-1 block sm:w-[90%] mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            <a href="https://jobs.karjoo.plus/qazvin" target="blank">
              visit site
            </a>
          </span>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
          onClick={handleOverlayClick}
        >
          <div className="relative">
            <span
              className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <Image
              src={modalImageSrc}
              alt="Full preview"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
      <div className="w-full justify-center items-center text-center ">
        <Link
          href={"/projects"}
          className="text-lg font-sans mx-auto py-4 px-4 font-semibold dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-100 bg-opacity-70 rounded-lg "
        >
          see more...
        </Link>
      </div>
    </main>
  );
};

export default Projects;
