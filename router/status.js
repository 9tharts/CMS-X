/*
 * @description: 状态码及数据返回结构模块
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-13
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-13
 */

module.exports = status = {

  s200(data) {
    let obj = {}
    obj.code = 200
    obj.data = data
    obj.msg = 'Ok'
    return obj
  },

  s404() {
    let obj = {}
    obj.code = 404
    obj.err = 'Not found'
    return obj
  }

}