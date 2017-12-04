
const path = require('path');


const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
    entry: {
        main:'./src/index.js'   //不采用简写:'sdsdsd'
    },
    output: {
        path:__dirname,  //解决不同系统的路径引用问题
        filename: 'bundle.js'
       // publicPath: './build/'
        //publicPath  //按需加载需要的目录

    },
    module: {
        //模块配置 使用Babel Turn ES2015 code in to es5
        rules: [ ///包含Rule的数组 Rule有三部分 condition result nested rule‘嵌套规则’
            {
                use: 'babel-loader',
                test: /\.js$/,    //筛选加载的文件名 使用正则表达式
                exclude: /node_modules/
            },
            {
                test: /\.css$/,   //加载css
                use: ['style-loader','css-loader'],  //内联打包css
               /* use: ExtractTextPlugin.extract({     //独立打包css
                    fallback:"style-loader",
                    use:"css-loader"
                }),*/
                exclude: /node_modules/
            },
            {                  //加载jsx
                test:/\.jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './'),
        compress: true,
        port: 9000,
        open:true,
        //publicPath: "./build/"
    },
    plugins: [
        //new ExtractTextPlugin("styles.css")
    ]
};

module.exports = config;

//https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f