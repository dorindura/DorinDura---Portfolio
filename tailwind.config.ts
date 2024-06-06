import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        "dark-blue": "#121ac3",
        "violet": "#03087B",
        "light-blue-500": "#1d4ed8",
        "light-blue-200": "#93C5FD",
        "light-blue-sky": "#60a5fa",
        "dark-blue-sky": "#1d4ed8",
      },
      screens: {
        "lg-screen": "820px",
        "lg-screen2": "821px",
        "sm-screen": "600px",
        "max-sm/4-screen" : {"max": "290px"},
        "max-sm/3.5-screen" : {"max": "320px"},
        "max-sm/3-screen" : {"max": "360px"},
        "max-sm/2-screen" : {"max": "420px"},
        "max-sm-screen" : {"max": "600px"},
        "max-lg-screen" : {"max": "820px"},
        "max-xl-screen" : {"max": "1000px"},
        "max-xl2-screen" : {"max": "1150px"},
        // "max-lg-screen2" : {"max": "822px"},
      }
    },
  },
  plugins: [],
};
export default config;
