"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="sm:min-h-screen sm:w-full mx-auto sm:py-10 pb-10 pt-24 opacity-95 bg-slate-400 projectback justify-center flex flex-col">
      <h1 className="sm:text-5xl text-4xl text-center mx-auto sm:my-8 pb-10 font-mono dark:text-slate-100 text-[#121a23] font-bold border-b border-slate-500 dark:border-slate-600 w-[50%]">
        Projects
      </h1>
      <div className="w-10/12 sm:my-20 mx-auto sm:flex gap-16">
        <div className="my-4 sm:my-auto sm:w-full z-50 py-4 p-4 sm:py-8 sm:h-[480px] dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-100 bg-opacity-70 sm:text-justify text-start rounded-3xl shadow shadow-slate-500 dark:shadow-slate-900 ">
          <div className="inline-flex justify-center items-center dark:text-slate-100 text-[#121a23] w-full">
            <Image
              src="./img/weatherapp.png"
              width={500}
              height={400}
              alt="Global Weather App"
              className="my-2 mx-auto p-0.5 z-10 dark:bg-slate-90 dark:bg-opacity-90 rounded-2xl hover:shadow-md hover:shadow-slate-700 cursor-pointer"
              onClick={() => openModal("/img/weatherapp.png")}
            />
          </div>
          <h2 className="font-mono sm:text-justify mt-2 sm:w-[90%] mx-auto my-2 font-semibold text-lg dark:text-slate-100 text-[#121a23]">
            Global Weather App
          </h2>
          <p className="font-sans text-justify sm:mt-1 block sm:w-[90%] mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            Weather app uses a REST API to provide real-time updates and
            forecasts for each city. It offers current conditions, hourly
            forecasts, and severe weather alerts, all in a user-friendly
            interface.
          </p>
        </div>
        <div className="my-4 sm:my-auto sm:w-full z-50  py-4 p-4 sm:py-8 sm:h-[480px] dark:z-10 dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-100 bg-opacity-70 sm:text-justify text-start rounded-3xl shadow shadow-slate-500 dark:shadow-slate-900 ">
          <div className="inline-flex justify-center items-center dark:text-slate-100 text-[#121a23] w-full">
            <Image
              src="./img/resume.png"
              width={500}
              height={400}
              alt="Resume Template"
              className="my-2 mx-auto p-0.5 z-10 dark:bg-slate-90 dark:bg-opacity-90 rounded-2xl hover:bg-opacity-20 hover:shadow-md hover:shadow-slate-700 cursor-pointer"
              onClick={() => openModal("/img/resume.png")}
            />
          </div>
          <h2 className="mt-2 sm:text-justify font-mono sm:w-[90%] mx-auto my-2 font-semibold text-lg dark:text-slate-100 text-[#121a23]">
            Resume Template
          </h2>
          <p className="sm:mt-1 text-justify font-sans block sm:w-[90%] mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            Resume template app utilizes a simple user interface to help you
            easily create professional and stylish resumes. With customizable
            sections, pre-designed templates, and helpful guidance, you can
            personalize your resume.
          </p>
        </div>
        <div className="my-4 sm:my-auto sm:w-full z-50 py-4 p-4 sm:py-8 sm:h-[480px] dark:z-10 dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-100 bg-opacity-70 sm:text-justify text-start rounded-3xl shadow shadow-slate-500 dark:shadow-slate-900 ">
          <div className="inline-flex justify-center items-center dark:text-slate-100 text-[#121a23] w-full">
            <Image
              src="./img/qazvinjobs.png"
              width={500}
              height={400}
              alt="Exhibition Event Web App"
              className="my-2 mx-auto p-0.5 z-10 dark:bg-slate-90 dark:bg-opacity-90 rounded-2xl hover:bg-opacity-20 hover:shadow-md hover:shadow-slate-700 cursor-pointer"
              onClick={() => openModal("/img/qazvinjobs.png")}
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
    </main>
  );
};

export default Projects;
