module.exports = async ({ config, mode }) => {
  config.module = {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  };

  config.resolve.extensions = [".tsx", ".ts", ".jsx", ".js"];

  return config;
};
