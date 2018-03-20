# Vue + Webpack打造todo应用
> 参考教程：[慕课网-Vue + Webpack打造todo应用](https://www.imooc.com/learn/935)

## 前端的价值

- 搭建前端工程
- 网络优化
- API定制
- nodejs层

## 技术栈
- Webpack
- Vue

## webpack静态资源处理

### 图片资源处理
- 设置小于多少KB转化为base64
- 修改输出图片名称

### css处理
- css预处理（less\sass\stylus）
- css模块打包
- css资源加载

## webpack-dev-server

### cross-env 环境变量
cross-env NODE_DEV=

### 配置开发环境的webpack.devSever
```
// 将编译后的代码映射为开发代码
config.devtool = '#cheap-module-eval-source-map'

config.devSever = {
    port: 8000,
    host: '0.0.0.0', // 可用本机ip访问
    overlay: {
        errors: true // 错误直接显示在浏览器界面
    },
    open: trues, // 自动打开浏览器
    hot: true // 热加载
}
 // 热加载插件
config.plugins.push(
    new webpack.HotModuleReplacementPlugins(),
    new webpack.NoEmitOnErrorsPlugin()
)
```
## html-webpack-plugin
```
plugins:[
    new webpack.DefinePlugin({

    }),
    new html-webpack-plugin()
]
```
