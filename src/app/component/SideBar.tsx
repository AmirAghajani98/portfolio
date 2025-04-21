"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "./Buttons/ThemeSwitcher";

import {
  CodeBracketIcon,
  HomeIcon,
  IdentificationIcon,
  PhoneIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
import LanguageSwitcher from "./Buttons/LanguageSwitcher";

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
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "fa";
  const currentLocale = i18n.language;
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden" />
      )}
      <div
        ref={sidebarRef}
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-slate-400 dark:bg-gray-800 flex flex-col`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <div className="flex justify-between items-center">
          <h5
            id="drawer-navigation-label"
            className="text-xl font-bold text-gray-500 uppercase dark:text-gray-400 font-mono"
          >
            {t("sidebar.menu")}
          </h5>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-800 bg-transparent dark:text-slate-200 rounded-lg text-sm p-1.5 inline-flex items-center"
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
        </div>

        <div className="py-4 flex-1 flex flex-col">
          <ul
            lang={currentLocale}
            dir={currentLocale === "fa" ? "rtl" : "ltr"}
            className="space-y-2 font-medium"
          >
            {[
              {
                name: t("sidebar.home"),
                href: "/",
                icon: (
                  <HomeIcon className="h-6 w-6 text-gray-700 dark:text-gray-400" />
                ),
              },
              {
                name: t("sidebar.projects"),
                href: "/projects",
                icon: (
                  <SparklesIcon className="h-6 w-6 text-gray-700 dark:text-gray-400" />
                ),
              },
              {
                name: t("sidebar.resume"),
                href: "/resume",
                icon: (
                  <IdentificationIcon className="h-6 w-6 text-gray-700 dark:text-gray-400" />
                ),
              },
              {
                name: t("sidebar.services"),
                href: "/landing",
                icon: (
                  <CodeBracketIcon className="h-6 w-6 text-gray-700 dark:text-gray-400" />
                ),
              },
              {
                name: t("sidebar.about"),
                href: "#about",
                icon: (
                  <UserIcon className="h-6 w-6 text-gray-700 dark:text-gray-400" />
                ),
              },
              {
                name: t("sidebar.contact"),
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
                  onClick={onClose}
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
              className="text-white w-full mx-auto bg-slate-600 dark:bg-slate-500 hover:bg-slate-700 dark:hover:bg-slate-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              onClick={onShowModal}
            >
              {t("sidebar.cv")}
            </button>
          </div>
          <div className="pt-4 mt-auto flex justify-between items-center border-t border-1-gray-200 dark:border-gray-600">
            <p className="text-lg dark:text-slate-200 text-slate-800">
              {t("sidebar.theme")}
            </p>
            <ThemeSwitcher />
          </div>
          <div className="bottom-0 pt-4 flex justify-between items-center sm:hidden">
            <p className="text-lg dark:text-slate-200 text-slate-800">
              {t("sidebar.language")}
            </p>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}
