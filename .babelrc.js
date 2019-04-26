const presets = [
  [
    "@babel/preset-env",
    {
      "modules": false,
      "targets": {
        "browsers": [
          "Android >= 4",
          "iOS >= 8"
        ]
      }
    }
  ]
]
const plugins = [
  "@babel/plugin-transform-runtime",
  "@babel/plugin-syntax-dynamic-import"
]
module.exports = {
  presets,
  plugins
}