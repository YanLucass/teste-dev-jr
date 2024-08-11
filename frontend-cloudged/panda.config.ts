import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  jsxFramework: 'react',

  // Useful for theme customization
  
  theme: {
    extend: {
      tokens: {
        colors: {
          "gray": {
            "50": { "value": "#f7f9f9" },
            "100": { "value": "#e8f0f7" },
            "200": { "value": "#cddeee" },
            "300": { "value": "#a1bdd7" },
            "400": { "value": "#7096ba" },
            "500": { "value": "#6c7b8f" },
            "600": { "value": "#465980" },
            "700": { "value": "#374362" },
            "800": { "value": "#262d44" },
            "900": { "value": "#171c2b" }
          },
          "cerise": {
            "50": { "value": "#fdfcfb" },
            "100": { "value": "#fbeff0" },
            "200": { "value": "#f8cae1" },
            "300": { "value": "#f09bc2" },
            "400": { "value": "#ef6ba0" },
            "500": { "value": "#e94191" },
            "600": { "value": "#d32f62" },
            "700": { "value": "#ae2447" },
            "800": { "value": "#82192e" },
            "900": { "value": "#511018" }
          },
          "sea": {
            "50": { "value": "#f4f8fa" },
            "100": { "value": "#ddf0fb" },
            "200": { "value": "#b8dff6" },
            "300": { "value": "#87bfe9" },
            "400": { "value": "#549ad7" },
            "500": { "value": "#4e89c3" },
            "600": { "value": "#355daf" },
            "700": { "value": "#2b468c" },
            "800": { "value": "#1f2f64" },
            "900": { "value": "#121d41" }
          },
          "purple": {
            "50": { "value": "#fafafb" },
            "100": { "value": "#f3eef9" },
            "200": { "value": "#e8cff5" },
            "300": { "value": "#d2a6e7" },
            "400": { "value": "#dd72ff" },
            "500": { "value": "#b457cc" },
            "600": { "value": "#9a3cb6" },
            "700": { "value": "#762d91" },
            "800": { "value": "#532065" },
            "900": { "value": "#31153a" }
          },
          "emerald": {
            "50": { "value": "#ecf5f3" },
            "100": { "value": "#c9f0f0" },
            "200": { "value": "#8ce9db" },
            "300": { "value": "#51d0b3" },
            "400": { "value": "#02a890" },
            "500": { "value": "#129b5b" },
            "600": { "value": "#118645" },
            "700": { "value": "#116838" },
            "800": { "value": "#0e472b" },
            "900": { "value": "#0a2c22" }
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
