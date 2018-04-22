<template>
    <div class="form-inline">
        <div class="form-group">
            <input type="text" name="" v-model="title" class="form-control" placeholder="请输入标题" >
            <span class="tipNum">0/64</span>
        </div>
        <div class="form-group">
            <div class="editor-container">
                <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
            </div>
        </div>
        <div class="btnBox">
            <button class="addBtn pull-right" type="button">保存</button>
        </div>
        <!-- <button @click="getUEContent()">获取内容</button>
        <button @click="getUEContentTxt()">获取无文本内容</button> -->
    </div>
</template>

<script>
import UE from '@/components/common/ue'
export default {
    components: { UE },
    data() {
        return {
            title: '',
            defaultMsg: '',
            config: {
                initialFrameWidth: null,
                initialFrameHeight: 350
            },
            ue1: "ue1", // 不同编辑器必须不同的id
        }
    },
    methods: {
        getUEContent() {
            let content = this.$refs.ue.getUEContent(); // 调用子组件方法
            this.$notify({
                title: '获取成功，可在控制台查看！',
                message: content,
                type: 'success'
            });
        },
        getUEContentTxt() {
            let content = this.$refs.ue.getUEContentTxt(); // 调用子组件方法
            this.$notify({
                title: '获取成功，可在控制台查看！',
                message: content,
                type: 'success'
            });
        }
    }
}
</script>

<style>

</style>
