"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
interface Projects {
  title: string;
  description: string;
  link: string;
  image: string;
  linktext: string;
}
export default function Projects() {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "fa";
  const currentLocale = i18n.language;
  const projects: Projects[] = t("myprojects.list", {
    returnObjects: true,
  }) as Projects[];
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalIframeSrc, setModalIframeSrc] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

  if (loading) {
    return (
      <div className="fixed w-full inset-0 flex justify-center items-center bg-slate-700 bg-opacity-60 z-50">
        <span className="sm:w-20 loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="sm:min-h-screen sm:w-full mx-auto sm:pt-16 pt-20 opacity-95 bg-slate-400 projectback justify-center flex flex-col">
        <h2 className="sm:text-5xl text-4xl text-center mx-auto mt-8 pb-6 font-mono dark:text-slate-100 text-[#121a23] font-bold border-b border-slate-500 dark:border-slate-600 w-[70%] sm:w-[50%]">
          {t("myprojects.title")}
        </h2>
        <div className="w-[90%] sm:w-10/12 sm:my-20 mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-14">
          {projects.map((project, index) => (
            <div
              key={index}
              lang={currentLocale}
              dir={currentLocale === "fa" ? "rtl" : "ltr"}
              className="my-8 sm:my-6 sm:flex sm:flex-col sm:w-full z-50 p-4 sm:pt-8 sm:pb-5 h-auto dark:text-slate-100 text-[#121a23] dark:bg-slate-800 bg-slate-400 dark:bg-opacity-30 bg-opacity-40 rounded-xl shadow-lg dark:shadow-slate-900 transition-all duration-300 ease-in-out"
            >
              <div className="flex justify-center items-center mb-4">
                <Image
                  loading="lazy"
                  src={project.image}
                  width={500}
                  height={400}
                  alt={project.title}
                  className="w-full max-w-[300px] sm:max-w-[400px] rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(project.link)}
                />
              </div>
              <h3 className="font-mono mt-3 mb-4 font-semibold text-xl dark:text-slate-100 text-[#121a23]">
                <div className={isRTL ? "text-right" : "text-left"}>
                  {project.title}
                </div>
              </h3>
              <p className="font-sans whitespace-normal text-left mx-auto sm-mb-6 mb-2 text-base leading-relaxed dark:text-slate-100 text-[#121a23] line-clamp-4">
                <div className={isRTL ? "text-right" : "text-left"}>
                  {project.description}
                </div>
              </p>
              <div className="text-right flex items-end justify-end">
                <div className={isRTL ? "text-right" : "text-left"}>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-950 dark:text-blue-400 hover:underline"
                  >
                    {project.linktext}&gt;
                  </Link>
                </div>
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
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        )}
        <Footer />
      </main>
    </>
  );
}
