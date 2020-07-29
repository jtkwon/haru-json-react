const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve("src", "index.js"),
  output: { path: path.resolve("build"), filename: "bundle.js" },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
