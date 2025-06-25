import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}