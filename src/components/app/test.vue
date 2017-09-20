<template>
<div>
    <router-link @click.native="click(1)" to="/app/test/v1">to  v1</router-link>
    <router-link @click.native="click(2)" to="/app/test/v2">to  v2</router-link>
    <transition :name="direction">
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
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
.child-view {
  position: absolute;
  width:100%;
  transition: all .8s ;
}
</style>
