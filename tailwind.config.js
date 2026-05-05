/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cppem: {
          green: "#16d65d",
          greenDark: "#0c9a3f",
          greenDeep: "#0a3d1f",
          black: "#050807",
          graphite: "#0f1411",
          steel: "#161b18",
          line: "#1f2622",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Oswald'", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(22, 214, 93, 0.35)",
        glowSoft: "0 0 24px rgba(22, 214, 93, 0.18)",
      },
      backgroundImage: {
        "tactical-grid":
          "linear-gradient(rgba(22,214,93,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(22,214,93,0.06) 1px, transparent 1px)",
        "radial-green":
          "radial-gradient(circle at 50% 0%, rgba(22,214,93,0.18), rgba(0,0,0,0) 60%)",
      },
      animation: {
        pulseSoft: "pulseSoft 2.4s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.85, transform: "scale(1.02)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
