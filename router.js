/*
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-10
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-13
 */

const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const model = require('./model')

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
  const result = await model.find('name', '')
  ctx.body = result
})

router.get('api/admin/module/:moduleName', ctx => {

})

/**
 * 
 * 
 * 模型操作
 * 
 * 
 * GET /module 获取所有模型列表 [{id: 1, name: 'module1', des: 'description'}]
 * POST /module 创建一个模型 {name: '', des: ''}
 * 
 * GET /module/:moduleName|:moduleId 通过模型name获取模型结构
 * 
 * PUT /module/:moduleId|:moduleName 更新模型全部信息 {id: 1, name: 'module1', des: 'description'} 
 * PATCH /module/:moduleId|moduleName 更新模型部分信息 {id: 1, des: 'description'}
 * 
 * DELETE /module/:moduleId:moduleName?id|name='' 删除模型
 * 
 * 
 * 模型列操作
 * 
 * GET  /module/:moduleName/column 获取列信息结构
 * GET  /module/:moduleName/column?filed=type 获取列信息结构
 * POST /module/:moduleName/column {type: 'string', name: '', des: '', defaultValue: ''} 创建列
 * PUT  /module/:moduleName/column {type: 'string', name: '', des: '', defaultValue: ''} 全部更新列结构
 * PATCH /module/:moduleName/column {type: 'text'} 部分更新列结构
 * DELETE /module/:moduleName/column?filed=field1,filed2  删除列中的指定结构
 * 
 * 
 * 数据操作、行操作
 * GET /module/:moduleName/row 获取所有行
 * GET /module/:moduleName/row?where={} 条件查询行
 * POST  /module/:moduleName/row {} 新建行
 * PUT /module/:moduleName/row {} 更新行全部内容
 * PATCH /module/:moduleName/row {} 部分更新行内容
 * DELETE /module/:moduleName/row?ids=1,2,3
 * 
 * 
 * /apiv1/module/:moduleName/row?ids=1  -> 3000
 * /apiv2/module/:moduleName/row?ids=1  -> 3001
 * 
 */

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