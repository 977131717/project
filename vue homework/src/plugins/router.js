import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Follow from '../pages/Follow.vue';
import Column from '../pages/Column.vue';
import User from '../pages/User.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';
import acticle from '../pages/acticle.vue';
import NoPage from '../pages/NoPage.vue';

let routes = [
  {path:'/home',component:Home},
  {path:'/follow',component:Follow},
  {path:'/column',component:Column},
  {path:'/acticle/:_id',component:acticle,name:'detail'},
  {path:'/user',component:User},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage}
];

let router = new VueRouter({
  routes
})

export default router;