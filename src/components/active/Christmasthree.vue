<template>
<div class="three">
  <div @click="start" class="but">去营救</div>
  <div class="rad">
    <img class="arrow" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/arrow.png">
    <img :class="{'an':zhuan}" class="pan" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/rad.png">
  </div>
  <div class="bordcast">
    <p>
      <img src="../../assets/active/brodcast.png">
      张**获得了法拉利豪车试驾券
    </p>
  </div>
</div>
</template>

<script>
require("../app/rem.js")(window, document);
export default {
  data () {
    return{
      zhuan: false
    }
  },
  methods: {
    start () {
      this.zhuan = true
      setTimeout(() => {
        alert('恭喜你获得了法拉利一辆')
        this.zhuan = false
      }, 2000);
    }
  }
}
</script>

<style lang='scss' scoped>
  .but{
    animation: load5 1s ease-in-out infinite;
    -webkit-animation: load5 1s ease-in-out infinite;
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
.bordcast{
  display: flex;
  position: absolute;
  bottom: 0.32rem;
  width: 80%;
  font-size: 0;
  background: #fff;
  height: 0.5rem;
  border: 3px solid #2e896c;
  border-radius: 1rem;
  margin: auto;
  left: 0;
  right: 0;
  p{
    font-size: 16px;
    margin: auto;
    padding: 0 5%;
    line-height: 24px;
  }
  img{
    display: inline-block;
    width: 0.32rem;
    position: relative;
    top: 3px;
    height: 0.36rem;
  }
}
@keyframes myfirst
{
0% {transform:rotate(0deg);}
100% {transform:rotate(360deg);}
}
@-webkit-keyframes myfirst
{
0% {transform:rotate(0deg);}
100% {transform:rotate(360deg);}
}
.three{
  width: 100%;
  height: 100%;
  background: url('http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/presentbj.png');
  background-size: 100% 100%;
}
.rad{
  width: 5.3rem;
  height: 5.3rem;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  display: -webkit-flex;
  margin: auto;
  bottom: 16%;
  .an{
    animation: myfirst 0.5s linear 3;
    -webkit-animation: myfirst 0.5s linear 3;
  }
  .pan{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .arrow{
    position: relative;
    margin: auto;
    z-index: 2;
    margin-top: 1.3rem;
    height:2.1rem;
  }
}
</style>
