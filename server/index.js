const Koa = require('koa')
const app = new Koa()

//中间件
const serve = require('koa-static')
const cors = require('@koa/cors')

const port = 3366
const router = require('./router')

router(app)

app.use(cors({ credentials: true }))
app.use(serve(__dirname))
app.use(async (ctx,next)=>{
  await next()
  ctx.response.type = 'text/html';
  // 设置response的内容:
  ctx.response.body = '<h1>404 not found!</h1>';
})

app.listen(port, () => {
  console.log(`✅The server is running at http://localhost:${port}/`)
})
