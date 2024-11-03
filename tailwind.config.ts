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
        },
        move: {
          '0%': {
            transform: "translate(0,0)",
            boxShadow: "none"
          },
          '100%': {
            transform: "translateY(-6px)",
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
          },
        },
      },
      animation: {
        'spinny': "spinny 3s ease-in-out infinite alternate",
        'spinny-reverse': "spinny 3s ease-in-out infinite alternate-reverse",
        'move-up': "move 1s ease-in-out 1 normal forwards",
        'move-down': "move 1s ease-in-out 1 reverse forwards",
      }
    },
  },
  plugins: [],
};
export default config;
