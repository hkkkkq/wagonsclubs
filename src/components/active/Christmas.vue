<template>
<div>
<transition name="fade">
	<router-view class="child-view"></router-view>
</transition>
<!-- <br>
<br>
<br>
<br>
<br>
	<router-link to="/Christmas/one">1</router-link>
	<router-link to="/Christmas/two">2</router-link>
	<router-link to="/Christmas/three">3</router-link> -->
</div>
</template>

<script>
require("../app/rem.js")(window, document);
export default {

}
</script>

<style lang='scss' scoped>
.child-view {
  position: absolute;
} 
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
  opacity: 0;
  background: #FFF;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
