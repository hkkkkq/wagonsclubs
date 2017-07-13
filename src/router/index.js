import Vue from 'vue';
import Router from 'vue-router';
const VueAwesomeSwiper = require('vue-awesome-swiper');
// import test from '../components/test/test.vue' //直接加载方式，组件写在公共js里，如果这种方式过多会是的文件提过大，首次加载变慢
// import page from '../components/test/page.vue'
const pcweb = resolve => require(['../components/pcweb/pcweb.vue'], resolve);
const pcweb_first = resolve => require(['../components/pcweb/pcweb_first.vue'], resolve);
const pcweb_second = resolve => require(['../components/pcweb/pcweb_second.vue'], resolve);

//for spider
const news1 = resolve => require(['../components/spider/news1.vue'], resolve);
const news2 = resolve => require(['../components/spider/news2.vue'], resolve);
const news3 = resolve => require(['../components/spider/news3.vue'], resolve);



Vue.use(VueAwesomeSwiper)
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        //重写pc端首页
        {
            path: '/',
            beforeEnter: (to, from, next) => {
                // console.log(navigator.userAgent)
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    window.location.href = 'https://www.huoqiu.cn/car/index'
                } else {
                    next();
                }
            },
            component: pcweb,
            redirect: '/first',
            children: [
                { path: 'first', component: pcweb_first },
                { path: 'second', component: pcweb_second }
            ]
        },

        //for spider
        { path: '/supercarnews/1', component: news1 },
        { path: '/supercarnews/2', component: news2 },
        { path: '/supercarnews/3', component: news3 },





    ]
})