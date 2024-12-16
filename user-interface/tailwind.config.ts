import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        "bg-color": "var(--bg-color)",
        "secondary-bg-color": "var(--secondary-bg-color)",

        "primary-theme": "var(--primary-theme)",
        "primary-hovered": "var(--primary-hovered)",
        "secondary-theme": "var(--secondary-theme)",
        "secondary-hovered": "var(--secondary-hovered)",

        "heading-color": "var(--heading-color)",
        "paragraph-color": "var(--paragraph-color)",

        border: "var(--border)",
      },

      backgroundImage: {
        pattern: "url('/images/pattern.png')",
        "pattern-2": "url('/images/pattern-bg.png')",
        "pattern-3": "url('/images/hero-img.png')",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },

      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1536px",
      },
    },
  },

  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        ".layout-standard": {
          maxWidth: "1536px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        },

        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },

        ".animation-standard": {
          transition: "all 0.5s ease-in-out",
        },

        ".section-padding-standard": {
          paddingTop: "2rem",
          paddingBottom: "2rem",

          "@screen lg": {
            paddingTop: "3rem",
            paddingBottom: "3rem",
          },
        },

        ".section-margin-standard": {
          marginTop: "3rem",
          marginBottom: "3rem",

          "@screen lg": {
            marginTop: "4rem",
            marginBottom: "4rem",
          },
        },
      });
    },

    require("tailwindcss-animate"),
  ],
} satisfies Config;
