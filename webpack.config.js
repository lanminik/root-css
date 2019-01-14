var path = require("path");

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        // Load .scss and .css files through the following loaders:
          // - sass-loader (compiles sass to css)
          // - postcss-loader (applies autoprefixer plugin to css)
          // - css-loader
          // - loads css as plain text
        // Then the ExtractTextPlugin swallows the output and injects it as a css file on the web page
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  autoprefixer({
                    browsers: ["not ie < 9", "last 2 versions"]
                  })
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname, './node_modules/easy-css')
                ]
              }
            }
          ]
        })
      },
    ]
  }
}