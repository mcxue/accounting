import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Detail from '@/views/Detail.vue';
import Account from '@/views/Account.vue';
import Label from '@/views/Label.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {path:'/',redirect:'/home'},
  {path: '/home', component: Home},
  {path: '/detail', component: Detail},
  {path: '/account', component: Account},
  {path:'/label',component: Label},
  {path:'/statistics',component: Statistics},
  {path:'/*',component: NotFound}
];

const router = new VueRouter({
  routes
});

export default router;
