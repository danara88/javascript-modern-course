const htmlWebpack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',

    output: {
        clean: true // Mantiene nuestro dist limpio
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
            }
        ]
    },

    optimization: {},

    plugins: [
        new htmlWebpack({
            title: 'Mi Webpack App',
            // filename: 'index.html'
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css', //[fullhash] EL hash ayuda a que los clientes no mantengan en cache el archivo
            ignoreOrder: false // Ignorar el orden de las importaciones css
        }),
        new CopyPlugin({
            patterns: [
              { from: 'src/assets/', to: 'assets/' },
            ],
         }),
    ],
}