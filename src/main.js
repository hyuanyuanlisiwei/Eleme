// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'
//引入全局样式
import '@/common/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(VueRouter);
//定义路由
const routes=[
  {path:'/goods',component:goods},
  {path:'/ratings',component:ratings},
  {path:'/seller',component:seller},
];
//创建路由实例
const router=new VueRouter({
  routes,
  linkActiveClass:"active"
});
//创建和挂载根实例
new Vue({
  el: '#container',
  router,
  components: { App }
})
router.push("/goods");
