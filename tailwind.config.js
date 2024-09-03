/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
    content: [
        `./src/pages/**/*.{js,jsx,ts,tsx}`,
        `./src/components/**/*.{js,jsx,ts,tsx}`,
    ],
    theme: {
        extend: {
            zIndex: {
                'header': '100'
            },
            fontFamily: {
                'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
                'serif': ['Alegreya', ...defaultTheme.fontFamily.serif],
                'cursive': ['Great Vibes', 'Alegreya', ...defaultTheme.fontFamily.serif]
            },
            animation:{
                "spin-slow":'spin 30s linear infinite'
            }
        },
        container: {center: true}
    },
    plugins: [],
}