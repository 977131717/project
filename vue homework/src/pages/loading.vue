<template>
	<div class="box loader__box">
	    <div class="loader-18"></div>
	</div>
</template>

<script>
	export default {
		name:'loading',
		props:{},
		data(){
		  return {
			
		  }
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style>
	.box {
		z-index: 99;
		box-sizing: inherit;
		text-align: center;
		display: inline-block;
		position:fixed ;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
		width: 200px;
		height: 200px;
		border-radius: 3px;
		font-size: 30px;
		color: rgba(200, 200, 200, 0.5);
		vertical-align: top;
		-webkit-transition: .3s color, .3s border;
		transition: .3s color, .3s border;
	}
	[class*="loader-"] {
		display: inline-block;
		width: 1em;
		height: 1em;
		color: inherit;
		vertical-align: middle;
		pointer-events: none;
	}
	.loader-18 {
		line-height: 200px;
		font-size: 70px;
	    position: relative;
		width: 1em;
		height: 1em;
		color: #d60b52;
		position: relative;
	}
	.loader-18:before,
	.loader-18:after {
	    content: '';
	    display: block;
	    position: absolute;
	    border-radius: 50%;
	    border: .1em solid transparent;
	    border-bottom-color: currentcolor;
	    top: 0;
	    left: 0;
	    -webkit-animation: 1s loader-18 linear infinite;
	    animation: 1s loader-18 linear infinite;
	}
	.loader-18:before {
	    width: 1em;
	    height: 1em;
	}
	.loader-18:after {
	    width: .8em;
	    height: .8em;
	    top: .1em;
	    left: .1em;
	    -webkit-animation-direction: reverse;
	    animation-direction: reverse;
	}
	@-webkit-keyframes loader-18 {
	    0% {
	        -webkit-transform: rotate(0deg);
	        transform: rotate(0deg);
	    }
	    100% {
	        -webkit-transform: rotate(360deg);
	        transform: rotate(360deg);
	    }
	}
	@keyframes loader-18 {
	    0% {
	        -webkit-transform: rotate(0deg);
	        transform: rotate(0deg);
	    }
	    100% {
	        -webkit-transform: rotate(360deg);
	        transform: rotate(360deg);
	    }
	}
</style>
