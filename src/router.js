import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/home/Home.vue'
import City from './pages/city/City.vue'
import pageA from './pages/home/childHome/a.vue'
import pageB from './pages/home/childHome/b.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {title: '首页',keyword: '兄弟组件、自定义组件',description: '兄弟组件传值，自定义组件'},
        children: [
            {
                path: 'pagea',
                name: 'pagea',
                component: pageA,
                meta: {title: 'pageA'}
            },
            {
                path: 'pageb',
                name: 'pageb',
                component: pageB,
                meta: {title: 'pageB'}
            }
        ]
    },
    {
        path: '/city',
        name: 'City',
        component: City,
        meta: {title: '城市列表'}
    }
]

const router = new VueRouter({
    routes
})

export default router
