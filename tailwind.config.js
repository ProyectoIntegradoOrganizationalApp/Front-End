/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {},
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

