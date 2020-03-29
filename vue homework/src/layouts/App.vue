<template>
  <div id="app">
	  <loading v-if='$root.bLoading' />
	<Header v-if='$root.topapp'/>
	<transition
	enter-active-class = "animated bounceInLeft"
	leave-active-class = "animated bounceOutRight"
	>
		<router-view style="position: absolute;left:0;top:0;width:100%;height:100%"></router-view>
	</transition>
	<Footer v-if='$root.flapp'/>
  </div>
</template>

<script>
import Header from "./Header.vue"
import Footer from './Footer.vue'
import loading from '../pages/loading.vue'
export default {
  name: 'app',
  components:{
  Header,
  Footer,
  loading
  },
	watch:{
		$route:{
		handler(nextValue,PrevValue){
			if(/home|follow|column/.test(nextValue.path)){
				this.$root.topapp=true
				this.$root.flapp=true
			}
			if(/reg|acticle|login/.test(nextValue.path)){
				this.$root.topapp=false
				this.$root.flapp=false
			}
			if(/user/.test(nextValue.path)){
				this.$root.topapp=false
				this.$root.flapp=true
			}
		},
		immediate:true
	  }
	}
}
</script>

<style>
#app {
	
}
</style>
