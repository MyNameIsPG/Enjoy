<template>
    <div class="">
        <button @click="getUEContent()">获取内容</button>
        <button @click="getUEContentTxt()">获取无文本内容</button>
        <div class="editor-container">
            <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
        </div>
    </div>
</template>

<script>
import UE from '@/components/common/ue'
export default {
    components: { UE },
    data() {
        return {
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
