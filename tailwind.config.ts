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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    backgroundColor: {
      blue: "#ffffff",
      // yellow: "#EDDA1B",
      yellow: "#f1f1f1",
      black: "#000000",
      white: "#ffffff",
      yellowishWhite: "#D3D3D3",
    },
    textColor: {
      black: "#000",
      yellow: "#f1f1f1",
      // yellow: "#EDDA1B",
      white: "#ffffff",
      highlightTxt: "green",
    },
  },
  plugins: [],
};

export default config;
