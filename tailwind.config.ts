import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1ca7ec",
                "primary-foreground": "hsl(210 40% 98%)",
                background: "#fefefe",
                foreground: "hsl(222.2 47.4% 11.2%)",
                muted: "hsl(210 40% 96.1%)",
                "muted-foreground": "hsl(215.4 16.3% 46.9%)",
                popover: "hsl(0 0% 100%)",
                "popover-foreground": "hsl(222.2 47.4% 11.2%)",
                "secondary-foreground": "hsl(222.2 47.4% 11.2%)",
            },
            fontFamily: {
                sans: "Poppins,Arial,san-serif",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
