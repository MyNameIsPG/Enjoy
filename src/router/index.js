import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = resolve => require(['@/components/login.vue'], resolve);
const index = resolve => require(['@/components/index.vue'], resolve);
const home = resolve => require(['@/components/home.vue'], resolve);

const fnHelp = resolve => require(['@/components/content/fn-help.vue'], resolve); //帮助文档
const fnHelpAdd = resolve => require(['@/components/content/fn-help-add.vue'], resolve); //新建文档
const fnNotice = resolve => require(['@/components/content/fn-notice.vue'], resolve); //系统通知
const fnNoticeAdd = resolve => require(['@/components/content/fn-notice-add.vue'], resolve); //发布通知
const fnCity = resolve => require(['@/components/content/fn-city.vue'], resolve); //城市服务
const fnAbout = resolve => require(['@/components/content/other/fn-about.vue'], resolve); //关于我们
const fnService = resolve => require(['@/components/content/other/fn-service.vue'], resolve); //服务协议
const fnPolicy = resolve => require(['@/components/content/other/fn-policy.vue'], resolve); //隐私政策
const fnJoin = resolve => require(['@/components/content/other/fn-join.vue'], resolve); //加入我们
const fnContact = resolve => require(['@/components/content/other/fn-contact.vue'], resolve); //联系我们

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
                { path: 'fnHelpAdd', component: fnHelpAdd, meta: { title: '新建文档' } },
                { path: 'fnNotice', component: fnNotice, meta: { title: '系统通知' } },
                { path: 'fnNoticeAdd', component: fnNoticeAdd, meta: { title: '发布通知' } },
                { path: 'fnCity', component: fnCity, meta: { title: '城市服务' } },
                { path: 'fnAbout', component: fnAbout, meta: { title: '关于我们' } },
                { path: 'fnService', component: fnService, meta: { title: '服务协议' } },
                { path: 'fnPolicy', component: fnPolicy, meta: { title: '隐私政策' } },
                { path: 'fnJoin', component: fnJoin, meta: { title: '加入我们' } },
                { path: 'fnContact', component: fnContact, meta: { title: '联系我们' } },
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