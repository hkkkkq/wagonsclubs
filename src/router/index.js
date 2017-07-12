import Vue from 'vue';
import Router from 'vue-router';
const VueAwesomeSwiper = require('vue-awesome-swiper');
import Hello from '@/components/Hello';
// import test from '../components/test/test.vue' //直接加载方式，组件写在公共js里，如果这种方式过多会是的文件提过大，首次加载变慢
// import page from '../components/test/page.vue'
const test = resolve => require(['../components/test/test.vue'],resolve);
const page = resolve => require(['../components/test/page.vue'],resolve);     //懒加载方式，组件不会被打包进公共js ，而是另外请求
const ven = resolve => require(['../components/test/ven.vue'],resolve);
const pcweb = resolve => require(['../components/pcweb/pcweb.vue'],resolve);
const pcweb_first = resolve => require(['../components/pcweb/pcweb_first.vue'],resolve);
const pcweb_second = resolve => require(['../components/pcweb/pcweb_second.vue'],resolve);


//for spider
const news1 = resolve => require(['../components/spider/news1.vue'],resolve);
const news2 = resolve => require(['../components/spider/news2.vue'],resolve);
const news3 = resolve => require(['../components/spider/news3.vue'],resolve);



Vue.use(VueAwesomeSwiper)
Vue.use(Router);

export default new Router({
   mode: 'history',
  routes: [
    //hello页
    {	path: '/hello',component: Hello	},
    //test嵌套路由测试
    {	path: '/test',component: test,
    	children:[
    		{	path: 'ven',component: ven	},

    		{	path: 'foo',component: page	},
    		// {	path: '',component: page	},
    	]
    },
    //重写首页
    { path: '/',
      beforeEnter: (to, from, next) => {
        // console.log(navigator.userAgent)
        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          window.location.href = 'https://www.huoqiu.cn/car/index'
        } else {
          next();
        }
      },
      component: pcweb,
      redirect: '/first',
      children:[
        { path: 'first',component:pcweb_first },
        { path: 'second',component:pcweb_second }
      ]
    },

    //for spider
{ path: '/supercarnews/1',component: news1},
{ path: '/supercarnews/2',component: news2},
{ path: '/supercarnews/3',component: news3},





  ]
})
