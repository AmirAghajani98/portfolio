import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function MobileMenu() {
  return (
    <div className="absolute top-14 right-0 p-1 border-none dark:bg-slate-700 dark:bg-opacity-60 bg-slate-500 bg-opacity-30 rounded-b-xl w-40 z-10 shadow-md shadow-slate-700">
      <Link
        href="/about"
        className="block px-3 py-1 m-1 rounded-md text-base font-sans font-medium dark:text-slate-100 text-[#121a23] hover:text-white dark:bg-slate-700 bg-slate-400 bg-opacity-90 hover:bg-slate-500"
      >
        About
      </Link>
      <Link
        href="/projects"
        className="block px-3 py-1 m-1 rounded-md text-base font-sans font-medium dark:text-slate-100 text-[#121a23] hover:text-white dark:bg-slate-700 bg-slate-400 bg-opacity-90 hover:bg-slate-500"
      >
        Projects
      </Link>
      <Link
        href="#skills"
        className="block px-3 py-1 m-1 rounded-md text-base font-sans font-medium dark:text-slate-100 text-[#121a23] hover:text-white dark:bg-slate-700 bg-slate-400 bg-opacity-90 hover:bg-slate-500"
      >
        Skills
      </Link>
      <a
        href="#"
        className="flex justify-between px-2 py-1 m-1 rounded-md text-base font-sans font-medium dark:text-slate-100 text-[#121a23] hover:text-white dark:bg-slate-700 bg-slate-400 bg-opacity-90 hover:bg-slate-500"
      >
        Download CV
        <ArrowDownTrayIcon width={20} />
      </a>
    </div>
  );
}
