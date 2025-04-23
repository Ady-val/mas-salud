import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-layout': 'inset 0.5px 0.5px 24px 2px rgba(0,0,0,0.5)',
        'inner-md': 'inset 0 4px 6px rgba(0,0,0,0.1)',
        'inner-lg-left-top': 'inset 8px 0.5px 6px -8px rgba(0,0,0,1)',
        'lg-right-main': '60px 7px 53px -40px #e5e7e9',
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        roboto: ["var(--font-roboto)"],
        raleway: ["var(--font-rale-way)"],
      },
      colors: {
        main: '#e5e7e9',
        primary: '#37327D',
        secondary: '#544E95',
        tertiary: '#DAEEFF',
        content: {
          DEFAULT: '#3A3838',
          primary: '#3A3838',
          secondary: '#3A3838',
          card: '#FFFFFF',
        },
        heading: {
          primary: '#004B93',
          secondary: '#374151',
        },
        subtitle: {
          primary: '#004B93',
          secondary: '#374151',
        },
        button: {
          primary: {
            DEFAULT: '#4F46E5',
            hover: '#4338CA',
          },
          secondary: {
            DEFAULT: '#10B981',
            hover: '#0D9488',
          },
          success: {
            DEFAULT: '#34D399',
            hover: '#10B981',
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;