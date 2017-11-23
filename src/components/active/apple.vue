<template>
<div>
    <span :style="{top:top+'rem',left:left + 'rem'}" class="apple">🍎</span>
</div>
</template>

<script>
export default {
  props: ['currx'],
  data () {
    return{
      top:-0.5,
      a:0,
      left:0,
      t: 0,
      int:'',
      //人物 width 0.9rem
    }
  },
  watch: {
    top:function(){
      if(this.top > 10){
        //苹果宽度 0.25rem
        if (this.currx + 0.9 > this.left && this.currx + 0.9 < this.left + 0.55 ){
          console.log('+1')
        }
        clearInterval(this.int)
        this.down()
      }
    },
    // currx () {
      // console.log(this.currx)
    // }
  },
  methods: {
    down () {
      this.a = Math.random() * 3 + 1
      // this.a = 1
      this.left = Math.random()*6.5
      // this.left = 1.05
      this.top = -1
      this.t = 0
      this.int = setInterval(()=>{
        this.top = 0.5 * this.a * this.t * this.t - 1
      this.t += 0.01
    },10)
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
  font-size: 1rem;
}
</style>
