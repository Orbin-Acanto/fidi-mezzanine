import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
colors: {
        primary: '#d2b371',
        'primary-dark': '#b89952',
        'primary-light': '#e4ca9a',
      },
      fontFamily: {
        sans: ['var(--font-gilda-display)'],
        serif: ['var(--font-gilda-display)'],
        heading: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
}
export default config
