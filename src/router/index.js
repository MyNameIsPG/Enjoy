import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = resolve => require(['@/components/login.vue'], resolve);
const index = resolve => require(['@/components/index.vue'], resolve);
const home = resolve => require(['@/components/home.vue'], resolve);

const fnHelp = resolve => require(['@/components/content/fn-help.vue'], resolve);
const fnNotice = resolve => require(['@/components/content/fn-notice.vue'], resolve);
const fnCity = resolve => require(['@/components/content/fn-city.vue'], resolve);

const router = new Router({
    routes: [
        { path: '/', name: 'login', component: login, meta: { title: '登陆' } },
        { path: '/login', name: 'login', component: login, meta: { title: '登陆' } },
        {
            path: '/index',
            name: 'index',
            component: index,
            meta: { title: '首页' },
            children: [
                { path: 'home', component: home, meta: { title: '首页' } },
                { path: 'fnHelp', component: fnHelp, meta: { title: '帮助文档' } },
                { path: 'fnNotice', component: fnNotice, meta: { title: '系统通知' } },
                { path: 'fnCity', component: fnCity, meta: { title: '城市服务' } },
                { path: '/index', redirect: 'home', meta: { title: '首页' } }
            ]
        },
    ]
})
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
        $("#mainTitle").text(to.meta.title)
    }
    window.scrollTo(0, 0);
    next()
})

export default router