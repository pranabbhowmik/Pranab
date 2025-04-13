import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Extending with backgroundImage from your original config
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Adding colors from the example config
      colors: {
        transparent: "transparent",
        "semi-10": "hsla(0, 0%, 0%, 0.1)",
        "semi-20": "hsla(0, 0%, 0%, 0.2)",
        "semi-25": "hsla(0, 0%, 0%, 0.25)",
        "semi-30": "hsla(0, 0%, 0%, 0.3)",
        "semi-40": "hsla(0, 0%, 0%, 0.4)",
        "semi-50": "hsla(0, 0%, 0%, 0.5)",
        "semi-60": "hsla(0, 0%, 0%, 0.6)",
        "semi-70": "hsla(0, 0%, 0%, 0.7)",
        "semi-75": "hsla(0, 0%, 0%, 0.75)",
        "semi-80": "hsla(0, 0%, 0%, 0.8)",
        "semi-90": "hsla(0, 0%, 0%, 0.9)",
        white: "hsl(0, 0%, 100%)",
        grey: "hsl(0, 0%, 50%)",
        black: "hsl(0, 0%, 0%)",
        l1: "hsl(0, 0%, 90%)",
        l2: "hsl(0, 0%, 80%)",
        l3: "hsl(0, 0%, 70%)",
        l4: "hsl(0, 0%, 60%)",
        l5: "hsl(0, 0%, 50%)",
        l6: "hsl(0, 0%, 40%)",
        l7: "hsl(0, 0%, 30%)",
        l8: "hsl(0, 0%, 20%)",
        l9: "hsl(0, 0%, 10%)",
      },
      // Adding screens from the example config
      screens: {
        sm: "568px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      // Adding fonts from the example config
      fontFamily: {
        "sans-serif": "Arial",
        serif: "Georgia",
        rubik: ["Rubik", "sans-serif"],
        robotoMono: ["Roboto Mono", "monospace"],
      },
      // Adding text sizes from the example config
      fontSize: {
        "4xs": ".375rem", // 6px
        "3xs": ".5rem", // 8px
        "2xs": ".625rem", // 10px
        xs: ".75rem", // 12px
        sm: ".875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "4rem", // 64px
      },
      // Adding letter spacing (tracking) from the example config
      letterSpacing: {
        condensed: "-.15em",
        tightest: "-.1em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        extended: ".15em",
      },
      // Adding shadows from the example config
      boxShadow: {
        default:
          "0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, .25)",
        inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
        outline: "0 0 0 3px rgba(52,144,220,0.5)",
        none: "none",
      },
    },
  },
  plugins: [],
};

export default config;
