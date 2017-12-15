const Christmas = resolve => require(['../components/active/Christmas.vue'], resolve);
const Christmasone = resolve => require(['../components/active/Christmasone.vue'], resolve);
const Christmastwo = resolve => require(['../components/active/Christmastwo.vue'], resolve);
const Christmasthree = resolve => require(['../components/active/Christmasthree.vue'], resolve);
const Christmasfour = resolve => require(['../components/active/Christmasfour.vue'], resolve);
var activeRouter = {
	path: '/wx/christmas',
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
		},
		{
			path: 'four',
			component: Christmasfour
		}
	]
}
export default activeRouter