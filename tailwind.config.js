/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#5e72e4',
        indigo: '#5603ad',
        purple: '#8965e0',
        iconBlue:'#1da1f2',
        titleColor:'#525f7f',
        bgColor:'#f2f4f5'
      },
    },
  },
  plugins: [],
}
