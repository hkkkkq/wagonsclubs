// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import vuex from 'vuex';
import 'babel-polyfill'

import VueLazyload from 'vue-lazyload'

//use custom directive
Vue.use(VueLazyload)

// use options
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: './assets/loading12.png',
    loading: './assets/loading12.png',
    attempt: 1,
    listenEvents: ['scroll', 'mousewheel']
})

// axios.defaults.headers.common['token'] = 'a31f4dd41f48444b81b1d36486920419';
Vue.prototype.$ajax = axios; //将axios写入vue的原型方法
Vue.prototype.$ajax.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Vue.use(vuex)
const store = new vuex.Store({
    state: {
        'foot_left': true,
        'foot_right': false,
        'isNewApp': false,
        'applist': "",
        'starttime': "",
        'endtime': '',
        'rentdays': '',
        'WAG': '',
        'wxAppShare': false,
        'articleDetails': '',
        'rad': true,
        'christmas': false,
    },
    mutations: {
        foot_left_click(state) {
            state.foot_left = true;
            state.foot_right = false;
        },
        foot_right_click(state) {
            state.foot_left = false;
            state.foot_right = true;
        },
        isNewApp(state) {
            state.isNewApp = true;
        },
        saveAppList(state, data) {
            state.applist = data
        },
        starttime(state, data) {
            state.starttime = data
        },
        endtime(state, data) {
            state.endtime = data
        },
        rentdays(state, data) {
            state.rentdays = data
        },
        setOpenId(state, data) {
            state.WAG = data
        },
        wxAppShare(state, data) {
            state.wxAppShare = true
        },
        articleDetails(state, data) {
            state.articleDetails = data
        },
        rad(state, data) {
            state.rad = data
        },
        setChristmas(state, data) {
            state.christmas = data
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