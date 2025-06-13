/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                }
            },
            animation: {
                blink: 'blink 1s step-end infinite',
            },

            colors: {
                'background': '#1E1E1E', // code Editor
                'sidebar': 'rgb(26, 26, 26)', // sidebar rgb(26, 25, 25)
                'experience': 'rgb(40, 40, 40)', //rgb(40, 40, 41)
                'button-hover': "#1177b5", //maybe bb
                'tab-inactive': "#2d2d2d",
                'vs-blue': "rgb(31, 109, 173) ", //rgb(31, 109, 173) \\\ Fonts: Windows: Typically Consolas, followed by 'Courier New' and then a generic monospace fallback.
            },

                    
        },
    },
    plugins: [],
} 