"use client";

import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import LoadingButton from "../component/Buttons/LoadingButton";

const Intro: React.FC = () => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "fa";
  const currentLocale = i18n.language;
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
        className="h-screen items-start justify-center flex introback pt-20 sm:pt-10"
      >
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div
          className="w-full text-center"
          lang={currentLocale}
          dir={currentLocale === "fa" ? "ltr" : "rtl"}
        >
          <h1 className="sm:text-6xl sm:my-28 mb-20 mt-8 text-4xl font-bold dark:text-slate-100 text-[#121a23] font-sans">
            {t("intro.hi")}
            <br />
            <br />
            {t("intro.name")}
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
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 dark:opacity-70 -inset-px dark:bg-gradient-to-r dark:from-[#858585] dark:via-[#535353] dark:to-[#858585] bg-gradient-to-r from-[#3b3653] via-[#61658c] to-[#3b3653]  rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <Link
              href={"/landing"}
              onClick={handleClick}
              title="Let’s Create Something Great!"
              className="link-info hover:outline outline-violet-900 dark:outline-gray-600 hover:text-indigo-950 relative inline-flex font-sans items-center justify-center px-8 py-4 text-lg font-bold dark:text-white text-gray-900 transition-all duration-200 dark:bg-gray-800 bg-slate-300/80 rounded-xl shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              role="button"
              target="_blank"
            >
              {isLoading ? <LoadingButton /> : t("intro.action")}
            </Link>
          </div>
          <div className="mt-36 sm:mt-24 dark:text-slate-100 text-[#121a23]">
            <h2 className="justify-center sm:text-3xl text-2xl font-semibold sm:flex font-sans">
              {t("intro.contact")}
            </h2>
          </div>
          <div className="sm:mt-10 mt-6 justify-center flex w-full sm:mx-auto">
            <Link
              href="mailto:amir.aghajani1377@gmail.com"
              target={"_blank"}
              className="sm:mx-3"
            >
              <Image
                loading="lazy"
                src="./img/2.webp"
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
                loading="lazy"
                src="./img/7.webp"
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
                loading="lazy"
                src="./img/4.webp"
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
                src="./img/5.webp"
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
