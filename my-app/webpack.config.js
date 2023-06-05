const webpack = require("webpack");

module.exports = {
  // Other webpack configuration options...

  resolve: {
    fallback: {
      buffer: require.resolve("buffer/"),
      stream: false,
      util: false,
    },
  },

  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
