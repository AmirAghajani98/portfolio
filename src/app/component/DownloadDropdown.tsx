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
        className="flex w-full justify-around font-mono items-center gap-x-2 bg-slate-700 text-white font-medium rounded-lg px-3 py-2.5 hover:bg-slate-600 transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-5 h-5 transform transition-transform duration-200 rounded-full bg-slate-900 bg-opacity-60 border border-slate-400 p-0.5 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
        Download-CV
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute left-0 right-0 mt-2 bg-slate-800 text-white rounded-lg shadow-lg z-10`}
      >
        <div
          onClick={() => {
            handleDownload("/resume/en-resume.pdf", "resume-en.pdf");
            setIsOpen(false);
          }}
          className="p-3 font-mono cursor-pointer hover:bg-slate-600 rounded-lg"
        >
          English
        </div>
        <div
          onClick={() => {
            handleDownload("/resume/fa-resume.pdf", "resume-fa.pdf");
            setIsOpen(false);
          }}
          className="p-3 font-mono cursor-pointer hover:bg-slate-600 rounded-lg"
        >
          Persian
        </div>
      </div>
    </div>
  );
};

export default DownloadDropdown;
