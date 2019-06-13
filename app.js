/*
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-10
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-14
 */

const logger = require('koa-logger')
const Koa = require('koa')
const Router = require('koa-router');
const routerList = require('./router/router')
const config = require('./config/config')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const app = new Koa()
const router = new Router()

// 跨域支持
app.use(cors())

// bodyParser 中间件支持
app.use(bodyParser())

// logger 中间件
app.use(logger((str, args) => {
  console.log(`Logger: ${str}`)
}))

// dashboard 静态访问支持
app.use(static(__dirname + '/dashboard/dist'));

routerList.forEach(item => {
  router.use('/api', item.routes())
});

app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || config.port

app.listen(port, () => {
  console.log(`server started on ${port}`)
})