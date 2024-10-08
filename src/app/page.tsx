"use client";

import Image from "next/image";
import Intro from "./component/Intro";
import Projects from "./component/projects";
import SkillsSlider from "./component/SkillsSlider";
import Footer from "./component/Footer";
import { UseThemeProps } from "next-themes/dist/types";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme }: UseThemeProps = useTheme();
  return (
    <>
      <Intro />
      <main
        id="about"
        className="w-full py-10 sm:px-0 px-4 dark:opacity-100 opacity-95 backmain"
      >
        <div className="sm:py-10 z-10 dark:z-10 sm:flex w-[86%] dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-10 bg-opacity-10 sm:text-justify text-start p-8 rounded-3xl mx-auto shadow-lg shadow-slate-600 border border-slate-400 dark:shadow-slate-900 dark:border-slate-800">
          <div className="text-center m-auto">
            <div className="mx-auto z-50 mr-4">
              <Image
                src={
                  theme === "dark"
                    ? "./img/amir-dark.png"
                    : "./img/amir-lite.png"
                }
                width={350}
                height={350}
                alt="Picture of the author"
                className="m-auto rounded-full sm:block hidden z-50 shadow-lg shadow-slate-600 border border-slate-400 dark:shadow-slate-900 dark:border-slate-800"
              />
            </div>
          </div>
          <Image
            src={
              theme === "dark" ? "./img/amir-lite.png" : "./img/amir-dark.png"
            }
            width={200}
            height={200}
            alt="Picture of the author"
            className="m-auto rounded-full mt-8 mb-16 sm:hidden shadow-md shadow-cyan-500/50 z-50"
          />
          <div className="w-full mt-14 sm:mt-0 text-justify">
            <h1 className="text-3xl font-semibold mb-3 font-mono">About Me</h1>
            <p className="text-base dark:text-slate-300 font-sans leading-7 indent-3">
              Hi, I am 26 years old and have been working in web programming for
              about three years. Currently, I live in Iran, where I serve as a
              training manager and senior developer at my company. I obtained my
              bachelor's degree from QIAU University. Before transitioning to
              programming, I worked in content creation and had a strong
              interest in automotive mechanics. These experiences helped me
              develop my analytical and problem-solving skills, which are
              crucial in my role as a developer. My technical skills include
              proficiency in multiple programming languages, frameworks, and
              tools that enhance my development capabilities. In addition to
              software development, I enjoy sharing knowledge with others and
              assisting new programmers during training sessions. My soft
              skills—such as creative thinking, problem-solving, teamwork,
              leadership, and ideation—enable me to communicate and collaborate
              effectively with my team. As an introverted individual, I thrive
              in collaborative environments and enjoy finding creative solutions
              while contributing to a positive and supportive atmosphere.
              Overall, my combination of technical expertise and interpersonal
              skills allows me to excel in both development and training roles.
            </p>
          </div>
        </div>
      </main>
      <Projects />
      <SkillsSlider />
      <Footer />
    </>
  );
}
