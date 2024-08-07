"use client";

import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <header className="z-10 opacity-95 sm:py-1.5 py-1 dark:bg-slate-700 bg-slate-500 w-full shadow-sm shadow-slate-700">
      <div className="flex items-center justify-between w-full ">
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
        <div className="flex justify-end mx-2 sm:mx-6 rounded-full p-1 ">
          <ThemeSwitcher />
        </div>
        {/* <div className="flex items-center mx-2">
          <button
            onClick={toggleMenu}
            className="sm:hidden text-[#121a23] dark:text-slate-300"
          >
            {isOpen ? (
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "bg-opacity-100" : "hidden opacity-0"
          } absolute top-14 right-0 p-1 border-none dark:bg-[#121a23] bg-slate-500 bg-opacity-30 rounded-b-xl w-24 z-10 shadow-md shadow-slate-700"
          `}
        >
          <a
            href="/"
            className="block px-3 py-1 m-1 rounded-md text-base font-sans font-medium dark:text-slate-100 text-[#121a23] hover:text-white bg-slate-400 bg-opacity-90 hover:bg-slate-500 hover:bg-opacity-60"
          >
            Home
          </a>
          <a
            href="/projects"
            className="block px-3 py-1 m-1 rounded-md text-base font-sans font-medium dark:text-slate-100 text-[#121a23] hover:text-white bg-slate-400 bg-opacity-90 hover:bg-slate-500 hover:bg-opacity-60"
          >
            Projects
          </a>
          <a
            href="/about"
            className="block px-3 py-1 m-1 rounded-md text-base font-sans font-medium dark:text-slate-100 text-[#121a23] hover:text-white bg-slate-400 bg-opacity-90 hover:bg-slate-500 hover:bg-opacity-60"
          >
            About
          </a>
        </div> */}
      </div>
    </header>
  );
}
