import type { Config } from "tailwindcss";
import colors  from 'tailwindcss/colors'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode using class names
  theme: {
    extend: {
      colors: {
        ...colors,
        casper: '#A4C4CC',
        'ebony-clay': '#252e42',
        juniper: '#738a8f',
        'spring-rain': '#A4CCAB',
        'limed-spruce': '#3e5358',
      }
    },
  },
  plugins: [],
};
export default config;
