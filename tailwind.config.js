/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#FFFFF1",
        btnBackgroundColor: "#FBDA6F",
        textColor: "#000000",
        textYellowColor: "#FBDA6F",
        textDarkBrown : "#6D0505",
        backgroundOval : "#FBF7CF",
        sidebarColor : "#FBF7CF",
        chartColor : "#FBF7DF"
      },
    },
  },
  plugins: [],
}

