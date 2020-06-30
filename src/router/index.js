import VueRoute from 'vue-router'
import Vue from 'vue'

Vue.use(VueRoute)

const routes = [
    {
        path:'',
        name:'Home',
        component: resolve => require(['@/view/home'], resolve),
    },
    {
        path:'/class',
        name:'Class',
        component: resolve => require(['@/view/classify'], resolve),
    },
    {
        path:'/about',
        name:'About',
        component: resolve => require(['@/view/about'], resolve),
    },
    {
        path:'/resume',
        name:'Resume',
        component: resolve => require(['@/view/resume'], resolve),
    }

]


const router = new VueRoute({
    // 配置路由和组件之间的应用关系
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

export default router