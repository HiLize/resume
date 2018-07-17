const path = require('path'); //node提供的方法，不需要额外安装
const webpack = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin')

module.exports = {
     entry:'./src/index.js', //入口文件
     output:{
          //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径 
          path:path.resolve(__dirname,'docs'), //输出位置
          filename:'main.js' //输入文件
     },
     /**
      module.rules 允许配置多个loader(loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。)
     **/
     module:{
        rules:[{
          test:/\.(js|jsx)$/,
          exclude:/node_modules/,
          use: {
            loader:'babel-loader',
            query:{
              presets: ['es2015','react', 'env', 'stage-0'],
              // ant design 添加之后就不需要额外引入ant 的css样式了
              plugins: [["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]]
            }
          }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']// 从右开始解析
        },
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        },
        {
            test: /\.(scss|sass)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],// 从右开始解析
            // include:path.join(__dirname,'./src') 带有该句就不会识别node_modules 里的样式了，所以要去掉，否则会一直报错
        }, 
        {
          test:/\.(jpg|png|gif|svg)$/,
          use:'url-loader',
          include:path.join(__dirname,'./src'),
          exclude:/node_modules/
        }]
     },
     /*
    //其他解决方案配置
    resolve: {
        extensions: ['', '.js', '.json', '.css', '.scss']//添加在此的后缀所对应的文件可以省略后缀
    },*/
    devServer: {
        historyApiFallback: true,  //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，任意的 404 响应都可能需要被替代为 index.html
　　　　inline: true,              //实时刷新
        // 设置服务器访问的基本目录
        contentBase:path.resolve(__dirname,'docs'), //指定服务开启的位置，在docs文件夹中,该路径==='./docs'
        // 设置服务器的ip地址,可以是localhost
        host:'localhost',
        // 设置端口
        port:8090,
        // 设置自动拉起浏览器
        open:false,
        hot:true // 开启热加载
    },
    //插件
    plugins:[
        // webpack 内置的 banner-plugin
        new webpack.BannerPlugin("Copyright by https://github.com/heyushuo."),
        new webpack.HotModuleReplacementPlugin(), //调用webpack的热更新插件
        //利用webpack-html-plugin这个插件它可以生成html文件到指定的目录下，这样就可以不用再根目录下建立页面文件了，直接在src下建立模板文件，
        new HtmlWebpackPlugin({
          template: __dirname + '/src/index.html'  //默认会在docs路径下生成index.html并引用所有的静态资源
        })
    ]
}