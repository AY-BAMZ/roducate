import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
            },
            colors: {
                link: '#3B82F6',
                black: {
                    default: '#000000',
                    1000: '#1A202C',
                    900: '#080C19',
                    800: '#0D121F',
                    700: '#131825',
                    600: '#1A202C',
                    500: '#596780',
                    400: '#94A3B8',
                    300: '#C3D4E9',
                    200: '#E0E9F4',
                    100: '#F5F7F7',
                },
                brand: {
                    stroke: '#E3E4ED',
                    'st-1': '#F6F7F9',
                    'st-2': '#fafafa',
                    'st-3': '#F2F4F4',
                    'st-4': '#F8F8FF',
                    'st-5': '#F7F7F9',
                    'st-6': '#F9F9FB',
                    'st-7': '#ECF6FF',
                    'st-8': '#F9F5FF',
                    'st-9': '#EBEDF4',
                    'st-10': '#F1F5F9',
                },
                primary: {
                    default: '#3563e9',
                    900: '#0a196f',
                    800: '#102587',
                    700: '#1a37a7',
                    600: '#264bc8',
                    400: '#658df1',
                    300: '#85abf8',
                    200: '#aec8fc',
                    100: '#d6e4fd',
                },
                secondary: {
                    default: '#ED8640',
                    900: '#F6AA4C',
                    800: '#FCC053',
                    700: '#FFD75A',
                    600: '#FFE45A',
                    500: '#FFE96F',
                    400: '#FFEE87',
                    300: '#FFF3A8',
                    200: '#FAE0CF',
                    100: '#FFFDEA',
                },
                success: {
                    default: '#02A870',
                    deep: '#027750',
                    light: '#00D68F',
                    thin: '#EBFBE6',
                    thinDeep: '#CEF0DB',
                },
                danger: {
                    default: '#F95454',
                    deep: '#E54040',
                    light: '#FB8787',
                    thin: '#FFEAEA',
                },
                yellow: {
                    default: '#ffff00',
                    deep: '#FFD000',
                    light: '#FFFF33',
                    thin: '#FDD83520',
                },
                warning: {
                    default: '#F39B33',
                    deep: '#DF871F',
                    light: '#F7B970',
                    thin: '#FFEEDA',
                },
            },
        },
    },
    plugins: [],
};
export default config;
