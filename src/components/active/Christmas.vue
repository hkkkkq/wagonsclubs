<template>
<div>
  <img @click="cmp3" v-show="mp3" class="mp3" src="../../assets/active/mp3.png">
  <img @click="cmp3" v-show="!mp3" class="mp3" src="../../assets/active/mp3done.png">
  <audio ref="mylife" autoplay src="/static/img/It's My Life - Bon Jovi.mp3"></audio>
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
  data () {
    return{
      mp3: true,
      count:0
    }
  },
  mounted () {
    var arr = [
      'http://localhost:8080/static/img/load2.png',
      'http://localhost:8080/static/img/load1.png',
      'http://localhost:8080/static/img/load3.png',
      'http://localhost:8080/static/img/load4.png',
      ]
    arr.forEach(item => {
      let img = new Image()
      img.onload = ()=>{
        this.count++
      }
      img.src=item
    })
  },
  methods: {
    cmp3 () {
      if(this.mp3){
        this.$refs.mylife.pause()
        this.mp3 = false
      }else{
        this.$refs.mylife.play()
        this.mp3 = true
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.mp3{
  position: absolute;
  top: 0.7rem;
  right: 0.38rem;
  width: 0.7rem;
  z-index: 10;
}
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
