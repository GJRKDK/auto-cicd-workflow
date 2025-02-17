const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // or 'production' when you build for prod
  entry: "./src/index.tsx", // Entry point of your app
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory (absolute path)
    filename: "bundle.js", // Output bundle file name
    publicPath: "/auto-cicd-workflow/",
    clean: true, // Clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use our index.html as a template
      filename: "index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Serve static files from 'public'
    },
    port: 3000, // Port on which we serve
    open: true, // Automatically open the browser
    hot: true, // Enable Hot Module Replacement
  },
};
