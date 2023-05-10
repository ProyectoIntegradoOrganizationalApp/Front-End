/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontSize: {
      sm: '14px',
      base: ['16px', {
        fontWeight: '500'
      }],
      xl: '18px',
      '2xl': ['26.316px', {
        lineHeight: '2.2rem',
        fontWeight: '500'
      }],
      '3xl': '45px',
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

