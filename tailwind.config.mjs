/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // Add Montserrat
        roboto: ["Roboto", "sans-serif"], // Add Roboto
        cursive: ["Dancing Script", "cursive"], // Add Dancing Script
      },
      animation: {
        drop: 'drop 2s ease-out forwards',
      },
      keyframes: {
        drop: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(10)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};
