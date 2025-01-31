import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const DownloadDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mx-auto flex w-full max-w-lg items-center justify-center">
      <div className="relative z-50 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-500 dark:border-slate-800 sm:p-[1.5px]">
        <div className="relative sm:z-50 flex w-full rounded-[0.60rem] dark:bg-gray-900 bg-gray-700 dark:hover:bg-gray-950 hover:bg-gray-800">
          <Link
            onClick={toggleDropdown}
            className="hidden sm:flex w-full justify-between font-mono items-center gap-x-3 text-slate-100 dark:text-slate-200 font-medium rounded-lg px-3 py-2 z-5 transition duration-200 border-4 border-transparent bg-gradient-to-l from-gradient-end via-gradient-middle to-gradient-start animate-gradientBorder"
            href={""}
          >
            Download-CV
            <ChevronRightIcon
              className={`w-5 h-5 z-50 my-auto transform transition-transform duration-200 rounded-full border border-slate-100 dark:border-slate-400 p-0.5 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Link>
          <Link
            onClick={toggleDropdown}
            className="sm:hidden flex w-full justify-between font-mono items-center gap-x-3 text-slate-100 dark:text-slate-200 font-medium text-sm rounded-lg px-1 py-2 z-5 transition duration-200 border-4 border-transparent bg-gradient-to-l from-gradient-end via-gradient-middle to-gradient-start animate-gradientBorder"
            href={""}
          >
            Download-CV
            <ChevronDownIcon
              className={`w-5 h-5 z-50 my-auto transform transition-transform duration-200 rounded-full border border-slate-100 dark:border-slate-400 p-0.5 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Link>
        </div>
      </div>

      <div
        className={`w-full absolute sm:left-44 sm:top-1 top-12 text-white rounded-lg flex sm:flex-row flex-col transform transition-all ease-out duration-500 ${
          isOpen
            ? "sm:translate-x-0 opacity-100"
            : "sm:-translate-x-10 opacity-0 -z-10"
        }`}
      >
        <Link
          href="https://drive.google.com/uc?export=download&id=1BYRswZohFIZPjtWnZ7I6IBSzM_r-dUxS"
          locale={false}
          rel="noopener noreferrer"
          target="_blank"
          className="p-2.5 sm:mr-1 sm:mt-0 mt-1 border-b text-sm sm:text-base sm:border-none border-slate-500 dark:border-b dark:border-slate-700 font-mono cursor-pointer shadow dark:bg-gray-900 bg-gray-700 dark:hover:bg-gray-950 hover:bg-gray-800 sm:rounded-lg rounded-t-lg"
        >
          English
        </Link>
        <Link
          href="https://drive.google.com/uc?export=download&id=1hQS_Zrg3M0wwBeAlgnJclmoq0Q9gQQNn"
          locale={false}
          rel="noopener noreferrer"
          target="_blank"
          download="resume-en.pdf"
          className="p-2.5 sm:mr-1 sm:mt-0 mt-1 border-b text-sm sm:text-base sm:border-none border-slate-500 dark:border-b dark:border-slate-700 font-mono cursor-pointer shadow dark:bg-gray-900 bg-gray-700 dark:hover:bg-gray-950 hover:bg-gray-800 sm:rounded-lg rounded-t-lg"
        >
          persian
        </Link>
      </div>
    </div>
  );
};

export default DownloadDropdown;
