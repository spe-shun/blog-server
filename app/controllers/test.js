let base = async ctx => {
  ctx.response.status = 200
  ctx.response.body = '<h1>Node root dir</h1>'
  // await next()
}

let fallback = async ctx => {
  var name = ctx.params.name
  ctx.response.body = `<h1>Hello, ${name}!</h1>`
}

module.exports = {
  'GET /': base,
  'GET /hello/:name': fallback,
}
