import VueRoute from 'vue-router'
import Vue from 'vue'

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
    mode: 'history',
    linkActiveClass: 'active'
})

export default router