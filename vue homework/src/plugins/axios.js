import axios from 'axios'
import Vue from 'vue';
import vm from '../main.js'
import cookie from '../assets/js/cookie.js'

axios.interceptors.request.use(function(config) {
  //config 含有发出的请求的配置信息  axios(config)
  
  // 请求发出之前做点事  请求体里面 每次都自动携带token
  
  //控制loading显示
  vm.bLoading=true;
  return config;// 撒手放出经过配置的请求
}, function(error) {
  // 发出了错误的请求，拦截
  return Promise.reject(error);
});

// 添加一个响应的拦截器
axios.interceptors.response.use(function(response) {
  
  //控制loading显示
  vm.bLoading=false;
  
  return response;//奔向组件
}, function(error) {
  // 错误的响应，拦截
  return Promise.reject(error);
});




window.cookie=cookie
Vue.prototype.$axios=axios;
Vue.prototype.$cookie=cookie;
window.axios=axios;

export default axios