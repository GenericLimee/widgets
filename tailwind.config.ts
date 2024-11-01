import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'default': [ '"-apple-system"', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', '"sans-serif"' ],
    },
    extend: {
      transitionTimingFunction: {
        'satis': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        spinny: {
          '0%': { transform: "translate(10%, 0) rotate(-180deg)" },
          "100%": { transform: "translate(90%, 0) rotate(180deg)" }
        }
      },
      animation: {
        'spinny': "spinny 3s ease-in-out infinite alternate",
        'spinny-reverse': "spinny 3s ease-in-out infinite alternate-reverse"
      }
    },
  },
  plugins: [],
};
export default config;
