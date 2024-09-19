/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roca': ["RocaOne"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'prim': '#F5EFE6',
        'green1': '#e0fe9c',
        'green2': '#156669',
        'nbl': '#161D6F',
        'lp': '#f0cdff',
        'lb': '#b2dcfa'
      },
    },
  },
  plugins: [],
};
