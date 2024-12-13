import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-animated": "linear-gradient(90deg, var(--tw-gradient-stops))",
      },
      animation: {
        rotate: "rotate 10s linear infinite",
        gradientBorder: "gradientBorder 3s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        gradientBorder: {
          "0%": {
            backgroundPosition: "0% 50%",
            backgroundSize: "400% 400%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            backgroundSize: "400% 400%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
            backgroundSize: "400% 400%",
          },
        },
      },
      colors: {
        gradientStart: "#0ea5e9",
        gradientMiddle: "#f43f5e",
        gradientEnd: "#10b981",
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
