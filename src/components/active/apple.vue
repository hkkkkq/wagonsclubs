<template>
<div>
    <img src="../../assets/active/apple.jpeg" :style="{top:top+'rem',left:left + 'rem'}" class="apple"></i>
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
    currx: function(){
      console.log(this.currx)
    },
    top:function(){
      if(this.top > 9.6){
        //苹果宽度 0.25rem
        if (this.currx < this.left && this.currx + 1.8 > this.left + 0.5 ){
          this.$emit('increment')
          clearInterval(this.int)
          this.down()
          return;
        }else{
          clearInterval(this.int)
          this.down()  
        }
      }
    },
    // currx () {
      // console.log(this.currx)
    // }
  },
  methods: {
    down () {
      this.a = Math.random() * 3 + 1
      this.left = Math.random()*6.5
      this.top = -1
      this.t = 0
      this.int = setInterval(()=>{
        this.top = 0.5 * this.a * this.t * this.t - 1
      this.t += 0.02
    },16.6)
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
  width: 0.5rem;
}
</style>
