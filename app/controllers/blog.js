const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it')

let rootDir = path.resolve(__dirname, '..')
// if (process.env.NODE_ENV === 'production') {
//   rootDir = `${process.cwd()}/resources`
// } else {
//   rootDir = '/usr/share/nginx/blog-server/resources'
// }

const md = new MarkdownIt()

let pages = async ctx => {
  try {
    // console.log(rootDir + '/blog/' + ctx.params.name + '.md')
    const data = fs.readFileSync(rootDir + '/blog/' + ctx.params.name + '.md', 'utf-8')
    ctx.response.body = md.render(data)
  } catch (error) {
    ctx.response.body = '<h1>404 NOT FOUND<h1/>'
  }

  // console.log(ctx.params.name)
}

let pageList = async ctx => {
  try {
    const data = fs.readFileSync(`${rootDir}/lists.json`, 'utf-8')
    ctx.response.body = data
  } catch (error) {
    ctx.response.body = '<h1>404 NOT FOUND<h1/>'
  }
}

let Img = async ctx => {
  try {
    // console.log(rootDir + '/img/' + ctx.params.img)
    const data = fs.readFileSync(rootDir + '/img/' + ctx.params.img)
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
