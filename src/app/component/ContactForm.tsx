"use client";

import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import {
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import { contactConfig } from "../../../mail-config";
import LoadingButton from "./Buttons/LoadingButton";

const ContactForm = () => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "fa";
  const currentLocale = i18n.language;
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        contactConfig.serviceID,
        contactConfig.templateID,
        formRef.current!,
        contactConfig.publicKey
      );

      toast.success("Your message was sent successfully!");
      formRef.current?.reset();
    } catch (error) {
      toast.error("Failed to send the message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      id="contact"
      className="sm:w-full mx-auto opacity-95 bg-slate-400 projectback justify-center flex flex-col"
    >
      <div
        lang={currentLocale}
        dir={currentLocale === "fa" ? "rtl" : "ltr"}
        className="sm:flex items-start gap-16 my-10 p-4 mx-auto sm:w-10/12 w-11/12 font-[sans-serif] shadow-md rounded-md"
      >
        <div className="sm:w-1/2">
          <h2 className="sm:text-5xl text-4xl text-center mx-auto sm:my-8 pb-4 font-mono text-gray-800 dark:text-gray-100 font-bold sm:border-none border-b border-gray-300 dark:border-gray-700">
            {t("contact.title")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 sm:mt-4 mt-6">
            <div className={isRTL ? "text-right" : "text-left"}>
              {t("contact.description")}
            </div>
          </p>
          <div className="sm:flex gap-x-10">
            <div className="mt-10">
              <h2 className="dark:text-gray-100 text-slate-900 text-lg font-bold font-mono">
                {t("contact.gmail")}
              </h2>
              <ul className="mt-1">
                <li className="flex items-center">
                  <div className="h-10 w-10 dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-full border flex items-center justify-center shrink-0 hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-slate-400 dark:shadow-slate-500">
                    <EnvelopeIcon className="h-6 w-6 text-slate-100" />
                  </div>
                  <a
                    href="mailto:amir.aghajani1377@gmail.com"
                    className="dark:text-blue-500 text-blue-950 sm:text-base text-sm mx-1 sm:mx-4"
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
                {t("contact.phone")}
              </h2>
              <ul className="mt-1">
                <li className="flex items-center">
                  <div className="h-10 w-10 dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-full border flex items-center justify-center shrink-0 hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-slate-400 dark:shadow-slate-500">
                    <PhoneArrowDownLeftIcon className="h-6 w-6 dark:text-slate-200" />
                  </div>
                  <a
                    href="tel:+989369477625"
                    className="dark:text-blue-500 text-blue-950 text-base mx-1 sm:mx-4"
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
              {t("contact.social")}
            </h2>
            <div className="mt-1 flex gap-x-16 w-full justify-between sm:justify-normal">
              <Link
                href="https://github.com/AmirAghajani98"
                target={"_blank"}
                className=""
              >
                <Image
                  loading="lazy"
                  src="./img/github.webp"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                  className="my-2 p-1.5 dark:bg-slate-700 bg-slate-800 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-40 dark:hover:bg-opacity-50 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
                />
              </Link>
              <Link href="https://t.me/Amr431" target={"_blank"} className="">
                <Image
                  loading="lazy"
                  src="./img/icons8-telegram.webp"
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
                  src="./img/icons8-linkedin-96.webp"
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
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            dir="ltr"
          >
            <h2 className="text-4xl text-center mx-auto sm:my-8 pb-8 font-mono dark:text-slate-100 text-[#121a23] font-bold sm:border-none border-b border-slate-500 dark:border-slate-600">
              {t("contact.form")}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="input input-bordered w-full input-info bg-slate-200 bg-opacity-90 dark:bg-base-100"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                className="input input-bordered w-full input-info bg-slate-200 bg-opacity-90 dark:bg-base-100"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="textarea textarea-info textarea-bordered w-full p-2 bg-slate-200 dark:bg-base-100 bg-opacity-90"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-soft btn-info w-full font-medium text-lg"
            >
              {isSubmitting ? <LoadingButton /> : t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
