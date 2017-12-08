const Christmas = resolve => require(['../components/active/Christmas.vue'], resolve);
const Christmasone = resolve => require(['../components/active/Christmasone.vue'], resolve);
const Christmastwo = resolve => require(['../components/active/Christmastwo.vue'], resolve);
const Christmasthree = resolve => require(['../components/active/Christmasthree.vue'], resolve);
// import Christmas from "../components/active/Christmas.vue";
// import Christmasone from "../components/active/Christmasone.vue";
// import Christmastwo from "../components/active/Christmastwo.vue";
// import Christmasthree from "../components/active/Christmasthree.vue";
var activeRouter = {
	path: '/Christmas',
	component: Christmas,
	children:[
		{
			path: 'one',
			component: Christmasone
		},
		{
			path: 'two',
			component: Christmastwo
		},
		{
			path: 'three',
			component: Christmasthree
		}
	]
}
export default activeRouter