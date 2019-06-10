/*
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-10
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-10
 */

const Koa = require('koa')
const Router = require('koa-router')
const config = require('./config/config')

/**
 *  Init koa and router
 */
const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
  ctx.body = 'Hello'
})

app.use(router.routes()).use(router.allowedMethods())
const port = process.env.PORT || config.port

app.listen(port, () => {
  console.log(`server started on ${port}`)
})