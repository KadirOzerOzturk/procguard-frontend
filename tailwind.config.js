/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#EF313B", // Ana vurgu (buton, başlık vs) - Kırmızı ana renginiz
          light: "#FF6B72", // Hover veya secondary - Daha açık kırmızı
          dark: "#C8000A", // Aktif durumlar - Daha koyu kırmızı
        },
        light: {
          DEFAULT: "#F9FBFA", // Yazılar, buton içeriği - Neredeyse beyaz
          soft: "#E6E8E8", // Borderlar, disabled background - Hafif kirli beyaz
        },
        dark: {
          DEFAULT: "#1A2E3D", // Navbar, footer, body - Koyu Lacivert
          soft: "#2A4050", // Kartlar, içerik alanı - Orta Lacivert
          contrast: "#0D1B26", // Daha da koyu layer'lar - En koyu lacivert
        },
      },
    },
  },
  plugins: [],
};