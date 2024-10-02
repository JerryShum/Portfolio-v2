/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            "hero-bg": "url('/public/Wavy BG.png')",
         },
      },
      fontFamily: {
         serif: ["Playfair Display", "serif"],
      },
   },
   plugins: [],
};
