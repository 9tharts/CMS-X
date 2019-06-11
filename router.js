/*
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-10
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-11
 */
const Router = require('koa-router')
const router = new Router()
const fs = require('fs')

/**
 * 路由结构说明
 * URL 由三层结构组成 域名+模型+id，用 Http 方法来区分操作
 * 路由结构必须使用标准 RESTful 结构
 * @example 
 * GET  读取  http://xx.com/article/1?name 表示查询对应结构(模型)下对应 id 为 1 文章的 name (参数)，其中参数为空时获取全部信息
 * POST 新建  http://xx.com/article?name=hello&content=world 创建新文章(fix me:JOSN 类型提交)
 * PUT  更新  http://xx.com/article/1?name=fun 更新文章结构(模型)下 id 为 1 的文章 name 为 fun
 * DELETE 删除 http://xx.com/article/1 删除对应结构为 article 下 id 为 1 的文章
 */

router.get('/dashboard', async ctx => {
  const html = await fs.readFileSync('./dashboard/dist/index.html')
  console.log(html)
  ctx.response.type = 'text/html'
  ctx.body = html
})

router.all('/api/:module/:id', async ctx => {
  const params = ctx.params
  const method = ctx.method
  const query = ctx.query

  console.log(`${method}, Module: ${params.module}, Id: ${params.id}`)
  console.log(query)
  // console.log(ctx)

  ctx.body = `${method}, Module: ${params.module}, Id: ${params.id}`
})

module.exports = router