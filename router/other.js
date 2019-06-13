/*
 * @description: 其他路由模块
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-13
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-13
 */

const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const path = require('path')

/**
 * Dashboard 控制中心静态页面路由
 * 配合 koa-static 运行
 */
router.get('/dashboard', async ctx => {
  const filePath = path.resolve(__dirname + '/../dashboard/dist/index.html')
  const html = await fs.readFileSync(filePath)
  console.log(html)
  ctx.response.type = 'text/html'
  ctx.body = html
})

module.exports = router