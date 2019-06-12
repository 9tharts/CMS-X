/*
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-12
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-13
 */
const model = {

  /**
   * 
   * @param {String} moduleName 
   * @param {*} string 
   */
  async find(moduleName, string) {
    // 开始查表
    await setTimeout(() => {
      return 'hello'
    }, 1000)

  },

  insert(moduleName, obj) {

  }
}

module.exports = model