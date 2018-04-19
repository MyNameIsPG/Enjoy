<template>
	<div class="__login">
		<upload :id=uploadId1></upload>
		<br>
		<upload :id=uploadId2 :multiple=multiple2></upload>
		<br>
		<upload :id=uploadId3></upload>

		<button>asdsa</button>
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
			uploadId1: 'test1',
			uploadId2: 'test2',
			multiple2: 'multiple',
			uploadId3: 'test3',
		}
	},
	
}
</script>

<style lang="stylus">
.__login {}
</style>