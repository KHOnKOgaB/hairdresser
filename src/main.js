import Vue from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandPointDown, faInfo } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import vueSmoothScroll from 'vue2-smooth-scroll';
import VueTheMask from 'vue-the-mask';
import App from './App.vue';

library.add(faHandPointDown, faInstagram, faInfo);

AOS.init();
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(vueSmoothScroll);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueTheMask);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
