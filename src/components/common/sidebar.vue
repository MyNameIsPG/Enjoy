<template>
    <div class="sidebar">
        <ul v-for="(item,index) in data.data" :key="index">
            <li>
                <h2 v-if="item.childItem" lang="1"><img :src="item.parentItem.imgBg" alt="">{{item.parentItem.name}}</h2>
                <h2 v-else lang="2"><a href=""><router-link :to="{path:item.parentItem.url}"><img :src="item.parentItem.imgBg" alt="">{{item.parentItem.name}}</router-link></a></h2>
                <ul>
                    <li  v-for = "(i,k) in item.childItem" :key="k">
                        <router-link :to="{path:i.url}">{{i.name}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                data: [
                    {
                        "parentItem": { "name": "首页", "url": "home", "imgBg": "/static/sidebar/zht/icon1.png" }
                    },
                    {
                        "childItem" : [
                            { "name": "帮助文档", "url": "fnHelp" },
                            { "name": "系统通知", "url": "fnNotice" },
                            { "name": "城市服务", "url": "fnCity" },
                            { "name": "关于我们", "url": "fnAbout" },
                            { "name": "服务协议", "url": "fnService" },
                            { "name": "隐私政策", "url": "fnPolicy" },
                            { "name": "加入我们", "url": "fnJoin" },
                            { "name": "联系我们", "url": "fnContact" }
                        ],
                        "parentItem": { "name": "内容管理", "imgBg": "/static/sidebar/zht/icon2.png" }
                    },
                    {
                        "childItem" : [
                            { "name": "机构管理", "url": "/yx/fn-article" },
                            { "name": "个人用户", "url": "/yx/fn-carousel" }
                        ],
                        "parentItem": { "name": "用户管理", "imgBg": "/static/sidebar/zht/icon3.png" }
                    },
                    {
                        "childItem" : [
                            { "name": "公众号", "url": "/yx/fn-article" },
                            { "name": "小程序", "url": "/yx/fn-carousel" }
                        ],
                        "parentItem": { "name": "终端管理", "imgBg": "/static/sidebar/zht/icon4.png" }
                    },
                    {
                        "childItem" : [
                            { "name": "用户分析", "url": "/yx/fn-article" }
                        ],
                        "parentItem": { "name": "数据统计", "imgBg": "/static/sidebar/zht/icon5.png" }
                    },
                    {
                        "childItem" : [
                            { "name": "账号管理", "url": "/yx/fn-article" },
                            { "name": "运营者", "url": "/yx/fn-carousel" },
                            { "name": "系统权限", "url": "/yx/fn-channel" },
                            { "name": "版本控制", "url": "/yx/fn-channel" }
                        ],
                        "parentItem": { "name": "系统设置", "imgBg": "/static/sidebar/zht/icon6.png" }
                    },
                ]
            }
        }
    },
    created() {
        
    },
    methods: {

    }
}
</script>

<style>

</style>
