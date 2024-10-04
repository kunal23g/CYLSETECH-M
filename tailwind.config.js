/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neueMontreal': ['NeueMontreal', 'sans-serif'], // Register the font
        'foundersGrotesk': ['FoundersGrotesk', 'sans-serif'],
        },
    },
  },
  plugins: [],
}

