/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#FDFCF8",
        "on-surface": "#2C2C24",

        "primary": "#5D7052",
        "on-primary": "#F3F4F1",

        "secondary": "#C18C5D",
        "on-secondary": "#FFFFFF",

        "accent": "#E6DCCD",
        "muted": "#F0EBE5",
        "border": "#DED8CF",
        "destructive": "#A85448",
        /* Energy CTA emphasis (enterprise trust) */
        "energy": "#2563EB",
        "energy-soft": "#2563EB1A",
        "energy-2": "#1D4ED8",
        "on-surface-variant": "#78786C",

        /* Surface hierarchy tokens (paper-like tones) */
        "surface": "#FFF8EF",
        "surface-bright": "#FFF8EF",
        "surface-dim": "#DFD9D0",
        "surface-container-low": "#F9F3E9",
        "surface-container-high": "#EEE7DE",
        "surface-container-highest": "#E8E2D9",

        "outline-variant": "#C4C8BD",
      },
      fontFamily: {
        "headline": ["Fraunces", "serif"],
        "body": ["Nunito", "sans-serif"],
        "label": ["Nunito", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      },
      borderRadius: {
        cute: "1.25rem",
        "cute-lg": "1.75rem",
      },
      boxShadow: {
        "moss-soft": "0 4px 20px -2px rgba(93,112,82,0.15)",
        "moss-shadow": "0 10px 30px -5px rgba(93,112,82,0.12)",
      },
    },
  },
  plugins: [],
}