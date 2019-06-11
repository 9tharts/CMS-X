/*
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-11
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-11
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
