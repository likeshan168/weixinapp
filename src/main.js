import Vue from 'vue';
import Mint from 'mint-ui';
import VueRouter from 'vue-router';
import 'mint-ui/lib/style.css'
import App from './app';
import Login from './components/login/login';
Vue.use(VueRouter);
Vue.use(Mint);

const routes = [
  { path: '/login', component: Login }
  // { path: '/bar', component: Bar }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
