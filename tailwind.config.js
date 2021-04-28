const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin')


module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Almarai', ...defaultTheme.fontFamily.sans],
            },
            maxHeight: {
                'truck': '600px'
            },
            minHeight: {
                'truck': '350px'
            },
        },
    },
    variants: {
        extend: {
            display: ['group-hover']
        },
    },
    plugins: [
        require('tailwindcss-rtl'),
        require('@tailwindcss/custom-forms'),
        plugin(function ({ addUtilities }) {
            const newUtilities = {
                '.filter-grayscale-50': {
                    filter: 'grayscale(50%)',
                },
            }

            addUtilities(newUtilities, [])
        })
    ],
}
