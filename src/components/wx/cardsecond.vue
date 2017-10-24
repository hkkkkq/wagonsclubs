<template>
<div class="wrap">
    <div :class="{'card1':(ind == 1) || (ind == 2),'card2':(ind == 4) || (ind == 3)}">
        <p>充值金额</p>
        <h1>¥{{money}}</h1>
        <div>
            <span>赠送{{presented}}元</span>
            <span style="float:right">{{discount}}折</span>
        </div>
    </div>
    <div class="line"></div>
    <div class="wxpay">
        <img class="icon" src="../../assets/app/wxpay_03.png">
        <span style="margin-left:0">微信支付</span>
        <span style="margin-right:0">去支付</span>
        <img class="right" src="../../assets/app/wxright.png">
    </div>
    <p class="gary">充值金额暂不支持提现功能</p>
    <img class="bottomlogo" src="../../assets/app/blogo.png">
</div>
</template>

<script>
export default {
  data() {
    return {
      ind: "",
      presented: "",
      money: "",
      discount: ""
    };
  },
  created() {
    this.ind = this.$route.query.ind;
    if (this.$route.query.ind == 1) {
      this.presented = 800;
      this.money = 10000;
      this.discount = 9.2;
    } else if (this.$route.query.ind == 2) {
      this.presented = 3600;
      this.money = 30000;
      this.discount = 8.8;
    } else if (this.$route.query.ind == 3) {
      this.presented = 7500;
      this.money = 50000;
      this.discount = 8.5;
    } else if (this.$route.query.ind == 4) {
      this.presented = 20000;
      this.money = 100000;
      this.discount = 8;
    }
  }
};
</script>

<style lang="scss" scoped>
$bgcolor: #0f1923;
$yellow: #fed945;
$font: PingFangSC-Light, sans-serif;
$divbgcolor: #273039;
.border {
  border-radius: 0.04rem;
}
//
.wrap {
  background: $bgcolor;
  width: 100%;
  color: #000;
  height: 100%;
  font-family: $font;
}
.card {
  width: 7.1rem;
  margin: 0.4rem auto;
  height: 4.2rem;
  background-size: 100% 100% !important;
  overflow: hidden;
  @extend .border;
  p {
    font-size: 0.3rem;
    margin: 0.5rem;
  }
  h1 {
    margin: 0.5rem;
    font-size: 0.58rem;
  }
  div {
    font-size: 0.24rem;
    padding: 0.5rem;
    margin-top: 1rem;
  }
}
.card1 {
  @extend .card;
  background: url("../../assets/app/bigsilver.png");
}
.card2 {
  @extend .card;
  background: url("../../assets/app/biggolden.png");
}
.line {
  width: 7.3rem;
  float: right;
  height: 1px;
  background: $divbgcolor;
  margin: 0.3rem 0;
  display: block;
}
.wxpay {
  width: 6.5rem;
  padding: 0.3rem;
  margin: auto;
  display: flex;
  display: -webkit-flex;
  background: $divbgcolor;
  color: #ffffff;
  font-size: 0;
  .icon {
    margin-left: 0!important;
    margin-right: 0.2rem!important;
    width: 0.48rem;
    height: 0.48rem;
    margin: auto;
  }
  .right {
    width: 0.1rem;
    height: 0.2rem;
    margin: auto;
    margin-left: 0.3rem!important;
    margin-right: 0!important;
  }
  span {
    font-size: 0.26rem;
    margin: auto;
  }
}
.gary {
  margin: 0.2rem;
  color: #999999;
  font-size: 0.22rem;
}
.bottomlogo {
  position: absolute;
  width: 5.22rem;
  height: 0.59rem;
  display: block;
  margin: 0.74rem auto auto;
  padding-bottom: 0.78rem;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
