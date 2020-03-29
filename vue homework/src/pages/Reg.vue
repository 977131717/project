<template>
	<div class="content">
	  <uc-nav arrow='gray' bgColor="#f2f4f5" :borderWidth="0"/>
	  <h1 id="h1" @click="upload"></h1>
	  <input type="file" id="file" style="display: none;">
	  <div class="login-box">
	    <p class="lsolid"></p>
	    <div class="login">
	       <router-link to="/login">登录 </router-link>
	      <span></span>
	      <router-link to="/reg"> 注册</router-link>
	    </div>
	    <p class="rsolid"></p>
	  </div>
	  <div class="inputbox">
		  <Input label='账号' v-model="username"></Input>
		  <Input label='密码' type='password' v-model="password"></Input>
		   <Input label='昵称' type='text' v-model="nikename"></Input>
	  </div>
	  <div class="footbox">
	    <Button value='注 册' @click='zhuce' />
	    <a href="javascript:;" class="tishi">忘记密码？</a>
		<span>{{errorMess}}</span>
	  </div>
	</div>
</template>

<script>
	import Button from '../components/Button.vue'
	import Input from '../components/Input.vue'
	import UcNav from '../components/uc-nav/index.vue'
	export default {
		name:'Reg',
		props:{},
		data(){
		  return {
			username:'',
			password:'',
			nikename:'',
			errorMess:''
		  }
		},
		components:{
			Button,Input,UcNav
		},
		mounted(){},
		updated(){},
		methods:{
			zhuce(){
				let fromData = new FormData();// js类型
				fromData.append('username',this.username)
				fromData.append('password',this.password)
				fromData.append('nikename',this.nikename)
				let file = document.getElementById('file');
				fromData.append('icon',file.files[0])
				this.$axios({
				  url:'/api/reg',
				  method:'post',
				  data:fromData
				}).then(
				  res => {
				    if(res.data.err===0){
				      this.$router.replace('/login')
				    }else{
				      this.errorMess=res.data.msg
				    }
				  }
				)
			},
			upload(){
			  let file = document.getElementById('file');
			  file.click()
			},
		}
	}
</script>

<style scoped>
	body{ background:#f2f4f5;}
	. content{max-width:6.4rem; margin:0 auto;}
	.content h1{width:2.18rem;height:1.35rem; background:url(../assets/img/my_cz.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
	.content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
	.login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
	.login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
	.content .login-box{ position:relative;}
	.content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
	.content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
	.inputbox{width:5.78rem;border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
	.content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
	.content .login-btn{width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
	.content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>
