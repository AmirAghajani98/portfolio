"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { ProgressBar } from "./ProgressBar";

const SkillsSection: React.FC = () => {
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;
  const skills = [
    { logo: "./img/bootstrap.svg", progress: 80 },
    { logo: "./img/css.svg", progress: 95 },
    { logo: "./img/git.svg", progress: 90 },
    { logo: "./img/apollo.svg", progress: 75 },
    { logo: "./img/github.webp", progress: 85 },
    { logo: "./img/graphql.svg", progress: 70 },
    { logo: "./img/html.svg", progress: 95 },
    { logo: "./img/js.svg", progress: 90 },
    { logo: "./img/mysql.svg", progress: 80 },
    { logo: "./img/next.svg", progress: 85 },
    { logo: "./img/postgres.svg", progress: 70 },
    { logo: "./img/react.svg", progress: 90 },
    { logo: "./img/tailwind.svg", progress: 95 },
    { logo: "./img/wordpress.svg", progress: 75 },
  ];

  return (
    <div
      id="skills"
      lang={currentLocale}
      className="w-full opacity-95 bg-slate-400 projectback justify-center h-auto py-10 px-6 shadow-lg"
    >
      <h1 className="sm:text-5xl text-4xl text-center mx-auto my-8 pb-10 font-mono text-gray-800 dark:text-gray-100 font-bold border-b-4 border-gray-300 dark:border-gray-700 w-[50%]">
        {t("skills.title")}
      </h1>
      <div className="sm:flex justify-center sm:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <ProgressBar value={skill.progress} logo={skill.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
