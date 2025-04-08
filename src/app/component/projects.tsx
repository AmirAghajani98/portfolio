"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../utils/projectsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Projects: React.FC = () => {
  return (
    <main
      id="projects"
      className="sm:min-h-screen w-full mx-auto sm:px-48 py-10 justify-center bg-slate-400 projectback"
    >
      <h2 className="sm:text-4xl text-2xl text-center mx-auto sm:my-8 pb-10 font-mono dark:text-slate-100 text-[#121a23] font-bold border-b border-slate-500 dark:border-slate-600 sm:w-[50%]">
        My projects
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
        {projectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="my-8 sm:my-6 sm:flex sm:flex-col sm:w-full w-11/12 mx-auto z-50 p-4 sm:pt-8 sm:pb-5 h-full dark:text-slate-100 text-[#121a23] dark:bg-slate-800 bg-slate-400 dark:bg-opacity-30 bg-opacity-40 rounded-xl shadow-lg dark:shadow-slate-900 transition-all duration-300 ease-in-out">
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
              <h3 className="font-mono mt-3 mb-4 sm:mx-4 text-left font-semibold text-xl dark:text-slate-100 text-[#121a23]">
                {project.title}
              </h3>
              <p className="font-sans sm:overflow-hidden text-ellipsis whitespace-normal h-32 sm:mx-4 text-left sm:mb-6 mb-2 text-base leading-relaxed dark:text-gray-400 text-gray-800 sm:line-clamp-5 line-clamp-4">
                {project.description}
              </p>
              <div className="text-right flex items-end justify-end">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans font-medium text-blue-950 dark:text-blue-400 hover:underline"
                >
                  Visit site &gt;
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Projects;
