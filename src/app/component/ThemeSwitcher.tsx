"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDarkMode(theme === "dark");
  }, [theme]);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="sm:w-20 sm:h-10 w-16 h-8 rounded-full ring-1 bg-slate-700 ring-slate-700 dark:bg-slate-500 dark:ring-slate-500 flex items-center transition duration-300 focus:outline-none shadow mx-2 sm:mx-5"
      onClick={toggleTheme}
    >
      <div
        id="switch-toggle"
        className={`sm:w-10 sm:h-10 w-8 h-8 relative rounded-full transition duration-500 transform ${
          isDarkMode
            ? "bg-slate-900 sm:translate-x-full translate-x-full ring-1 ring-yellow-500"
            : "bg-slate-500 sm:-translate-x-0 -translate-x-1 ring-1 ring-black"
        } p-1  dark:text-yellow-400 text-black flex items-center justify-center`}
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="sm:w-6 sm:h-6 w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="sm:w-6 sm:h-6 w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </div>
    </button>
  );
};
