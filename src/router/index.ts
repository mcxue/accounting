import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import Detail from '../views/Detail.vue';
import Account from '../views/Account.vue';
import Label from '../views/Label.vue';
import Statistics from '../views/Statistics.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {path: '/', redirect: 'home'},
  {path: '/home', name: 'Home', component: Home},
  {path:'/detail', name:'Detail', component: Detail},
  {path:'/account', name:'Account', component: Account},
  {path:'/label', name:'Label', component: Label},
  {path:'/statistics', name:'Statistics', component: Statistics}
];

const router = new VueRouter({
  routes
});

export default router;
