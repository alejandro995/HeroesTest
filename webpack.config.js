const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    loader: ["style-loader", "css-loader"]
                },
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
                },
                {test: /\.json$/, loader: 'json-loader'},
                {
                    test: /\.html$/,
                    loader: "html-loader"
                },
                {
                    test: /\.scss$/,
                    loader: ["raw-loader", "sass-loader?sourceMap"]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
        },
        entry: {
            polly: './src/polyfills.ts',
            main: './src/main.ts'
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
                inject: 'body'
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