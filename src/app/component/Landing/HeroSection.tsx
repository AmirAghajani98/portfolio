"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroLanding() {
  return (
    <>
      <section className="relative font-sans pt-0 w-full bg-slate-400 projectback">
        <div
          className="pointer-events-none dark:-z-10 absolute sm:w-[60%] w-[100%] left-1/2 top-0 -translate-x-1/2 transform font-serif"
          aria-hidden="true"
        >
          <Image
            className="opacity-25 dark:opacity-10 w-full"
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
                  className="mb-2 sm:mb-4 text-xl text-gray-900 dark:text-gray-300"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  Build, Launch, and Grow Your Online Presence – Turn Your
                  Vision into a Thriving and Profitable Digital Business!
                </p>
                <h2 className="mb-8 sm:mb-0 text-xl text-gray-900 dark:text-gray-300 font-sans font-semibold">
                  Customize Your Solutions!
                </h2>
                <div className="relative before:absolute before:inset-0 border-t sm:mt-20 py-2 dark:border-slate-600 ">
                  <div
                    className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                    data-aos="zoom-y-out"
                    data-aos-delay={450}
                  >
                    <div className="sm:w-54 mx-auto justify-center items-center text-center relative z-10 flex cursor-pointer overflow-hidden rounded-xl sm:p-[2.5px] p-[2px]">
                      <div className="animate-rotate absolute inset-0 rounded-full bg-[conic-gradient(#475569_45deg,transparent_180deg)] dark:bg-[conic-gradient(#64748b_45deg,transparent_180deg)]"></div>
                      <div className="relative z-20 flex w-full rounded-[10px] bg-slate-950">
                        <Link
                          href={"#contact"}
                          className="text-lg font-sans mx-auto w-full h-full py-2 px-3 font-semibold dark:hover:bg-opacity-40 hover:bg-opacity-75 dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-400 dark:bg-opacity-20 bg-opacity-80 rounded-lg transition duration-200 border border-transparent bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end animate-gradientBorder"
                        >
                          <span className="relative inline-flex items-center">
                            Free Consultation
                            <span className="ml-1 tracking-normal dark:text-blue-300 text-blue-900 transition-transform group-hover:translate-x-0.5">
                              -&gt;
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mx-auto max-w-3xl"
              data-aos="zoom-y-out"
              data-aos-delay={600}
            ></div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20 sm:pt-20">
          <div className="sm:flex justify-between items-center w-full">
            <div className="text-center md:text-left sm:w-1/2 mt-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[50px] font-bold text-gray-900 dark:text-gray-300 mb-6 font-mono">
                Hi, I’m
                <br />
                <span className="text-blue-900 dark:text-blue-700">
                  Amir Aghajani
                </span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-400 mb-8">
                A passionate{" "}
                <span className="font-semibold">web developer</span> with{" "}
                <span className="font-semibold">4+ years of experience</span>,
                based in Iran. I specialize in creating{" "}
                <span className="font-semibold">
                  innovative, user-friendly, and scalable digital solutions
                </span>{" "}
                that help businesses thrive online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Let’s Work Together
                </a>
                <a
                  href="/projects"
                  className="dark:bg-slate-700 bg-slate-400 dark:bg-opacity-30 bg-opacity-80 text-blue-950 dark:text-blue-100 px-8 py-3 rounded-lg font-semibold border border-blue-950 dark:border-blue-100 hover:bg-gray-300 dark:hover:bg-slate-600 transition duration-300"
                >
                  View My Work
                </a>
              </div>
            </div>
            <div className="relative sm:w-1/2 w-[90%] mx-auto sm:mt-0 mt-10">
              <Image
                src="./img/web.png"
                alt="Amir Aghajani - Web Developer"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
