"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Intro from "./component/Intro";
import SkillsSlider from "./component/SkillsSlider";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Projects from "./component/projects";
import ContactForm from "./component/ContactForm";

export default function Home() {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "fa";
  const currentLocale = i18n.language;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
      <Intro />
      <main
        id="about"
        className="w-full py-10 sm:px-0 px-4 dark:opacity-100 opacity-95 backmain"
      >
        <div
          lang={currentLocale}
          dir={currentLocale === "fa" ? "rtl" : "ltr"}
          className="sm:py-10 z-10 dark:z-10 sm:flex sm:items-center w-[98%] sm:w-[90%] bg-slate-300 bg-opacity-30 dark:bg-gray-800 rounded-xl sm:text-justify text-start sm:p-8 p-4 mx-auto shadow-lg dark:shadow-gray-900"
        >
          <div className="text-center m-auto">
            <div className=" z-50 mx-4">
              <Image
                loading="lazy"
                src={"./img/amiraghajani.jpg"}
                width={400}
                height={400}
                alt="amiraghajani"
                className="m-auto rounded-full sm:block hidden z-50 shadow-lg shadow-slate-600 border border-slate-400 dark:shadow-slate-900 dark:border-slate-800"
              />
            </div>
          </div>
          <Image
            loading="lazy"
            src={"./img/amiraghajani.jpg"}
            width={200}
            height={200}
            alt="amiraghajani"
            className="m-auto rounded-full mt-8 mb-16 sm:hidden shadow-md shadow-cyan-500/50 z-50"
          />
          <div className="w-full mt-14 sm:mt-0 text-justify">
            <h2 className="text-3xl font-semibold mb-3 font-mono text-gray-800 dark:text-gray-100">
              <div className={isRTL ? "text-right" : "text-left"}>
                {t("aboutme.title")}
              </div>
            </h2>
            <p className="text-lg font-sans leading-7 indent-3 text-justify text-gray-800 dark:text-gray-300">
              <div>{t("aboutme.description")}</div>
            </p>
          </div>
        </div>
      </main>
      <Projects />
      <SkillsSlider />
      <ContactForm />
      <Footer />
    </>
  );
}
