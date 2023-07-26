/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins : {
      container : false
    },
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
                menuOpen : {
                    from: {
                        height: "0vh",
                    },
                    to: {
                        height: "100vh"
                    }
                },
                menuClose : {
                    from: {
                        height: "100vh",
                    },
                    to: {
                        height: "0vh"
                    }
                },
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
                spin: {
                    from: {
                        transform: "rotate(0)",
                    },
                    to: {
                        transform: "rotate(360deg)",
                    }
                },
            },
            animation: {
                'menuOpenAnime': "menuOpen 1000ms cubic-bezier(0.87, 0, 0.13, 1) both",
                'menuCloseAnime': "menuClose 300ms cubic-bezier(0.87, 0, 0.13, 1) both",
                'slideDownAnime': "slideDown 1000ms cubic-bezier(0.87, 0, 0.13, 1)",
                'slideUpAnime': "slideUp 1000ms cubic-bezier(0.87, 0, 0.13, 1)",
                'spinAnime': "spin 50000ms linear infinite",
            },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    width: '100%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '768px',
                    },
                    '@screen lg': {
                        maxWidth: '1024px',
                    },
                    '@screen xl': {
                        maxWidth: '1180px',
                    }
                }
            })
        }
    ],
}
