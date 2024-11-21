/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // your app source files
    "./node_modules/@tailwindcss/**/*.{js,jsx,ts,tsx}", // third-party libraries (if needed)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
