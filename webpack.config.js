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
            chunks: "initial",  // async输出动态加载的重复文件、 initial动态和非动态的重复文件各输出一份 、 all不管动态还是非动态的重复文件只输出一份
            minSize: 0,
            automaticNameDelimiter: '~',
        }
    },
};