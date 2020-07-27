import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconFont/iconfont.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import LetItSnow from 'vue-let-it-snow'

Vue.config.productionTip = false
Vue.use(element)
Vue.use(mavonEditor)
Vue.use(LetItSnow)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')