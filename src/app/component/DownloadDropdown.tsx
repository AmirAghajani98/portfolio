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
    <div className="relative mx-auto flex w-full max-w-lg items-center justify-center">
      <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
        <div className="animate-rotate absolute inset-0 w-full rounded-full bg-[conic-gradient(#64748b,transparent_180deg)]"></div>

        <div className="relative z-20 flex w-full rounded-[0.60rem] bg-slate-900">
          <button
            onClick={toggleDropdown}
            className="flex w-full justify-between font-mono items-center gap-x-3 text-white font-medium rounded-lg px-3 py-2 z-10 hover:bg-slate-700 transition duration-200 border-4 border-transparent bg-gradient-to-l from-gradient-end via-gradient-middle to-gradient-start animate-gradientBorder"
          >
            Download-CV
            <ChevronRightIcon
              className={`w-5 h-5 z-50 my-auto transform transition-transform duration-200 rounded-full border border-slate-400 p-0.5 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`absolute left-44 top-1 text-white rounded-lg z-10 shadow-lg flex flex-row transform transition-all ease-out duration-500 ${
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
          className="p-2.5 mx-1 font-mono cursor-pointer bg-slate-700 hover:bg-slate-600 rounded-lg"
        >
          English
        </div>
        <div
          onClick={() => {
            handleDownload("/resume/fa-resume.pdf", "resume-fa.pdf");
            setIsOpen(false);
          }}
          className="p-2.5 font-mono cursor-pointer bg-slate-700 hover:bg-slate-600 rounded-lg"
        >
          Persian
        </div>
      </div>
    </div>
  );
};

export default DownloadDropdown;
