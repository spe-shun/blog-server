# Babel 将 js 变量名转换为驼峰命名风格

`npm i -D @babel/core @babel/cli babel-plugin-camelcase-identifier`

```json
// .babelrc 文件
{
  "presets": [],
  "plugins": ["camelcase-identifier"]
}
```
`babel .\t.js --out-file t1.js`
注意：

```js
Math
// 变成
math

encodeURI
// 变成
encodeUri

new RegExp
// 变成
new regExp

innerHTML
innerHtml

HTMLCollection
htmlCollection
```

诸如此类，某些 JavaScript 内置的方法并不符合驼峰命名规则，这个插件也会转换…
