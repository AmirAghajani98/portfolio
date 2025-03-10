"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../Buttons/ThemeSwitcher";
import Modal from "../Modal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`z-50 sm:py-1.5 py-1 w-full shadow-sm shadow-slate-600 dark:shadow-slate-600 transition-transform transform duration-200 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } sticky top-0 dark:bg-opacity-80 bg-opacity-80 dark:bg-slate-800 bg-slate-400`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="sm:flex items-center shrink-0 hidden">
          <Link aria-current="page" href="/#">
            <Image
              loading="lazy"
              className="h-10 w-auto rounded-full sm:mx-8 mx-2"
              src="./img/alogo.jpg"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className="sm:flex hidden sm:w-11/12">
          {[
            // { name: "Home", href: "/" },
            { name: "Projects", href: "/projects" },
            { name: "Resume", href: "/resume" },
            { name: "Services", href: "#Services" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <div
              key={item.href}
              className="rounded-md mx-3 justify-center items-center"
            >
              <Link
                href={item.href}
                className={`block px-4 py-1.5 text-center justify-center w-full rounded-md text-base font-medium font-sans relative ${
                  pathname === item.href
                    ? "dark:text-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-800 bg-slate-400 bg-opacity-40 border dark:border-slate-600 border-slate-500"
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
          ref={menuRef}
          className={`${
            isOpen ? "block opacity-100" : "hidden opacity-0"
          } sm:hidden absolute top-10 left-0 p-2 border-none dark:bg-slate-700 dark:bg-opacity-70 bg-slate-500 bg-opacity-80 rounded-b-lg w-44 z-10 shadow-md shadow-slate-700 transition-opacity duration-300`}
        >
          {[
            // { name: "Home", href: "/" },
            { name: "Projects", href: "/projects" },
            { name: "Resume", href: "/resume" },
            { name: "Services", href: "#Services" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 m-1 rounded-md text-base font-sans font-medium ${
                pathname === item.href
                  ? "dark:text-slate-100 dark:bg-slate-800 dark:bg-opacity-80 text-slate-800 bg-slate-400 bg-opacity-40 border dark:border-slate-600 border-slate-500"
                  : "dark:text-slate-100 text-[#121a23] hover:text-white dark:bg-slate-700 bg-slate-400 bg-opacity-90 hover:bg-slate-500 hover:bg-opacity-60"
              }`}
            >
              {item.name}
            </Link>
          ))}
          {/* <a
            className="flex cursor-pointer justify-between py-2 m-1 px-3 rounded-md text-base font-sans font-medium dark:text-slate-100 text-[#121a23] hover:text-white dark:bg-slate-700 bg-slate-400 bg-opacity-90 hover:bg-slate-500 hover:bg-opacity-60"
            onClick={toggleModal}
          >
            download cv
            <ArrowDownTrayIcon width={20} />
          </a> */}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  );
}
