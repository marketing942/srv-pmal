/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal — agora baseada no brasão da PMAL (azul marinho)
        // Mantemos os nomes "cppem.*" para preservar referências dos componentes,
        // mas as tonalidades passam a ser navy.
        cppem: {
          green: "#16d65d", // verde institucional CPPEM (CTA)
          greenDark: "#0c9a3f",
          greenDeep: "#0a3d1f",
          black: "#03081a", // navy mais escuro (fundo)
          graphite: "#0a1730", // navy médio (cards)
          steel: "#0d1b3a",
          line: "#1a2a52", // navy borda
        },
        // Cores oficiais inspiradas no brasão PMAL
        pmal: {
          navy: "#061131",
          navyDark: "#03081a",
          navyMid: "#0a1a3a",
          navyLight: "#162a5e",
          gold: "#e3b53a",
          goldLight: "#f5cf63",
          goldDeep: "#a87f1f",
          red: "#c8102e",
          redDeep: "#7a0a1c",
          green: "#1a7a3e",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Oswald'", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(227, 181, 58, 0.30)",
        glowGreen: "0 0 40px rgba(22, 214, 93, 0.35)",
        glowSoft: "0 0 24px rgba(227, 181, 58, 0.20)",
        glowGreenSoft: "0 0 24px rgba(22, 214, 93, 0.18)",
      },
      backgroundImage: {
        "tactical-grid":
          "linear-gradient(rgba(227,181,58,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(227,181,58,0.05) 1px, transparent 1px)",
        "radial-gold":
          "radial-gradient(circle at 50% 0%, rgba(227,181,58,0.18), rgba(0,0,0,0) 60%)",
        "radial-green":
          "radial-gradient(circle at 50% 0%, rgba(22,214,93,0.15), rgba(0,0,0,0) 60%)",
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
