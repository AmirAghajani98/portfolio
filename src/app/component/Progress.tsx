"use client";

import React, { useEffect, useState } from "react";

export const Progress: React.FC<{ value: number; name: string }> = ({
  value,
  name,
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedValue(value);
    }, 1000); // Slight delay to ensure smooth animation
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="flex flex-col items-center space-y-2">
      <div
        className="radial-progress transition-all duration-[1.5s] ease-out"
        style={
          {
            "--value": animatedValue,
            "--size": "100px",
            "--thickness": "8px",
          } as React.CSSProperties
        }
        role="progressbar"
        aria-label={`${value}%`}
      >
        {animatedValue}%
      </div>
      <p className="text-center font-medium text-lg">{name}</p>
    </div>
  );
};
