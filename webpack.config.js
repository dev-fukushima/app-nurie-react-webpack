const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  // ファイルの出力設定
  output: {
    filename: 'main.js',
    path: outputPath
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: '0.0.0.0',
    open: true,
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                // React の JSX を解釈
                "@babel/react"
              ]
            }
          }
        ]
      }
    ]
  }
};
