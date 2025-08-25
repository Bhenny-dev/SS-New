/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: { 900: '#0b1020', 800: '#0e1530', 700: '#111a3a', 600: '#16224a', 500: '#1b2a5a' },
        neon: { 100: '#d1f0ff', 200: '#a6e5ff', 300: '#7ad9ff', 400: '#4fcdff', 500: '#23c1ff' }
      },
      boxShadow: {
        glow: '0 0 30px rgba(35,193,255,0.25)',
        insetglass: 'inset 0 1px 0 rgba(255,255,255,0.08)'
      }
    }
  },
  plugins: [],
}
