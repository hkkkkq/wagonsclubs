<template>
<div>
    <router-link @click.native="click(1)" to="/app/test/v1">to  v1</router-link>
    <router-link @click.native="click(2)" to="/app/test/v2">to  v2</router-link>
    <transition name="fade">
    <router-view class="child-view"></router-view>
    </transition>
</div>
</template>

<script>
export default {
    data(){
        return{
            direction:""
        }
    },
    methods:{
        click(n){
            if(n == 1){ this.direction = "slide-left" }
            if(n == 2){ this.direction = "slide-right" }
        }
    }
}
</script>

<style scoped>
.child-view {
  position: absolute;
} 
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
  opacity: 0.1;
  background: #666666;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
