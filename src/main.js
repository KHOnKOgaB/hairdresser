import Vue from 'vue';
import VueAos from 'vue-aos';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandPointDown } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
library.add(faHandPointDown);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
