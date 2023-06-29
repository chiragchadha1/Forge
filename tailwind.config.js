/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forge-bg': 'var(--bg)',
        'forge-orange': 'var(--primary)',
        'forge-pink': 'var(--accent)',
        'forge-purple': 'var(--text)',
      }
    },
  },
  plugins: [],
}

