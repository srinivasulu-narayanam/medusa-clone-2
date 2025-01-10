const path = require("path")

// get the path of the dependency "@srinivasulu-narayanam/ui"
const medusaUI = path.join(
  path.dirname(require.resolve("@srinivasulu-narayanam/ui")),
  "**/*.{js,jsx,ts,tsx}"
)

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@srinivasulu-narayanam/ui-preset")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", medusaUI],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}
