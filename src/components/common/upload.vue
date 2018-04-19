<template>
    <div>
        <div class="__doubleFile" v-if="multiple=='multiple'">
            <ul class="__list">
                <li @click="delectUrl(index)" v-for="(item,index) in dataListdouble" :key="index"><img :src="item.url" alt="">
                    <span>删除</span>
                </li>
            </ul>
            <div class="__uoloadFile120">
                <input type="file" :id=id :multiple=multiple @change="thisFile(id)">
                <img src="/static/upload/upload-120-120.png" alt="">
            </div>
            <div class="__info">圈子头像，建议尺寸：120像素*120像素，大小不超过500K</div>
        </div>

        <div class="__singleFile" v-else>
            <div class="__uoloadFile120">
                <input type="file" :id=id :multiple=multiple @change="thisFile(id)">
                <img :src="dataListsingle" alt="">
            </div>
            <p>圈11子头像，建议尺寸：120像素*120像素，大小不超过500K</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: { type: String },
        multiple: { type: String }
    },
    data() {
        return {
            dataListsingle: "/static/upload/upload-120-120.png",
            dataListdouble: []
        }
    },
    methods: {
        thisFile(id) {
            var file = document.getElementById(id);
            if (file.multiple == false) {
                var obj = this.getObjectURL(file.files[0]);
                this.dataListsingle = obj
            } else {
                var arr = [];
                if (file.files.length > 0) {
                    for (var i = 0; i < file.files.length; i++) {
                        this.dataListdouble.push({ "url": "" + this.getObjectURL(file.files[i]) + "" })
                    }
                }
            }
        },
        delectUrl(index){
            this.dataListdouble.splice(index,1);
        },
        getObjectURL(file) {
            var url = null;
            if (window.createObjectURL != undefined) {
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        }
    },
}
</script>

<style lang="stylus">
.__doubleFile {
    overflow hidden
    .__list {
        float left
        overflow hidden
        li {
            width 120px
            height 120px
            float left
            margin-right 10px
            position relative
            img {
                width 120px
                height 120px
                border-radius 50%
            }
            span {
                position absolute
                top 0px
                left 0px
                width 100%
                height 100%
                text-align center
                line-height 120px
                background rgba(0,0,0,0.3)
                border-radius 50%
                display none
                cursor pointer
            }
        }
        li:hover span {
            display block
        }
    }
    .__uoloadFile120 {
        float left    
    }
    .__info {
        float left
        margin-top 100px
        color #333333
        font-size 14px
    }
}

.__uoloadFile120 {
    overflow hidden
    position relative
    width 120px
    height 120px
    input {
        position absolute
        z-index 2
        top 0px
        left 0px
        width 120px
        height 120px
        opacity 0
    }
    img {
        width 120px
        height 120px
        border-radius 50%
    }
}
</style>
