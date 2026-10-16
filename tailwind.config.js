/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivar: {
          // Primary — Ivar Forest
          dark: "#0F3824",
          darker: "#0A2A1A",
          forest: "#0F3824",
          forestDeep: "#0A2A1A",
          // Secondary — Brand Green
          green: "#3F7D20",
          leaf: "#3F7D20",
          // Light green — Natural Green accent (use sparingly)
          sage: "#6FA52D",
          // Muted botanical green — occasional section background
          botanical: "#E7EED5",
          // Ash / White — light section backgrounds & cards
          cream: "#FAF9F6",
          paper: "#FAF9F6",
          beige: "#ECECE9",
          mint: "#EDEEEA",
          sand: "#EDEEEA",
          ivory: "#FAFAF9",
          // Earth — Indian ingredient storytelling
          earth: "#73563E",
          // Gold — premium accents only, use VERY sparingly. Solid saturated
          // fill (not a pale tint) — pair with dark text, not white.
          gold: "#E5B03C",
          // Text — never pure black
          text: "#10150F",
          ink: "#10150F",
          muted: "#5B6158",
          // Utility (errors, badges) — not primary brand colors
          coral: "#E85D3A",
          teal: "#3F7D20",
          lime: "#D7C77A",
          yellow: "#D7C77A",
          success: "#10B981",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "editorial-hero": ["clamp(2.75rem, 6vw, 5.125rem)", { lineHeight: "1.04" }],
        "editorial-section": ["clamp(2.25rem, 4vw, 3.625rem)", { lineHeight: "1.1" }],
        "editorial-body": ["clamp(0.9375rem, 1.3vw, 1.125rem)", { lineHeight: "1.65" }],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.7s ease-out forwards",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
