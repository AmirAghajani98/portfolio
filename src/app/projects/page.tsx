"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalIframeSrc, setModalIframeSrc] = useState("");

  const openModal = (url: string) => {
    setModalIframeSrc(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalIframeSrc("");
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  return (
    <main className="sm:min-h-screen sm:w-full mx-auto sm:py-10 pb-10 pt-24 opacity-95 bg-slate-400 projectback justify-center flex flex-col">
      <h1 className="sm:text-5xl text-4xl text-center mx-auto sm:my-8 pb-10 font-mono dark:text-slate-100 text-[#121a23] font-bold border-b border-slate-500 dark:border-slate-600 w-[50%]">
        All Projects
      </h1>
      <div className="w-10/12 sm:my-20 mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-14">
        <div className="my-4 sm:my-auto sm:w-full z-50 py-4 p-4 sm:py-8 sm:h-[480px] dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-100 bg-opacity-70 sm:text-justify text-start rounded-3xl shadow shadow-slate-500 dark:shadow-slate-900">
          <div className="inline-flex justify-center items-center dark:text-slate-100 text-[#121a23] w-full">
            <Image
              src="./img/karjoo-landing.png"
              width={500}
              height={400}
              alt="karjoo-landing"
              className="my-2 mx-auto p-0.5 z-10 dark:bg-slate-90 dark:bg-opacity-90 rounded-2xl hover:shadow-md hover:shadow-slate-700 cursor-pointer"
              onClick={() => openModal("https://karjoo.plus/")}
            />
          </div>
          <h2 className="font-mono sm:text-justify mt-2 mx-auto my-2 font-semibold text-lg dark:text-slate-100 text-[#121a23]">
            Karjoo+ Landing
          </h2>
          <p className="font-sans text-justify sm:mt-1 block mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            Karjoo.plus is a comprehensive platform for human resource
            management, featuring an exhibition calendar, a list of job fairs,
            and detailed pages for each exhibition. Built with Astro and
            Tailwind CSS, it offers a seamless user experience and responsive
            design.
          </p>
          <span className="font-sans text-right sm:mt-1 block mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            <a href="https://karjoo.plus/" target="blank">
              visit site
            </a>
          </span>
        </div>
        <div className="my-4 sm:my-auto sm:w-full z-50 py-4 p-4 sm:py-8 sm:h-[480px] dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-100 bg-opacity-70 sm:text-justify text-start rounded-3xl shadow shadow-slate-500 dark:shadow-slate-900">
          <div className="inline-flex justify-center items-center dark:text-slate-100 text-[#121a23] w-full">
            <Image
              src="./img/sara-photo.png"
              width={500}
              height={400}
              alt="sara-photography"
              className="my-2mx-auto p-0.5 z-10 mt-1 h-[225px] dark:bg-slate-90 dark:bg-opacity-90 rounded-2xl hover:bg-opacity-20 hover:shadow-md hover:shadow-slate-700 cursor-pointer"
              onClick={() => openModal("https://saraphotography.com.au/en/")}
            />
          </div>
          <h2 className="mt-2 sm:text-justify font-mono mx-auto my-2 font-semibold text-lg dark:text-slate-100 text-[#121a23]">
            Photography Website
          </h2>
          <p className="sm:mt-1 text-justify font-sans block mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            website photography specializing in capturing precious moments for
            families, newborns, first birthdays, pregnancies, and other
            significant occasions. The site features a blog, inspiration, and
            stories to help families create lasting memories through
            photography.
          </p>
          <span className="font-sans text-right sm:mt-1 block mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            <a href="https://saraphotography.com.au/en/" target="blank">
              visit site
            </a>
          </span>
        </div>
        <div className="my-4 sm:my-auto sm:w-full z-50 py-4 p-4 sm:py-8 sm:h-[480px] dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-100 bg-opacity-70 sm:text-justify text-start rounded-3xl shadow shadow-slate-500 dark:shadow-slate-900">
          <div className="inline-flex justify-center items-center dark:text-slate-100 text-[#121a23] w-full">
            <Image
              src="./img/qazvinjobs.png"
              width={500}
              height={400}
              alt="Exhibition Event Web App"
              className="my-2 mx-auto p-0.5 z-10 dark:bg-slate-90 dark:bg-opacity-90 rounded-2xl hover:bg-opacity-20 hover:shadow-md hover:shadow-slate-700 cursor-pointer"
              onClick={() => openModal("https://jobs.karjoo.plus/qazvin")}
            />
          </div>
          <h2 className="mt-2 sm:text-justify font-mono mx-auto my-2 font-semibold text-lg dark:text-slate-100 text-[#121a23]">
            Exhibition Event Web App
          </h2>
          <p className="sm:mt-1 text-justify font-sans block  mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            The exhibitions web app provides real-time access to company
            profiles, booth locations, navigation routes, and job listings,
            enhancing the event experience and facilitating direct connections
            between job seekers and employers.the app can be modified to suit
            each exhibition.
          </p>
          <span className="font-sans text-right sm:mt-1 block mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            <a href="https://jobs.karjoo.plus/qazvin" target="blank">
              visit site
            </a>
          </span>
        </div>
        <div className="my-4 sm:my-auto sm:w-full z-50 py-4 p-4 sm:py-8 sm:h-[480px] dark:z-10 dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-100 bg-opacity-70 sm:text-justify text-start rounded-3xl shadow shadow-slate-500 dark:shadow-slate-900 ">
          <div className="inline-flex justify-center items-center dark:text-slate-100 text-[#121a23] w-full">
            <Image
              src="./img/resume.png"
              width={500}
              height={400}
              alt="Resume Template"
              className="my-2 mx-auto p-0.5 z-10 dark:bg-slate-90 dark:bg-opacity-90 rounded-2xl hover:bg-opacity-20 hover:shadow-md hover:shadow-slate-700 cursor-pointer"
              onClick={() => openModal("./img/resume.png")}
            />
          </div>
          <h2 className="mt-2 sm:text-justify font-mono  mx-auto my-2 font-semibold text-lg dark:text-slate-100 text-[#121a23]">
            Resume Template
          </h2>
          <p className="sm:mt-1 text-justify font-sans block  mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            Resume template app utilizes a simple user interface to help you
            easily create professional and stylish resumes. With customizable
            sections, pre-designed templates, and helpful guidance, you can
            personalize your resume.
          </p>
        </div>
        <div className="my-4 sm:my-auto sm:w-full z-50 py-4 p-4 sm:py-8 sm:h-[480px] dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-100 bg-opacity-70 sm:text-justify text-start rounded-3xl shadow shadow-slate-500 dark:shadow-slate-900 ">
          <div className="inline-flex justify-center items-center dark:text-slate-100 text-[#121a23] w-full">
            <Image
              src="./img/weatherapp.png"
              width={500}
              height={400}
              alt="Global Weather App"
              className="my-2 mx-auto p-0.5 z-10 dark:bg-slate-90 dark:bg-opacity-90 rounded-2xl hover:shadow-md hover:shadow-slate-700 cursor-pointer"
              onClick={() => openModal("./img/weatherapp.png")}
            />
          </div>
          <h2 className="font-mono sm:text-justify mt-2  mx-auto my-2 font-semibold text-lg dark:text-slate-100 text-[#121a23]">
            Global Weather App
          </h2>
          <p className="font-sans text-justify sm:mt-1 block  mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            Weather app uses a REST API to provide real-time updates and
            forecasts for each city. It offers current conditions, hourly
            forecasts, and severe weather alerts, all in a user-friendly
            interface.
          </p>
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
              src={modalIframeSrc}
              alt="Full preview"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
          onClick={handleOverlayClick}
        >
          <div className="relative w-[90%] h-[90%] m-auto">
            <span
              className="absolute top-4 right-4 w-10 h-10 my-auto text-white text-3xl cursor-pointer justify-center items-center hover:bg-slate-700 rounded-xl"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              &times;
            </span>
            <iframe
              src={modalIframeSrc}
              title="Project Preview"
              className="w-[80%] h-[80%] rounded-lg m-auto my-24"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
}
