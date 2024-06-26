/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ACLogo: "url('./src/assets/AlumniCellLogo.jpeg')",
      },
    },
  },
  plugins: [],
};
