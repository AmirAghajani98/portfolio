"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../../utils/projectsData";

const LandingProjects: React.FC = () => {
  return (
    <main
      id="projects"
      className="sm:min-h-screen sm:w-full mx-auto sm:py-10 pb-10 pt-24 opacity-95 bg-slate-400 projectback justify-center flex flex-col"
    >
      <h2 className="sm:text-4xl text-2xl text-center mx-auto sm:my-8 pb-10 font-mono dark:text-slate-100 text-[#121a23] font-bold border-b border-slate-500 dark:border-slate-600 sm:w-[50%]">
        Ideas Turned into Reality
      </h2>
      <div className="w-[85%] sm:w-10/12 sm:my-20 mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-14">
        {projectsData &&
          projectsData.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className="my-8 sm:my-6 sm:flex sm:flex-col sm:w-full z-50 p-4 sm:pt-8 sm:pb-5 h-auto dark:text-slate-100 text-[#121a23] dark:bg-slate-800 bg-slate-400 dark:bg-opacity-30 bg-opacity-40 rounded-xl shadow-lg dark:shadow-slate-900 transition-all duration-300 ease-in-out"
            >
              <div className="flex justify-center items-center mb-4">
                <Image
                  loading="lazy"
                  src={project.image}
                  width={500}
                  height={400}
                  alt={project.title}
                  className="w-full max-w-[300px] sm:max-w-[400px] rounded-xl cursor-pointer transition-transform"
                />
              </div>
              <h3 className="font-mono mt-3 mb-4 sm:mx-4 text-left font-semibold text-xl dark:text-slate-100 text-[#121a23]">
                {project.title}
              </h3>
              <p className="font-sans whitespace-normal sm:mx-4 text-left sm:mb-6 mb-2 text-base leading-relaxed dark:text-gray-400 text-gray-800 sm:line-clamp-5 line-clamp-4">
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
          ))}
      </div>

      <div className="w-full max-w-32 mx-auto justify-center items-center text-center relative z-10 flex cursor-pointer overflow-hidden rounded-xl sm:p-[2.5px] p-[2px]">
        <div className="animate-rotate absolute inset-0 rounded-full bg-[conic-gradient(#475569_45deg,transparent_180deg)] dark:bg-[conic-gradient(#64748b_45deg,transparent_180deg)]"></div>
        <div className="relative z-20 flex w-full rounded-[10px] bg-slate-900">
          <Link
            href={"/projects"}
            className="text-lg font-sans mx-auto w-full h-full py-1.5 px-3 font-semibold dark:hover:bg-opacity-40 hover:bg-opacity-75 dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-400 dark:bg-opacity-30 bg-opacity-80 rounded-lg transition duration-200 border border-transparent bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end animate-gradientBorder"
          >
            see more...
          </Link>
        </div>
      </div>
    </main>
  );
};
export default LandingProjects;
