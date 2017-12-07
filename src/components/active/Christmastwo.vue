<template>
<div class="wrap">
  <!-- <p>{{score}}</p> -->
  <img class="faker" src="../../assets/active/faker.png">
  <div class="hp">
    <div :style="{'width':live + '%'}" class="red">HP</div>
  </div>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple1" v-if="apple1"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple2" v-if="apple2"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple3" v-if="apple3"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple4" v-if="apple4"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple5" v-if="apple5"></apple>
  <img :style="{left: leftx+'rem'}" :class="{'reserveman':reserveman}" class="man" :src="man[manindex]">
  <button :class="{'leftdown':leftdown}" class="left" @touchstart="move($event,'L')" @touchend="moveend('L')"></button>
  <button :class="{'rightdown':rightdown}" class="right" @touchstart="move($event,'R')" @touchend="moveend('R')"></button>
  <div v-show='gameover' class="zz">
    <div @click="share" class="but"></div>
    <img v-show='!gameover' class="false" src="/static/img/falsecall.png">
    <img v-show='gameover' class="false" src="/static/img/successcall.png">
  </div>
</div>
</template>

<script>
import apple from "./apple.vue";
export default {
  data() {
    return {
      man: ['/static/img/man.png','/static/img/manget.png','/static/img/mandead.png'],
      manindex:0,
      leftdown:false,
      rightdown:false,
      leftx: 0,
      leftloop: "",
      rightloop: "",
      apple1: true,
      apple2: false,
      apple3: false,
      apple4: false,
      apple5: false,
      score: 0,
      live:100,
      gameover:false,
      reserveman:true
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
    share () {
      alert('分享')
    },
    move(event, type) {
      event.preventDefault();
      var vm = this
      if (type === "L") {
        this.reserveman = false
        this.leftdown = true
        function gol(params) {
          if(vm.leftx < 0){
            return
          }else{
            vm.leftx += -0.06
          }
          vm.leftloop = requestAnimationFrame(gol)          
        }
        gol()
      } else {
        this.reserveman = true
        this.rightdown = true
        function gor(params) {
          if(vm.leftx > 5){
            return
          }else{
            vm.leftx += 0.06;
          }
          vm.rightloop = requestAnimationFrame(gor)
        }
        gor()
      }
    },
    moveend(type) {
      if (type === "L") {
        this.leftdown = false
        window.cancelAnimationFrame(this.leftloop)
      } else {
        this.rightdown = false
        window.cancelAnimationFrame(this.rightloop)
      }
    },
    incrementTotal (random) {
      if (random == 0) {
        //炸弹
        this.manindex = 2
        setTimeout(() => {
          this.manindex = 0
        }, 500);
        return
      }else{
        this.manindex = 1
        setTimeout(() => {
          this.manindex = 0
        }, 500);
        if(random == 1){
          //苹果
          this.live -= 10
          if (this.live <= 0){
            //成功
            this.live = 0
            this.gameover = true
          }else{
            return
          }
        }else{
          //商家
          this.live -= 5
          if(this.live <= 0){
            //成功
            this.live = 0
            this.gameover = true
          }else{
            return
          }
        }
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.zz{
  position: fixed;
  top:0;
  background: rgba(0,0,0,0.8);
  width: 100%;
  font-size: 0;
  display: flex;
  z-index: 11;
  display: -webkit-flex;
  height: 100%;
  .false{
    margin: auto;
    width: 66%
  }
  .but{
    width: 40%;
    height: 1rem;
    position: absolute;
    background: pink;
    left: 0;
    right: 0;
    margin: auto;
    top: 8.5rem;
  }
}
.hp{
  width: 4.66rem;
    height: 0.45rem;
    display: inline-block;
    border: 2px solid #fff;
    position: relative;
    top: -0.5rem;
    left: -0.25rem;
    border-radius: 4px;
    background: #000;
    .red{
      transition: all 0.2s ease-in;
      -webkit-transition: all 0.2s ease-in;
      width: 80%;
      height: 100%;
      font-size: 0.3rem;
      text-indent: 0.2rem;
      color: #fff;
      line-height: 0.5rem;
      background: red;
    }
}
.left{
  left:0.5rem;
  background: url('../../assets/active/left.png');
}
.leftdown{
  background: url('../../assets/active/leftdown.png')!important;
}
.right{
  right:0.5rem;
  background: url('../../assets/active/right.png');
}
.rightdown{
  background: url('../../assets/active/rightdown.png')!important;
}
.faker{
  width: 1.96rem;
  height: 1.83rem;
  z-index: 10;
  position: relative;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
  display: inline-block;
}
.wrap {
  font-size: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: url('../../assets/active/bg2.png');
  background-size: 100% 100%;
  button {
    border: 0;
    background-size: 100%!important;
    width: 2.6rem;
    height: 1.26rem;
    background-repeat: no-repeat!important;
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
  .reserveman{
    transform: rotateY(180deg);
  }
  .man {
    width: 2.56rem;
    position: absolute;
    bottom: 2.5rem;
    // margin: auto;
  }
}
</style>
