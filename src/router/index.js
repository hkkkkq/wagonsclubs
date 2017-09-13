import Vue from 'vue';
import Router from 'vue-router';
const VueAwesomeSwiper = require('vue-awesome-swiper');
// import test from '../components/test/test.vue' //直接加载方式，组件写在公共js里，如果这种方式过多会是的文件提过大，首次加载变慢
// import page from '../components/test/page.vue'
const pcweb = resolve => require(['../components/pcweb/pcweb.vue'], resolve);
const pcweb_first = resolve => require(['../components/pcweb/pcweb_first.vue'], resolve);
const pcweb_second = resolve => require(['../components/pcweb/pcweb_second.vue'], resolve);
const pcweb_third = resolve => require(['../components/pcweb/pcweb_third.vue'], resolve);
const pcweb_forth = resolve => require(['../components/pcweb/pcweb_forth.vue'], resolve);
const pcweb_article1 = resolve => require(['../components/pcweb/pcweb_article1.vue'], resolve);
const pcweb_article2 = resolve => require(['../components/pcweb/pcweb_article2.vue'], resolve);
const pcweb_article3 = resolve => require(['../components/pcweb/pcweb_article3.vue'], resolve);
const pcweb_article4 = resolve => require(['../components/pcweb/pcweb_article4.vue'], resolve);
const pcweb_article5 = resolve => require(['../components/pcweb/pcweb_article5.vue'], resolve);
const pcweb_article6 = resolve => require(['../components/pcweb/pcweb_article6.vue'], resolve);
const pcweb_article7 = resolve => require(['../components/pcweb/pcweb_article7.vue'], resolve);
const notfound = resolve => require(['../components/404.vue'], resolve);

//mobile
const mobile = resolve => require(['../components/mobile/index.vue'], resolve);
const join = resolve => require(['../components/mobile/join.vue'], resolve);
const memberitro = resolve => require(['../components/mobile/memberitro.vue'], resolve);
const apply = resolve => require(['../components/mobile/apply.vue'], resolve);
const cardetail = resolve => require(['../components/mobile/cardetail.vue'], resolve);
const whoweare = resolve => require(['../components/mobile/whoweare.vue'], resolve); <<
<<
<<
<
HEAD
const mid = resolve => require(['../components/mobile/mid.vue'], resolve); ===
===
=
const test = resolve => require(['../components/mobile/test.vue'], resolve); >>>
>>>
>
950039 f0a650d417da1836a65753d3ac4b62d98d


Vue.use(VueAwesomeSwiper)
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [

        //重写pc首页
        {
            path: '/',
            beforeEnter: (to, from, next) => {
                // console.log(navigator.userAgent)
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    // window.location.href = 'http://wap.wagonsclub.com/car/index'
                    next({ path: '/mobile' })
                } else {
                    next();
                }
            },
            component: pcweb,
            redirect: '/first',
            children: [
                { path: 'first', component: pcweb_first },
                { path: 'second', component: pcweb_second },
                { path: 'third', component: pcweb_third },
                { path: 'forth', component: pcweb_forth },
                { path: 'article/1', component: pcweb_article1 },
                { path: 'article/2', component: pcweb_article2 },
                { path: 'article/3', component: pcweb_article3 },
                { path: 'article/4', component: pcweb_article4 },
                { path: 'article/5', component: pcweb_article5 },
                { path: 'article/6', component: pcweb_article6 },
                { path: 'article/7', component: pcweb_article7 }
            ]
        },

        //重写移动端
        { path: '/mobile', component: mobile },
        { path: '/mobile/join', component: join },
        { path: '/mobile/memberitro', component: memberitro },
        { path: '/mobile/apply', component: apply },
        { path: '/mobile/cardetail', component: cardetail },
        { path: '/mobile/whoweare', component: whoweare },
        { path: '/mobile/mid', component: mid },


        //404
        {
            path: '/*',
            component: notfound
        },


    ]
})