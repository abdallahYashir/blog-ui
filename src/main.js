import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './../store';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

library.add([ faCoffee, faPlus ]);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
