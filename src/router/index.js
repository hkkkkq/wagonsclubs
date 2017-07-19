import Vue from 'vue';
import Router from 'vue-router';
const VueAwesomeSwiper = require('vue-awesome-swiper');
// import test from '../components/test/test.vue' //直接加载方式，组件写在公共js里，如果这种方式过多会是的文件提过大，首次加载变慢
// import page from '../components/test/page.vue'
const pcweb = resolve => require(['../components/pcweb/pcweb.vue'], resolve);
const pcweb_first = resolve => require(['../components/pcweb/pcweb_first.vue'], resolve);
const pcweb_second = resolve => require(['../components/pcweb/pcweb_second.vue'], resolve);
const pcweb_third = resolve => require(['../components/pcweb/pcweb_third.vue'], resolve);
const notfound = resolve => require(['../components/404.vue'], resolve);

//mobile
const mobile = resolve => require(['../components/mobile/index.vue'], resolve);



//for spider
const news1 = resolve => require(['../components/spider/news1.vue'], resolve);
const news2 = resolve => require(['../components/spider/news2.vue'], resolve);
const news3 = resolve => require(['../components/spider/news3.vue'], resolve);
const news4 = resolve => require(['../components/spider/news4.vue'], resolve);
const news5 = resolve => require(['../components/spider/news5.vue'], resolve);
const news6 = resolve => require(['../components/spider/news6.vue'], resolve);
const news7 = resolve => require(['../components/spider/news7.vue'], resolve);
const news8 = resolve => require(['../components/spider/news8.vue'], resolve);
const news9 = resolve => require(['../components/spider/news9.vue'], resolve);
const news10 = resolve => require(['../components/spider/news10.vue'], resolve);
const news11 = resolve => require(['../components/spider/news11.vue'], resolve);
const news12 = resolve => require(['../components/spider/news12.vue'], resolve);



Vue.use(VueAwesomeSwiper)
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [

        //重写pc首页
        {
            path: '/',
            // beforeEnter: (to, from, next) => {
            //     // console.log(navigator.userAgent)
            //     if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            //         window.location.href = 'https://www.huoqiu.cn/car/index'
            //     } else {
            //         next();
            //     }
            // },
            component: pcweb,
            redirect: '/first',
            children: [
                { path: 'first', component: pcweb_first },
                { path: 'second', component: pcweb_second },
                { path: 'third', component: pcweb_third }
            ]
        },

        //重写移动端
        {
            path: '/mobile',
            component: mobile
        },
        //for spider
        { path: '/supercarnews/1', component: news1 },
        { path: '/supercarnews/2', component: news2 },
        { path: '/supercarnews/3', component: news3 },
        { path: '/supercarnews/4', component: news4 },
        { path: '/supercarnews/5', component: news5 },
        { path: '/supercarnews/6', component: news6 },
        { path: '/supercarnews/7', component: news7 },
        { path: '/supercarnews/8', component: news8 },
        { path: '/supercarnews/9', component: news9 },
        { path: '/supercarnews/10', component: news10 },
        { path: '/supercarnews/11', component: news11 },
        { path: '/supercarnews/12', component: news12 },

        //404
        {
            path: '/*',
            component: notfound
        },


    ]
})