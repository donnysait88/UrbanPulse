import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#f4c816",
            secondary: "#c9461e",
            accent: "#0675d1",
            neutral: "#302938",
            "base-100": "#fcfdfd",
            info: "#115eee",
            success: "#148067",
            warning: "#ec8b22",
            error: "#f05169",
            body : {
              "background-color" : "e3e6e6",
            }
          },
        },
      ],
    },
}
export default config;