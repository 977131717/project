<template>
	<div id="Home">
		<banner :data='bannlist'/>
		<div class="Home__cellbox">
			<Cell
			v-for='(val,index) in list'
			:key='val._id'
			:data='val'
			:index='index'
			 api-name="column"
			/>
		</div>
	</div>
</template>

<script>
	import banner from '../components/banner.vue'
	import Cell from '../components/Cell.vue'
	export default {
		name:'Home',
		props:{},
		data(){
		  return {
			list:[],
			bannlist:[]
		  }
		},
		components:{
			banner,Cell
		},
		mounted(){
			this.$axios({
			  url:'/api/banner',
			}).then((res)=>{
				this.bannlist=res.data
			})
			this.$axios({
			  url:'/api/list',
			  params:{_page:1,_limit:6},
			}).then((res)=>{
				this.list=res.data
			})
		},
		updated(){},
		methods:{}
	}
</script>

<style>
	.Home__cellbox{
		margin: 0 0.4rem;
		margin-bottom:1rem;
	}
</style>
