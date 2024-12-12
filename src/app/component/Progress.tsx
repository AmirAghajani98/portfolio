"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ProgressProps {
  value: number;
  logo: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, logo }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedValue(value);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <div
        className="radial-progress relative transition-all duration-[1.5s] ease-out flex items-start justify-center text-slate-800 dark:text-slate-400"
        style={
          {
            "--value": animatedValue,
            "--size": "100px",
            "--thickness": "5px",
          } as React.CSSProperties
        }
        role="progressbar"
        aria-label={`${value}%`}
      >
        <span className="text-sm font-medium text-center my-4 font-sans">
          {animatedValue}%
        </span>
        <Image
          src={logo}
          alt="Skill logo"
          width={35}
          height={35}
          className="absolute top-10"
        />
      </div>
    </div>
  );
};
