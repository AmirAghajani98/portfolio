import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const DownloadDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mx-auto flex w-full max-w-lg items-center justify-center">
      <div className="relative z-50 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-500 dark:border-slate-800 p-[1.5px]">
        <div className="relative z-50 flex w-full rounded-[0.60rem] dark:bg-gray-900 bg-gray-700 dark:hover:bg-gray-950 hover:bg-gray-800">
          <Link
            onClick={toggleDropdown}
            className="flex w-full justify-between font-mono items-center gap-x-3 text-slate-100 dark:text-slate-200 font-medium rounded-lg px-3 py-2 z-5 transition duration-200 border-4 border-transparent bg-gradient-to-l from-gradient-end via-gradient-middle to-gradient-start animate-gradientBorder"
            href={""}
          >
            Download-CV
            <ChevronRightIcon
              className={`w-5 h-5 z-50 my-auto transform transition-transform duration-200 rounded-full border border-slate-100 dark:border-slate-400 p-0.5 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Link>
        </div>
      </div>

      <div
        className={`absolute left-44 top-1 text-white rounded-lg z-10 flex flex-row transform transition-all ease-out duration-500 ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-10 opacity-0 -z-10"
        }`}
      >
        <Link
          href="/resume/en-resume.pdf"
          locale={false}
          rel="noopener noreferrer"
          target="_blank"
          download="resume-en.pdf"
          className="p-2.5 mr-1 font-mono cursor-pointer shadow dark:bg-gray-900 bg-gray-700 dark:hover:bg-gray-950 hover:bg-gray-800 rounded-lg"
        >
          English
        </Link>
        <Link
          href="/resume/fa-resume.pdf"
          locale={false}
          rel="noopener noreferrer"
          target="_blank"
          download="resume-fa.pdf"
          className="p-2.5 font-mono cursor-pointer shadow dark:bg-gray-900 bg-gray-700 dark:hover:bg-gray-950 hover:bg-gray-800 rounded-lg"
        >
          Persian
        </Link>
      </div>
    </div>
  );
};

export default DownloadDropdown;
