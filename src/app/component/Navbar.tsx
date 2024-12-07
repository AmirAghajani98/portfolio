"use client";

import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowDownTrayIcon,
  Bars3BottomRightIcon,
  Bars3Icon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/24/outline";
import Modal from "./Modal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      setIsOpen(false);
    }
  };

  const handleDownloadCV = (file: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop() || "download";
    link.click();
    toggleModal();
  };

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
      className={`z-10 sm:py-1.5 py-1 dark:bg-slate-800 bg-slate-500 dark:bg-opacity-60 w-full shadow-sm shadow-slate-700 transition-transform transform duration-200 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } sticky top-0`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center shrink-0">
          <a aria-current="page" href="/#">
            <Image
              className="h-10 w-auto rounded-full sm:mx-8 mx-2"
              src="./img/alogo.jpg"
              alt="Logo"
              width={100}
              height={100}
            />
          </a>
        </div>

        <div className="sm:flex hidden sm:w-11/12">
          <div className="rounded-md mx-3">
            <a
              href="/#"
              className="block px-4 py-1.5 text-center w-auto rounded-md text-base font-medium font-sans dark:text-slate-100 text-[#121a23] hover:text-slate-800"
            >
              Home
            </a>
          </div>
          <div className="rounded-md mx-3">
            <a
              href="#projects"
              className="block px-4 py-1.5 text-center w-auto rounded-md text-base font-medium font-sans dark:text-slate-100 text-[#121a23] hover:text-slate-800"
            >
              About
            </a>
          </div>
          <div className="rounded-md mx-3">
            <Link
              href={"/projects"}
              className="block px-4 py-1.5 text-center w-auto rounded-md text-base font-medium font-sans dark:text-slate-100 text-[#121a23] hover:text-slate-800"
            >
              Projects
            </Link>
          </div>
          <div className="rounded-md mx-3">
            <Link
              href={"/resume"}
              className="block px-4 py-1.5 text-center w-auto rounded-md text-base font-medium font-sans dark:text-slate-100 text-[#121a23] hover:text-slate-800"
            >
              Resume
            </Link>
          </div>
          <div className="rounded-md mx-3">
            <a
              href="#skills"
              className="block px-4 py-1.5 text-center w-auto rounded-md text-base font-medium font-sans dark:text-slate-100 text-[#121a23] hover:text-slate-800"
            >
              Skills
            </a>
          </div>
        </div>

        <div className="flex items-center w-full justify-end">
          <button
            onClick={toggleMenu}
            className="sm:hidden text-[#121a23] dark:text-slate-300 mx-2"
          >
            {isOpen ? <BarsArrowUpIcon width={30} /> : <Bars3Icon width={30} />}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block opacity-100" : "hidden opacity-0"
          } sm:hidden absolute top-14 right-0 p-2 border-none dark:bg-slate-700 dark:bg-opacity-60 bg-slate-500 bg-opacity-80 rounded-b-xl w-48 z-10 shadow-md shadow-slate-700 transition-opacity duration-300`}
        >
          <a
            href="#about"
            className="block px-3 py-2 m-1 rounded-md text-base font-sans font-medium dark:text-slate-100 text-[#121a23] hover:text-white dark:bg-slate-700 bg-slate-400 bg-opacity-90 hover:bg-slate-500 hover:bg-opacity-60"
          >
            About
          </a>
          <Link
            href={"/projects"}
            className="block px-3 py-2 m-1 rounded-md text-base font-sans font-medium dark:text-slate-100 text-[#121a23] hover:text-white dark:bg-slate-700 bg-slate-400 bg-opacity-90 hover:bg-slate-500 hover:bg-opacity-60"
          >
            Projects
          </Link>
          <a
            href="#skills"
            className="block px-3 py-2 m-1 rounded-md text-base font-sans font-medium dark:text-slate-100 text-[#121a23] hover:text-white dark:bg-slate-700 bg-slate-400 bg-opacity-90 hover:bg-slate-500 hover:bg-opacity-60"
          >
            Skills
          </a>
          <a
            className="flex cursor-pointer justify-between py-2 m-1 px-3 rounded-md text-base font-sans font-medium dark:text-slate-100 text-[#121a23] hover:text-white dark:bg-slate-700 bg-slate-400 bg-opacity-90 hover:bg-slate-500 hover:bg-opacity-60"
            onClick={toggleModal}
          >
            download cv
            <ArrowDownTrayIcon width={20} />
          </a>
        </div>
        <div className="">
          <ThemeSwitcher />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onDownload={handleDownloadCV}
      />
    </header>
  );
}
