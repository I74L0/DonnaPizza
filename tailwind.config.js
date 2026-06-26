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
          DEFAULT: '#2A7F7F',
          dark: '#1e5e5e',
          light: '#3ea5a5',
        },
        secondary: {
          DEFAULT: '#FF5B67',
          dark: '#d13f4a',
          light: '#ff7c85',
        },
        accent: {
          DEFAULT: '#FFFF8D',
          dark: '#e5e56e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}
