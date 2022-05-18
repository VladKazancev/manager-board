const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpack = require('webpack')

module.exports = function (env) {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? false : 'cheap-module-source-map',
    entry: './src/index.tsx',
    target: 'web',
    resolve: {
      alias: {
        '@root': path.resolve(__dirname, '.'),
        '@': path.resolve(__dirname, 'src/'),
      },
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: env.production ? 'static/js/bundle-[fullhash].js' : 'static/js/bundle-[name].js',
      chunkFilename: env.production ? 'static/js/[chunkhash].chunk.js' : 'static/js/[name].chunk.js',
      publicPath: '/',
      globalObject: 'this',
    },
    devServer: {
      hot: true,
      port: 3000,
      historyApiFallback: true,
      compress: true,
      allowedHosts: ['.localhost'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.svg$/,
          use: [{ loader: '@svgr/webpack' }],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
      new Dotenv({ systemvars: true, safe: true, allowEmptyValues: true }),
      new ForkTsCheckerWebpackPlugin(),
      new webpack.SourceMapDevToolPlugin({
        moduleFilenameTemplate: '[absolute-resource-path]',
        noSources: true,
      }),
      !env.production && new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),
  }
}
