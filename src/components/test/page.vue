<template>
<div>
	<h1>this is {{$route.params.id}} in test</h1>
	
	</div>
	
</template>
<script type="text/javascript">
	export default {
		data:function(){
			return {
				id:''
			}
		},
		created:function(){
			this.id = this.$route.params.id
		}
	}
</script>
<style type="text/css"></style>