<template>
<div class="three">
  <div class="rad">
    <img class="arrow" src="/static/img/arrow.png">
    <img class="pan" src="/static/img/rad.png">
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

}
</script>

<style lang='scss' scoped>
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
  background: url('/static/img/presentbj.png');
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
  .pan{
    animation: myfirst 0.5s linear 3;
    -webkit-animation: myfirst 0.5s linear 3;
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
