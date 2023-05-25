/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontSize: {
      ssm: ['.7rem', {
        fontWeight: '500'
      }],
      sm: ['.8rem', {
        fontWeight: '500'
      }],
      base: ['1rem', {
        fontWeight: '500'
      }],
      xl: '18px',
      '2xl': ['2.1rem', {
        lineHeight: '3rem',
        fontWeight: '500'
      }],
      '3xl': '2.3rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem'
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    }
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        light_theme: {
          primary: "#1E293B",
          secondary: "#334155",
          accent: "#475569",
          neutral: "#64748B"
        }
      },
      "dark"
    ]
  }
}

