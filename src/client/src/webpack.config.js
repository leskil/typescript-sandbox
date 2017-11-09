var Path = require("path");

module.exports = {
    entry: "./index.ts",
    output: {
        filename: "bundle.js",
        path: Path.resolve(__dirname, "../assets")
    },
    devtool: "source-map",
    watch: false,
    devServer: {
        contentBase: "./.."
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        modules: [
            Path.join(__dirname, 'node_modules')
        ]        
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    plugins: [
    ]
};