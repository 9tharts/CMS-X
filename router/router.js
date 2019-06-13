/*
 * @description: 其他路由模块整合
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-13
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-13
 */
const moduleRouter = require('./module')
const otherRouter = require('./other')

module.exports = [
  moduleRouter,
  otherRouter
]