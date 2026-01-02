import type { Config } from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                brandYellow: '#F5D547',
            },
        },
    },
} satisfies Config;
