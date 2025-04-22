"use client";

import ScrollUpButton from "./Buttons/ScroolUpButton";

export default function Footer() {
  return (
    <div className="z-10 opacity-95 py-auto h-14 text-center dark:bg-slate-700 dark:bg-opacity-70 bg-slate-400/80 w-full shadow-sm shadow-slate-700 flex justify-center items-center">
      <p className="text-center m-auto text-lg font-sans font-semibold dark:text-slate-200 text-slate-900">
        Built by *A*
      </p>
      <div className="absolute right-0 text-right items-center">
        <ScrollUpButton />
      </div>
    </div>
  );
}
