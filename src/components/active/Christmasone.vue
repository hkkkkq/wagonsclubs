<template>
<div class="one">
  <div @click="go" class="but"><img src="/static/christmas/gosave.png"></div>
  <img :class="{'an1':count === 6}" class="load1" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load1.png">
  <img :class="{'an1':count === 6}" class="load2" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load2.png">
  <img :class="{'an1':count === 6}" class="load3" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load3.png">
  <img :class="{'an1':count === 6}" class="load4" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load4.png">
</div>
</template>

<script>
export default {
  data () {
    return{
      count: 0,      
      urllink:'',
    }
  },
  watch: {
    count (val) {
      if(val == 2){
        // alert('图片全部加载完毕')
      }
    }
  },
  computed: {
    WAG() {
      return this.$store.state.WAG;
    }
  },
  created () {
    if (/iPhone/i.test(navigator.userAgent)) {
      this.urllink = "http://www.wagonsclub.com/wx/christmas?WAG=" + this.WAG;
    } else {
      this.urllink = location.href;
    }
    var vm =this
    this.$ajax(
      BASE_URL +
        "/car/weixinShare?ts=" +
        new Date().getTime() +
        "&url=" + vm.urllink
    )
      .then(res => {
        this.wxsign = res.data.data
        wx.config({
          debug: false,
          appId: vm.wxsign.sign.appId,
          timestamp: vm.wxsign.sign.timestamp,
          nonceStr: vm.wxsign.sign.nonceStr,
          signature: vm.wxsign.sign.signature,
          jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
        });
        wx.ready(function () {
          wx.onMenuShareTimeline({
            title: "干翻大魔王，赢取法拉利458使用权",
            link: "http://wap.wagonsclub.com/weixin/redirect/ChristmasFighting",
            imgUrl:"http://www.wagonsclub.com/static/christmas/sharelogo2.png",
          });
          wx.onMenuShareAppMessage({
            title: "WAGONS光速超跑圣诞节活动",
            desc: "干翻大魔王，赢取法拉利458使用权",
            link: "http://wap.wagonsclub.com/weixin/redirect/ChristmasFighting",
            imgUrl:"http://www.wagonsclub.com/static/christmas/sharelogo2.png",
          });
        })
      })
      .catch(res => {
        alert(res);
      });
  },
  methods: {
    go () {
      this.$router.push('/wx/christmas/two')
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
    animation: load5 1s ease-in-out 2.5s infinite;
    -webkit-animation: load5 1s ease-in-out 2.5s infinite;
    width: 50%;
    height: 1rem;
    opacity: 0;
    font-size: 24px;
    text-align: center;
    margin: auto;
    border-radius: 100px;
    position: absolute;
    z-index: 9999999;
    line-height: 42px;
    left: 0;
    top: 5rem;
    right: 0;
    img{
      width: 100%;
    }
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
to {top: 0.26rem}
}
@-webkit-keyframes load2 
{
from {top: -5.3rem}
to {top: 0.26rem}
}
@keyframes load3
{
from {top: 15.5rem}
to {top: 5.4rem}
}
@-webkit-keyframes load3 
{
from {top: 15.5rem}
to {top: 5.4rem}
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
  animation: load1 0.5s ease-in 0.5s;
  -webkit-animation: load1 0.5s ease-in 0.5s;
  animation-fill-mode: forwards;
  // left: 0.2rem;
  left: -3.5rem;
  position: absolute;
  height:5.3rem;
  top: 0.26rem;
  width: 3.3rem;
}
.load2{
  animation: load2 0.5s ease-in 1s;
  -webkit-animation: load2 0.5s ease-in 1s;
  animation-fill-mode: forwards;
  right: 0.3rem;
  top:-5.3rem;
  position: absolute;
  height:5.3rem;
  width: 4.78rem;
}
.load3{
  animation: load3 0.5s ease-in 1.5s;
  -webkit-animation: load3 0.5s ease-in 1.5s;
  animation-fill-mode: forwards;
  top: 15.15rem;
  left: 0.1rem;
  position: absolute;
  height:6.42rem; 
  width: 4.84rem;
}
.load4{
  animation: load4 0.5s ease-in 2s;
  -webkit-animation: load4 0.5s ease-in 2s;
  animation-fill-mode: forwards;
  // bottom: 0.3rem;
  top: 5.72rem;
  right: -3.6rem;  
  position: absolute;
  height:6.08rem; 
  width: 3.49rem;
}
</style>
