/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#6674dd",

        secondary: "#495bd1",

        accent: "#4cba16",

        neutral: "#29192A",

        "base-100": "#E3E8ED",

        info: "#A5D1E9",

        success: "#77E9A3",

        warning: "#FBCF56",

        error: "#EE6D59",
      },
    },
  ],

  plugins: [require("daisyui")],
};
