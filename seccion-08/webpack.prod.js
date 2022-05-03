const htmlWebpack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',

    output: {
        clean: true, // Mantiene nuestro dist limpio
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false // En caso de mover un html, los src tambian se mueven
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser()
        ]
    },

    plugins: [
        new htmlWebpack({
            title: 'Mi Webpack App',
            // filename: 'index.html'
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css', //[fullhash] EL hash ayuda a que los clientes no mantengan en cache el archivo
            ignoreOrder: false // Ignorar el orden de las importaciones css
        }),
        new CopyPlugin({
            patterns: [
              { from: 'src/assets/', to: 'assets/' },
            ],
         }),
    ],
}