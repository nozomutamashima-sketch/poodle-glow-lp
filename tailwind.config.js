/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFACC7', // Soft Pink (Keep base)
          foreground: '#594A4E', // Dark Brown text on primary
        },
        accent: {
          DEFAULT: '#FF4779', // Vivid Pink - Updated as requested
          foreground: '#FFFFFF',
        },
        background: '#FFF5F7', // Very light pinkish white
        foreground: '#594A4E', // Dark Brown (Cool/Adult cute)
        muted: {
          DEFAULT: '#F3E6EA',
          foreground: '#8A7A7E',
        }
      },
      fontFamily: {
        sans: ['var(--font-zen-maru)', 'var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
