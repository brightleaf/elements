const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const TerserPlugin = require('terser-webpack-plugin')
const pkg = require('../package.json')
module.exports = {
  entry: {
    index: './working/index.js',
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
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Brightleaf Elements Bootswatch',
      template: './working/swatch.html',
      chunks: ['bootswatch'],
      filename: 'bootswatch.html',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Brightleaf Elements Templates',
      template: './working/hero.html',
      chunks: ['hero'],
      filename: 'templates.html',
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
  optimization: {
    minimizer: [new TerserPlugin()],
  },
}
