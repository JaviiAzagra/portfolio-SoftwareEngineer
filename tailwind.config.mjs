/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bgheader: "#1A0B2E",
        bgmain: "#11071f",
        font2: "#7127BA",
        font3: "#CCD6F6",
        fonta: "#1877F2",
        stroke: "#693B93",
        bgimg: "#251C31",
        buttonbg: "#2C1250",
      },
      fontFamily: {
        preahvihear: ["Preahvihear", "sans-serif"],
      },
    },
  },
  plugins: [],
};
