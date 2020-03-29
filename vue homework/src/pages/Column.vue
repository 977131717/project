<template>
	<div class="Column">
		<Cell
		v-for='(val,index) in list'
		:key='val._id'
		:data='val'
		 api-name="follow"
		/>
	</div>
</template>

<script>
	import Cell from '../components/Cell.vue'
	export default {
		name:'Column',
		props:{},
		data(){
		  return {
			list:[],
		  }
		},
		components:{
			Cell
		},
		mounted(){
			this.$axios({
			  url:'/api/list',
			  params:{_page:1,_limit:16},
			}).then((res)=>{
				this.list=res.data
			})
		},
		updated(){},
		methods:{}
	}
</script>

<style>
	.Column{
	  
	  margin: .6rem;
	}
</style>
