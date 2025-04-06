"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Intro from "./component/Intro";
import SkillsSlider from "./component/SkillsSlider";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Projects from "./component/projects";
import ContactForm from "./component/ContactForm";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

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
        <div className="sm:py-10 z-10 dark:z-10 sm:flex sm:items-center w-[90%] sm:w-[90%] dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-10 bg-opacity-10 sm:text-justify text-start sm:p-8 p-4 rounded-3xl mx-auto shadow-lg shadow-slate-600 border border-slate-400 dark:shadow-slate-900 dark:border-slate-800">
          <div className="text-center m-auto">
            <div className="mx-auto z-50 mr-4">
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
            <h2 className="text-3xl font-semibold mb-3 font-mono">About Me</h2>
            <p className="text-lg dark:text-slate-300 font-sans leading-7 indent-3">
              Hello, I am 26 years old and have been working in web programming
              for about three years. Currently, I reside in Iran, where I serve
              as a training manager and senior developer at my company. I hold a
              bachelor's degree from QIAU University. Before transitioning to
              programming, I worked in content creation and developed a strong
              interest in automotive mechanics. These experiences have honed my
              analytical and problem-solving skills, which are essential in my
              role as a developer. My technical expertise includes proficiency
              in multiple programming languages, frameworks, and tools that
              enhance my development capabilities. In addition to software
              development, I enjoy sharing knowledge with others and mentoring
              new programmers during training sessions. My soft skills-such as
              creative thinking, problem-solving, teamwork, leadership, and
              ideation-enable me to communicate and collaborate effectively with
              my team. As an introverted individual, I thrive in collaborative
              environments and take pleasure in devising creative solutions
              while fostering a positive and supportive atmosphere. Overall, my
              blend of technical expertise and interpersonal skills allows me to
              excel in both development and training roles.
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
