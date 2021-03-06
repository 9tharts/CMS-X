/*
 * @description: 模型路由模块
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-13
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-15
 */
const Router = require('koa-router')
const status = require('./status')
const moduleModel = require('../model/module')

const router = new Router()

/**
 * 获取所有模型列表
 */
router.get('/module', async ctx => {
  const res = await moduleModel.queryModel(1)
  ctx.body = status.s200(res)
})

/**
 * 创建新的模型
 */
router.post('/module', async ctx => {
  // fix me 数据校验
  const res = await moduleModel.createModel(1, ctx.request.body.name, ctx.request.body.comment)
  ctx = status.s201(ctx, res)
})

/**
 * 通过 id 获取指定模型信息
 */
router.get('/module/:moduleName', async ctx => {
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
router.put('/module/:moduleName', async ctx => {
  // console.log(ctx.request.body)
  // 开始校验参数
  if (ctx.request.body.subName == '' || ctx.request.body.comment == '' || typeof ctx.request.body.subName == 'undefined' || typeof ctx.request.body.comment == 'undefined') {
    status.s400(ctx, '', '参数错误')
    return
  }
  try {
    status.s204(ctx)
    const res = await moduleModel.alterModel(1, ctx.params.moduleName, ctx.request.body.subName, ctx.request.body.comment)
  } catch (error) {
    console.log(error)
  }
})

/**
 * 部分更新模型信息
 */
router.patch('/module/:moduleName', ctx => {
  console.log(ctx)
})

/**
 * 删除模型
 */
router.delete('/module/:moduleName', async ctx => {
  try {
    await moduleModel.removeModel(1, ctx.params.moduleName)
    status.s204(ctx)
  } catch (error) {

  }
})

module.exports = router