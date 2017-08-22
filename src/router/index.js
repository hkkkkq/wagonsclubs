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
const notfound = resolve => require(['../components/404.vue'], resolve);
//for app
const app = resolve => require(['../components/app/index.vue'], resolve);
const app_details = resolve => require(['../components/app/cardetails.vue'], resolve);
const app_join = resolve => require(['../components/app/join.vue'], resolve);
const app_memindex = resolve => require(['../components/app/huiyuanindex.vue'], resolve);
const app_memright = resolve => require(['../components/app/memright.vue'], resolve);
const app_memjoin = resolve => require(['../components/app/memjoin.vue'], resolve);
//mobile
const mobile = resolve => require(['../components/mobile/index.vue'], resolve);
const join = resolve => require(['../components/mobile/join.vue'], resolve);
const memberitro = resolve => require(['../components/mobile/memberitro.vue'], resolve);
const apply = resolve => require(['../components/mobile/apply.vue'], resolve);
const cardetail = resolve => require(['../components/mobile/cardetail.vue'], resolve);
const whoweare = resolve => require(['../components/mobile/whoweare.vue'], resolve);


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
                { path: 'article/3', component: pcweb_article3 }
            ]
        },


        //for app
        {
            path: '/app',
            component: app,
            children: [
                { path: 'cardetails', component: app_details },
                { path: 'join', component: app_join },
                {
                    path: 'memindex',
                    component: app_memindex,
                    redirect: "memindex/memright",
                    children: [
                        { path: "memright", component: app_memright },
                        { path: "memjoin", component: app_memjoin }
                    ]
                },
            ]
        },


        //重写移动端
        { path: '/mobile', component: mobile },
        { path: '/mobile/join', component: join },
        { path: '/mobile/memberitro', component: memberitro },
        { path: '/mobile/apply', component: apply },
        { path: '/mobile/cardetail', component: cardetail },
        { path: '/mobile/whoweare', component: whoweare },



        //404
        {
            path: '/*',
            component: notfound
        },


    ]
})