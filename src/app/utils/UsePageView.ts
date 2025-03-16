"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gtmPageView from "./Gtm";

const usePageView = () => {
  const pathname = usePathname();

  useEffect(() => {
    gtmPageView({ url: window.location.href });
  }, [pathname]);
};

export default usePageView;
