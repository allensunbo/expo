var path = require("path");
var webpack = require("webpack");
module.exports = {
    cache: true,
    watch: true,
    entry: './src/app.ts',
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "dist/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        loaders: [
            // required to write "require('./style.css')"
            { test: /\.css$/, loader: "style-loader!css-loader" },

            // required for bootstrap icons
            { test: /\.woff$/, loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
            { test: /\.ttf$/, loader: "file-loader?prefix=font/" },
            { test: /\.eot$/, loader: "file-loader?prefix=font/" },
            { test: /\.svg$/, loader: "file-loader?prefix=font/" },

            // required for typescript
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    
    // Source maps support (or 'inline-source-map' also works)
    devtool: 'source-map',

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
    ]
};