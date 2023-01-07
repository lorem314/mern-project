const path = require("path")
const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")

const CURRENT_WORKING_DIR = process.cwd()

const config = {
  name: "server",
  mode: process.env.NODE_ENV || "production",
  entry: [path.join(CURRENT_WORKING_DIR, "./server/server.js")],
  target: "node",
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist/"),
    filename: "server.generated.js",
    publicPath: "/dist/",
    libraryTarget: "commonjs2",
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
}

module.exports = config
