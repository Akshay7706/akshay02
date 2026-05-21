/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#990f26', // Crimson Red
          light: '#b81430',
          dark: '#5c0614',
        },
        accent: {
          DEFAULT: '#f43f5e', // Rose
          hover: '#e11d48',
          light: '#ffe4e6',
        },
        neutral: {
          warm: '#F9F8F6', // Light beige/warm paper background
          card: '#ffffff',
          dark: '#1a1a1a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
