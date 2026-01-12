/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.php",
    "./header.php",
    "./footer.php",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./**/*.php",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        // Add custom fonts here
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      spacing: {
        // Custom spacing values
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
