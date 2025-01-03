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

export default function resume() {
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
        <div className="flex justify-center content-center font-sans ">
          <div className="text-gray-950 dark:text-teal-100 border border-gray-600 rounded-xl font-sans shadow-md dark:bg-slate-800 bg-slate-400 dark:bg-opacity-95 bg-opacity-80 shadow-slate-400 px-10 w-4/6 mb-16">
            <div className="w-full flex justify-between items-center rounded-2xl mt-8">
              <div className="my-1.5 p-1">
                <DownloadDropdown />
              </div>
              <div className="flex items-center justify-center">
                <LanguageSwitcher />
              </div>
            </div>
            <div
              lang={currentLocale}
              dir={currentLocale === "fa" ? "ltr" : "rtl"}
            >
              <div className="flex justify-between w-full">
                <Image
                  className="justify-center rounded-full shadow shadow-slate-700 my-8 mr-4"
                  src={"./img/aaaa.jpg"}
                  alt={"amir"}
                  width={300}
                  height={200}
                  priority
                />
                <div className="flex justify-between mt-16">
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <h1 className="text-6xl font-extrabold">
                      {t("header.name")}
                    </h1>
                    <ul className="grid justify-items-end mt-8">
                      {header.map((header, index) => (
                        <li key={index} className="px-2 my-2 text-3xl">
                          {header}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                  {t("about.title")}
                </h2>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <p className="grid justify-items-end mt-4 text-base">
                    {t("about.content")}
                  </p>
                </div>
              </div>
              <div className="flex gap-x-10 mt-4">
                <div className="w-[30%] text-auto ">
                  <>
                    <h2 className="w-full mt-6 text-2xl pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
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
                    <h2 className="w-full text-2xl mt-16 pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
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
                    <h2 className="w-full text-2xl mt-16 pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      {t("further.title")}
                    </h2>
                    <ul className="mt-2 mb-10 grid justify-items-end">
                      <li className="px-2 mt-1"> {t("further.firstname")}</li>
                      <li className="px-2 mt-1"> {t("further.secondname")}</li>
                    </ul>
                  </>
                  <>
                    <p className="w-full text-2xl mt-16 pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
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
                    <h2 className="w-full text-2xl mt-6 pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      {t("education.title")}
                    </h2>
                    <ul className="mt-2">
                      <li className="pt-2 grid justify-items-end">
                        <p className="flex justify-between text-sm gap-x-2">
                          {t("education.duration")}
                          <strong className="text-base">
                            {t("education.university")}
                          </strong>
                        </p>
                        <p className="flex justify-between text-sm">
                          {t("education.grade")}
                        </p>
                        <p className="flex justify-between text-sm">
                          {t("education.field-study")}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <>
                    <h2 className="w-full text-2xl mt-16 pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
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
                <div className="w-[70%] grid justify-items-end">
                  <div>
                    <h2 className="text-2xl mt-6 pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      {t("projects.title")}
                    </h2>
                    <ul className="">
                      {projects.map((project, index) => (
                        <li key={index} className="py-3 grid">
                          <div className="flex justify-between">
                            <p className="flex my-2">
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
                            <strong className="grid my-2 justify-items-end">
                              {project.title}
                            </strong>
                          </div>
                          <div className={isRTL ? "text-right" : "text-left"}>
                            <p className="text-sm grid justify-items-end">
                              {project.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full">
                    <h2 className="w-full text-2xl mt-6 pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      {t("workExperiences.title")}
                    </h2>
                    <ul className="mt-2 grid">
                      {workExperiences.map((experience, index) => (
                        <li key={index} className="py-4 grid justify-items-end">
                          <p className="flex justify-between items-center text-sm my-2 gap-x-2">
                            {experience.duration}
                            <strong className="text-xl">
                              {experience.company}
                            </strong>
                          </p>
                          <p className="flex justify-between text-lg gap-x-2 font-medium">
                            <span className="font-light">
                              {experience.location}
                            </span>
                            {experience.role}
                          </p>

                          <div className={isRTL ? "text-right" : "text-left"}>
                            <p className="text-base mb-2">
                              {experience.description}
                            </p>
                          </div>
                          <strong>{t("skills.title")}</strong>
                          <div className="mt-1 text-[14px] grid grid-cols-2 justify-items-end w-[80%]">
                            {experience.skills.map((skill, i) => (
                              <span key={i}>
                                {skill}
                                {i !== experience.skills.length - 1 && ", "}
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
