/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,vue,svelte}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00AFFF",
        secondary: "#4CC9FF",
        accent: "#0F8CE9",
        bgLight: "#F8FBFF",
        textDark: "#0A1A2A",
        softGrey: "#E8EEF5",
      },
      borderRadius: {
        xl: "1.25rem",
        xxl: "2rem",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #00AFFF, #4CC9FF)",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10,26,42,0.06)",
      },
    },
  },
  plugins: [],
};
