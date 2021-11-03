const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const autoprefixer = require('autoprefixer')
const dotenv = require('dotenv')
const webpackDevelopmentConfig = require('./webpack.development')
const webpackProductionConfig = require('./webpack.production')
const package_ = require('./package.json')

dotenv.config()

const sourceFolder = path.resolve('src')

const config = function (environment, arguments_) {
    const mode = arguments_.mode || 'development'
    const isDevelopmentEnvironment = mode === 'development'
    const isProductionEnvironment = mode === 'production'
    const isCI = !!process.env.CI

    if (isCI && isDevelopmentEnvironment) {
        console.warn('You are building webpack in development mode but on CI')
    } else {
        console.log('Building with webpack in "%s" mode', mode)
    }

    const defaultConfig = {
        plugins: [
            new ForkTsCheckerWebpackPlugin({
                async: isDevelopmentEnvironment,
                typescript: {
                    configFile: './tsconfig.json',
                    mode: 'write-references',
                    memoryLimit: 4096,
                },
                issue: {
                    include: [{ file: '**/src/**/*' }],
                    exclude: [{ file: '*.webpack.*.ts' }],
                },
            }),
            new MiniCssExtractPlugin({
                ignoreOrder: true,
                filename: isProductionEnvironment ? '[name]-[contenthash].css' : '[name].css',
                chunkFilename: isProductionEnvironment ? '[name]-[contenthash].css' : '[name].css',
            }),
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'development',
            }),
            new webpack.DefinePlugin({
                __DEVELOPMENT__: JSON.stringify(isDevelopmentEnvironment),
                __PRODUCTION__: JSON.stringify(isProductionEnvironment),
                __APP_NAME__: JSON.stringify('BoilerPlate'),
                __TWO__: 2,
                __ONE_SECOND__: 1000,
            }),
            new HtmlWebpackPlugin({
                title: package_.name || 'Webpack App',
                meta: {
                    description: package_.description,
                    'msapplication-TileColor': '#1258ff',
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover',
                    'apple-mobile-web-app-status-bar-style': 'black-translucent',
                    'theme-color': '#ffffff',
                    'msapplication-navbutton-color': '#1258ff',
                    'msapplication-starturl': '/?utm_source=a2hs',
                },
                favicon: './public/favicons/favicon.ico',
                template: path.resolve('src', 'index.ejs'),
                minify: { collapseWhitespace: true },
                inlineSource: 'runtime.+\\.js',
                scriptLoading: 'defer',
            }),
            new webpack.ids.HashedModuleIdsPlugin(),
            // new webpack.HotModuleReplacementPlugin(),
        ],
        resolve: {
            extensions: ['.tsx', '.jsx', '.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    include: [sourceFolder],
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: { sourceMap: false, modules: false },
                        },
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'bundle.css',
                            },
                        },
                        { loader: 'extract-loader' },
                        { loader: 'css-loader' },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [autoprefixer()],
                                },
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                // Prefer Dart Sass
                                implementation: require('sass'),

                                // See https://github.com/webpack-contrib/sass-loader/issues/804
                                webpackImporter: false,
                                sassOptions: {
                                    includePaths: ['./node_modules'],
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(webp|avif|gif|png|jpe?g)$/i,
                    use: {
                        loader: 'file-loader',
                        options: { outputPath: 'public/images/' },
                    },
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: '@svgr/webpack',
                            options: {
                                svgoConfig: {
                                    plugins: [{ mergePaths: false }, { removeViewBox: false }, { removeAttrs: true }],
                                },
                            },
                        },
                        'url-loader',
                    ],
                },
            ],
        },
    }

    const modeConfig = new Map([
        ['production', webpackProductionConfig],
        ['development', webpackDevelopmentConfig],
    ])

    const config = modeConfig.get(mode)

    if (config) {
        return merge(defaultConfig, config)
    }
    return defaultConfig
}

module.exports = config
