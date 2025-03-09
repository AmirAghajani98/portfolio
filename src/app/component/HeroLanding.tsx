"use client";

import Image from "next/image";
import Cobe from "./cobe";

export default function HeroLanding() {
  return (
    <section className="relative font-sans pt-0 w-full">
      <div
        className="pointer-events-none -z-10 absolute sm:w-[60%] w-[100%] left-1/2 top-0 -translate-x-1/2 transform font-serif"
        aria-hidden="true"
      >
        <Image
          className="opacity-30 dark:opacity-10 w-full"
          src={"./img/strips2.png"}
          height={100}
          width={1100}
          alt="Stripes"
          priority
        />
      </div>
      <div className="mx-auto sm:w-[62%] w-[90%] sm:px-6">
        <div className="pt-12 md:pb-10 md:pt-20">
          <div className="text-center md:pb-4">
            <h1
              className="mb-6 border-b py-4 sm:text-5xl text-3xl font-sans text-slate-900 dark:text-slate-200 font-bold md:text-6xl dark:border-slate-600"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Your Digital Storefront Starts Here!
            </h1>
            <div className="mx-auto max-w-3xl sm:mt-20">
              <p
                className="mb-8 text-xl text-gray-900 dark:text-gray-300"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Build, Launch, and Grow Your Online Presence – Turn Your Vision
                into a Thriving and Profitable Digital Business!
              </p>
              <div className="relative before:absolute before:inset-0 border-t sm:mt-20 py-2 dark:border-slate-600 ">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group my-2 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#contact"
                  >
                    <span className="relative inline-flex items-center">
                      Start Your Project!
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          ></div>
          <div className="w-full flex justify-center sm:mt-80">
            <Cobe />
          </div>
        </div>
      </div>
    </section>
  );
}
