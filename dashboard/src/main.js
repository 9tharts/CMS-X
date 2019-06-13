/*
 * @description: 
 * @Author: lucas@9thArts.com
 * @Date: 2019-06-11
 * @LastEditors: lucas@9thArts.com
 * @LastEditTime: 2019-06-14
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router'
import router from './router'
import axios from 'axios'
import config from '../config'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Router)

Vue.prototype.$axios = axios
Vue.prototype.$axios.defaults.baseURL = config.baseUrl
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'
axios.defaults.headers.post['Content-Type'] = 'application/json';


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
