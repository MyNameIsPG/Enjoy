<template>
	<div class="__login">
		<form>
			<input type="text" v-model="username" >
			<input type="password" v-model="password">
			<input type="email" v-model="email">
			<button @click="btn" type="button">注册</button>
		</form>

		<form>
			<input type="text" v-model="username1" >
			<input type="password" v-model="password1">
			<button @click="btn1" type="button">登录</button>
		</form>

		<form>
			<input type="text" v-model="title" >
			<input type="text" v-model="contern">
			<button @click="btn2" type="button">发布</button>
		</form>
	</div>
</template>

<script>
import { login2, denglu, help, helpList, helpListlist } from "api/login/index";

export default {
	data(){
		return {
			username: '',
			password: '',
			email: '',
			username1: '',
			password1: '',
			title: '',
			contern: ''
		}
	},
	mounted(){
		this.postHelpList();
		this.postHelpListlist();
	},
	methods: {
		btn(){
			let params = {
				username: this.username,
				password: this.password,
				email: this.email
			};
			login2(params).then(response => {
				debugger
			})
		},
		btn1(){
			let params = {
				username1: this.username1,
				password1: this.password1,
			};
			denglu(params).then(data => {
				if(data.code){
					this.errorCode(data.code);
				}else{
					alert(12)
				}
			})
		},
		btn2(){
			let params = {
				title: this.title,
				contern: this.contern,
			};
			help(params).then(response => {
				debugger
			})
		},
		postHelpList(){
			let params = {
				uuid: '5add9d4f9f545471fec65361',
			};
			helpList(params).then(response => {
				debugger
			})
		},
		postHelpListlist(){
			let params = {
				pageSize: 10,
				pageNub: 0,
				status: '1'
			};
			helpListlist(params).then(response => {
				console.log('diaoyong')
			})
		}
	},
}
</script>

<style lang="stylus">
.__login {}
</style>