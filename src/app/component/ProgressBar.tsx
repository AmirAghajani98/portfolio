"use client";

import React from "react";
import Image from "next/image";

interface ProgressProps {
  value: number;
  logo: string;
}

export const ProgressBar: React.FC<ProgressProps> = ({ value, logo }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row-reverse sm:flex-col items-center justify-center">
        <div className="sm:block relative sm:h-44 sm:w-7 border dark:border-slate-200 border-slate-500 rounded-full hidden">
          <div
            className="absolute left-0 sm:bottom-0 w-full h-full rounded-full bg-progress-light dark:bg-progress-dark"
            style={{ height: `${value}%` }}
          >
            <div className="absolute top-1/2 left-0 right-0 text-center dark:text-white text-slate-700 text-sm">
              {value}%
            </div>
          </div>
        </div>
        <div className="relative w-44 h-6 border dark:border-slate-400 border-slate-500 rounded-full sm:hidden ml-2">
          <div
            className="absolute left-0 bottom-0 h-full w-full rounded-full bg-progress-light-small dark:bg-progress-dark-small"
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <div className="mt-2 text-center flex justify-center items-center">
          <Image
            src={logo}
            alt="Skill-logo"
            width={42}
            height={42}
            loading="lazy"
          />
          <div className="text-slate-700 dark:text-slate-100 mx-1 text-lg sm:hidden">
            {value}%
          </div>
        </div>
      </div>
    </div>
  );
};
