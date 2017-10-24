<template>
<transition name="fade">
  <router-view class="child-view"></router-view>

</transition>
</template>

<script>
require("../app/rem.js")(window, document);
export default {

}
</script>

<style lang="scss" scoped>
.child-view {
  position: absolute;
} 
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
  opacity: 0.1;
  background: #ffffff;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>

