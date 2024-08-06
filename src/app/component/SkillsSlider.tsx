"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillsSlider: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 12,
    slidesToScroll: 2,
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
        },
      },
    ],
  };

  const logos: string[] = [
    "../img/bootstrap.svg",
    "../img/css.svg",
    "../img/eslint.svg",
    "../img/git.svg",
    "../img/github.svg",
    "../img/gitlab.svg",
    "../img/graphql.svg",
    "../img/html.svg",
    "../img/js.svg",
    "../img/materialui.svg",
    "../img/mysql.svg",
    "../img/next.svg",
    "../img/npm.svg",
    "../img/postgres.svg",
    "../img/postman.svg",
    "../img/react.svg",
    "../img/sass.svg",
    "../img/sqlite.svg",
    "../img/tailwind.svg",
    "../img/trello.svg",
    "../img/vscode.svg",
    "../img/ts.svg",
    "../img/woo.svg",
    "../img/wordpress.svg",
  ];

  return (
    <div className="z-50 w-full h-auto mx-auto py-20 bg-slate-500 backmain ">
      <h1 className="text-5xl text-center mx-auto my-8 pb-10 font-mono dark:text-slate-100 text-[#121a23] font-semibold border-b border-slate-500 dark:border-slate-600 w-[50%]">
        skills
      </h1>
      <Slider {...settings} className="w-10/12 m-auto">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="rounded-full dark:bg-[#676767ce] bg-[#8f8f8fdd] p-5 my-16"
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={80}
              height={80}
              className="m-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsSlider;
