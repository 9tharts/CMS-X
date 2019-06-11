/*
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-11
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-11
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// console.log(require('@/module/module.vue'))

const routes = [
  { path: '/module', name: 'module', component: () => import('@/module/module.vue')},
  // { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes
})

export default router