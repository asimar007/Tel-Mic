module.exports = {
    theme: {
        extend: {
            screens: {
                '3xl': '1920px',
                '4xl': '2560px',
            },
            fontSize: {
                'fluid-sm': 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
                'fluid-base': 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
                'fluid-lg': 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
                'fluid-xl': 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
                'fluid-2xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
                'fluid-3xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
            },
            animation: {
                fadeIn: 'fadeIn 0.6s ease-in-out forwards',
                fadeSlideIn: 'fadeSlideIn 0.6s ease-out forwards',
                countUp: 'countUp 1s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeSlideIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                countUp: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}