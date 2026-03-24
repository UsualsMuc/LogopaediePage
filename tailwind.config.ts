import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-strong": "var(--surface-strong)",
        brand: "var(--brand)",
        "brand-soft": "var(--brand-soft)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        line: "var(--line)",
        muted: "var(--muted)",
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(34, 76, 83, 0.16)"
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        glowShift: {
          "0%, 100%": { transform: "scale(1) translate3d(0, 0, 0)" },
          "50%": { transform: "scale(1.04) translate3d(10px, -8px, 0)" }
        }
      },
      animation: {
        rise: "rise 0.8s ease-out both",
        "rise-delay": "rise 0.8s ease-out 0.16s both",
        float: "float 6s ease-in-out infinite",
        glow: "glowShift 14s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
