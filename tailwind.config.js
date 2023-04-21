/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        'md_lg': '1050px',
        // => @media (min-width: 1050px) { ... }
        'mobile': '370px',

        'FilterPoint': '500px',
        // => @media (min-width: 320px) { ... }
        'sm': '600px'
      },

    },
    plugins: [],
  }
}

