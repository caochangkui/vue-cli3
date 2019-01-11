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
        component: Home,
        children: [
            {
                path: 'pagea',
                component: pageA
            },
            {
                path: 'pageb',
                component: pageB
            }
        ]
    },
    {
        path: '/city',
        component: City
    }
]

const router = new VueRouter({
    routes
})

export default router
