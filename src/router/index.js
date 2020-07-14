import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Login from '../views/login/Login'
import About from '../views/about/About'
import Register from '../views/register/Register'
import My from '../views/my/My'
import Note from '../views/note/Note'
import Essay from '../views/essay/Essay'
import Html from '../views/note/children/Html'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: "我的个人中心"
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: "我的个人中心"
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: "登录"
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: "关于"
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            title: "注册"
        }
    },
    {
        path: '/my',
        component: My,
        meta: {
            title: "个人中心"
        }
    },
    {
        path: '/note',
        component: Note,
        meta: {
            title: "笔记"
        }
    },
    {
        path: '/essay',
        component: Essay,
        meta: {
            title: "我的随记"
        }
    },
    {
        path: '/html',
        component: Html,
        meta: {
            title: "Html"
        }
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    next()
})

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router