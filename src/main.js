/*
 * @Author: seven.zhang 
 * @Date: 2018-05-16 10:55:41 
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2018-06-01 16:20:47
 */
'use strict';
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
