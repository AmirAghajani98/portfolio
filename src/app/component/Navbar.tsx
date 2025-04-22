"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import Sidebar from "./SideBar";
import Modal from "./Modal";
import LanguageSwitcher from "./Buttons/LanguageSwitcher";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="sm:py-0 py-1 w-full bg-transparent bg-opacity-0 absolute z-50 font-sans">
      <div className="flex items-center justify-between w-full">
        <div className="flex w-full items-center">
          <button
            className="text-white font-medium rounded-full sm:w-24 sm:h-24 h-20 w-20 text-sm px-5 py-2.5"
            onClick={toggleSidebar}
          >
            <Bars3BottomLeftIcon className="h-10 w-10 dark:text-gray-400 text-gray-800 m-auto" />
          </button>
          {pathname !== "/landing" && (
            <div className="hidden sm:flex">
              <LanguageSwitcher />
            </div>
          )}
        </div>

        <div className="flex items-center shrink-0">
          <Link aria-current="page" href="/#" className="">
            <Image
              loading="lazy"
              className="rounded-full sm:w-24 w-20"
              src="./img/alogo.webp"
              alt="Logo"
              width={10}
              height={10}
            />
          </Link>
        </div>
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        onShowModal={toggleModal}
      />

      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  );
}
