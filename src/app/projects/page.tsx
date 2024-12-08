"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "../utils/projectsData";
import BackButton from "../component/BackButton";
import { ThemeSwitcher } from "../component/ThemeSwitcher";

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
    <main className="sm:min-h-screen sm:w-full mx-auto sm:py-10 pb-10 pt-4 opacity-95 bg-slate-400 projectback justify-center flex flex-col">
      <div className="w-full flex justify-between items-center rounded-2xl sm:-mt-8">
        <div className="flex mx-4 justify-between items-center rounded-full border border-slate-600 hover:shadow-slate-500 hover:shadow">
          <BackButton />
        </div>
        <div className="p-1 mx-2 items-center">
          <ThemeSwitcher />
        </div>
      </div>
      <h1 className="sm:text-5xl text-4xl text-center mx-auto mt-8 pb-6 font-mono dark:text-slate-100 text-[#121a23] font-bold border-b border-slate-500 dark:border-slate-600 w-[50%]">
        Projects
      </h1>
      <div className="w-[90%] sm:w-10/12 sm:my-20 mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-14">
        {projectsData &&
          projectsData.map((project, index) => (
            <div
              key={index}
              className="my-8 sm:my-6 sm:flex sm:flex-col sm:w-full z-50 p-4 sm:py-8 sm:px-8 h-auto dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-40 bg-opacity-70 hover:shadow-lg dark:hover:shadow-slate-700 hover:shadow-slate-400 dark:hover:bg-opacity-60 hover:bg-opacity-50 rounded-3xl shadow-md transition-all duration-300 ease-in-out"
            >
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={project.image}
                  width={500}
                  height={400}
                  alt={project.title}
                  className="w-full max-w-[300px] sm:max-w-[400px] rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(project.link)}
                />
              </div>
              <h2 className="font-mono mt-3 mb-4 font-semibold text-xl dark:text-slate-100 text-[#121a23]">
                {project.title}
              </h2>
              <p className="font-sans whitespace-normal text-left mx-auto sm-mb-6 mb-2 text-base leading-relaxed dark:text-slate-100 text-[#121a23] line-clamp-4">
                {project.description}
              </p>
              <div className="text-right">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-950 dark:text-blue-400 hover:underline"
                >
                  Visit site &gt;
                </a>
              </div>
            </div>
          ))}
      </div>
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
