import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Login from '../views/login/Login'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        component: Login
    }
]

const router = new VueRouter({
    routes
})

export default router