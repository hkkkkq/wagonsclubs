<template>
<div>
<router-view></router-view>
<!-- <wrapdiv pwidth='3' pheight='1'>1</wrapdiv> -->
</div>
</template>

<script>
require("../../app/rem.js")(window, document);
import wrapdiv from "./wrapdiv.vue";
export default {
	data () {
		return {

		}
	},
	components: {
		'wrapdiv': wrapdiv
	},
	created () {
		this.$store.commit("setOpenId", this.$route.query.WAG);
		this.$router.push('/dreamcar/vote')
	}
}
</script>

<style lang='scss' scoped>

</style>
