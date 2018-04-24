<template>
	<router-view></router-view>
</template>

<script>
import axiosToken from '@/util/axiosToken'
export default {
	created() {
		let selt = this;
		axiosToken.interceptors.response.use((respone) => {
			let source = respone.data;
			if(source.status != 200 ){
				alert()
			}
			return respone
		}, err => {
				Toast(err)
			}
		)
	}
}
</script>