/*
 * @description: 状态码及数据返回结构模块
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-13
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-13
 */

module.exports = status = {

  /**
   * 200 Ok
   * 在所有 成功 的 GET 请求中，必须 返回此状态码HTTP 响应实体部分 必须 直接就是数据，不要做多余的包装
   * @param {Context} ctx 请求上下文
   * @param {Any} data 返回数据
   */
  s200(ctx, data) {
    ctx.status = 200
    return data
  },

  /**
   * 201 Created
   * 当服务器创建数据成功时，应该 返回此状态码。常见的应用场景是使用 POST 提交用户信息
   * @param {Context} ctx 请求上下文
   * @param {Any} data 返回数据
   */
  s201(ctx, data) {
    ctx.status = 201
    ctx.body = data ? data : ''
    return ctx
  },

  /**
   * 202 Accepted
   * 该状态码表示服务器已经接受到了来自客户端的请求，但还未开始处理。常用短信发送、邮件通知、模板消息推送等这类很耗时需要队列支持的场景中
   * @param {Context} ctx 
   */
  s202(ctx) {
    ctx.status = 202
    return ctx
  },

  /**
   * 204 No Content
   * 该状态码表示响应实体不包含任何数据，其中：
   * 在使用 DELETE 方法删除资源 成功 时，必须 返回该状态码
   * 使用 PUT、PATCH 方法更新数据 成功 时，也 应该 返回此状态码
   * @param {Context} ctx 
   */
  s204(ctx) {
    ctx.status = 204
    return ctx
  },

  /**
   * 3xx 结构暂时不使用
   **/

  /**
   * 400 Bad Request
   * 由于明显的客户端错误（例如，请求语法格式错误、无效的请求、无效的签名等）
   * 当服务器无法从其他 4xx 类型的状态码中找出合适的来表示错误类型时，都 必须 返回该状态码
   * @param {Context} ctx 
   * @param {Number} error_code 错误代码
   * @param {String} message 错误消息
   */
  s400(ctx, error_code, message) {
    ctx.status = 400
    ctx.body = {
      error_code: error_code ? error_code : '40000',
      message
    }
    return ctx
  },

  /**
   * 401 Unauthorized
   * 该状态码表示当前请求需要身份认证，以下情况都 必须 返回该状态码
   * @param {Context} ctx 
   * @param {Number} error_code 错误代码
   * @param {String} message 错误消息
   */
  s401(ctx, error_code, message) {
    ctx.status = 401
    ctx.body = {
      error_code: error_code ? error_code : '40100',
      message: message ? message : 'Token Signature could not be verified.'
    }
    return ctx
  },

  /**
   * 403 Forbidden
   * 没有权限访问该请求，服务器收到请求但拒绝提供服务
   * 如当普通用户请求操作管理员用户时，必须 返回该状态码。
   * @param {Context} ctx 
   * @param {Number} error_code 错误代码
   * @param {String} message 错误消息
   */
  s403(ctx, error_code, message) {
    ctx.status = 403
    ctx.body = {
      error_code: error_code ? error_code : '40300',
      message: message ? message : 'Forbidden'
    }
    return ctx
  },

  /**
   * 404 Not Found
   * 该状态码表示用户请求的资源不存在，如
   * 获取不存在的用户信息 （get /users/9999999）
   * 访问不存在的端点
   * 都 必须 返回该状态码，若该资源已永久不存在，则 应该 返回 410 响应
   * @param {Context} ctx 
   */
  s404(ctx) {
    ctx.status = 404
    return ctx
  },

  /**
   * 405 Method Not Allowed
   * 由路由控制，理论上无需手动返回
   * @param {Context} ctx 
   */
  s405(ctx) {
    ctx.status = 405
    return ctx
  },

  /**
   * 500 Internal Server Error
   * 该状态码 必须 在服务器出错时抛出，对于所有的 500 错误，都 应该 提供完整的错误信息支持，也方便跟踪调试。
   * @param {Context} ctx 
   */
  s500(ctx, message) {
    console.error(message)

    ctx.status = 500
    return ctx
  },

  /**
   * 503 Service Unavailable该状态码表示服务器暂时处理不可用状态，当服务器需要维护或第三方 API 请求超时/不可达时
   * 都 应该 返回该状态码，其中若是主动关闭 API 服务，应该 在返回的响应首部加上 Retry-After 头部，表示多少秒后可以再次访问
   * @param {Context} ctx 
   */
  s503(ctx, error_code, message) {
    console.error(message)
    ctx.status = 503
    ctx.body = {
      error_code: error_code ? error_code : '50300',
      message: message ? message : '维护中'
    }
    return ctx
  },

}