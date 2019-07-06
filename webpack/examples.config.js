const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const pkg = require('../package.json')
module.exports = {
  entry: {
    index: './working/index.js',
    vendor: Object.keys(pkg.dependencies),
    hero: './working/templates.js',
    bootswatch: './working/boot.js',
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ca]ss$/,
        loader: 'style-loader!css-loader!resolve-url-loader!sass-loader',
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              highlight: function(code) {
                return require('highlight.js').highlightAuto(code).value
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Brightleaf Elements',
      template: './working/index.html',
      historyApiFallback: true,
      chunks: ['vendor', 'index'],
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Brightleaf Elements Bootswatch',
      template: './working/swatch.html',
      chunks: ['bootswatch', 'vendor'],
      filename: 'bootswatch.html',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Brightleaf Hero',
      template: './working/hero.html',
      chunks: ['hero', 'vendor'],
      filename: 'hero.html',
    }),
    new CopyPlugin([
      {
        from: path.join(process.cwd(), '/working/public'),
        to: path.join(process.cwd(), '/dist'),
      },
    ]),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
    }),
  ],
  resolve: {
    extensions: ['*', '.mjs', '.js', '.jsx'],
    modules: ['node_modules', 'src'],
    alias: {},
  },
  output: {
    path: path.join(process.cwd(), '/dist'),
    publicPath: '/elements/',
    filename: './[name].bundle.js',
  },
}
