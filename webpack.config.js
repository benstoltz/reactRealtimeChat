module.exports = {
    devtool: 'eval-source-map', // Able to debug source map
    entry: {
        main: [
            './src/main.js'
        ]
    },
    output: {
        filename: './public/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};