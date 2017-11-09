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
    <!-- <transition name="fade"> -->
    <div v-show="aboutus" class="rightlab">
      <span @click="close(1)" class="clo">--</span>
      <img src="../../assets/dingyuehao1.png" alt="" class="qr" />
      <p>关注我们</p>
      <img style="margin-top: 10px;" src="../../assets/appqr.png" alt="" class="qr" />
      <p>下载APP</p>
      <br>
    </div>
    <!-- </transition> -->
    <div v-show="onlineServer" class="kefu">
      <span @click="close(2)" class="clo">--</span>
      <h1>WAGONS</h1>
      <h2>在线客服</h2>
      <p></p>
      <div @click="talk(1)" class="hm">
        <img src='../../assets/ella.png'>
        <span>Ella</span>
      </div>
      <div @click="talk(2)" class="hm">
        <img src='../../assets/angela.png'>
        <span>Angela</span>
      </div>
      <div @click="talk(3)" class="hm">
        <img src='../../assets/grace.png'>
        <span>Grace</span>
      </div>
      <p></p>
      <h2>欢迎咨询！</h2>
    </div>
    <div v-show="!aboutus" @click="Expand(1)" class="aboutus">
      <img src="../../assets/littleqr_03.png">
      <span>关注我们</span>
    </div>
    <div v-show="!onlineServer" @click="Expand(2)" class="onlineServer">
      <img src="../../assets/QQ_07.png">
      <span>在线客服</span>
    </div>
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
      onlineServer: true,
      aboutus: true
    };
  },
  mounted() {
    window.scroll(0, 0);
    let i = this.$route.path;
    if (i == "/first") {
      this.changecolor1();
    }
    if (i == "/second") {
      this.changecolor2();
    }
    if (i == "/third") {
      this.changecolor3();
    }
    if (i == "/forth") {
      this.changecolor4();
    }
  },
  methods: {
    Expand(n) {
      if (n == 1) {
        this.aboutus = true;
      } else {
        this.onlineServer = true;
      }
    },
    close(n) {
      if (n == 1) {
        this.aboutus = false;
      } else if (n == 2) {
        this.onlineServer = false;
      }
    },
    talk(n) {
      if (n == 1) {
        //刘旭婷
        window.open(
          "http://wpa.qq.com/msgrd?v=3&uin=1036335394&site=qq&menu=yes"
        );
      } else if (n == 2) {
        //马晨
        window.open(
          "http://wpa.qq.com/msgrd?v=3&uin=1036335394&site=qq&menu=yes"
        );
      } else if (n == 3) {
        window.open("http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes");
      }
    },
    changecolor1: function() {
      this.homeactive1 = true;
      this.homeactive2 = false;
      this.homeactive3 = false;
      this.homeactive4 = false;
    },
    changecolor2: function() {
      this.homeactive1 = false;
      this.homeactive2 = true;
      this.homeactive3 = false;
      this.homeactive4 = false;
    },
    changecolor3: function() {
      this.homeactive1 = false;
      this.homeactive2 = false;
      this.homeactive3 = true;
      this.homeactive4 = false;
    },
    changecolor4: function() {
      this.homeactive1 = false;
      this.homeactive2 = false;
      this.homeactive3 = false;
      this.homeactive4 = true;
    },
    ind() {
      location.href = location.origin;
    }
  }
};
</script>
<style lang='scss' type="text/css" scoped>
.aboutus {
  width: 126px;
  height: 45px;
  background: #272727;
  position: fixed;
  right: 0;
  display: flex;
  display: -webkit-flex;
  bottom: 140px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: #fff;
  z-index: 1;
  img {
    width: 18px;
    margin: auto;
    margin-left: 16px;
    margin-right: 0;
  }
  span {
    width: 65px;
    margin: auto;
    margin-left: 14px;
    font-size: 14px;
  }
}
.onlineServer {
  width: 126px;
  height: 45px;
  display: flex;
  display: -webkit-flex;
  background: #fed945;
  width: 127px;
  height: 45px;
  position: fixed;
  right: 0;
  bottom: 70px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: #272727;
  z-index: 1;
  img {
    width: 20px;
    height: 24px;
    margin: auto;
    margin-left: 16px;
    margin-right: 0;
  }
  span {
    width: 65px;
    margin: auto;
    font-size: 14px;
    margin-left: 14px;
  }
}
.kefu {
  width: 126px;
  position: fixed;
  background: #fed945;
  height: 310px;
  right: 0;
  color: #000000;
  z-index: 100;
  bottom: 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  .clo {
    cursor: pointer;
    width: 14px;
    height: 14px;
    background: #e8c742;
    font-size: 1px;
    line-height: 14px;
    display: block;
    border-radius: 4px;
    margin-top: 0.5rem;
    margin-left: 0.8rem;
    color: #ffffff;
    letter-spacing: -2px;
        text-indent: 4px;
  }
  h1 {
    font-size: 22px;
    font-weight: bolder;
    text-align: center;
    margin-top: 10px;
  }
  h2 {
    font-size: 14px;
    text-indent: 13px;
    margin-top: 8px;
  }
  p {
    border-top: 1px solid #666666;
    opacity: 0.3;
    width: 100px;
    margin: auto;
    margin-top: 14px;
  }
  .hm {
    display: flex;
    display: -webkit-flex;
    width: 100px;
    cursor: pointer;
    height: 45px;
    background: #272727;
    margin: 10px;
    border-radius: 4px;
    img {
      margin: auto;
      width: 32px;
    }
    span {
      color: #fff;
      margin: auto;
      width: 50px;
    }
  }
}

.fade-enter-active {
  animation: myfirst 1s reverse;
}
.fade-leave-active {
  animation: myfirst 1s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.rightlab .clo {
  background: #3d3d3d;
  border-radius: 4px;
  color: #fff;
  display: block;
  width: 14px;
  height: 14px;
  cursor: pointer;
  margin-top: 0.5rem;
  margin-left: 0.8rem;
  font-size: 1px;
  line-height: 14px;
  letter-spacing: -2px;
      text-indent: 4px;
}
.rightlab p {
  font-size: 14px;
  color: #f4f4f4;
  text-align: center;
}

.rightlab .qr {
  display: block;
  margin: 11px 18px;
  width: 94px;
  height: auto;
}

.rightlab {
  width: 126px;
  position: fixed;
  right: 0;
  bottom: 326px;
  height: auto;
  background-color: #333333;
  z-index: 100;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
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
  font-family: "Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue",
    Calibri, Helvetica, Arial, sans-serif;
  background-color: #fff;
}

.active {
  color: #090405 !important;
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
  background: url("../../assets/car_tel.png") 0 5px no-repeat;
  display: block;
  width: 242px;
  height: 45px;
  position: relative;
  top: -15px;
}
</style>
