"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      onClick={scrollToTop}
      className={`text-white shadow-lg transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Scroll to top"
      href={""}
    >
      <Image
        loading="lazy"
        src={"./img/up.webp"}
        alt={"up"}
        width={50}
        height={50}
        className="rounded-full mx-3"
      ></Image>
    </Link>
  );
};

export default ScrollUpButton;
