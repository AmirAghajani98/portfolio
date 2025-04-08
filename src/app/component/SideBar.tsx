"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./Buttons/ThemeSwitcher";
import {
  CodeBracketIcon,
  HomeIcon,
  IdentificationIcon,
  PhoneIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onShowModal: () => void;
}

export default function Sidebar({
  isOpen,
  onClose,
  onShowModal,
}: SidebarProps) {
  return (
    <div
      id="drawer-navigation"
      className={`fixed top-0 left-0 z-40 w-64 sm:h-screen h-svh p-4 overflow-y-auto transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-slate-400 dark:bg-gray-800`}
      tabIndex={-1}
      aria-labelledby="drawer-navigation-label"
    >
      <h5
        id="drawer-navigation-label"
        className="text-xl font-semibold text-gray-500 uppercase dark:text-gray-400 font-mono"
      >
        menu
      </h5>
      <button
        type="button"
        onClick={onClose}
        className="text-gray-800 bg-transparent dark:text-slate-200 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center "
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {[
            {
              name: "Home",
              href: "/",
              icon: (
                <HomeIcon className="h-6 w-6 text-gray-700 dark:text-gray-400" />
              ),
            },
            {
              name: "Projects",
              href: "/projects",
              icon: (
                <SparklesIcon className="h-6 w-6 text-gray-700 dark:text-gray-400" />
              ),
            },

            {
              name: "Resume",
              href: "/resume",
              icon: (
                <IdentificationIcon className="h-6 w-6 text-gray-700 dark:text-gray-400" />
              ),
            },
            {
              name: "Services",
              href: "/landing",
              icon: (
                <CodeBracketIcon className="h-6 w-6 text-gray-700 dark:text-gray-400" />
              ),
            },
            {
              name: "About",
              href: "#about",
              icon: (
                <UserIcon className="h-6 w-6 text-gray-700 dark:text-gray-400" />
              ),
            },
            {
              name: "Contact",
              href: "#contact",
              icon: (
                <PhoneIcon className="h-6 w-6 text-gray-700 dark:text-gray-400" />
              ),
            },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex justify-start items-center p-2 gap-x-4 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 hover:bg-slate-300 hover:bg-opacity-30 group"
              >
                {item.icon && (
                  <span className="flex mr-1 whitespace-nowrap">
                    {item.icon}
                  </span>
                )}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center my-4">
          <button
            className="text-white bg-slate-600 dark:bg-slate-500 hover:bg-slate-700 dark:hover:bg-slate-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            onClick={onShowModal}
          >
            Download CV
          </button>
        </div>
        <div className="bottom-0 w-5/6 absolute py-5 flex justify-between items-center border-t border-1-gray-200 dark:border-gray-600">
          <p className="text-lg dark:text-slate-200 text-slate-800">Theme</p>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
