var webpack=require('webpack');
module.exports={
    entry:[
        "webpack/hot/only-dev-server",
        "./js/main.js"
    ],
    output:{
        path:"./assets/",
        filename:"app.js"
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
