# Vue2.x + webpack4.x + express(koa) 项目

## 环境搭建

技术官网

- [webpack](https://webpack.docschina.org)
- [vue-loader](https://vue-loader.vuejs.org/)
- [Babel](https://www.babeljs.cn/)
- [Vue.js](https://cn.vuejs.org/)
- [Express](http://www.expressjs.com.cn/)
- [koa](https://koajs.com/)
- [Bootstrap](http://www.bootcss.com/)
- [vue-cli 3](https://cli.vuejs.org/)

参考项目或技术贴
[从零开始的 webpack4 + vue2.x](https://segmentfault.com/a/1190000014251654)

### webpack4.x

#### plugins

```js
plugins: [
  ...
]
```

chtml-webpack-plugin
打包使用模板生成新的index.html

```js
new HtmlWebpackPlugin({
  template: './public/index.html'
})
```

clean-webpack-plugin
自动删除原构建项目以减小发布包大小

```js
new CleanWebpackPlugin(['dist'])
```

mini-css-extract-plugin
WARNING:  Since webpack v4 the extract-text-webpack-plugin should not be used for css. Use mini-css-extract-plugin instead.

```js
new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: 'css/[name].[hash].css',
  chunkFilename: 'css/[id].css',
})
```

#### module

```js
module:{
  ...
}
```

| language        | loader                                 |
| --------------- | -------------------------------------- |
| js              | babel-loader                           |
| css             | MiniCssExtractPlugin.loader,css-loader |
| png,svg,jpg,gif | file-loader                            |
| vue             | vue-loader                             |
