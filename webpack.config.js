const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: "production",
    entry: {
        english: "./src/english.js",
        math: "./src/math.js",
        chinese: "./src/chinese.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: 3,
            minSize: 0,
            automaticNameDelimiter: '~',
        }
    },
};
//maxInitialRequests
//入口点处的最大并行请求数，换句话来讲就是每一个入口文件打包完成后最多能有多少个模块组成