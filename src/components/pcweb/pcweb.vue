<template>
  <div class="pcweb">
    <div @click='ind' class="oo"></div>
    <div class="header">
      <router-link v-on:click.native="changecolor1" class="router-link" v-bind:class="{'active':homeactive1}" to="/first">
        <i>首页</i>
      </router-link>
      <span class="shu"></span>
      <router-link v-on:click.native="changecolor2" class="router-link" v-bind:class="{'active':homeactive2}" to="/second">
        <i>俱乐部动态</i>
      </router-link>
      <span class="shu"></span>
      <router-link v-on:click.native="changecolor3" class="router-link" v-bind:class="{'active':homeactive3}" to="/third">
        <i>用车须知</i>
      </router-link>
      <span class="shu"></span>
      <router-link v-on:click.native="changecolor4" class="router-link" v-bind:class="{'active':homeactive4}" to="/forth">
        <i>会员说明</i>
      </router-link>
      <span class="phone"></span>
    </div>
    <router-view></router-view>
    <div v-if="qr_show" class="rightlab">
      <a @click="closeqr" href="javascript:;" class="cclose"></a>
      <img src="../../assets/car_dingyuehao.png" alt="" class="qr" />
      <p>扫码关注我们</p>
      <img style="margin-top: 10px;" src="../../assets/appqr.png" alt="" class="qr" />
      <p>立即下载APP</p>
      <br>
    </div>
    <!-- <div class="QQ">
      <img @click="qqserver" src="../../assets/qqserver.png">
      <transition name="fade">
        <div :class="{'QQhide':qqshow}" v-show="qqshow">
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2::52" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1036335394&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:1036335394:52" alt="点击这里给我发消息" title="点击这里给我发消息" /></a>
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1036335394&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:1036335394:52" alt="点击这里给我发消息" title="点击这里给我发消息" /></a>
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1036335394&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:1036335394:52" alt="点击这里给我发消息" title="点击这里给我发消息" /></a>
        </div>
      </transition>
    </div> -->
    <div class="footer">
      <p class="no1">合作伙伴：搬运工&nbsp;&nbsp;
        <a href="https://www.huoqiu.cn" target="_blank" style="color:#777777; cursor: pointer;text-decoration: none;">火球理财</a>&nbsp;&nbsp;
        <a href="http://www.quhuanqian.cn/" target="_blank" style="color:#777777; cursor: pointer;text-decoration: none;">趣还钱</a>&nbsp;&nbsp;
      </p>
      <p class="no2">京ICP备17029862号-1 铭博顺通（北京）科技发展有限公司版权所有©2017</p>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      homeactive1: true,
      homeactive2: false,
      homeactive3: false,
      homeactive4: false,
      qr_show: true,
      qqshow: false
    }
  },
  mounted() {
    window.scroll(0, 0)
    let i = this.$route.path;
    if (i == '/first') { this.changecolor1() }
    if (i == '/second') { this.changecolor2() }
    if (i == '/third') { this.changecolor3() }
    if (i == '/forth') { this.changecolor4() }
  },
  methods: {
    qqserver(){
      if(this.qqshow == true){
        this.qqshow = false
      }else{
        this.qqshow = true
      }
    },
    closeqr: function() {
      this.qr_show = false;
    },
    changecolor1: function() {
      this.homeactive1 = true
      this.homeactive2 = false
      this.homeactive3 = false
      this.homeactive4 = false
    },
    changecolor2: function() {
      this.homeactive1 = false
      this.homeactive2 = true
      this.homeactive3 = false
      this.homeactive4 = false

    },
    changecolor3: function() {
      this.homeactive1 = false
      this.homeactive2 = false
      this.homeactive3 = true
      this.homeactive4 = false

    },
    changecolor4: function() {
      this.homeactive1 = false
      this.homeactive2 = false
      this.homeactive3 = false
      this.homeactive4 = true
    },
    ind() {
      location.href = location.origin
    }
  }


}
</script>
<style type="text/css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0;
}
.QQhide{
  /* width: 0; */
}
.QQ>div {
  display: inline-block;
  /* transition: width 0.5s; */
  width: 90px;
}

.QQ>img {
  width: 37px;
  display: inline-block;
}

.QQ {
  position: fixed;
  right: 0;
  bottom: 76px;
}

.rightlab p {
  font-size: 14px;
  color: #f4f4f4;
  text-align: center;
}

.rightlab .qr {
  display: block;
  margin: 37px auto 13px;
  width: 128px;
  height: 128px;
}

.rightlab .cclose {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 14px;
  height: 14px;
  background: url("../../assets/car_close.png") no-repeat;
  background-size: 100% 100%;
}

.rightlab {
  width: 173px;
  position: fixed;
  right: 0;
  top: 25%;
  height: auto;
  background-color: #333333;
  z-index: 100;
}

.oo {
  position: absolute;
  display: block;
  width: 250px;
  height: 50px;
  top: 32px;
  left: 141px;
  cursor: pointer;
}

.shu {
  display: inline-block;
  width: 1px;
  height: 16px;
  background: #797979;
  padding-top: 0px;
  margin: -3px 10px;
}

.pcweb {
  font-family: "Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue", Calibri, Helvetica, Arial, sans-serif;
  background-color: #fff;
}

.active {
  color: #090405!important;
}

.header {
  width: 1000px;
  height: 100px;
  background: url("../../assets/carRental_logo3.png") no-repeat left 34px;
  padding-top: 49px;
  background-size: 256px 43px;
  box-sizing: border-box;
  margin: auto;
  padding-left: 314px;
  background-position: 0 40px;
}

.footer {
  width: 100%;
  min-width: 1000px;
  height: 82px;
  padding-top: 18px;
  box-sizing: border-box;
  background-color: #dcdcdc;
}

.footer p {
  text-align: center;
}

.no1 {
  width: 1000px;
  height: 22px;
  color: #777777;
  font-size: 14px;
  margin: 0 auto;
  border-bottom: 1px solid #c5c5c5;
}

.no2 {
  width: 780px;
  height: 22px;
  color: #777777;
  font-size: 13px;
  padding-top: 9px;
  margin: 0 auto;
}

.router-link {
  line-height: 33px;
  display: inline-block;
  text-decoration: none;
  color: #797979;
  margin-right: 0px;
}

.router-link i {
  display: block;
  font-size: 17px;
}

.router-link b {
  margin-top: 6px;
  display: block;
  font-size: 11px;
}

.phone {
  float: right;
  background: url('../../assets/car_tel.png') 0 5px no-repeat;
  display: block;
  width: 242px;
  height: 45px;
  position: relative;
  top: -15px;
}
</style>
