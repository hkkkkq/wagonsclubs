<template>
<div class="wrap">
    <p class="num">¥20000.00</p>
    <p class="cox">线上支付定金</p>
    <div class="paytype">
        <img src="../../assets/app/refillcard.png">
        <span>充值卡支付</span>
        <span class="go">去支付</span>
        <img class="arrow" src="../../assets/app/wxright.png">
    </div>
    <div class="paytype">
        <img src="../../assets/app/wxpay_03.png">
        <span>微信支付</span>
        <span class="go">去支付</span>
        <img class="arrow" src="../../assets/app/wxright.png">
    </div>
    <h1 class="line"></h1>
    <p class="tips">
        如果您线上支付金额受限，也可以通过<b class='yellow'>支付宝转账</b>的方式缴纳定金
    </p>
    <div class="alipay">
        <img src="../../assets/app/alipay.png">
        <div>
            <p>支付宝转账</p>
            <h1></h1>
            <p class="co">支付宝账户：</p>
            <p class="co">首款公司：铭博顺通（北京）科技发展有限公司</p>
        </div>
    </div>
    <p class="tips">
        转账完成后请拨打客服电话4008-625-700确认转账成功，我们会及时更新您的订单状态。
    </p>
    <img style="width: 5.22rem;margin: 0.74rem auto auto;padding-bottom: 0.78rem;position: absolute;bottom: 0;left: 0;right: 0;" src="../../assets/app/blogo.png">
</div>
</template>

<script>
require("../app/rem.js")(window, document);
export default {};
</script>

<style lang='scss' scoped>
$bgcolor: #0f1923;
$yellow: #f4d144;
$divbg: #273039;
$fontfamily: PingFangSC-Light, sans-serif;
.border {
  border-radius: 0.04rem;
}
.wrap {
  position: absolute;
  width: 100%;
  color: #ffffff;
  min-height: 100%;
  background: $bgcolor;
  font-family: $fontfamily;
}
.num {
  font-size: 0.58rem;
  color: $yellow;
  text-align: center;
  margin-top: 1.28rem;
  margin-bottom: 0.27rem;
}
.cox {
  font-size: 0.26rem;
  text-align: center;
  margin-bottom: 1.28rem;
}
.paytype {
  width: 6.5rem;
  height: 1rem;
  padding: 0 0.3rem;
  background: $divbg;
  @extend .border;
  margin: auto;
  display: flex;
  display: -webkit-flex;
  margin: 0.2rem auto;
  img {
    width: 0.5rem;
    height: 0.5rem;
    margin: auto;
    margin-left: 0;
    margin-right: 0.25rem;
  }
  .arrow {
    height: 0.2rem;
    width: 0.1rem;
    margin-right: 0;
    margin-left: 0.25rem;
  }
  span {
    font-size: 0.26rem;
    margin: auto;
    margin-left: 0;
  }
  .go {
    margin-right: 0;
  }
}
.line {
  width: 7.1rem;
  border-bottom: 1px solid #3d454d;
  margin: auto;
  margin: 0.36rem auto;
}
.tips {
  padding: 0.2rem;
  font-size: 0.26rem;
  color: #999999;
  line-height: 0.3rem;
  .yellow {
    color: $yellow;
  }
}
.alipay {
  padding: 0.3rem 0 0.3rem 0.3rem;
  width: 6.5rem;
  margin: auto;
  background: $divbg;
  @extend .border;
  font-size: 0;
  img {
    width: 0.5rem;
    height: 0.5rem;
    display: inline-block;
  }
  div {
    display: inline-block;
    font-size: 0.26rem;
    vertical-align: top;
    width: 5.7rem;
    padding-left: 0.25rem;
    line-height: 0.6rem;
    p {
    }
    .co {
      font-size: 0.24rem;
      line-height: 0.5rem;
    }
  }
  h1 {
    border-bottom: 1px solid #3d454d;
    width: 100%;
    margin: 0.2rem 0;
  }
}
</style>
