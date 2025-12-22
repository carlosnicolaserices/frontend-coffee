/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // Extendemos los colores para usar nuestros Nombres Semánticos
      colors: {
        theme: {
          bg: 'var(--color-bg)',           // Clase: bg-theme-bg
          surface: 'var(--color-surface)', // Clase: bg-theme-surface
          primary: 'var(--color-primary)', // Clase: text-theme-primary, bg-theme-primary
          secondary: 'var(--color-secondary)',
          text: {
            main: 'var(--color-text-main)',
            body: 'var(--color-text-body)',
            muted: 'var(--color-text-muted)',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}