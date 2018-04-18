<template>
    <div class="__index">
        <div class="headerBox">
            <div class="header">
                123
            </div>
        </div>
        <div class="contern">
            <sidebar></sidebar>
            <div class="main">
                <div class="crumbsNav">
                    <div class="pull-right">
                        <a href="javascript:void(0);">公众号设置</a>
                        <a href="javascript:void(0);">小程序设置</a>
                    </div>
                    <h2 id="mainTitle">{{$route.meta.title}}</h2>
                </div>
                <div class="mainContern">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="footer">
            <ul>
                <li><a href="javascript:void(0);">关于我们</a></li>
                <li><a href="javascript:void(0);">服务协议</a></li>
                <li><a href="javascript:void(0);">隐私政策</a></li>
                <li><a href="javascript:void(0);">加入我们</a></li>
                <li><a href="javascript:void(0);">联系我们</a></li>
            </ul>
            <p>Copyright © 2012-2018 linjia.com All Rights Reserved.</p>
        </div>
    </div>
</template>

<script>
$(document).ready(function(){
    $(".sidebar h2").click(function(){
        var lang = $(this).attr("lang");
        if(lang==1){
            $(this).next("ul").toggle(500);
        }
    })
});
import sidebar from '@/components/common/sidebar'
export default {
    components: {
        sidebar
    }
}
</script>

<style lang="stylus">
html, body {
    background $f6f8f9
}
.__index {
    background $f6f8f9
    .header, .contern, .footer {
        width 1300px
        margin $marginAuto
    }
    .headerBox {
        height 100px
        background $ffffff
        .header {
            height 100%
            position relative
        }
    }
    .contern {
        overflow hidden
        min-height 900px
        margin 50px auto 100px
        .sidebar {
            width 300px
            height 100%
            float left
            padding-bottom 10000px
            margin-bottom -10000px
        }
        .main {
            width 1000px
            float left
            padding-bottom 10000px
            margin-bottom -10000px
            .crumbsNav {
                height 100px
                line-height 100px
                h2 {
                    color #333333
                    font-size 24px
                    display inline-block
                }
            }
            .mainContern {
                height 100%
            }
        }
    }
    .footer {
        padding-left 300px
        ul {
            overflow hidden
            border-bottom 1px solid #eeeeee
            li {
                float left
                margin-right 50px
                height 50px
                line-height 50px
                a {
                    color $999999
                    font-size $font-size14
                }
            }
        }
        p {
            height 50px
            line-height 50px
            color $999999
            font-size $font-size14
        }
    }
}
</style>
