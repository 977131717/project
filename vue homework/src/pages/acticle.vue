<template>
	<div class="acticle">
		<uc-nav></uc-nav>
		<div class="content">
		  <div class="header clear">
			  <p>景点详情</p>
			  <h2><img :src="data.imgpath" alt=""/></h2>
		  </div>
		  <div class="cont">
		    <h3>{{data.name}}</h3>
			<br>
		    <div class="text-box">{{data.introduce}}</div>
		  </div>
		</div>
		<toolbar :data='data' :_id='$route.params._id'></toolbar>
	</div>
</template>

<script>
	import UcNav from '../components/uc-nav/index.vue'
	import toolbar from '../components/toolbar.vue'
	export default {
		name:'acticle',
		props:{},
		data(){
		  return {
			data:{}
		  }
		},
		components:{
			UcNav,toolbar
		},
		mounted(){
			this.$axios({
				url:`/api/detail/${this.$route.params._id}`
			}).then((res)=>{
				this.data=res.data
			})
		},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
	html,body{ overflow-x: hidden; }
	.content{max-width:6.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
	.content .header{ padding:0.1rem 0rem; background: none; height:auto;}
	.header h2{ width: 95%; text-align: center; margin: 0 auto;  height:3.6rem;}
	.header h2 img{widht:100%;height:100%}
	.header p{  text-align: center; font-size:0.5rem;}
	.content .cont{ padding:0 0.38rem; color:#494d4d;}
	.cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem; border-bottom:1px solid #494d4d;}
	.cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; }
	.time p{ float:left;position:relative;}
	.time span{width:0.33rem;height:0.32rem; position:absolute; top:-0.02rem;right:-0.35rem;}
	.time span img{width:100%;height:100%;}
	.cont .text-box{ font-size:0.25rem;}
	.text-box p{ line-height:0.45rem; margin-bottom:0.1rem;}
</style>
