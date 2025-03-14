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
      className="sm:w-full mx-auto opacity-95 bg-slate-400 projectback mt-20"
    >
      <div className="text-center gap-16 my-10 sm:mt-20 p-4 mx-auto sm:w-full w-11/12 font-[sans-serif] rounded-md">
        <h2 className="sm:text-4xl text-2xl sm:w-[50%] text-center mx-auto sm:my-4 pb-4 sm:pb-10 font-mono dark:text-slate-100 text-[#121a23] font-bold border-b border-slate-500 dark:border-slate-600">
          Get in Touch
        </h2>
        <p className="text-lg dark:text-gray-400 text-gray-900 sm:mt-2 mb-4 mt-6 sm:w-1/2 text-center mx-auto">
          Do you have a personal or business idea or brand to develop and need
          help? Then reach out; I would love to hear about your project and
          help.
        </p>{" "}
        <div className="w-11/12 flex justify-center items-center">
          <div className="w-[55%]">
            <Image
              className="relative mx-auto bg-slate-400 bg-opacity-20 rounded-lg"
              src={"./img/develop1.png"}
              width={600}
              height={400}
              alt="Logo 01"
            />
          </div>
          <div className="mt-10 sm:mt-32 m-auto sm:w-[40%]">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex text-left flex-col justify-center mx-auto"
            >
              <div className="w-full flex justify-between">
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
                    className="p-2 w-full sm:pr-16 border rounded dark:text-gray-200 text-gray-900 bg-slate-200 dark:bg-slate-800"
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
                    className="p-2 w-full sm:pr-16 border rounded dark:text-gray-200 text-gray-900 bg-slate-200 dark:bg-slate-800"
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
                className="sm:w-full p-2 border rounded dark:text-gray-200 text-gray-900 bg-slate-200 dark:bg-slate-800"
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
                className="sm:w-full p-2 border rounded dark:text-gray-200 text-gray-900 bg-slate-200 dark:bg-slate-800"
              />
              <div className="sm:w-full my-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-1/3 p-3 dark:text-gray-800 font-medium text-lg text-gray-200 dark:bg-blue-500 rounded dark:hover:bg-blue-600 bg-blue-700"
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
