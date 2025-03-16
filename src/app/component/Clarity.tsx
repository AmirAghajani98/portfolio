"use client";

import { useEffect } from "react";
import { clarity } from "clarity-js";

const ClarityComponent = () => {
  useEffect(() => {
    clarity.start({
      projectId: "qehzs1inz3",
      upload: "https://m.clarity.ms/collect",
      track: true,
      content: true,
    });
  }, []);

  return null;
};

export default ClarityComponent;
