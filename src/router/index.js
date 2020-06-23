import VueRoute from 'vue-router'
import Vue from 'vue'

Vue.use(VueRoute)

const routes = [
    {
        path:'',
        
    }

]


const router = new VueRoute({
    // 配置路由和组件之间的应用关系
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

export default router