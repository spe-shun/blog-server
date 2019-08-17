const MarkdownIt = require('markdown-it')

let page = async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>'
}

let pageList = async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>'
}

module.exports = {
  'GET /page': pageList,
  'GET /page/:name': page,
}
