import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        normal: "300",
      },
      colors: { black: "#222222", "dark-grey": "#303030", blue: "#2357cd" },
    },
  },
  plugins: [],
} satisfies Config;
