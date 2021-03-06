import Vue from 'vue';
import Router from 'vue-router';
import activeRouter from './active.js';
import DCrouter from './dreamcar.js';
const VueAwesomeSwiper = require('vue-awesome-swiper');
// import test from '../components/test/test.vue' //直接加载方式，组件写在公共js里，如果这种方式过多会是的文件提过大，首次加载变慢
// import page from '../components/test/page.vue'
const pcweb = resolve => require(['../components/pcweb/pcweb.vue'], resolve);
const pcweb_first = resolve => require(['../components/pcweb/pcweb_first.vue'], resolve);
const pcweb_second = resolve => require(['../components/pcweb/pcweb_second.vue'], resolve);
const pcweb_third = resolve => require(['../components/pcweb/pcweb_third.vue'], resolve);
const pcweb_forth = resolve => require(['../components/pcweb/pcweb_forth.vue'], resolve);
const pcweb_article = resolve => require(['../components/pcweb/pcweb_article.vue'], resolve);
const pcweb_download = resolve => require(['../components/pcweb/download.vue'], resolve);
const notfound = resolve => require(['../components/404.vue'], resolve);
//for app
const app = resolve => require(['../components/app/index.vue'], resolve);
const app_details = resolve => require(['../components/app/cardetails.vue'], resolve);
const app_join = resolve => require(['../components/app/join.vue'], resolve);
const app_memindex = resolve => require(['../components/app/huiyuanindex.vue'], resolve);
const app_memright = resolve => require(['../components/app/memright.vue'], resolve);
const app_memjoin = resolve => require(['../components/app/memjoin.vue'], resolve);
const app_apply = resolve => require(['../components/app/apply.vue'], resolve);
const app_applysuc = resolve => require(['../components/app/applysuc.vue'], resolve);
const app_ab = resolve => require(['../components/app/ab.vue'], resolve);
const app_warning = resolve => require(['../components/app/warning.vue'], resolve);
const app_law = resolve => require(['../components/app/law.vue'], resolve);
const app_test = resolve => require(['../components/app/test.vue'], resolve);
const app_v1 = resolve => require(['../components/app/v1.vue'], resolve);
const app_v2 = resolve => require(['../components/app/v2.vue'], resolve);
const app_v3 = resolve => require(['../components/app/v3.vue'], resolve);
//wechat
const wx_findcar = resolve => require(['../components/wx/findcar.vue'], resolve);
const wx_hd = resolve => require(['../components/wx/hd.vue'], resolve);
const wx_collocation = resolve => require(['../components/wx/collocation.vue'], resolve);
const wx_pay = resolve => require(['../components/wx/pay.vue'], resolve);
const wx_datepicker = resolve => require(['../components/wx/datepicker.vue'], resolve);
const wx_paysuccess = resolve => require(['../components/wx/paysuccess.vue'], resolve);
const wx_onlinepay = resolve => require(['../components/wx/onlinepay.vue'], resolve);
const wx_pending = resolve => require(['../components/wx/pending.vue'], resolve);
const wx_applying = resolve => require(['../components/wx/applying.vue'], resolve);
const wx_memshow = resolve => require(['../components/wx/memshow.vue'], resolve);
const wx_wxmember = resolve => require(['../components/wx/wxmember.vue'], resolve);
const wx_review = resolve => require(['../components/wx/review.vue'], resolve);
const wx_orders = resolve => require(['../components/wx/orders.vue'], resolve);
const wx_orderdetail = resolve => require(['../components/wx/orderdetail.vue'], resolve);
const wx_login = resolve => require(['../components/wx/login.vue'], resolve);
const wx_test = resolve => require(['../components/wx/test.vue'], resolve);
const wx_card = resolve => require(['../components/wx/card.vue'], resolve);
const wx_cardfirst = resolve => require(['../components/wx/cardfirst.vue'], resolve);
const wx_cardsecond = resolve => require(['../components/wx/cardsecond.vue'], resolve);
const wx_cardthird = resolve => require(['../components/wx/cardthird.vue'], resolve);
const wx_payorder = resolve => require(['../components/wx/payorder.vue'], resolve);
const wx_sharePage = resolve => require(['../components/wx/sharePage.vue'], resolve);
//mobile
const mobile = resolve => require(['../components/mobile/index.vue'], resolve);
const join = resolve => require(['../components/mobile/join.vue'], resolve);
const memberitro = resolve => require(['../components/mobile/memberitro.vue'], resolve);
const apply = resolve => require(['../components/mobile/apply.vue'], resolve);
const cardetail = resolve => require(['../components/mobile/cardetail.vue'], resolve);
const whoweare = resolve => require(['../components/mobile/whoweare.vue'], resolve);
const mid = resolve => require(['../components/mobile/mid.vue'], resolve);
const zw = resolve => require(['../components/mobile/zw.vue'], resolve);
const activelist = resolve => require(['../components/mobile/activelist.vue'], resolve);

Vue.use(VueAwesomeSwiper)
Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        //梦想战车
        DCrouter,
        //活动
        activeRouter,
        //重写pc首页
        {
            path: '/',
            beforeEnter: (to, from, next) => {
                if ((/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) && (to.path != '/download')) {
                    next({
                        path: '/wx/findcar?wxAppShare=true'
                    })
                } else {
                    next();
                }
            },
            component: pcweb,
            redirect: '/first',
            children: [{
                    path: 'first',
                    component: pcweb_first
                },
                {
                    path: 'second',
                    component: pcweb_second
                },
                {
                    path: 'third',
                    component: pcweb_third
                },
                {
                    path: 'forth',
                    component: pcweb_forth
                },
                {
                    path: 'article',
                    component: pcweb_article
                },
                {
                    path: 'download',
                    component: pcweb_download
                },
            ]
        },


        //for app
        {
            path: '/app',
            component: app,
            children: [{
                    path: 'cardetails',
                    component: app_details
                },
                {
                    path: 'join',
                    component: app_join
                },
                {
                    path: 'apply',
                    component: app_apply
                },
                {
                    path: 'applysuc',
                    component: app_applysuc
                },
                {
                    path: 'ab',
                    component: app_ab
                },
                {
                    path: 'warning',
                    component: app_warning
                },
                {
                    path: 'law',
                    component: app_law
                },
                {
                    path: 'test',
                    component: app_test,
                    redirect: 'test/v1',
                    children: [{
                            path: "v1",
                            component: app_v1
                        },
                        {
                            path: "v2",
                            component: app_v2
                        },
                        {
                            path: "v3",
                            component: app_v3
                        }
                    ]
                },
                {
                    path: 'memindex',
                    component: app_memindex,
                    redirect: "memindex/memright",
                    children: [{
                            path: "memright",
                            component: app_memright
                        },
                        {
                            path: "memjoin",
                            component: app_memjoin
                        }
                    ]
                },
            ]
        },

        //for wx
        {
            path: '/wx/findcar',
            component: wx_findcar
        },
        {
            path: '/wx/hd',
            component: wx_hd
        },
        {
            path: '/wx/collocation',
            component: wx_collocation
        },
        {
            path: '/wx/pay',
            component: wx_pay
        },
        {
            path: '/wx/datepicker',
            component: wx_datepicker
        },
        {
            path: '/wx/paysuccess',
            component: wx_paysuccess
        },
        {
            path: '/wx/onlinepay',
            component: wx_onlinepay
        },
        {
            path: '/wx/applying',
            component: wx_applying
        },
        {
            path: '/wx/wxmember',
            component: wx_wxmember,
            children: [{
                    path: 'pending',
                    component: wx_pending
                },
                {
                    path: 'memshow',
                    component: wx_memshow
                },
                {
                    path: 'review',
                    component: wx_review
                }
            ]
        },
        {
            path: '/wx/orders',
            component: wx_orders
        },
        {
            path: '/wx/orderdetail',
            component: wx_orderdetail
        },
        {
            path: '/wx/login',
            component: wx_login
        },
        {
            path: '/wx/test',
            component: wx_test
        },
        {
            path: '/wx/payorder',
            component: wx_payorder
        },
        {
            path: '/wx/sharePage',
            component: wx_sharePage
        },
        {
            path: '/wx/card',
            component: wx_card,
            redirect: '/wx/card/first',
            children: [{
                    path: 'first',
                    component: wx_cardfirst
                },
                {
                    path: 'second',
                    component: wx_cardsecond
                },
                {
                    path: 'third',
                    component: wx_cardthird
                }
            ]
        },
        // {
        //     path: '/wx/memshow',
        //     component: wx_memshow
        // },


        //重写移动端
        {
            path: '/mobile',
            component: mobile
        },
        {
            path: '/mobile/join',
            component: join
        },
        {
            path: '/mobile/memberitro',
            component: memberitro
        },
        {
            path: '/mobile/apply',
            component: apply
        },
        {
            path: '/mobile/cardetail',
            component: cardetail
        },
        {
            path: '/mobile/whoweare',
            component: whoweare
        },
        {
            path: '/mobile/mid',
            component: mid
        },
        {
            path: '/mobile/zw',
            component: zw
        },
        {
            path: '/mobile/activelist',
            component: activelist
        },



        //404
        {
            path: '/*',
            component: notfound
        },


    ]
})