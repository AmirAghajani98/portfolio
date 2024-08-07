"use client";

import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";

const Intro: React.FC = () => {
  return (
    <section>
      <div
        id="home"
        className="h-screen items-start justify-center flex introback"
      >
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="w-full text-center">
          <h1 className="sm:text-6xl sm:my-32 mb-20 mt-8 text-4xl font-bold dark:text-slate-100 text-[#121a23] font-sans">
            Hello, I am <br />
            <br />
            Amir Mohammad Aghajani
          </h1>
          <p className="my-20 text-3xl sm:text-4xl text-center">
            <span className=""></span>
            <strong className="font-mono dark:text-slate-100 text-[#121a23]">
              <ReactTyped
                strings={[
                  "Technical Lead",
                  "web Developer",
                  "Software Engineer",
                ]}
                typeSpeed={80}
                backDelay={1100}
                backSpeed={30}
                loop
              />
            </strong>
          </p>
          <div className="sm:mt-40 mt-30 dark:text-slate-100 text-[#121a23]">
            <h2 className="justify-center sm:text-3xl text-2xl font-semibold sm:flex font-sans">
              Connect with me
            </h2>
          </div>
          <div className="sm:mt-10 mt-6 justify-center flex w-full sm:mx-auto">
            <a
              href="mailto:amir.aghajani1377@gmail.com"
              target={"_blank"}
              className="sm:mx-3"
            >
              <Image
                src="./img/2.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="mx-4 my-2 p-2 bg-slate-700 bg-opacity-30 dark:bg-slate-100 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
              />
            </a>
            <a
              href="https://github.com/AmirAghajani98"
              target={"_blank"}
              className="sm:mx-3"
            >
              <Image
                src="./img/7.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="mx-4 my-2 p-2 bg-slate-700 bg-opacity-30 dark:bg-slate-100 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
              />
            </a>
            <a href="https://t.me/Amr431" target={"_blank"} className="sm:mx-3">
              <Image
                src="./img/4.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="mx-4 my-2 p-2 bg-slate-700 bg-opacity-30 dark:bg-slate-100 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/amir-aghajani/"
              target={"_blank"}
              className="sm:mx-3"
            >
              <Image
                src="./img/5.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="mx-4 my-2 p-2 bg-slate-700 bg-opacity-30 dark:bg-slate-100 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
