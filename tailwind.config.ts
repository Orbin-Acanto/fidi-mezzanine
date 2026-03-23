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
        sans: ['var(--font-roboto)'],
        serif: ['var(--font-old-standard)'],
        slab: ['var(--font-zilla-slab)'],
      },
    },
  },
  plugins: [],
}
export default config
