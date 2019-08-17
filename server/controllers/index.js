let base = async (ctx, next) => {
  ctx.response.status = 200
  ctx.response.body = '<h1>Index</h1>'
  // await next()
}

let fallback = async (ctx, next) => {
  var name = ctx.params.name
  ctx.response.body = `<h1>Hello, ${name}!</h1>`
}

module.exports = {
  'GET /': base,
  'GET /hello/:name': fallback,
}
