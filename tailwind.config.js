/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0F2942",    // Deep trustworthy navy blue
          teal: "#008080",    // Healing healthcare teal
          gold: "#D97706",    // Warm accents
          emerald: "#059669", // Success/WhatsApp green
          slate: "#1E293B",   // High-contrast primary text
          lightBg: "#F8FAFC", // Soft clean background
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
