var webpack=require('webpack');
var path = require('path');
var publicPath = 'http://127.0.0.1:3000/';
module.exports={
    entry:[
        'webpack-dev-server/client?http://127.0.0.1:3000',
        'webpack/hot/only-dev-server',
        "./js/main.js"
    ],
    output:{
        path:path.join(__dirname,"./assets/"),
        filename:"app.js",
        publicPath: publicPath
    },
    devtool:"source-map",
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"react-hot!babel"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
