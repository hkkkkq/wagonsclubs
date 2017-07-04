<template>
	<div>
		<h1>{{msg}}</h1>
		<router-view></router-view>
		<router-link to='/test/foo'>to foo</router-link>
		<router-link to='/test/ven'>to bar</router-link>
	</div>
</template>
<script type="text/javascript">
	export default {
		data:function(){
			return {
				msg:'test demo',
				id:this.$route.params.id
			}
		}
	}
</script>
<style type="text/css"></style>
