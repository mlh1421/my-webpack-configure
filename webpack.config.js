module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
            // { test: /\.css$/, loader: "style!css?sourceMap!postcss" },
            // { test: /\.less$/, loader: "style!css!less|postcss" },
            // { test: /\.scss$/, loader: "style!css!sass|postcss" }
        ]
    }
};