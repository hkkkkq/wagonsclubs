<template>
<div class="wrap">
    <div :class="{'card1':cardsList[ind-1].cardType == 0,'card2':cardsList[ind-1].cardType == 1}">
        <p>充值金额</p>
        <h1>¥{{cardsList[ind-1].account}}</h1>
        <div>
            <span>赠送{{cardsList[ind-1].giving}}元</span>
            <span style="float:right">{{cardsList[ind-1].discount}}折</span>
        </div>
    </div>
    <div class="line"></div>
    <div @click="wxpay" class="wxpay">
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
import qs from "qs";
export default {
  data() {
    return {
      ind: "",
      orderId: "",
      cardsList: [{orderType:''},{orderType:''},{orderType:''},{orderType:''}]
    };
  },
  computed: {
    WAG() {
      return this.$store.state.WAG;
    }
  },
  created() {
    var vm = this;
    this.$ajax({
      url: BASE_URL + "/car/cardModel",
      header: {
        WAG: vm.WAG
      }
    }).then(res => {
      this.cardsList = res.data.data.cardsList;
    });
    this.ind = this.$route.query.ind;
  },
  methods: {
    wxpay() {
      var vm = this;
      this.$ajax({
        method: "POST",
        url: BASE_URL + "/car/rechargeOrder",
        data: qs.stringify({
          cardId: this.ind,
          orderType: 2,
          attach: "rechargeCard"
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
                appId:res.data.data.appId, //公众号名称，由商户传入
                timeStamp:res.data.data.timeStamp, //时间戳，自1970年以来的秒数
                nonceStr:res.data.data.nonceStr, //随机串
                package:res.data.data.package,
                signType:res.data.data.signType, //微信签名方式：
                paySign:res.data.data.paySign //微信签名
              },
              function(res) {
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                  var check = function() {
                    vm
                      .$ajax(
                        BASE_URL +
                          "/car/order/check?orderId=" +
                          vm.orderId +
                          "&orderType=2&attach=rechargeCard"
                      )
                      .then(res1 => {
                        if (res1.data.data.orderStatus == 0) {
                          setTimeout(() => {
                            check();
                          }, 500);
                        } else if (res1.data.data.orderStatus == 1) {
                          vm.$router.push({
                            path: "/wx/card/third",
                            query: { ind: vm.ind }
                          });
                        } else if (res1.data.data.orderStatus == 2) {
                          alert("支付查询失败");
                        }
                      });
                  };
                  check();
                } else {
                  alert(res.err_msg)
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
    margin-left: 0 !important;
    margin-right: 0.2rem !important;
    width: 0.48rem;
    height: 0.48rem;
    margin: auto;
  }
  .right {
    width: 0.1rem;
    height: 0.2rem;
    margin: auto;
    margin-left: 0.3rem !important;
    margin-right: 0 !important;
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
