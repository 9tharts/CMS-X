/*
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-10
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-10
 */

const logger = require('koa-logger')
const Koa = require('koa')
const router = require('./router')
const config = require('./config/config')

const app = new Koa()

app.use(logger((str, args) => {
  console.log(`Logger: ${str}`)
}))

app.use(router.routes()).use(router.allowedMethods())
const port = process.env.PORT || config.port

app.listen(port, () => {
  console.log(`server started on ${port}`)
})