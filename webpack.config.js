const path = require('path');
const ExtracTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtracTextPlugin('styles.css');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname,'public','dist'),
            filename: 'bundle.js'
        },
        module:{
            rules:[{
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
            },{
                test:/\.s?css$/,
                use:CSSExtract.extract({
                    use:[
                        {
                            loader:'css-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        {
                            loader:'sass-loader',
                            options:{
                                sourceMap:true
                            }
                        }
                    ]
                })
            }]
        },
        plugins:[
            CSSExtract
        ],
        devtool:isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer:{
            contentBase:path.join(__dirname,'public'),
            historyApiFallback:true, //agar tidak request route ke server, hanya sampai ke frontend
            publicPath:'/dist/'
        }
    }
}