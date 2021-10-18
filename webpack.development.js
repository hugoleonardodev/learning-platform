const path = require('path')
// const fs = require('fs')
const webpack = require('webpack')
const dotenv = require('dotenv')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')
// const package_ = require('./package.json')

dotenv.config()

const API_URL = process.env.API_URL

if (API_URL) {
    console.warn('Using API Url Proxy to "%s"', API_URL)
}

const config = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    optimization: {
        runtimeChunk: 'single',
        moduleIds: 'deterministic',
    },
    target: 'web',
    cache: true,
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/',
        sourceMapFilename: '[name].js.map',
        pathinfo: false,
        uniqueName: 'boilerplatePlatform',
        library: 'boilerplatePlatform',
    },
    plugins: [
        // new ForkTsCheckerNotifierWebpackPlugin({
        //     title: 'TypeScript',
        //     excludeWarnings: false,
        // }),
        new webpack.DefinePlugin({
            __API_URL__: JSON.stringify('/api'),
        }),
        // new BundleAnalyzerPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new ReactRefreshWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.m?[jt]sx?$/i,
                // exclude: [/node_modules/, /__tests__/],
                exclude: [/node_modules/, /__tests__/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true, // important for performance
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                exclude: [/__tests__/],
                // exclude: /__tests__/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            happyPackMode: true,
                            transpileOnly: true,
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        client: {
            logging: 'info',
            overlay: true,
        },
        allowedHosts: 'auto',
        compress: true,
        liveReload: true,
        watchFiles: ['src/**/*.scss', 'src/**/*.ts', 'src/**/*.tsx', 'public/**/*'],
        port: 5010,
        historyApiFallback: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        onListening: function (server) {
            if (server.listeningApp) {
                const addressObject = server.listeningApp.address()
                const { port, address } = addressObject
                console.log('Ready on (%s)', `https://${address}:${port}`)
            }
        },
    },
}

module.exports = config
