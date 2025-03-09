"use client";

import React, { useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";
import LoadingButton from "./LoadingButton";

const LandingContact = () => {
  const [state, handleSubmit] = useForm("xrbegnbq");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Your message was sent successfully!");
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded]);

  return (
    <main
      id="contact"
      className="sm:w-full mx-auto opacity-95 bg-slate-400 projectback justify-center"
    >
      <div className="text-center gap-16 my-10 p-4 mx-auto sm:w-10/12 w-11/12 font-[sans-serif] rounded-md">
        <div className="w-full">
          <h2 className="sm:text-5xl text-3xl sm:w-[50%] text-center mx-auto sm:my-4 pb-4 font-mono dark:text-slate-100 text-[#121a23] font-bold border-b border-slate-500 dark:border-slate-600">
            Get in Touch
          </h2>
          <p className="text-lg dark:text-gray-400 text-gray-900 sm:mt-2 mb-4 mt-6 sm:w-2/3 text-center mx-auto">
            Do you have a personal or business idea or brand to develop and need
            help? then reach out; We would love to hear about your project and
            help.
          </p>

          <div className="sm:w-3/5 mt-10 sm:mt-8 mx-auto">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col justify-start text-left"
            >
              <label
                htmlFor="Name"
                className="font-mono dark:text-slate-200 text-slate-950"
              >
                Name
              </label>
              <input
                id="Name"
                type="text"
                name="Name"
                placeholder="Your name"
                required
                className="sm:w-11/12 p-2 border rounded dark:text-gray-200 text-gray-900 bg-slate-200 dark:bg-slate-800"
              />
              <ValidationError
                prefix="Name"
                field="Name"
                errors={state.errors}
              />
              <br />
              <label
                htmlFor="Mail"
                className="font-mono dark:text-slate-200 text-slate-950"
              >
                Mail
              </label>
              <input
                id="Mail"
                type="email"
                name="Mail"
                placeholder="example@gmail.com"
                required
                className="sm:w-11/12 p-2 border rounded dark:text-gray-200 text-gray-900 bg-slate-200 dark:bg-slate-800"
              />
              <ValidationError
                prefix="Mail"
                field="Mail"
                errors={state.errors}
              />
              <br />
              <label
                htmlFor="Business"
                className="font-mono dark:text-slate-200 text-slate-950"
              >
                Business
              </label>
              <input
                id="Business"
                type="text"
                name="Business"
                placeholder="Your business"
                required
                className="sm:w-11/12 p-2 border rounded dark:text-gray-200 text-gray-900 bg-slate-200 dark:bg-slate-800"
              />
              <br />
              <label
                htmlFor="message"
                className="font-mono dark:text-slate-200 text-slate-950"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="your message..."
                rows={5}
                required
                className="sm:w-11/12 p-2 border rounded dark:text-gray-200 text-gray-900 bg-slate-200 dark:bg-slate-800"
              />
              <div className="sm:w-11/12 my-6">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-1/3 p-3 dark:text-gray-800 font-medium text-lg text-gray-200 dark:bg-blue-500 rounded dark:hover:bg-blue-600 bg-blue-700"
                >
                  {state.submitting ? <LoadingButton /> : "Send"}
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
