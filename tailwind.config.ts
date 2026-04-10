import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#ea6c00",
          light: "#f97316",
          dark: "#c2540a",
        },
        surface: {
          DEFAULT: "#141414",
          2: "#1c1c1c",
          3: "#242424",
        },
        ink: {
          DEFAULT: "#fafaf8",
          muted: "#9a9a94",
          subtle: "#5a5a54",
        },
        paper: {
          DEFAULT: "#f7f5f1",
          2: "#eeebe4",
          3: "#e5e0d6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      spacing: {
        section: "clamp(5rem, 10vw, 9rem)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "30%": { transform: "translate(3%, -1%)" },
          "50%": { transform: "translate(-1%, 2%)" },
          "70%": { transform: "translate(2%, 3%)" },
          "90%": { transform: "translate(-3%, 1%)" },
        },
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
