import {join} from 'path'
import type {Config} from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import {skeleton} from '@skeletonlabs/tw-plugin'
import {echoTheme} from "./static/echo_theme";

export default {
    darkMode: 'class',
    content: ['./src/**/*.{html,js,svelte,server}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,server}')],
    theme: {
        extend: {},
    },
    plugins: [
        forms,
        typography,
        skeleton({
            themes: {
                preset: [
                    {
                        name: 'hamlindigo',
                        enhancements: true,
                    },
                ],
                custom: [
                    echoTheme
                ]
            },
        }),
    ],
} satisfies Config;
