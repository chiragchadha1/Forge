/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forge-bg': '#FAF9F4',
        'forge-ornage': '#FD8D3A',
        'forge-pink': '#AC5D86',
        'forge-purple': '#461F33',
      }
    },
  },
  plugins: [],
}

