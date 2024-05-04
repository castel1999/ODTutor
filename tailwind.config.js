/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue':'#1E0680',
        'bgColor':'#6B48F2',
        
      }
    },
  },
  plugins: [],
}