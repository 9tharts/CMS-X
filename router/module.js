/*
 * @description: 模型路由模块
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-13
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-13
 */
const Router = require('koa-router')
const status = require('./status')
const router = new Router()

/**
 * 获取所有模型列表
 */
router.get('/module', async ctx => {
  // console.log(ctx)
  console.log(ctx.request.body)
  ctx.body = status.s200([{ name: 'hello', des: 'world' }])
})

/**
 * 创建新的模型
 */
router.post('/module', async ctx => {
  const data = {
    name: 'hello',
    des: 'world'
  }
  ctx = status.s201(ctx, data)
})

/**
 * 通过 id 获取指定模型信息
 */
router.get('/module/:moduleId', async ctx => {
  // console.log(ctx)
  status.s200(ctx, {
    id: 1,
    name: 'hello',
    des: 'hello'
  })
})

/**
 * 更新全部模型信息
 */
router.put('/module/:moduleId', ctx => {
  console.log(ctx)
})

/**
 * 部分更新模型信息
 */
router.patch('/module/moduleId', ctx => {
  console.log(ctx)
})

/**
 * 删除模型
 */
router.delete('/module', async ctx => {
  console.log(ctx)
})

module.exports = router