"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Navbar from "../component/Navbar";
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
interface TeachingExperience {
  title: string;
  role: string;
  organization: string;
  duration: string;
  location: string;
  description: string;
  key_achievements: string[];
  skills: string[];
  achievementsTitle: string;
  additionalactivities: {
    title: string;
    workshops: string;
    open_source: string;
    materials: string;
  };
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
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const teachingExperience: TeachingExperience = t("TeachingExperience", {
    returnObjects: true,
  }) as TeachingExperience;
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
      <Navbar />
      <main className="w-full bg-gray-500/90 dark:bg-gray-950 pt-20 sm:pt-24">
        <div className="flex justify-center content-center font-sans">
          <div className="text-gray-950 dark:text-teal-100 border border-gray-600 rounded-xl font-sans shadow-md dark:bg-slate-800 bg-slate-400 dark:bg-opacity-95 bg-opacity-80 shadow-slate-400 sm:px-10 px-4 sm:w-4/6 w-11/12 mb-16">
            <div
              lang={currentLocale}
              dir={currentLocale === "fa" ? "ltr" : "rtl"}
            >
              <div className="sm:flex sm:justify-between justify-center w-full">
                <Image
                  className="mx-auto sm:mx-1 rounded-full shadow shadow-slate-700 my-8 sm:mr-4"
                  src={"./img/amir.webp"}
                  alt={"amir"}
                  width={300}
                  height={300}
                  loading="lazy"
                />
                <div className="flex justify-between mt-16">
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <h1 className="sm:text-6xl text-[40px] font-extrabold text-center font-serif">
                      {t("header.name")}
                    </h1>
                    <ul className="grid justify-items-end mt-8 mb-4">
                      {header.map((header, index) => (
                        <li
                          key={index}
                          className="px-2 my-2 sm:text-3xl text-2xl"
                        >
                          {header}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end font-sans">
                  {t("about.title")}
                </h2>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <p className="grid justify-items-end mt-4 text-base">
                    {t("about.content")}
                  </p>
                </div>
              </div>
              <div className="sm:flex sm:gap-x-10 mt-4">
                <div className="sm:w-[30%] w-full sm:text-auto text-center mx-auto">
                  <>
                    <h2 className="w-full mt-6 text-2xl pb-1 font-sans border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
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
                    <h2 className="w-full text-2xl mt-16 pb-1 font-sans border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
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
                    <h2 className="w-full text-2xl mt-16 pb-1 font-sans border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      {t("further.title")}
                    </h2>
                    <ul className="mt-2 mb-10 grid justify-items-end">
                      <li className="px-2 mt-1"> {t("further.firstname")}</li>
                      <li className="px-2 mt-1"> {t("further.secondname")}</li>
                    </ul>
                  </>
                  <>
                    <p className="w-full text-2xl mt-16 pb-1 font-sans border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
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
                    <h2 className="w-full text-2xl font-sans mt-6 pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      {t("education.title")}
                    </h2>
                    <ul className="mt-2">
                      <li className="pt-2 grid justify-items-end">
                        <p className="flex justify-between text-sm gap-x-2">
                          {t("education.duration")}
                          <strong className="text-base sm:text-center text-left">
                            {t("education.university")}
                          </strong>
                        </p>
                        <p className="flex justify-between text-[15px] mt-2">
                          {t("education.grade")}
                        </p>
                        <p className="flex justify-between text-[15px]">
                          {t("education.field-study")}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <>
                    <h2 className="w-full text-2xl mt-16 font-sans pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
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
                    <h2 className="text-2xl mt-6 pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end font-sans">
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
                            <p className="text-sm grid justify-items-end">
                              {project.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full">
                    <h2 className="w-full text-2xl mt-6 font-sans pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      {t("workExperiences.title")}
                    </h2>
                    <ul className="mt-2 grid">
                      {workExperiences.map((experience, index) => (
                        <li key={index} className="py-4 grid justify-items-end">
                          <p className="flex items-center text-sm sm:my-2 mt-1 sm:gap-x-6">
                            <span className="sm:block hidden">
                              {experience.duration}
                            </span>
                            <strong className="sm:text-xl text-[22px]">
                              {experience.company}
                            </strong>
                          </p>
                          <div className="flex sm:hidden w-full gap-x-16 justify-end my-2">
                            <p className="text-[15px] text-right ">
                              {experience.duration}
                            </p>
                            <p className="text-[15px]">{experience.location}</p>
                          </div>
                          <p className="flex sm:text-lg text-base sm:gap-x-6 font-medium">
                            <span className="font-light sm:block hidden">
                              {experience.location}
                            </span>
                            {experience.role}
                          </p>
                          <div className={isRTL ? "text-right" : "text-left"}>
                            <p className="sm:text-base text-[15px] mb-2">
                              {experience.description}
                            </p>
                          </div>
                          <strong>{t("skills.title")}</strong>
                          <div className="w-full mt-1 sm:text-[14px] text-[15px] grid sm:grid-cols-2 justify-items-end sm:w-[80%]">
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
                  <div>
                    <h2 className="w-full text-2xl mt-6 font-sans pb-1 border-b border-slate-800 dark:border-slate-100 font-semibold grid justify-items-end">
                      :{teachingExperience.title}
                    </h2>
                    <div className="py-4 grid justify-items-end">
                      <div className="flex items-center text-sm sm:my-2 mt-1 sm:gap-x-2">
                        <span className="sm:block hidden">
                          {teachingExperience.duration}
                        </span>
                        <strong className="sm:text-xl text-[22px]">
                          {teachingExperience.organization}
                        </strong>
                      </div>
                      <div className="flex sm:hidden w-full gap-x-16 justify-end my-2">
                        <p className="text-[15px] text-right">
                          {teachingExperience.duration}
                        </p>
                        <p className="text-[15px]">
                          {teachingExperience.location}
                        </p>
                      </div>

                      <p className="flex sm:text-lg text-base sm:gap-x-6 font-medium">
                        <span className="font-light sm:block hidden">
                          {teachingExperience.location}
                        </span>
                        {teachingExperience.role}
                      </p>

                      <div className={isRTL ? "text-right" : "text-left"}>
                        <p className="sm:text-base text-[15px] my-2">
                          {teachingExperience.description}
                        </p>
                      </div>

                      {teachingExperience.key_achievements?.length > 0 && (
                        <div className="mb-3">
                          <div className={isRTL ? "text-right" : "text-left"}>
                            <strong>
                              {teachingExperience.achievementsTitle}
                            </strong>
                            <ul className="mt-1">
                              {teachingExperience.key_achievements.map(
                                (achievement, i) => (
                                  <li
                                    key={i}
                                    className="sm:text-[14px] text-[15px]"
                                  >
                                    {achievement}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      )}

                      <div className={isRTL ? "text-right" : "text-left"}>
                        <div className="mb-4">
                          <strong>
                            {teachingExperience.additionalactivities.title}
                          </strong>
                          <ul className="">
                            <li className="sm:text-[14px] text-[15px]">
                              {
                                teachingExperience.additionalactivities
                                  .workshops
                              }
                            </li>
                            <li className="sm:text-[14px] text-[15px]">
                              {
                                teachingExperience.additionalactivities
                                  .open_source
                              }
                            </li>
                            <li className="sm:text-[14px] text-[15px] mb-1">
                              {
                                teachingExperience.additionalactivities
                                  .materials
                              }
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* <strong>{t("skills.title")}</strong>
                      <div className="w-full mt-1 sm:text-[14px] text-[15px] grid sm:grid-cols-2 justify-items-end sm:w-[80%]">
                        {teachingExperience.skills.map((skill, i) => (
                          <span key={i}>
                            {skill}
                            {i !== teachingExperience.skills.length - 1 && ", "}
                          </span>
                        ))}
                      </div> */}
                    </div>
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
