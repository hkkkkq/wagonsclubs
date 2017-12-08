import Christmas from "../components/active/Christmas.vue";
import Christmasone from "../components/active/Christmasone.vue";
import Christmastwo from "../components/active/Christmastwo.vue";
import Christmasthree from "../components/active/Christmasthree.vue";
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