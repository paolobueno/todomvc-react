module.exports = {
    entry: "./js/app.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx?$/, loader: "babel?cacheDirectory"}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    devtool: 'source-map'
};