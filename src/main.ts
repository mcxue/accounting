import Vue from 'vue';
import App from '@/App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Top from '@/components/Top.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false;
Vue.component('Top',Top);
Vue.component('Nav',Nav);
Vue.component('Layout',Layout);
Vue.component('Icon',Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


if(document.documentElement.clientWidth>500){
  window.alert('请使用手机浏览，以保证显示效果');
  const img = window.document.createElement('img');
  img.src='/accounting/qrcode.png';
  document.body.append(img);
  img.style.position='fixed';
  img.style.left='50%';
  img.style.top='50%';
  img.style.transform='translate(-50%,-50%)';
  img.style.boxShadow='0 0 5px rgb(0,0,0,0.3)'
}
