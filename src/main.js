import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import routes from './routes';
import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(BootstrapVue);
const router = new VueRouter({ routes });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
