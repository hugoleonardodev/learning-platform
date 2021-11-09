const path = require('path')
const webpack = require('webpack')
const TerserJSPlugin = require('terser-webpack-plugin')
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const CompressionPlugin = require('compression-webpack-plugin')

const sourceFolder = path.resolve(__dirname, 'src')

const config = {
    cache: true,
    mode: 'production',
    devtool: 'hidden-source-map',
    entry: sourceFolder,
    output: {
        path: path.resolve('dist'),
        filename: '[name]-[contenthash:8].js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: process.env.PUBLIC_PATH || '/',
        sourceMapFilename: '[name]-[contenthash:8].js.map',
        pathinfo: false,
        libraryTarget: 'umd',
        globalObject: "(typeof window !== 'undefined' ? window : this)",
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Number.POSITIVE_INFINITY,
            maxAsyncRequests: Number.POSITIVE_INFINITY,
            minSize: 20000,
            minChunks: 1,
            maxSize: 249856,
            cacheGroups: {
                default: false,
                vendors: false,
                pages: {
                    test: /pages/,
                    chunks: 'all',
                    priority: -20,
                    name: false,
                },
                vendor: {
                    test: /[/\\]node_modules[/\\]/,
                    chunks: 'all',
                    priority: -10,
                    name: 'vendor-node',
                },
                common: {
                    name: 'common',
                    minChunks: 2,
                    priority: -30,
                    reuseExistingChunk: true,
                    enforce: true,
                },
            },
        },
        minimize: true,
        minimizer: [
            new TerserJSPlugin({
                exclude: /\/__tests__\/|\/docs\//,
                terserOptions: {
                    sourceMap: true,
                    parse: {
                        ecma: 2015,
                    },
                    compress: {
                        ecma: 5,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                    ie8: true,
                    safari10: true,
                },
                extractComments: false,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.m?[jt]sx?$/i,
                // include: [sourceFolder],
                exclude: /\/node_modules|\/__tests__\//,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.tsx?$/,
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
    plugins: [
        // new CompressionPlugin({
        //     filename: '[path][name].gz[query]',
        //     test: /\.js$|\.css$|\.html$/,
        // }),
        new webpack.DefinePlugin({
            __API_URL__: JSON.stringify(process.env.API_URL),
        }),
        new BundleAnalyzerPlugin(),
    ],
    performance: {
        hints: 'warning',
    },
}

module.exports = config
