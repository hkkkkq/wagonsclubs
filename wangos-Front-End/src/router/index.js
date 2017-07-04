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
Vue.use(VueAwesomeSwiper)
Vue.use(Router);

export default new Router({
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
    { path: '/pcweb',component: pcweb,redirect: '/pcweb/first',
      children:[
        { path: 'first',component:pcweb_first },
        { path: 'second',component:pcweb_second }
      ]
    }




  ]
})
