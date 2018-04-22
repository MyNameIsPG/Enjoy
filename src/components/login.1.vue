<template>
	<div class="__login">
		<upload :upload=upload1></upload>
		<br>
		<upload :upload=upload2></upload>
		<br>
		<upload :upload=upload3></upload>

		<el-select v-model="value" placeholder="请选择">
			<el-option
			v-for="item in options"
			:key="item.value"
			:label="item.label"
			:value="item.value">
			</el-option>
		</el-select>
	</div>
</template>

<script>
import upload from '@/components/common/upload'
export default {
	components: {
		upload
	},
	data(){
		return {
			upload1: {"id":"test1","multiple":""},
			upload2: {"id":"test2","multiple":"multiple","leng":"9"},
			upload3: {"id":"test3","multiple":"multiple","leng":""},
			options: [
				{ value: '选项1', label: '黄金糕' },
				{ value: '选项2', label: '双皮奶' },
				{ value: '选项3', label: '蚵仔煎' },
				{ value: '选项4', label: '龙须面' },
				{ value: '选项5', label: '北京烤鸭' }
			],
			value: '选项1'
		}
	}
}
</script>

<style lang="stylus">
.__login {}
</style>