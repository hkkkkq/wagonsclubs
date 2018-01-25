<template>
	<div :style="{'width':pwidth+'rem','height':pheight+'rem'}" class="out">
		<div :style="{'width':(pwidth - 0.12)+'rem','height':(pheight - 0.12)+'rem'}" class="in">
			<slot></slot>
		</div>
	</div>
</template>

<script>
require("../../app/rem.js")(window, document);
export default {
	props:['pwidth','pheight'],
	data () {
		return{
		}
	}
}
</script>

<style lang='scss' scoped>
.out{
	border: 3px solid #71cdf6;
	margin: auto;
	display: flex;
	box-shadow: 0px 0px 13px #1a3fff inset, 0px 0px 13px #1a3fff;
	display: -webkit-flex;
}
.in{
	border: 1px solid #6dcaf3;
	margin: auto;
	display: inherit;
	flex-direction: inherit;
	box-shadow: 0px 0px 13px #1a3fff inset, 0px 0px 13px #1a3fff;
}
</style>
