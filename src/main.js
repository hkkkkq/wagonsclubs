// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import vuex from 'vuex';

import VueLazyload from 'vue-lazyload'

//use custom directive
Vue.use(VueLazyload)

// use options
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '/assets/3.png',
    loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
    attempt: 1,
    listenEvents: ['scroll', 'mousewheel']
})


Vue.prototype.$ajax = axios; //将axios写入vue的原型方法
Vue.use(vuex)
const store = new vuex.Store({
    state: {
        'foot_left': true,
        'foot_right': false
    },
    mutations: {
        foot_left_click(state) {
            state.foot_left = true;
            state.foot_right = false;
        },
        foot_right_click(state) {
            state.foot_left = false;
            state.foot_right = true;
        }
    }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})