/*
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-10
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-12
 */

const Router = require('koa-router')
const router = new Router()
const fs = require('fs')

/**
 * Dashboard 控制中心静态页面路由
 * 配合 koa-static 运行
 */
router.get('/dashboard', async ctx => {
  const html = await fs.readFileSync('./dashboard/dist/index.html')
  console.log(html)
  ctx.response.type = 'text/html'
  ctx.body = html
})

/**
 * 4xx 错误通用 doc 定义
 * @apiDefine Error4xx
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": {
 *           "code": 404,
 *           "msg": ""
 *       }
 *     }
 */

/**
 * 200 错误通用 doc 定义
 * @apiDefine Success200
 * @apiSuccess 200
 * @apiSuccessExample Error-Response:
 *     HTTP/1.1 200 OK
 */

/**
 * @api {GET} /api/admin/module
 * 
 * @apiName 获取模型列表
 * @apiGroup Module
 * @apiDescription 获取模型列表
 * 
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeader {String} appid 应用id
 * 
 * @apiParam {String} module 空
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       [
 *          {id: 1, name: article, des: '文章'}
 *          {id: 2, name: user, des: '用户'}
 *        ]
 *     }
 * @apiUse Error4xx
 */

router.get('api/admin/module', async ctx => {

})

/**
 * @api {POST} /api/admin/module
 * 
 * @apiName 创建模型
 * @apiGroup Module
 * @apiDescription 创建新模型
 * 
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeader {String} appid 应用id
 * 
 * @apiParam {String} name 模型名称
 * @apiParam {String} des 模型备注
 * @apiUse Success200
 * @apiUse Error4xx
 */
router.post('api/admin/module', async ctx => {

})


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