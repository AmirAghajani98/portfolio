"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <header
      className={`z-10 sm:py-1.5 py-1 dark:bg-slate-700 bg-slate-500 w-full shadow-sm shadow-slate-700 transition-transform transform duration-200 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } sticky top-0`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center shrink-0">
          <a aria-current="page" href="/">
            <Image
              className="h-10 w-auto rounded-full sm:mx-8 mx-2"
              src="./img/alogo.jpg"
              alt=""
              width={100}
              height={100}
            ></Image>
          </a>
        </div>
        {/* <div className="sm:flex hidden w-2/3">
          <div className="rounded-md shadow-sm mx-3 dark:bg-slate-500 dark:bg-opacity-40 bg-slate-400 bg-opacity-30 hover:bg-slate-500 hover:bg-opacity-50">
            <a
              href="/"
              className="block px-4 text-center py-1.5 w-auto rounded-md text-base font-medium font-sans dark:text-slate-100 text-[#121a23] hover:text-slate-700 hover:bg-opacity-20"
            >
              Home
            </a>
          </div>
          <div className="rounded-md shadow-sm z-20 mx-3 dark:bg-slate-500 dark:bg-opacity-40 bg-slate-400 bg-opacity-30 hover:bg-slate-500 hover:bg-opacity-50">
            <a
              href="/"
              className="block px-4 py-1.5 text-center w-auto rounded-md text-base font-medium font-sans dark:text-slate-100 text-[#121a23] hover:text-slate-700 hover:bg-opacity-20"
            >
              Projects
            </a>
          </div>
          <div className="rounded-md shadow-sm z-20 mx-3 dark:bg-slate-500 dark:bg-opacity-40 bg-slate-400 bg-opacity-30 hover:bg-slate-500 hover:bg-opacity-50">
            <a
              href="/"
              className="block px-4 py-1.5 text-center w-auto rounded-md text-base font-medium font-sans dark:text-slate-100 text-[#121a23] hover:text-slate-700 hover:bg-opacity-20"
            >
              About
            </a>
          </div>
        </div> */}
        <div className="flex justify-end mx-2 sm:mx-6 rounded-full p-1">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
