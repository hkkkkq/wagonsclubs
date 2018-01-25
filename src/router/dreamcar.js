const DCcollect = resolve => require(['../components/active/dreamcar/collect.vue'], resolve);
const DCdescription = resolve => require(['../components/active/dreamcar/description.vue'], resolve);
const DCgame = resolve => require(['../components/active/dreamcar/game.vue'], resolve);
const DCvote = resolve => require(['../components/active/dreamcar/vote.vue'], resolve);
const DCproductpic = resolve => require(['../components/active/dreamcar/productpic.vue'], resolve);
const DC = resolve => require(['../components/active/dreamcar/DC.vue'], resolve);
var activeRouter = {
	path: '/dreamcar',
	component: DC,
	children:[
		{
			path: 'collect',
			component: DCcollect
		},
		{
			path: 'description',
			component: DCdescription
		},
		{
			path: 'game',
			component: DCgame
		},
		{
			path: 'productpic',
			component: DCproductpic
		},
		{
			path: 'vote',
			component: DCvote
		}
	]
}
export default activeRouter