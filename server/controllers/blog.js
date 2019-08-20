const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it')

const md = new MarkdownIt()
const blogPath = path.resolve(process.cwd(), 'resources', 'blog')

let pages = async (ctx, next) => {
  try {
    const data = fs.readFileSync(`${blogPath}/${ctx.params.name}.md`, 'utf-8')
    ctx.response.body = md.render(data)

  } catch (error) {
    ctx.response.body = '<h1>404 NOT FOUND<h1/>'    
  }
  
  // console.log(ctx.params.name)
}

let pageList = async (ctx, next) => {
  try {
    const data = fs.readFileSync('resources/list.json', 'utf-8')
    ctx.response.body = data

  } catch (error) {
    ctx.response.body = '<h1>404 NOT FOUND<h1/>'    
  }
}

module.exports = {
  'GET /resources/pagelist': pageList,
  'GET /resources/blog/:name': pages,
}
