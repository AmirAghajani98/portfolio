"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import LoadingButton from "../Buttons/LoadingButton";
import { emailConfig } from "../../../../mail-config";

const LandingContact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        emailConfig.serviceID,
        emailConfig.templateID,
        formRef.current!,
        emailConfig.publicKey
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
      className="sm:w-full mx-auto opacity-95 bg-slate-400 projectback sm:mt-20 -mt-20"
    >
      <div className="text-center gap-16 my-10 sm:mt-20 p-4 mx-auto sm:w-full w-[95%] font-[sans-serif] rounded-md">
        <h2 className="sm:text-4xl text-3xl text-center mx-auto sm:my-8 pb-4 font-mono text-gray-800 dark:text-gray-100 font-bold border-b border-gray-500 dark:border-gray-700 sm:w-[50%]">
          Get in Touch
        </h2>
        <p className="pt-6 sm:text-lg font-sans text-center text-gray-700 dark:text-gray-300">
          Do you have a personal or business idea or brand to develop and need
          help? Then reach out; I would love to hear about your project and
          help.
        </p>
        <div className="sm:w-11/12 sm:flex justify-center items-center">
          <div className="sm:w-[55%] sm:block hidden">
            <Image
              className="relative mx-auto bg-gradient-to-br bg-transparent rounded-3xl"
              src={"./img/develop.webp"}
              width={600}
              height={400}
              alt="develop"
              loading="lazy"
            />
          </div>
          <div className="mt-10 sm:mt-32 m-auto sm:w-[40%]">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex text-left flex-col justify-center mx-auto"
            >
              <div className="w-full flex justify-between sm:gap-x-0 gap-x-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="Name"
                    className="sm:w-full font-mono dark:text-slate-200 text-slate-950"
                  >
                    Name
                  </label>
                  <input
                    id="Name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="input input-bordered w-full input-info bg-slate-200 bg-opacity-90 dark:bg-base-100 p-2 sm:pr-16 border rounded dark:text-gray-200 text-gray-900"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="Business"
                    className="sm:w-full font-mono dark:text-slate-200 text-slate-950"
                  >
                    Business
                  </label>
                  <input
                    id="Business"
                    type="text"
                    name="business"
                    placeholder="Your business"
                    required
                    className="input input-bordered w-full input-info bg-slate-200 bg-opacity-90 dark:bg-base-100 p-2 sm:pr-16 border rounded dark:text-gray-200 text-gray-900"
                  />
                </div>
              </div>
              <br />
              <label
                htmlFor="Mail"
                className="sm:w-full font-mono dark:text-slate-200 text-slate-950"
              >
                Mail
              </label>
              <input
                id="Mail"
                type="email"
                name="to_email"
                placeholder="example@gmail.com"
                required
                className="input input-bordered input-info bg-slate-200 bg-opacity-90 dark:bg-base-100 sm:w-full p-2 border rounded dark:text-gray-200 text-gray-900"
              />
              <br />

              <br />
              <label
                htmlFor="message"
                className="sm:w-full font-mono dark:text-slate-200 text-slate-950"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="your message..."
                rows={5}
                required
                className="textarea textarea-info textarea-bordered w-full p-2 bg-slate-200 dark:bg-base-100 bg-opacity-90"
              />
              <div className="sm:w-full my-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-soft btn-info font-medium text-lg w-1/3 dark:text-gray-800 text-gray-200 dark:bg-blue-500 rounded dark:hover:bg-blue-600 bg-blue-700"
                >
                  {isSubmitting ? <LoadingButton /> : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingContact;
