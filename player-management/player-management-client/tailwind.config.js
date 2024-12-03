/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('https://i.ibb.co.com/7Y5QCLm/pexels-sagarsintan-17390406.jpg')",
      }
    },
  },
  plugins: [require('daisyui'),],
}

