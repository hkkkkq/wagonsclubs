<template>
<div>
    <img :src="gift[random]" :style="{top:top+'rem',left:left + 'rem'}" class="apple"></i>
</div>
</template>

<script>
export default {
  props: ['currx'],
  data () {
    return{
      gift:[
        '/static/christmas/tnt.png',
        '/static/christmas/1.png',
        '/static/christmas/2.png',
        '/static/christmas/3.png',
        '/static/christmas/4.png',
        '/static/christmas/5.png',
        '/static/christmas/6.png',
        '/static/christmas/7.png',
        '/static/christmas/8.png',
        '/static/christmas/10.png',
        '/static/christmas/9.png',],
      top:-0.5,
      a:0,
      random:[],
      left:0,
      t: 0,
      int:'',
      //人物 width 0.9rem
    }
  },
  created () {
  },
  watch: {
    currx: function(){
    },
    top:function(){
      var xtop;
      var ua = navigator.userAgent.toLowerCase()
      if(/iphone/.test(ua)&&(screen.height == 812 && screen.width == 375)){
        xtop = 10
      }else{
        xtop = 8
      }
      if(this.top >xtop){
        //苹果宽度 0.25rem
        if (this.currx < this.left && this.currx + 2.5 > this.left + 0.8 ){
          this.$emit('increment',this.random)
        }
        cancelAnimationFrame(this.int)
        this.down()
      }
    },
  },
  methods: {
    down () {
      this.random = Math.floor(Math.random() * 11)
      var vm = this
      this.a = Math.random() * 7 + 3
      this.left = Math.random()*6.5
      this.top = -1
      this.t = 0
      function drop(params) {
        vm.top = 0.5 * vm.a * vm.t * vm.t - 1
        vm.t += 0.01
        vm.int = requestAnimationFrame(drop)
      }
      drop()
    }
  },
  mounted () {
    this.down()
  }
}
</script>

<style lang='scss' scoped>
.apple{
  position: absolute;
  width: 0.8rem;
}
</style>
