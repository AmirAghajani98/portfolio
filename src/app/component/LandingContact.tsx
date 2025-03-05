"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";
import LoadingButton from "./LoadingButton";
import Link from "next/link";
import Image from "next/image";
import {
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";

const LandingContact = () => {
  const [state, handleSubmit] = useForm("xrbegnbq");

  if (state.succeeded) {
    toast.success("Your message was sent successfully!");
  }

  return (
    <main
      id="contact"
      className="sm:w-full mx-auto opacity-95 bg-slate-400 projectback justify-center flex flex-col"
    >
      <div className="sm:flex items-start gap-16 my-10 p-4 mx-auto sm:w-10/12 w-11/12 font-[sans-serif] rounded-md">
        <div className="sm:w-1/2">
          <h2 className="sm:text-5xl text-4xl text-center mx-auto sm:my-8 pb-8 font-mono dark:text-slate-100 text-[#121a23] font-bold sm:border-none border-b border-slate-500 dark:border-slate-600">
            Let's Talk
          </h2>
          <p className="text-base dark:text-gray-200 text-gray-900 sm:mt-4 mt-6">
            Do you have a personal or business idea or brand to develop and need
            help? then reach out; We would love to hear about your project and
            help.
          </p>
          <div className="sm:flex gap-x-10">
            <div className="mt-10">
              <h2 className="dark:text-gray-100 text-slate-900 text-lg font-bold font-mono">
                Gmail
              </h2>
              <ul className="mt-1">
                <li className="flex items-center">
                  <div className="h-10 w-10 dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-full border flex items-center justify-center shrink-0 hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-slate-400 dark:shadow-slate-500">
                    <EnvelopeIcon className="h-6 w-6 text-slate-100" />
                  </div>
                  <a
                    href="mailto:amir.aghajani1377@gmail.com"
                    className="dark:text-blue-500 text-blue-950 sm:text-base text-sm ml-1 sm:ml-4"
                  >
                    <small className="block">Mail</small>
                    <strong className="font-sans">
                      amir.aghajani1377@gmail.com
                    </strong>
                  </a>
                </li>
              </ul>
            </div>

            <div className="sm:mt-10 mt-6">
              <h2 className="dark:text-gray-100 text-slate-900 text-lg font-bold font-mono">
                PhoneNumber
              </h2>
              <ul className="mt-1">
                <li className="flex items-center">
                  <div className="h-10 w-10 dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-full border flex items-center justify-center shrink-0 hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-slate-400 dark:shadow-slate-500">
                    <PhoneArrowDownLeftIcon className="h-6 w-6 dark:text-slate-200" />
                  </div>
                  <a
                    href="tel:+989369477625"
                    className="dark:text-blue-500 text-blue-950 text-base ml-1 sm:ml-4"
                  >
                    <small className="block font-mono">phone</small>
                    <strong className="font-mono">+989369477625</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="dark:text-gray-100 text-slate-900 text-lg font-bold font-mono">
              Social
            </h2>
            <div className="mt-1 flex gap-x-16 w-full justify-between sm:justify-normal">
              <Link
                href="https://github.com/AmirAghajani98"
                target={"_blank"}
                className=""
              >
                <Image
                  src="./img/github.png"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                  className="my-2 p-1.5 dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
                />
              </Link>
              <Link href="https://t.me/Amr431" target={"_blank"} className="">
                <Image
                  src="./img/icons8-telegram-96(1).png"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                  className="my-2 p-1.5 dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/amir-aghajani/"
                target={"_blank"}
                className=""
              >
                <Image
                  loading="lazy"
                  src="./img/icons8-linkedin-96.png"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                  className="my-2 p-1.5 dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 mt-10 sm:mt-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-4xl text-center mx-auto sm:my-8 pb-8 font-mono dark:text-slate-100 text-[#121a23] font-bold sm:border-none border-b border-slate-500 dark:border-slate-600">
              ContactForm
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="flex-1 p-2 border rounded bg-slate-200 dark:bg-slate-800 dark:text-gray-200 text-gray-900"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                className="flex-1 p-2 border rounded bg-slate-200 dark:bg-slate-800 dark:text-gray-200 text-gray-900"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="w-full p-2 border rounded dark:text-gray-200 text-gray-900 bg-slate-200 dark:bg-slate-800"
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full p-3 dark:text-gray-800 font-medium text-lg text-gray-200 dark:bg-blue-500 rounded dark:hover:bg-blue-600 bg-blue-700"
            >
              {state.submitting ? <LoadingButton /> : "Send"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LandingContact;
