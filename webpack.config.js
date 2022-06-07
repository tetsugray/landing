const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
let mode = isDev ? 'development' : 'production'
const filename = (name, ext) => isDev ? `${name}.${ext}` : `${name}.[hash].${ext}`


// const ghpages = require('gh-pages')
// ghpages.publish('dist', {
//     src: ['**/*', '**/*/*']
// }, function(err) {console.log(err)})

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: mode,
    entry: './index.js',
    target: isDev ? 'web' : 'browserslist',
    output: {
        filename: filename('bundle', 'js'),
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext]'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src')
        },
        port: 4200,
        open: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('main', 'css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test: /\.(?:ico|webp|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            }
        ]
    }
}