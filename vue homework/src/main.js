import Vue from 'vue'
import App from './layouts/App.vue'
import './assets/css/base.css'
import './assets/js/font.js'
import router from './plugins/router.js'
import './plugins/axios.js'
import 'animate.css'
Vue.config.productionTip = false

let vm=new Vue({
  render: h => h(App),
  router,
  data:{
	  topapp:true,
	  flapp:false,
	  bLoading:false,
  }
}).$mount('#app')

export default vm
