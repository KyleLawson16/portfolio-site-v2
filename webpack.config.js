const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    build: "./src/pages/index.js",
    "build/projects/lou": "./src/pages/indexLou.js",
    "build/projects/melillo": "./src/pages/indexMelillo.js",
    "build/projects/shelfie": "./src/pages/indexShelfie.js",
    "build/projects/vidvision": "./src/pages/indexVidvision.js",
    "build/projects/house-in-motion": "./src/pages/indexHouseInMotion.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/main.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    publicPath: "/assets/",
    contentBase: path.join(__dirname, "dist/build"),
    watchContentBase: true,
    compress: true,
    port: 3000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
