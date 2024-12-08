import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const DownloadDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = (filePath: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex w-full justify-between font-mono items-center gap-x-3 bg-slate-700 text-white font-medium rounded-lg px-3 z-10 py-2.5 hover:bg-slate-600 transition duration-200"
      >
        Download-CV
        <ChevronRightIcon
          className={`w-5 h-5 z-50 my-auto transform transition-transform duration-200 rounded-full  border border-slate-400 p-0.5 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`absolute left-40 top-0 text-white rounded-lg z-10 shadow-lg flex flex-row transform transition-all ease-out duration-500 ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-10 opacity-0 -z-10"
        }`}
      >
        <div
          onClick={() => {
            handleDownload("/resume/en-resume.pdf", "resume-en.pdf");
            setIsOpen(false);
          }}
          className="p-2.5 mx-1 font-mono cursor-pointer bg-slate-700  hover:bg-slate-600 rounded-lg"
        >
          English
        </div>
        <div
          onClick={() => {
            handleDownload("/resume/fa-resume.pdf", "resume-fa.pdf");
            setIsOpen(false);
          }}
          className="p-2.5 font-mono cursor-pointer bg-slate-700  hover:bg-slate-600 rounded-lg"
        >
          Persian
        </div>
      </div>
    </div>
  );
};

export default DownloadDropdown;
