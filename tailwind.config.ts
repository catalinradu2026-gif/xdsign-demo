import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E2C068',
        xblue: '#1a6fa8',
        'xblue-light': '#2589cc',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
