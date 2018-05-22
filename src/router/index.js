/*
 * @Author: seven.zhang 
 * @Date: 2018-05-17 11:01:12 
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2018-05-22 16:06:33
 */
import Vue from 'vue'
import Router from 'vue-router'
import seven from '../components/seven'
import Home from '../components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/seven',
            name: 'seven',
            component: seven
        }
    ],
    // scrollBehavior (to, from, savedPosition) {
    //     // return 期望滚动到哪个的位置
    //     return{x:0,y:0}
    // }
})