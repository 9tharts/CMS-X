/*
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-14
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-14
 */

const axios = require('axios')
const config = require('../config')

// console.log(axios)

// console.log(config)
export default {
  getModuleList() {
    axios.get('/')
  }
}