import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17231F",
        muted: "#68756F",
        green: {
          50: "#EFF8F2",
          100: "#DDF0E3",
          500: "#23945B",
          600: "#187A49",
          700: "#12613A"
        }
      },
      boxShadow: {
        soft: "0 12px 40px rgba(22, 54, 38, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;