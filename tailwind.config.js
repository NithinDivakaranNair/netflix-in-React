/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'nsans-medium': ['Nsans Medium'],
        'nsans-light': ['Nsans Light'],
        'nsans-bold': ['Nsans Bold'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
