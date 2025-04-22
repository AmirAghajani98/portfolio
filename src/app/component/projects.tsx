"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
interface Projects {
  title: string;
  description: string;
  link: string;
  image: string;
  linktext: string;
}
const Projects: React.FC = () => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "fa";
  const currentLocale = i18n.language;
  const projects: Projects[] = t("myprojects.list", {
    returnObjects: true,
  }) as Projects[];

  return (
    <main
      id="projects"
      className="sm:min-h-screen w-full mx-auto sm:px-48 py-10 justify-center bg-slate-400 projectback relative z-10 "
    >
      <div>
        <h2 className="sm:text-4xl text-2xl text-center mx-auto sm:my-8 pb-10 font-mono text-gray-800 dark:text-gray-100 font-bold border-b border-gray-300 dark:border-gray-700 sm:w-[50%]">
          {t("myprojects.title")}
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={100}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper sm:pb-14 pb-2 mx-auto justify-center"
          style={{
            paddingBottom: "30px",
            margin: "auto",
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                lang={currentLocale}
                dir={currentLocale === "fa" ? "rtl" : "ltr"}
                className="my-8 sm:my-6 sm:flex sm:flex-col sm:w-full w-11/12 mx-auto z-50 p-4 sm:pt-8 sm:pb-5 h-full text-gray-800 dark:text-gray-100 bg-slate-300 bg-opacity-30 dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex justify-center items-center mb-4">
                  <Image
                    loading="lazy"
                    src={project.image}
                    width={500}
                    height={400}
                    alt={project.title}
                    className="w-full max-w-[400px] rounded-xl cursor-pointer transition-transform"
                  />
                </div>

                <h3 className="font-mono mt-3 mb-4 sm:mx-4 text-left font-semibold text-xl text-gray-800 dark:text-gray-100">
                  <div className={isRTL ? "text-right" : "text-left"}>
                    {project.title}
                  </div>
                </h3>
                <p className="font-sans sm:overflow-hidden text-ellipsis whitespace-normal h-32 sm:mx-4 text-left sm:mb-6 mb-2 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:line-clamp-5 line-clamp-4">
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
                      className="link link-hover link-info text-indigo-800 dark:text-indigo-400 text-sm font-sans font-medium"
                    >
                      {project.linktext}&gt;
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Projects;
