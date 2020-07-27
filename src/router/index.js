import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/home/Home')

const Login = () =>
    import ('../views/login/Login')

const About = () =>
    import ('../views/about/About')

const Register = () =>
    import ('../views/register/Register')

const My = () =>
    import ('../views/my/My')

const Note = () =>
    import ('../views/note/Note')

const Essay = () =>
    import ('../views/essay/Essay')

const Html = () =>
    import ('../views/note/children/Html')

const Java = () =>
    import ('../views/note/children/Java')

const css = () =>
    import ('../views/note/children/css')

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
            title: "首页"
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
    },
    {
        path: '/java',
        component: Java,
        meta: {
            title: "java"
        }
    },
    {
        path: '/css',
        component: css,
        meta: {
            title: "css"
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