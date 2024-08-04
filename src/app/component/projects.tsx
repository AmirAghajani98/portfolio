import React from "react";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <div className="bg-slate-400 dark:bg-black min-h-screen my-40">
      <h1 className="text-5xl text-center mx-auto my-8 pb-10 font-mono dark:text-slate-100 text-[#121a23] font-semibold border-b border-slate-500 dark:border-slate-600 w-[50%]">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-400 dark:bg-black sm:p-10 items-start sm:h-screen">
        <div className="block rounded-xl border dark:border-gray-800 border-gray-400 p-4 sm:px-4 sm:py-8 sm:h-[55%] z-50 dark:bg-[#313b48] bg-slate-500 dark:bg-opacity-70 bg-opacity-60 ">
          <div className="inline-flex justify-center items-center dark:text-slate-100 text-[#121a23] w-full">
            <Image
              src="./img/weatherapp.png"
              width={500}
              height={400}
              alt="Picture of the author"
              className="my-2 mx-auto p-0.5 z-10 dark:bg-slate-90 dark:bg-opacity-90 rounded-2xl hover:shadow-md hover:shadow-slate-700"
            />
          </div>
          <h2 className="font-mono sm:text-justify mt-2 sm:w-[90%] mx-auto my-2 font-semibold text-lg dark:text-slate-100 text-[#121a23]">
            Global Weather App
          </h2>
          <p className="font-sans text-justify sm:mt-1 block sm:w-[90%] mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            Weather app uses a REST API to provide real-time updates and
            forecasts for each city. It offers current conditions, hourly
            forecasts, and severe weather alerts, all in a user-friendly
            interface.
          </p>
        </div>
        <div className="z-50 block rounded-xl border dark:border-gray-800 border-gray-400 p-4 sm:px-4 sm:py-8 sm:h-[55%] dark:bg-[#313b48] bg-slate-500 dark:bg-opacity-70 bg-opacity-60">
          <div className="inline-flex justify-center items-center dark:text-slate-100 text-[#121a23] w-full">
            <Image
              src="./img/resume.png"
              width={500}
              height={400}
              alt="Picture of the author"
              className="my-2 mx-auto p-0.5 z-10 dark:bg-slate-90 dark:bg-opacity-90 rounded-2xl hover:bg-opacity-20 hover:shadow-md hover:shadow-slate-700"
            />
          </div>
          <h2 className="mt-2 sm:text-justify font-mono sm:w-[90%] mx-auto my-2 font-semibold text-lg dark:text-slate-100 text-[#121a23]">
            Resume Template
          </h2>
          <p className="sm:mt-1 text-justify font-sans block sm:w-[90%] mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            Resume template app utilizes a simple user interface to help you
            easily create professional and stylish resumes. With customizable
            sections, pre-designed templates, and helpful guidance, you can
            personalize your resume.
          </p>
        </div>
        <div className="z-50 block rounded-xl border dark:border-gray-800 border-gray-400 py-4 p-4 sm:py-8 sm:h-[55%] dark:bg-[#313b48] bg-slate-500 dark:bg-opacity-70 bg-opacity-60">
          <div className="inline-flex justify-center items-center dark:text-slate-100 text-[#121a23] w-full">
            <Image
              src="./img/qazvinjobs.png"
              width={500}
              height={400}
              alt="Picture of the author"
              className="my-2 mx-auto p-0.5 z-10 dark:bg-slate-90 dark:bg-opacity-90 rounded-2xl hover:bg-opacity-20 hover:shadow-md hover:shadow-slate-700"
            />
          </div>
          <h2 className="mt-2 sm:text-justify font-mono sm:w-[90%] mx-auto my-2 font-semibold text-lg dark:text-slate-100 text-[#121a23]">
            Exhibition Event Web App
          </h2>
          <p className="sm:mt-1 text-justify font-sans block sm:w-[90%] mx-auto my-2 text-base dark:text-slate-100 text-[#121a23]">
            The exhibitions web app provides real-time access to company
            profiles, booth locations, navigation routes, and job listings,
            enhancing the event experience and facilitating direct connections
            between job seekers and employers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
