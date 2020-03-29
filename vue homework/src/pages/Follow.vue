<template>
	<div class="Follow">
		<div v-show='false'>{{userid}}</div>
		<div v-show='guan' class='guan'>暂无关注</div>
		<Cell
		v-for='(val,index) in list'
		:key='val._id'
		:data='val'
		:index='index'
		 api-name="follow"
		/>
	</div>
</template>

<script>
	import Cell from '../components/Cell.vue'
	export default {
		beforeRouteEnter (to, from, next) {
			axios({
			  url:'/api/verifytooken',
			  params:{
				 token:cookie.getCookie('token'),
			  }
			}).then((res)=>{
				if(res.data.err===0){
					next(_this=>{
						_this.userid=res.data.result._id
					})
				}else{
					next({path:'/login',params:{},query:{p:to.path}})
				}
			})
		},
		name:'Follow',
		props:{},
		data(){
		  return {
			list:[],
			userid:'',
			guan:false,
		  }
		},
		components:{
			Cell
		},
		mounted(){
			axios({
			  url:'/api/follow',
			  params:{
				 username:cookie.getCookie('username'),
			  }
			}).then((res)=>{
				if(res.data.err==0){
					this.list=res.data.data
				}else{
					console.log('查无数据');
					this.guan=true
				}
			})
		},
		updated(){},
		methods:{}
	}
</script>

<style>
	.Follow{
	  margin-top: .6rem;
	  margin-left: 0.4rem;
	  margin-right: 0.4rem;
	}
	.guan{
		text-align: center;
		font-size: 1rem;
	}
</style>
