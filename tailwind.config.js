/** @type {import('tailwindcss').Config} */

export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
  "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
      xs: "360px",
    },
  },
  extend: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    backgroundColor: {
      "app-background": "#ECECEC",
    },
    colors: {
      oakflix: {
        primary: "#ffffff",
        forest: "#064e3b",
        moss: "#10b981",
        stone: "#64748b",
        earth: "#78350f",
      },
    },
  },
};
