const path = require('path')
const HtmlWebpackPlugin =  require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: false,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: 'SPJC - SharePoint Guy',
            filename: 'index.html',
            template: 'src/template.html',
            favicon: 'src/assets/favicon.svg',
            manifest: 'src/manifest.json'
        }),
        new FaviconsWebpackPlugin({
            logo: 'src/assets/favicon.svg', 
            favicons: {
              appName: 'SPJC',
              appDescription: 'SPJC a SharePoint Guy',
              developerName: 'LuigiLink',
              developerURL: null, // prevent retrieving from the nearest package.json
              background: '#ddd',
              theme_color: '#333',
              icons: {
                coast: false,
                yandex: false
              }
            }
          })
    ],
}
