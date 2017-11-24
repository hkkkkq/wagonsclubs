<template>
<div class="wrap">
  <p>{{score}}</p>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple1" v-if="apple1"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple2" v-if="apple2"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple3" v-if="apple3"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple4" v-if="apple4"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple5" v-if="apple5"></apple>
  <img :style="{left: leftx+'rem'}" class="man" src="../../assets/active/aa.gif">
  <button @touchstart="move($event,'L')" @touchend="moveend('L')" style="left:10px">⬅️</button>
  <button @touchstart="move($event,'R')" @touchend="moveend('R')" style="right:10px">➡️</button>
</div>
</template>

<script>
import apple from "./apple.vue";
export default {
  data() {
    return {
      leftx: 0,
      leftloop: "",
      rightloop: "",
      apple1: true,
      apple2: false,
      apple3: false,
      apple4: false,
      apple5: false,
      score: 0
    };
  },
  watch:{
    // this.$refs.apple1
  },
  mounted () {
    setTimeout(() => {
      this.apple2 = true
    }, 2000);
    setTimeout(() => {
      this.apple3 = true
    }, 4000);
    setTimeout(() => {
      this.apple4 = true
    }, 6000);
    setTimeout(() => {
      this.apple5 = true
    }, 8000);
  },
  components:{
    apple: apple
  },
  methods: {
    move(event, type) {
      event.preventDefault();
      if (type === "L") {
        this.leftloop = setInterval(() => {
          if (this.leftx < 0) {
            return
          } else {
            this.leftx += -0.06;
          }
        }, 16.6);
      } else {
        this.rightloop = setInterval(() => {
          if (this.leftx > 6) {
            return
          }else{
            this.leftx += 0.06;
          }
        }, 16.6);
      }
    },
    moveend(type) {
      if (type === "L") {
        clearInterval(this.leftloop);
      } else {
        clearInterval(this.rightloop);
      }
    },
    incrementTotal () {
      this.score += 1
    }
  }
};
</script>

<style lang='scss' scoped>
.wrap {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: gray;
  button {
    position: absolute;
    font-size: 1rem;
    bottom: 10px;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  span{
    font-size:0.5rem
  }
  .man {
    width: 2rem;
    position: absolute;
    bottom: 2rem;
    // left: 0;
    // right: 0;
    // margin: auto;
  }
}
</style>
