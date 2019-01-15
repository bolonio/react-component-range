module.exports = {
  plugins: [
    require("autoprefixer")({ grid: true }),
    require("cssnano")({
      preset: "default"
    }),
    require("postcss-input-range"),
    require("postcss").plugin("postcss-fail-on-warn", () => {
      return (root, result) => {
        if (result.warnings().length > 0) {
          throw new Error(result.warnings()[0])
        }
      }
    })
  ]
}
