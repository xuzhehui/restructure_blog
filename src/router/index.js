import VueRoute from 'vue-router'
import Vue from 'vue'

const routerPush = VueRoute.prototype.push
VueRoute.prototype.push = function push(location) {//防止重新加载相同的路由时控制台报错
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(VueRoute)

const routes = [
    {
        path:'',
        name:'Home',
        meta:{index:1},
        component: resolve => require(['@/view/home'], resolve),
    },
    {
        path:'/class',
        name:'Class',
        meta:{index:2},
        component: resolve => require(['@/view/classify'], resolve),
    },
    {
        path:'/about',
        name:'About',
        meta:{index:3},
        component: resolve => require(['@/view/about'], resolve),
    },
    {
        path:'/resume',
        name:'Resume',
        meta:{index:4},
        component: resolve => require(['@/view/resume'], resolve),
    }

]


const router = new VueRoute({
    // 配置路由和组件之间的应用关系
    routes,
    mode: 'hash',
    linkActiveClass: 'active'
})

export default router