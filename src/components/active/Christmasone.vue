<template>
<div class="one">
  <img :class="{'an1':count === 6}" class="load1" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load1.png">
  <img :class="{'an1':count === 6}" class="load2" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load2.png">
  <img :class="{'an1':count === 6}" class="load3" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load3.png">
  <img :class="{'an1':count === 6}" class="load4" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load4.png">
  <div @click="go" class="but">去营救</div>
</div>
</template>

<script>
export default {
  data () {
    return{
      count: 0,
    }
  },
  watch: {
    count (val) {
      if(val == 2){
        // alert('图片全部加载完毕')
      }
    }
  },
  mounted () {
  },
  methods: {
    go () {
      this.$router.push('/Christmas/two')
    }
  }
}
</script>

<style lang='scss' scoped>
@keyframes load5
{
0% {opacity: 0.5;}
50% {opacity: 1}
100%{opacity: 0.5;}
}
@-webkit-keyframes load5 
{
0% {opacity: 0.5;}
50% {opacity: 1}
100%{opacity: 0.5;}
}
.one{
  .but{
    animation: load5 1s ease-in-out 6.5s infinite;
    -webkit-animation: load5 1s ease-in-out 6.5s infinite;
    width: 50%;
    height: 1rem;
    opacity: 0;
    background: orange;
    color: #222;
    font-size: 24px;
    text-align: center;
    margin: auto;
    border-radius: 100px;
    position: absolute;
    z-index: 100;
    line-height: 42px;
    left: 0;
    right: 0;
    bottom: 2rem;
  }
  width: 100%;
  height: 100%;
  overflow: hidden;
}
@keyframes load1
{
from {left: -3.5rem}
to {left: 0.2rem}
}
@-webkit-keyframes load1 
{
from {left: -3.5rem}
to {left: 0.2rem}
}
@keyframes load2
{
from {top: -5.3rem}
to {top: 0rem}
}
@-webkit-keyframes load2 
{
from {top: -5.3rem}
to {top: 0rem}
}
@keyframes load3
{
from {top: 13.5rem}
to {top: 5.15rem}
}
@-webkit-keyframes load3 
{
from {top: 13.5rem}
to {top: 5.15rem}
}
@keyframes load4
{
from {right: -3.6rem}
to {right: 0.3rem}
}
@-webkit-keyframes load4 
{
from {right: -3.6rem}
to {right: 0.3rem}
}
.an1{

}
.load1{
  animation: load1 1s ease-in 0.5s;
  -webkit-animation: load1 1s ease-in 0.5s;
  animation-fill-mode: forwards;
  // left: 0.2rem;
  left: -3.5rem;
  position: absolute;
  height:5.3rem;
  width: 3.36rem;
}
.load2{
  animation: load2 1s ease-in 2s;
  -webkit-animation: load2 1s ease-in 2s;
  animation-fill-mode: forwards;
  right: 0.3rem;
  top:-5.3rem;
  position: absolute;
  height:5.3rem;
  width: 4.76rem;
}
.load3{
  animation: load3 1s ease-in 3.5s;
  -webkit-animation: load3 1s ease-in 3.5s;
  animation-fill-mode: forwards;
  top: 13.15rem;
  left: 0.1rem;
  position: absolute;
  height:6.9rem; 
  width: 5rem;
}
.load4{
  animation: load4 1s ease-in 5s;
  -webkit-animation: load4 1s ease-in 5s;
  animation-fill-mode: forwards;
  // bottom: 0.3rem;
  top: 5.4rem;
  right: -3.6rem;  
  position: absolute;
  height:6.65rem; 
  width: 3.46rem;
}
</style>
