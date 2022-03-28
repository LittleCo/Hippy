import Vue from 'vue';
import { Native } from '@hippy/vue-native-components';
import VueRouter from 'vue-router';
import App from './app.vue';
import routes from './routes';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Native);

const router = new VueRouter(routes);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
