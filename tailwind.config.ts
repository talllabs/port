import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#111111",
        "surface-2": "#1a1a1a",
        "surface-3": "#222222",
        border: "#2a2a2a",
        "border-subtle": "#1e1e1e",
        primary: "#e879f9",
        "primary-dark": "#c026d3",
        "primary-glow": "rgba(232,121,249,0.2)",
        secondary: "#818cf8",
        accent: "#f0abfc",
        "text-primary": "#f5f5f5",
        "text-secondary": "#a3a3a3",
        "text-muted": "#525252",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      boxShadow: {
        "glow-pink": "0 0 30px rgba(232, 121, 249, 0.15)",
        "card": "0 1px 3px rgba(0,0,0,0.6)",
        "card-hover": "0 4px 24px rgba(0,0,0,0.6), 0 0 0 1px rgba(232,121,249,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
