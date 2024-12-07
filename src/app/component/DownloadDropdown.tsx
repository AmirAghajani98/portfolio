import React from "react";

const DownloadDropdown: React.FC = () => {
  const handleDownload = (filePath: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <select
        id="language-select"
        onChange={(e) => {
          if (e.target.value) {
            const [filePath, fileName] = e.target.value.split("|");
            handleDownload(filePath, fileName);
          }
        }}
        className="flex w-32 justify-around p-3.5 rounded-full bg-opacity-70 bg-slate-700 border border-slate-600 hover:shadow-slate-600 hover:shadow"
        defaultValue=""
      >
        <option value="" disabled>
          Download Cv
        </option>
        <option value="/resume/en-resume.pdf|resume-en.pdf">English</option>
        <option value="/resume/fa-resume.pdf|resume-fa.pdf">Persian</option>
      </select>
    </div>
  );
};

export default DownloadDropdown;
