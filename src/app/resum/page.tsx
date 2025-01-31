"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../component/LanguageSwitcher";
import DownloadDropdown from "../component/DownloadDropdown";
import { useState, useEffect } from "react";
import Link from "next/link";
import SecondaryNavbar from "../component/SecondaryNavbar";
import Footer from "../component/Footer";

interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
}
interface Projects {
  title: string;
  description: string;
  link: string;
  skillA: string;
  skillB: string;
  skillC: string;
  skillD: string;
}

export default function resum() {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "fa";
  const currentLocale = i18n.language;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const workExperiences: WorkExperience[] = t("workExperiences.list", {
    returnObjects: true,
  }) as WorkExperience[];
  const currentlyLearning: string[] = t("currentlyLearning.list", {
    returnObjects: true,
  }) as string[];
  const interests: string[] = t("interests.list", {
    returnObjects: true,
  }) as string[];
  const header: string[] = t("header.list", {
    returnObjects: true,
  }) as string[];
  const projects: Projects[] = t("projects.list", {
    returnObjects: true,
  }) as Projects[];

  if (loading) {
    return (
      <div className="fixed w-full inset-0 flex justify-center items-center dark:bg-slate-800 dark:bg-opacity-60 bg-slate-600 bg-opacity-60 z-50">
        <span className="sm:w-20 loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <>
      <SecondaryNavbar />
      <main className="w-screen bg-slate-700 dark:bg-gray-950 pt-10">
        <div className="flex justify-center content-center font-sans">
          <div className="text-gray-950 dark:text-teal-100 border border-gray-600 rounded-xl font-sans shadow-md dark:bg-slate-800 bg-slate-400 dark:bg-opacity-95 bg-opacity-80 shadow-slate-400 sm:px-10 px-4 sm:w-5/6 w-11/12 mb-16">
            <div
              lang={currentLocale}
              dir={currentLocale === "fa" ? "ltr" : "rtl"}
            >
              <div className="sm:flex sm:justify-between justify-center w-full">
                <Image
                  className="mx-auto sm:mx-1 rounded-full shadow shadow-slate-700 my-8 sm:mr-4"
                  src={"./img/aaaa.jpg"}
                  alt={"amir"}
                  width={300}
                  height={300}
                  priority
                />
                <div className="flex justify-between mt-16">
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <h1 className="sm:text-7xl text-[40px] font-extrabold text-center font-serif">
                      {t("header.name")}
                    </h1>
                    <ul className="grid justify-items-end mt-8 mb-4">
                      {header.map((header, index) => (
                        <li
                          key={index}
                          className="px-2 my-2 sm:text-4xl text-2xl"
                        >
                          {header}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end font-sans">
                  {t("about.title")}
                </h2>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <p className="grid justify-items-end mt-4 text-lg">
                    {t("about.content")}
                  </p>
                </div>
              </div>
              <div className="sm:flex sm:gap-x-10 mt-4">
                <div className="sm:w-[30%] w-full sm:text-auto text-center mx-auto">
                  <>
                    <h2 className="w-full mt-6 text-3xl pb-1 font-sans border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      {t("contactDetails.title")}
                    </h2>
                    <ul className="my-4 grid justify-items-end">
                      <li className="px-2 mt-1 grid justify-items-end">
                        <strong className="mr-1">
                          {t("contactDetails.phonetitle")}
                        </strong>
                        <Link href="tel:+821023456789" className="block">
                          {t("contactDetails.phone")}
                        </Link>
                      </li>
                      <li className="px-2 grid mt-4 justify-items-end">
                        <strong className="mr-1">
                          {t("contactDetails.emailtitle")}
                        </strong>
                        <Link href="mailto:" className="block">
                          {t("contactDetails.email")}
                        </Link>
                      </li>
                      <li className="px-2 mt-4 grid justify-items-end">
                        <strong className="mr-1">
                          {t("contactDetails.locationtitle")}
                        </strong>
                        <span className="block">
                          {t("contactDetails.location")}
                        </span>
                      </li>
                    </ul>
                  </>
                  <>
                    <h2 className="w-full text-3xl mt-16 pb-1 font-sans border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      {t("skills.title")}
                    </h2>
                    <ul className="mt-2 mb-10 grid grid-cols-2 justify-items-end">
                      <li className="px-2 mt-1">HTML</li>
                      <li className="px-2 mt-1">CSS</li>
                      <li className="px-2 mt-1">JavaScript</li>
                      <li className="px-2 mt-1">TypeScript</li>
                      <li className="px-2 mt-1">React</li>
                      <li className="px-2 mt-1">React Ruter</li>
                      <li className="px-2 mt-1">Next.js</li>
                      <li className="px-2 mt-1">Graphql</li>
                      <li className="px-2 mt-1">Sql</li>
                      <li className="px-2 mt-1">Tailwind-Css</li>
                      <li className="px-2 mt-1">BootStrap</li>
                      <li className="px-2 mt-1">Wordpress</li>
                      <li className="px-2 mt-1">Postgres</li>
                      <li className="px-2 mt-1">Git</li>
                      <li className="px-2 mt-1">Github</li>
                      <li className="px-2 mt-1">Github-Actions</li>
                      <li className="px-2 mt-1">JWt</li>
                      <li className="px-2 mt-1">ApoloGraphql</li>
                      <li className="px-2 mt-1">Codegen</li>
                      <li className="px-2 mt-1">EsLint</li>
                      <li className="px-2 mt-1">Nvm</li>
                      <li className="px-2 mt-1">Npm</li>
                      <li className="px-2 mt-1">Yarn</li>
                    </ul>
                  </>
                  <>
                    <h2 className="w-full text-3xl mt-16 pb-1 font-sans border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      {t("further.title")}
                    </h2>
                    <ul className="mt-2 mb-10 grid justify-items-end">
                      <li className="px-2 mt-1"> {t("further.firstname")}</li>
                      <li className="px-2 mt-1"> {t("further.secondname")}</li>
                    </ul>
                  </>
                  <>
                    <p className="w-full text-3xl mt-16 pb-1 font-sans border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      {t("currentlyLearning.title")}
                    </p>
                    <ul className="mt-2 grid justify-items-end">
                      {currentlyLearning.map((currentlyLearning, index) => (
                        <li key={index} className="px-2 mt-1">
                          {currentlyLearning}
                        </li>
                      ))}
                    </ul>
                  </>
                  <div className="w-full mt-16">
                    <h2 className="w-full text-3xl font-sans mt-6 pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      {t("education.title")}
                    </h2>
                    <ul className="mt-2">
                      <li className="pt-2 grid justify-items-end">
                        <p className="flex justify-between text-md gap-x-2">
                          {t("education.duration")}
                          <strong className="text-md sm:text-center text-left">
                            {t("education.university")}
                          </strong>
                        </p>
                        <p className="flex justify-between text-[18px] mt-2">
                          {t("education.grade")}
                        </p>
                        <p className="flex justify-between text-[18px]">
                          {t("education.field-study")}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <>
                    <h2 className="w-full text-3xl mt-16 font-sans pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      {t("interests.title")}
                    </h2>
                    <ul className="mt-2 grid justify-items-end">
                      {interests.map((interest, index) => (
                        <li key={index} className="px-2 mt-1">
                          {interest}
                        </li>
                      ))}
                    </ul>
                  </>
                </div>
                <div className="sm:w-[70%] w-[95%] mx-auto grid justify-center justify-items-end">
                  <div>
                    <h2 className="text-3xl mt-6 pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end font-sans">
                      {t("projects.title")}
                    </h2>
                    <ul className="">
                      {projects.map((project, index) => (
                        <li key={index} className="py-3 grid">
                          <div className="sm:flex sm:justify-between">
                            <strong className="sm:hidden grid my-2 justify-items-end">
                              {project.title}
                            </strong>
                            <p className="flex justify-end sm:justify-start my-2">
                              <span className="bg-gray-500 dark:bg-slate-700 dark:text-white text-gray-950 px-2 py-1 ml-1 text-xs rounded">
                                {project.skillA}
                              </span>
                              <span className="bg-gray-500 dark:bg-slate-700 dark:text-white text-gray-950 px-2 py-1 ml-1 text-xs rounded">
                                {project.skillB}
                              </span>
                              <span className="bg-gray-500 dark:bg-slate-700 dark:text-white text-gray-950 px-2 py-1 ml-1 text-xs rounded">
                                {project.skillC}
                              </span>
                              <span className="bg-gray-500 dark:bg-slate-700 dark:text-white text-gray-950 px-2 py-1 ml-1 text-xs rounded">
                                {project.skillD}
                              </span>
                            </p>
                            <strong className="sm:grid hidden my-2 justify-items-end">
                              {project.title}
                            </strong>
                          </div>
                          <div className={isRTL ? "text-right" : "text-left"}>
                            <p className="text-md grid justify-items-end">
                              {project.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full">
                    <h2 className="w-full text-3xl mt-6 font-sans pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      {t("workExperiences.title")}
                    </h2>
                    <ul className="mt-2 grid">
                      {workExperiences.map((experience, index) => (
                        <li key={index} className="py-4 grid justify-items-end">
                          <p className="flex items-center text-md sm:my-2 mt-1 sm:gap-x-2">
                            <span className="sm:block hidden">
                              {experience.duration}
                            </span>
                            <strong className="sm:text-2xl text-[22px]">
                              {experience.company}
                            </strong>
                          </p>
                          <div className="flex sm:hidden w-full gap-x-16 justify-end my-2">
                            <p className="text-[18px] text-right ">
                              {experience.duration}
                            </p>
                            <p className="text-[18px]">
                              {experience.location}
                            </p>
                          </div>
                          <p className="flex sm:text-2xl text-base sm:gap-x-2 font-medium">
                            <span className="font-light sm:block hidden">
                              {experience.location}
                            </span>
                            {experience.role}
                          </p>
                          <div className={isRTL ? "text-right" : "text-left"}>
                            <p className="sm:text-md text-[15px] mb-2">
                              {experience.description}
                            </p>
                          </div>
                          <strong>{t("skills.title")}</strong>
                          <div className="w-full mt-1 sm:text-[17px] text-[15px] grid sm:grid-cols-2 justify-items-end sm:w-[80%]">
                            {experience.skills.map((skill, i) => (
                              <span key={i}>
                                {skill}
                                {i !== experience.skills.length - 1 && ""}
                              </span>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <footer className="my-6">
                <p className="bg-gray-600 dark:text-white text-gray-950 text-center text-xs pt-2"></p>
              </footer>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
