/*
 * @Author: seven.zhang 
 * @Date: 2018-05-16 10:55:41 
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2018-05-16 13:53:18
 */
'use strict';
import Vue from 'vue'
import App from './App'
import VvUI from 'vvui' // 引入组件库
import '../node_modules/VVUI/packages/theme-default/lib/index.css' // 引入样式库

Vue.config.productionTip = false
Vue.use(VvUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
