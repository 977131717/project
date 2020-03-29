<template>
	<div class="cell" @click="getDetail">
	  <h2><span v-show="index!=null">{{index + 1}} . </span>{{data.name||data.follow_name}}</h2>
	  <p>门票价格:{{data.price||data.follow_price}}</p>
	</div>
</template>

<script>
	export default {
		name:'Cell',
		props:{
			data:{
				type:Object,
				required:true,
				default:function(){ //type 为对象时 默认值要是一个函数 且需要返回一个对象 
					return {}
				}
			},
			apiName:{
				type:String,
				default:'',
			},
			index:{
				  type:Number,
				  default:null
			}
		},
		data(){
		  return {
			
		  }
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{
			getDetail(){
				let _id=this.data.follow_id||this.data._id
				  this.$router.push(`/acticle/${_id}`)//编程式跳转
			  }
		}
	}
</script>

<style>
	.cell { color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
	.cell h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
	.cell p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
	.cell{clear: both;}
</style>
