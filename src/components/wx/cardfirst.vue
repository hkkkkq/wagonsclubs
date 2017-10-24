<template>
<div class="wrap">
  <p class="title">我的充值卡</p>
  <div class="balance">
    <img src="../../assets/app/refillcard.png">
    <span>充值卡余额</span>
    <span style="margin-right:0">54888.00</span>
  </div>
  <div class="showcard">
    <div @click="choose(1)" class="card1">
      <img v-show="ind == 1" src="../../assets/app/cardr.png">
      <h1>¥<b>10000</b></h1>
      <div>
        <span style="float:left">赠送800元</span>
        <span style="float:right">9.2折</span>
      </div>
    </div>
    <div @click="choose(2)" class="card1">
      <img v-show="ind == 2" src="../../assets/app/cardr.png">
      <h1>¥<b>30000</b></h1>
      <div>
        <span style="float:left">赠送3600元</span>
        <span style="float:right">8.8折</span>
      </div>
    </div>
    <div @click="choose(3)" class="card2">
      <img v-show="ind == 3" src="../../assets/app/cardr.png">
      <h1>¥<b>50000</b></h1>
      <div>
        <span style="float:left">赠送7500元</span>
        <span style="float:right">8.5折</span>
      </div>
    </div>
    <div @click="choose(4)" class="card2">
      <img v-show="ind == 4" src="../../assets/app/cardr.png">
      <h1>¥<b>100000</b></h1>
      <div>
        <span style="float:left">赠送20000元</span>
        <span style="float:right">8折</span>
      </div>
    </div>
  </div>
  <div @click="topay" class="button">立即充值</div>
  <p class="gary">若金额超出银行卡在线支付限额，请您到店办理</p>
  <div class="line"></div>
  <div style="height:24px"></div>
  <p class="title">充值说明</p>  
  <div class="introduce">
    <span></span>
    <b>充值只可以选择以上固定档位金额</b>
  </div>
  <div class="introduce">
    <span></span>
    <b>充值赠送礼金可用于租车消费，不可充当租车押金</b>
  </div>
  <div class="introduce">
    <span></span>
    <b>充值金额及赠送礼金永久有效</b>
  </div>
  <img class="bottomlogo" src="../../assets/app/blogo.png">
</div>
</template>

<script>
export default {
  data() {
    return {
      ind: 1
    };
  },
  methods: {
    choose(n) {
      this.ind = n;
    },
    topay(){
      this.$router.push({path:"/wx/card/second",query:{ind:this.ind}})
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
//上面是变量
.wrap {
  background: $bgcolor;
  width: 100%;
  color: #fff;
  height: 100%;
  font-family: $font;
}
.title {
  font-size: 0.24rem;
  border-left: 3px solid $yellow;
  margin-top: 0.38rem;
  margin-left: 0.2rem;
  text-indent: 0.2rem;
}
.balance {
  background: $divbgcolor;
  width: 6.5rem;
  padding: 0.3rem;
  display: flex;
  display: -webkit-flex;
  margin: auto;
  font-size: 0;
  @extend.border;
  margin: 0.18rem;
  img {
    width: 0.5rem;
    height: 0.5rem;
    margin: 0;
    display: inline-block;
  }
  span {
    font-size: 0.26rem;
    margin: auto;
    margin-left: 0.2rem;
    display: inline-block;
  }
}
.showcard {
  width: 100%;
  height: 2rem;
  overflow-x: auto;
  display: block;
  margin: 0.36rem 0;
  font-size: 0;
  white-space: nowrap;
  .card {
    width: 3rem;
    height: 100%;
    @extend .border;
    position: relative;
    margin: 0 0.2rem;
    color: #000000;
    background-size: 100% 100% !important;
    display: inline-block;
    vertical-align: top;
    h1 {
      font-size: 0.48rem;
      margin: 0.4rem;
    }
    div {
      font-size: 0.24rem;
      padding: 0.3rem;
      margin-top: 0.4rem;
    }
    img {
      width: 0.44rem;
      height: 0.44rem;
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
    }
  }
  .card1 {
    @extend .card;
    background: url("../../assets/app/silvercard.png");
  }
  .card2 {
    @extend .card;
    background: url("../../assets/app/goldencard.png");
  }
}
.button {
  @extend .border;
  background: $yellow;
  font-size: 0.26rem;
  color: #000000;
  margin: auto;
  display: block;
  width: 7.1rem;
  line-height: 0.72rem;
  height: 0.72rem;
  text-align: center;
}
.gary {
  margin: 0.2rem;
  color: #999999;
  font-size: 0.22rem;
}
.line {
  width: 7.3rem;
  float: right;
  height: 1px;
  background: $divbgcolor;
  margin: 0.3rem 0;
  display: block;
}
.introduce {
  width: 6.9rem;
  padding: 0 0.3rem;
  margin: 0.28rem 0;
  font-size: 0;
  display: flex;
  display: -webkit-flex;
  span {
    width: 5px;
    height: 5px;
    background: $divbgcolor;
    border-radius: 1000px;
    display: inline-block;
    margin: auto;
  }
  b {
    font-size: 0.24rem;
    color: #fff;
    margin: auto;
    display: inline-block;
    width: 7rem;
  }
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

