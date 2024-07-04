import React from "react";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <div className="bg-slate-400 dark:bg-black min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-400 dark:bg-black p-10 pt-28">
        <div className="block rounded-xl border border-gray-800 p-4">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex align-middle justify-center items-center select-none dark:text-slate-100 text-[#121a23]">
              <Image
                src="/img/amir.jpg"
                width={300}
                height={300}
                alt="Picture of the author"
                className="m-2 p-2 bg-[#121a23] bg-opacity-10 dark:bg-slate-100 dark:bg-opacity-50 rounded-2xl hover:bg-opacity-20"
              />
            </div>
          </span>
          <h2 className="mt-2 font-semibold text-base sm:text-lg dark:text-slate-100 text-[#121a23]">
            For Developers
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base dark:text-slate-100 text-[#121a23]">
            Prototype ideas online, without depending on your local environment.
          </p>
        </div>
        <div className="block rounded-xl border border-gray-800 p-4">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex align-middle justify-center items-center select-none dark:text-slate-100 text-[#121a23]">
              <Image
                src="/img/amir.jpg"
                width={300}
                height={300}
                alt="Picture of the author"
                className="m-2 p-2 bg-[#121a23] bg-opacity-10 dark:bg-slate-100 dark:bg-opacity-50 rounded-2xl hover:bg-opacity-20"
              />
            </div>
          </span>
          <h2 className="mt-2 font-semibold text-base sm:text-lg dark:text-slate-100 text-[#121a23]">
            For Developers
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base dark:text-slate-100 text-[#121a23]">
            Prototype ideas online, without depending on your local environment.
          </p>
        </div>
        <div className="block rounded-xl border border-gray-800 p-4">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex align-middle justify-center items-center select-none dark:text-slate-100 text-[#121a23]">
              <Image
                src="/img/amir.jpg"
                width={300}
                height={300}
                alt="Picture of the author"
                className="m-2 p-2 bg-[#121a23] bg-opacity-10 dark:bg-slate-100 dark:bg-opacity-50 rounded-2xl hover:bg-opacity-20"
              />
            </div>
          </span>
          <h2 className="mt-2 font-semibold text-base sm:text-lg dark:text-slate-100 text-[#121a23]">
            Content creators
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base dark:text-slate-100 text-[#121a23]">
            Deliver high-quality, engaging blogs, articles, and video tutorials
            to your audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
