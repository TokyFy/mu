/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                "cabin": ["Cabin", "sans-serif"],
                "alata": ["Alata", "sans-serif"]
            },
            colors: {
                "primary-dark": "var(--primary-dark)",
                "primary-light": "var(--primary-light)",
                "accent-color": "var(--accent-color)"
            },
            keyframes: {
                slideDown: {
                    from: {
                        height: "0",
                    },
                    to: {
                        height: "var(--radix-accordion-content-height)"
                    }
                },
                slideUp: {
                    from: {
                        height: "var(--radix-accordion-content-height)",
                    },
                    to: {
                        height: "0"
                    }
                },
            },
            animation: {
                'slideDownAnime': "slideDown 1000ms cubic-bezier(0.87, 0, 0.13, 1)",
                'slideUpAnime': "slideUp 1000ms cubic-bezier(0.87, 0, 0.13, 1)",
            },
        },
    },
    plugins: [],
}
