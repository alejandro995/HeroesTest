const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

module.exports = function () {
    return {
        module: {
            rules: [
                { test: /\.css$/, use: 'css-loader' },
                {
                    test: /\.ts$/,
                    loaders: [
                        'angular2-template-loader',
                        'ts-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }

                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        entry: {
            app: './src/main.ts',
            styles: './src/assets/styles/main.css'
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].js'
        },
        mode: 'development',
        plugins: [
            new CopyWebpackPlugin([
                { from: 'src/assets', to: 'assets' }
            ]),
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html',
                output: __dirname + '/dist',
                inject: 'head'
            }),
            new ScriptExtPlugin({
                defaultAttribute: 'defer'
            }),
            new AngularCompilerPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: './src/app/app.module#AppModule',
                sourceMap: true
            })
        ]
    };
}