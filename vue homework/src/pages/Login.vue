<template>
	<div class="content">
	  <uc-nav arrow='gray' bgColor="#f2f4f5" :borderWidth="0"/>
	  <h1></h1>
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
	  </div>
	  <div class="footbox">
		<Button value='登 录' @click="denglu" />
	    <a href="javascript:;" class="tishi">忘记密码？</a>
	  </div>
	</div>
</template>

<script>
	import Button from '../components/Button.vue'
	import Input from '../components/Input.vue'
	import UcNav from '../components/uc-nav/index.vue'
	export default {
		name:'Login',
		props:{},
		data(){
		  return {
			username:'',
			password:''
		  }
		},
		components:{
			Button,Input,UcNav
		},
		mounted(){},
		updated(){},
		methods:{
			denglu(){
				console.log(this);
				console.log('登录');
				this.$axios({
				  url:'/api/login',
				  method:'post',
				  data:{
					  username:this.username,
					  password:this.password,
				  }
				}).then(
				  res => {
					  if(res.data.err===0){
						 this.$cookie.setCookie('username',this.username)
						 this.$cookie.setCookie('token',res.data.token)
						 if(this.$route.query.p){
						   this.$router.replace(this.$route.query.p)
						 }else{
						   this.$router.replace('/user')
						 }
					  }
				  }
				)
			}
		}
	}
</script>

<style scoped>
	body{ background:#f2f4f5;}
	.content{max-width:6.4rem; margin:0 auto;}
	.content h1{width:2.18rem;height:1.35rem; background:url(../assets/img/say.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
	.content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
	.login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
	.login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
	.content .login-box{ position:relative;}
	.content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
	.content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
	.content div.inputbox{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
	.content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
	.content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>
