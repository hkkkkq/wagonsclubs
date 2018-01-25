<template>
<div style="font-size:0">
	<div>
		<img src="../../../assets/active/dreamcar/collect-1.jpg">
	</div>
	<div>
		<div @click="getgame" class="getgame"></div>
		<img src="../../../assets/active/dreamcar/collect-2.jpg">
	</div>
	<div>
		<img src="../../../assets/active/dreamcar/collect-3.jpg">
	</div>
	<div>
		<div @click="getrules" class="getrules"></div>
		<img src="../../../assets/active/dreamcar/collect-4.jpg">
	</div>
</div>
</template>

<script>
export default {
	data () {
		return{

		}
	},
	methods:{
		getrules () {
			this.$router.push('/dreamcar/description')
		},
		getgame () {
			this.$router.push('/dreamcar/game')
		},
	}
}
</script>

<style lang='scss' scoped>
div{
	width: 100%;
	position: relative;
	>img{
		width: 100%
	}
	.getrules{
		position: absolute;
		width: 4rem;
		height: 1.1rem;
		top: 1rem;
		margin: auto;
		left: 0;
		right: 0;
	}
	.getgame{
		position: absolute;
		width: 4rem;
		height: 1.1rem;
		bottom: 1rem;
		margin: auto;
		left: 0;
		right: 0;
	}
}
</style>
