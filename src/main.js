import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync';
import App from './App.vue'
import { routes } from './routes';
import { store } from './store/store';
import VueResource from 'vue-resource';


Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

sync(store, router);

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});



