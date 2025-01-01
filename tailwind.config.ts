import { transform } from "next/dist/build/swc";
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
          '100%': { transform: "translate(90%, 0) rotate(180deg)" }
        },
        idk: {
          '0%': { transform: "scale(1)" },
          '100%': { transform: "scale(1.05)" }
        },
        spinIn: {
          '0%': { transform: "translate(0, 0) rotate(0deg)" },
          '100%': { transform: "translate(100vw, 100vh) rotate(90deg)" }
        },
        spinOut: {
          '0%': { transform: "translate(0, 0) rotate(0deg)" },
          '100%': { transform: "translate(-100vw, -100vh) rotate(-90deg)" }
        }
      },
      animation: {
        'spinny': "spinny 5s cubic-bezier(0.77, 0, 0.175, 1) infinite alternate",
        'spinny-reverse': "spinny 5s cubic-bezier(0.77, 0, 0.175, 1) infinite alternate-reverse",
        'idk': "idk .2s ease-in-out 2 alternate forwards",
        'spin-out': "spinOut 0.9s cubic-bezier(0.64, 0, 0.78, 0) 1 normal forwards",
        'spin-in': "spinIn 0.9s cubic-bezier(0.64, 0, 0.78, 0) 1 reverse forwards"
      }
    },
  },
  plugins: [],
};
export default config;
