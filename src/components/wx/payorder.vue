<template>
<div class="wrap">
    <p class="num">¥{{cashFee}}</p>
    <p v-if="cashFee == 5000" class="cox">线上支付定金</p>
    <p v-else class="cox">线上支付租金</p>
    <div @click="cardpay" :class="{'paytype':true,'nocash':Number(this.Balance) < Number(this.cashFee) }">
        <img src="../../assets/app/refillcard.png">
        <span>充值卡支付</span>
        <span style="color:#999999">(余额{{Balance}})</span>
        <span v-if="Number(this.Balance) < Number(this.cashFee)" class="go">去充值</span>
        <span v-else class="go">去支付</span>
        <img class="arrow" src="../../assets/app/wxright.png">
    </div>
    <div @click="wxpay" class="paytype">
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
            <p class="co">支付宝账户：bd@wagonsclub.com</p>
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
import qs from "qs";
export default {
  data() {
    return {
      cashFee: "",
      orderId: "",
      Balance: "",
      orderId3: ""
    };
  },
  computed: {
    WAG() {
      return this.$store.state.WAG;
    }
  },
  created() {
    var vm = this;
    this.cashFee = this.$route.query.my;
    this.orderId3 = this.$route.query.orderId;
    this.$ajax({
      url: BASE_URL + "car/rechargeCard",
      header: {
        WAG: vm.WAG
      }
    }).then(res => {
      if (res.data.success == true) {
        this.Balance = res.data.data.rechargeCardMoney;
      } else {
        alert("出现了什么问题");
      }
    });
  },
  methods: {
    wxpay() {
      var vm = this;
      this.$ajax({
        method: "POST",
        url: BASE_URL + "/car/payBill",
        data: qs.stringify({
          orderId: vm.orderId3,
          orderType: 2
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          WAG: vm.WAG
        } //oEUUVv_6lXDk2XuAwSIWaqtvXbDI  vm.WAG
      }).then(res => {
        if (res.data.success) {
          vm.orderId = res.data.data.orderId;
          function onBridgeReady() {
            WeixinJSBridge.invoke(
              "getBrandWCPayRequest",
              {
                appId: res.data.data.appId, //公众号名称，由商户传入
                timeStamp: res.data.data.timeStamp, //时间戳，自1970年以来的秒数
                nonceStr: res.data.data.nonceStr, //随机串
                package: res.data.data.package,
                signType: res.data.data.signType, //微信签名方式：
                paySign: res.data.data.paySign //微信签名
              },
              function(res) {
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                  var check = function() {
                    vm
                      .$ajax(
                        BASE_URL +
                          "/car/order/check?orderId=" +
                          vm.orderId3 +
                          "&orderType=2"
                      )
                      .then(res1 => {
                        if (res1.data.data.orderStatus == 0) {
                          setTimeout(() => {
                            check();
                          }, 500);
                        } else if (res1.data.data.orderStatus == 1) {
                          vm.$router.push("/wx/paysuccess");
                        } else if (res1.data.data.orderStatus == 2) {
                          alert("支付查询失败");
                        }
                      });
                  };
                  check();
                } else {
                  alert("支付失败了");
                } // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
              }
            );
          }
          if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
              document.addEventListener(
                "WeixinJSBridgeReady",
                onBridgeReady,
                false
              );
            } else if (document.attachEvent) {
              document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
              document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
            }
          } else {
            onBridgeReady();
          }
        } else {
          alert("失败");
        }
      });
    },
    cardpay() {
      var vm = this;
      if(Number(this.Balance) < Number(this.cashFee)){
        this.$router.push('/wx/card');
        return;
      }
      vm
        .$ajax({
          method: "POST",
          url: BASE_URL + "/car/payBill",
          data: qs.stringify({
            orderId: vm.orderId3,
            orderType: 3
          }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            WAG: vm.WAG
          } //oEUUVv_6lXDk2XuAwSIWaqtvXbDI  vm.WAG
        })
        .then(res => {
          if (res.data.success == true) {
            vm.$router.push("/wx/paysuccess");
          } else {
            alert("下订单失败");
          }
        });
    }
  }
};
</script>

<style lang='scss' scoped>
$bgcolor: #0f1923;
$yellow: #f4d144;
$divbg: #273039;
$fontfamily: PingFangSC-Light, sans-serif;
$nocashcolor: #1b252e;
.nocash {
  background: $nocashcolor !important;
  color: #999999 !important;
}
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
    margin-right: 0;
  }
  .go {
    margin-right: 0;
    margin-left: auto;
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
  width: 6.8rem;
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
    width: 6rem;
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
