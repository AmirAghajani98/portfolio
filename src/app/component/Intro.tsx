"use client";

import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import Link from "next/link";
import LoadingButton from "../component/Buttons/LoadingButton";

const Intro: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  };
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
          <h1 className="sm:text-6xl sm:my-28 mb-20 mt-8 text-4xl font-bold dark:text-slate-100 text-[#121a23] font-sans">
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
          {/* <div className="w-full max-w-72 mx-auto justify-center items-center text-center relative z-10 flex cursor-pointer overflow-hidden sm:p-[3px] p-[2px]">
            <div className="animate-rotate absolute inset-0 bg-[conic-gradient(#475569_45deg,transparent_180deg)] dark:bg-[conic-gradient(#64748b_45deg,transparent_180deg)]"></div>
            <div className="relative z-20 flex w-full bg-slate-700">
              <Link
                href={"/projects"}
                className="text-lg font-sans mx-auto w-full h-full py-2 px-4 font-semibold dark:hover:bg-opacity-40 hover:bg-opacity-75 dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-400 dark:bg-opacity-30 bg-opacity-80 transition duration-200 border border-transparent bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end animate-gradientBorder"
              >
                Let’s Create Something Great
              </Link>
            </div>
          </div> */}
          <div className="relative inline-flex  group">
            <div className="absolute transitiona-all duration-1000 dark:opacity-70 -inset-px dark:bg-gradient-to-r dark:from-[#44BCFF] dark:via-[#FF44EC] dark:to-[#FF675E] bg-gradient-to-r from-slate-900 via-blue-900 to-amber-900 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <Link
              href={"/landing"}
              onClick={handleClick}
              title="Get quote now"
              className="relative inline-flex font-sans items-center justify-center px-8 py-4 text-lg font-bold dark:text-white text-slate-950 transition-all duration-200 dark:bg-slate-800 bg-gray-400 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              {isLoading ? <LoadingButton /> : " Let’s Create Something Great!"}
            </Link>
          </div>
          <div className="mt-36 sm:mt-24 dark:text-slate-100 text-[#121a23]">
            <h2 className="justify-center sm:text-3xl text-2xl font-semibold sm:flex font-sans">
              Connect with me
            </h2>
          </div>
          <div className="sm:mt-10 mt-6 justify-center flex w-full sm:mx-auto">
            <Link
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
            </Link>
            <Link
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
            </Link>
            <Link
              href="https://t.me/Amr431"
              target={"_blank"}
              className="sm:mx-3"
            >
              <Image
                src="./img/4.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="mx-4 my-2 p-2 bg-slate-700 bg-opacity-30 dark:bg-slate-100 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/amir-aghajani/"
              target={"_blank"}
              className="sm:mx-3"
            >
              <Image
                loading="lazy"
                src="./img/5.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="mx-4 my-2 p-2 bg-slate-700 bg-opacity-30 dark:bg-slate-100 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
