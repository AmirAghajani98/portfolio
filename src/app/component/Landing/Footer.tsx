"use client";

import ScrollUpButton from "../Buttons/ScroolUpButton";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="sm:footer-horizontal w-full footer-center text-base-content rounded pt-10 pb-6 dark:bg-slate-800 dark:bg-opacity-60 bg-slate-500 relative z-10">
      <div className="sm:flex justify-around w-full items-center z-50">
        <div className="sm:w-1/3">
          <nav className="hidden sm:grid grid-flow-col sm:gap-8 gap-4 border-b dark:border-slate-600 pb-4 border-slate-200 font-mono font-semibold sm:text-lg text-slate-200">
            <Link href="#contact" className="link link-hover">
              Contact
            </Link>
            <Link href="/projects" className="link link-hover">
              Projects
            </Link>
            <Link href="/resume" className="link link-hover">
              Resume
            </Link>
          </nav>
          <nav className="sm:block hidden">
            <div className="mt-14">
              <li className="flex items-center justify-center text-center my-2">
                <a
                  href="mailto:amir.aghajani1377@gmail.com"
                  className="dark:text-blue-600 text-blue-950 sm:text-base "
                >
                  <strong className="font-sans text-xl">
                    amir.aghajani1377@gmail.com
                  </strong>
                </a>
              </li>
              <li className="flex items-center justify-center text-center my-2">
                <a
                  href="tel:+989369477625"
                  className="dark:text-blue-600 text-blue-950 text-xl"
                >
                  <strong className="font-mono">+989369477625</strong>
                </a>
              </li>
            </div>
            <div className="flex gap-6 justify-center mt-14">
              <Link href="https://github.com/AmirAghajani98" target={"_blank"}>
                <Image
                  src="./img/github.png"
                  width={40}
                  height={40}
                  alt="GitHub"
                  className=" p-1.5 dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
                />
              </Link>
              <Link href="https://t.me/Amr431" target={"_blank"}>
                <Image
                  src="./img/icons8-telegram-96(1).png"
                  width={40}
                  height={40}
                  alt="Telegram"
                  className="p-1.5 dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/amir-aghajani/"
                target={"_blank"}
              >
                <Image
                  loading="lazy"
                  src="./img/icons8-linkedin-96.png"
                  width={40}
                  height={40}
                  alt="LinkedIn"
                  className="p-1.5 dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
                />
              </Link>
              <Link href="https://wa.me/989369477625" target={"_blank"}>
                <Image
                  loading="lazy"
                  src="./img/whatsapp.png"
                  width={40}
                  height={40}
                  alt="WhatsApp"
                  className="dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
                />
              </Link>
            </div>
          </nav>
        </div>

        <div className="p-1 overflow-auto sm:w-2/5 w-11/12 mt-4 sm:mt-0">
          <img
            src="./img/aaa.jpg"
            alt="Profile"
            className="float-right sm:w-40 sm:h-40 w-28 h-28 rounded-full sm:ml-4 mt-2"
          />
          <h3 className="text-left font-mono text-xl font-bold mb-2 dark:text-slate-200 text-slate-900">
            About me
          </h3>
          <p className="text-base font-mono dark:text-slate-200 text-slate-900 text-left">
            I’m amir aghajani a web developer with 4+ years of experience,
            currently based in Iran. As a training manager and senior developer,
            My journey includes content creation and a passion for automotive
            mechanics, which have sharpened my problem-solving and analytical
            skills. Proficient in multiple programming languages and frameworks,
            I also enjoy mentoring and sharing knowledge with others. With
            strong soft skills like teamwork, leadership, and creative thinking,
            I thrive in collaborative environments and strive to create
            innovative solutions.
          </p>
        </div>
        <nav className="block sm:hidden">
          <div className="mt-14">
            <li className="flex items-center justify-center text-center my-2">
              <a
                href="mailto:hi@aghatech.ir"
                className="dark:text-blue-600 text-blue-950 sm:text-base "
              >
                <strong className="font-sans text-xl">hi@aghatech.ir</strong>
              </a>
            </li>
            <li className="flex items-center justify-center text-center my-2">
              <a
                href="tel:+989369477625"
                className="dark:text-blue-600 text-blue-950 text-xl"
              >
                <strong className="font-mono">+989369477625</strong>
              </a>
            </li>
          </div>
          <div className="flex gap-6 justify-center mt-14">
            <Link href="https://github.com/AmirAghajani98" target={"_blank"}>
              <Image
                src="./img/github.png"
                width={40}
                height={40}
                alt="GitHub"
                className=" p-1.5 dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
              />
            </Link>
            <Link href="https://t.me/Amr431" target={"_blank"}>
              <Image
                src="./img/icons8-telegram-96(1).png"
                width={40}
                height={40}
                alt="Telegram"
                className="p-1.5 dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/amir-aghajani/"
              target={"_blank"}
            >
              <Image
                loading="lazy"
                src="./img/icons8-linkedin-96.png"
                width={40}
                height={40}
                alt="LinkedIn"
                className="p-1.5 dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
              />
            </Link>
            <Link href="https://wa.me/989369477625" target={"_blank"}>
              <Image
                loading="lazy"
                src="./img/whatsapp.png"
                width={40}
                height={40}
                alt="WhatsApp"
                className="dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
              />
            </Link>
          </div>
        </nav>
      </div>

      <aside className="mt-10 sm:mt-6">
        <div className="absolute right-0 text-right items-center">
          <ScrollUpButton />
        </div>
        <p className="font-sans text-slate-200 sm:w-full w-9/12">
          Copyright © {new Date().getFullYear()} - All right reserved by Amir
          Aghajani
        </p>
      </aside>
      <div className="sm:w-[70%] z-[-1] -translate-y-[90%] sm:-translate-y-[95%] sm:translate-x-[20%] absolute font-serif">
        <Image
          className="opacity-10 dark:opacity-5 rotate-180 mx-auto w-full sm:h-[380px]"
          src={"./img/strips2.png"}
          height={100}
          width={100}
          alt="Stripes"
          priority
        />
      </div>
    </footer>
  );
}
