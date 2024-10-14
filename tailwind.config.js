/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
      }
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss"
  ],
}

