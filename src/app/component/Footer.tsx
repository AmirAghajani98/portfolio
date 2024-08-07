"use client";

import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Footer() {
  return (
    <div className="z-10 opacity-95 py-auto h-14 dark:bg-slate-700 bg-slate-500 w-full shadow-sm shadow-slate-700 flex justify-center items-center">
      <p className="w-full text-center m-auto text-lg font-serif font-semibold  dark:text-slate-200 text-slate-900">
        Powered by Amir Aghajani
      </p>
    </div>
  );
}
