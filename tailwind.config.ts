import type {Config} from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

export default {
    content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
                blophy: ['Blophy'],
                jetbrains: ['"JetBrains Mono"', 'monospace'],
            },
        },
    },
    plugins: [typography, daisyui],
} satisfies Config;
