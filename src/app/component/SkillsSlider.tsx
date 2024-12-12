"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import { Progress } from "./Progress";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillsSlider: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          rows: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };

  const skills = [
    { logo: "./img/bootstrap.svg", progress: 90 },
    { logo: "./img/css.svg", progress: 85 },
    { logo: "./img/eslint.svg", progress: 80 },
    { logo: "./img/git.svg", progress: 95 },
    { logo: "./img/github.svg", progress: 85 },
    { logo: "./img/graphql.svg", progress: 70 },
    { logo: "./img/html.svg", progress: 95 },
    { logo: "./img/js.svg", progress: 90 },
    { logo: "./img/mysql.svg", progress: 80 },
    { logo: "./img/next.svg", progress: 85 },
    { logo: "./img/postgres.svg", progress: 75 },
    { logo: "./img/react.svg", progress: 90 },
    { logo: "./img/tailwind.svg", progress: 95 },
  ];

  return (
    <div
      id="skills"
      className="z-50 w-full dark:opacity-100 opacity-95 h-auto mx-auto py-10 backmain"
    >
      <h1 className="sm:text-5xl text-4xl text-center mx-auto my-8 pb-10 font-mono dark:text-slate-100 text-[#121a23] font-bold border-b border-slate-500 dark:border-slate-600 w-[50%]">
        skills
      </h1>
      <Slider {...settings} className="sm:w-10/12 m-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-full dark:bg-slate-700 bg-opacity-70 dark:bg-opacity-70 bg-slate-500 sm:p-2 px-12 py-1 sm:my-16 sm:mx-auto mx-10 my-4"
          >
            <Progress value={skill.progress} logo={skill.logo} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsSlider;
