const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it')

const md = new MarkdownIt()
const blogPath = path.resolve(process.cwd(), 'resources', 'blog')
const picturePath = path.resolve(process.cwd(), 'resources', 'img')

let pages = async ctx => {
  try {
    const data = fs.readFileSync(`${blogPath}/${ctx.params.name}.md`, 'utf-8')
    ctx.response.body = md.render(data)
  } catch (error) {
    ctx.response.body = '<h1>404 NOT FOUND<h1/>'
  }

  // console.log(ctx.params.name)
}

let pageList = async ctx => {
  try {
    const data = fs.readFileSync('resources/list.json', 'utf-8')
    ctx.response.body = data
  } catch (error) {
    ctx.response.body = '<h1>404 NOT FOUND<h1/>'
  }
}

let Img = async ctx => {
  try {
    const data = fs.readFileSync(`${picturePath}/${ctx.params.img}`)
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.response.body = data
  } catch (error) {
    ctx.response.status = 404
    ctx.response.body = '<h1>no such picture<h1/>'
  }
}

module.exports = {
  'GET /static/pagelist': pageList,
  'GET /static/blog/:name': pages,
  'GET /static/picture/:img': Img,
}
