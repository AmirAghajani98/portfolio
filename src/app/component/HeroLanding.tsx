"use client";

import Image from "next/image";
import Cobe from "./cobe";

export default function HeroLanding() {
  return (
    <section className="relative font-sans pt-0 w-full">
      <div
        className="pointer-events-none absolute sm:left-1/2 top-0 sm:-translate-x-1/2 transform font-serif"
        aria-hidden="true"
      >
        <Image
          className="opacity-50 dark:opacity-20"
          src={"./img/stripes.svg"}
          height={700}
          width={1000}
          alt="Stripes"
          priority
        />
      </div>
      <div className="mx-auto max-w-6xl sm:px-6">
        <div className="pb-12 pt-32 md:pb-10 md:pt-40">
          <div className="pb-12 text-center md:pb-4">
            <div className="mb-6" data-aos="zoom-y-out">
              {/* <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={""}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={""}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={""}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={""}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={""}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={""}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div> */}
            </div>
            <h1
              className="mb-6 border-y py-4 text-5xl font-sans font-bold md:text-6xl dark:border-slate-600"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              The website builder you're <br className="max-lg:hidden" />
              looking for
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Simple is a modern website builder powered by AI that changes
                how companies create user interfaces together.
              </p>
              <div className="relative before:absolute before:inset-0 border-y py-2 dark:border-slate-600 ">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Free Trial{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
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
          <div className="w-full flex justify-center ">
            <Cobe />
          </div>
        </div>
      </div>
    </section>
  );
}
