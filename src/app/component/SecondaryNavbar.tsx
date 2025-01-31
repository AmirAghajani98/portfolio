"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Modal from "./Modal";
import BackButton from "./BackButton";

export default function SecondaryNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      setIsOpen(false);
    }
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      className={`z-50 sm:py-1.5 py-1 w-full shadow-sm shadow-slate-600 dark:shadow-slate-600 transition-transform transform duration-200 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } sticky top-0 dark:bg-opacity-80 bg-opacity-80 dark:bg-slate-800 bg-slate-400`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="sm:flex hidden sm:w-11/12">
          <div className="mx-2">
            <BackButton />
          </div>
          {[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects" },
            { name: "Resume", href: "/resume" },
          ].map((item) => (
            <div
              key={item.href}
              className={`rounded-md mx-3 flex justify-center items-center relative ${
                pathname === item.href ? "overflow-hidden" : ""
              }`}
            >
              {pathname === item.href && (
                <div className="absolute inset-0 z-0 animate-rotate bg-[conic-gradient(#2F4F4F,transparent_180deg)] dark:bg-[conic-gradient(#FAF9F1,transparent_180deg)] rounded-full"></div>
              )}
              <Link
                href={item.href}
                className={`relative z-10 block px-4 py-1.5 text-center w-[98%] rounded-md text-base font-medium font-sans 
                after:block after:content-[''] after:h-[1px] after:bg-slate-800 dark:after:bg-slate-200 after:w-full 
                after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-center
                ${
                  pathname === item.href
                    ? "dark:text-slate-100 dark:bg-slate-700 text-slate-800 bg-slate-400"
                    : "dark:text-slate-100 dark:hover:text-slate-300 text-[#121a23] hover:text-slate-800"
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex w-full items-center sm:hidden">
          <label className="px-2 bg-none bg-opacity-60 swap swap-rotate">
            <input type="checkbox" checked={isOpen} onChange={toggleMenu} />
            <svg
              className="swap-off fill-current text-slate-900 dark:text-slate-200"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current text-slate-900 dark:text-slate-200"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        <div className="flex w-full justify-end">
          <ThemeSwitcher />
        </div>
        <div
          className={`${
            isOpen ? "block opacity-100 z-50" : "hidden opacity-0"
          } sm:hidden absolute top-10 left-0 p-2 border-none dark:bg-slate-700 dark:bg-opacity-80 bg-slate-500 bg-opacity-95 rounded-b-lg w-44 z-50 shadow-md shadow-slate-700 transition-opacity duration-300`}
        >
          {[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects" },
            { name: "Resume", href: "/resume" },
          ].map((item) => (
            <div
              key={item.href}
              className={`relative block m-1 z-50 dark:p-[1px] p-0.5 rounded-md overflow-hidden ${
                pathname === item.href ? "overflow-hidden" : ""
              }`}
            >
              {pathname === item.href && (
                <span className="absolute inset-0 z-0 animate-rotate rounded-md bg-[conic-gradient(#2F4F4F,transparent_180deg)] dark:bg-[conic-gradient(#FAF9F1,transparent_180deg)]"></span>
              )}
              <Link
                href={item.href}
                className={`relative px-3 py-2 z-10 text-base font-sans font-medium block text-center rounded-md w-full 
          after:block after:content-[''] after:h-[1px] after:bg-slate-800 dark:after:bg-slate-200 after:w-full 
          after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-center
          ${
            pathname === item.href
              ? "dark:text-slate-100 text-slate-800 bg-slate-400 dark:bg-slate-800"
              : "dark:text-slate-100 text-[#121a23] hover:text-white dark:bg-slate-700 bg-slate-400 hover:bg-slate-500 hover:bg-opacity-60"
          }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
          <a
            className="flex cursor-pointer justify-between py-2 m-1 px-3 rounded-md text-base font-sans font-medium dark:text-slate-100 text-[#121a23] hover:text-white dark:bg-slate-700 bg-slate-400 bg-opacity-90 hover:bg-slate-500 hover:bg-opacity-60"
            onClick={toggleModal}
          >
            download cv
            <ArrowDownTrayIcon width={20} />
          </a>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  );
}
