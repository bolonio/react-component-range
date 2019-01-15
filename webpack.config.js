var path = require("path")
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
}
