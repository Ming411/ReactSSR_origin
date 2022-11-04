module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  // 自动补充浏览器不支持的语法
                  useBuiltIns: 'usage'
                }
              ],
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
};
