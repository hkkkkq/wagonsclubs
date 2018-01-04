<template>
    <div style="font-family:PingFangSC-Medium, sans-serif;height: 100%;position: absolute;width: 100%;">
        <div style="background:rgb(15, 25, 35);min-height:100%;overflow:hidden">
            <transition name="fade">
            <div v-if="longrent" class="longrent-alert">
              <img class="head" src="../../assets/app/longrent.png">
              <div>
                如果您需要长租车辆，请与工作人员联系获取长租价格，线下办理相关手续。
                <div @click="gotel"><img src="../../assets/app/pendingphone.png">联系客服</div>
              </div>
              <img @click="showlongrent" class="close" src="../../assets/app/xx.png">
            </div>
            </transition>
            <p style="height:0.2rem"></p>
            <div class="carinfo">
                <img :src="carData.carImage">
                <div class="left">
                    <p class="carname">{{carData.carName}}</p>
                    <span class="carstar">{{carData.carLevel}}</span>
                    <span>{{carData.carDes}}</span>
                </div>
            </div>
            <div class="useinfo">
                <div>
                    <span style="background:#4ac87a" class="rad"></span>
                    <div class="lf">
                        <p style="font-size: 0;display: inline-block;width: 6.25rem;">
                            <span @click="starttime" class="date">{{startob == ""?"请选择开始用车时间":(startob.month+1+"-"+startob.date)}}
                                <b style="margin-left: 0.3rem;">{{sxqj == undefined?"":sxqj}}</b>
                                <b>{{startob == ""?"":((parseInt(startob.shi)<10? "0"+parseInt(startob.shi):parseInt(startob.shi))+ ":"+(parseInt(startob.fen)==0? "00":parseInt(startob.fen)))}}</b>
                                <img src="../../assets/app/der.jpg">
                            </span>
                            <span @click="showlongrent" class="longrent">我要长租</span>
                            <div></div>
                            <div @click="changeAddr(1)" class="byself">{{addr1}}</div>
                            <input :readonly='addr1 == "自取"' v-model="startadd" class="in" type="text" placeholder="请填写取车地址">
                        </p>
                    </div>
                </div>
                <div style="margin-top:0.4rem">
                    <span style="background:#fbaf5d" class="rad"></span>
                    <div class="lf">
                        <p style="font-size: 0;display: inline-block;width: 6.25rem;">
                            <span @click="endtime" class="date">{{endob == ""?"请选择结束用车时间":(endob.month+1+"-"+endob.date)}}
                                <b style="margin-left: 0.3rem;">{{exqj == undefined?"":exqj}}</b>
                                <b>{{endob == ""?"":((parseInt(endob.shi)<10? "0"+parseInt(endob.shi):parseInt(endob.shi))+ ":"+(parseInt(endob.fen)==0? "00":parseInt(endob.fen)))}}</b>
                                <img src="../../assets/app/der.jpg">
                            </span>
                            <div></div>
                            <div @click="changeAddr(2)" class="byself">{{addr2}}</div>                                   
                            <input :readonly='addr2 == "自取"' v-model="endadd" class="in" type="text" placeholder="请填写还车地址">
                        </p>
                    </div>
                </div>
            </div>
            <!-- 三计划 -->
            <div v-if='orderType == 0' class="com">
                <div>
                    <span style="background:#3d454d" class="rad"></span>
                    <div style="margin-left:0" class='rr'>
                        <span style="color:#ffffff;margin-bottom:0.32rem">使用{{carData.planName}}天数</span>
                        <div @click="switchrad" :class="{'switchdown':!rad}" class="switch"><div :class="{'leftrad':!rad}" class="rad"></div></div>
                    </div>
                </div>
                <div v-if="rad">
                  <div>
                    <div class='rr'>
                        <span>本次用车天数</span>
                        <b style="color:#fed945">{{String(tokendays) == "NaN"?"--":tokendays}}天</b>
                    </div>
                  </div>
                  <div>
                    <div style="border:0" class='rr'>
                        <span>{{carData.planName}}可用天数</span>
                        <b>{{carData.canMemberUse}}天</b>
                    </div>
                  </div>
                  <div v-if="tokendays<=carData.canMemberUse">
                    <div style="border:0" class='rr'>
                        <span>扣减后剩余天数</span>
                        <b>{{carData.canMemberUse - tokendays}}天</b>
                    </div>
                  </div>
                </div>
                <div v-else>
                   <div class='rr'>
                        <span class="">本次用车天数</span>
                        <b style="color:#fed945">{{String(tokendays) == "NaN"?"--":tokendays}}天</b>
                    </div>
                    <div class='rr noborder'>
                        <span class="">{{carData.isVip?'VIP':'会员'}}价</span>
                        <b style="color:#fed945">{{carData.memberRentPrice}}元/天</b>
                    </div>
                    <div v-if='(tokendays >= 7)&&(tokendays<30)' class='rr noborder'>
                        <span class="">周租折扣</span>
                        <b style="color:#fed945">{{carData.week}}折</b>
                    </div>
                    <div v-if='tokendays>=30' class='rr noborder'>
                        <span class="">月租折扣</span>
                        <b style="color:#fed945">{{carData.month}}折</b>
                    </div>
                    <div v-if='isbirthday' class='rr noborder'>
                        <span class="">生日折扣</span>
                        <b style="color:#fed945">单日{{carData.birthday}}折</b>
                    </div>
                    <div class='rr noborder'>
                        <span class="">费用合计</span>
                        <b style="color:#fed945">¥{{total}}</b>
                    </div>
                </div>
                <div>
                  
                </div>
            </div>
            <!-- <div v-if="(!(tokendays<carData.canMemberUse))&&(orderType == 0)" class='warn'>
                可用天数不足，请重新选择用车天数
            </div> -->
            <!-- 非计划会员 -->
            <div v-if='orderType == 2' class='com'>
                <span style="background:#3d454d" class="rad"></span>
                <span style="color:#ffffff;margin-bottom:0.3rem;font-size: 0.26rem;">费用明细</span>
                <p class='clear'></p>
                <div class='bdd'>
                    <span>本次用车天数</span>
                    <span class='c'>{{tokendays}}天</span>
                </div>
                <div class='bdd'>
                    <span>{{carData.isVip?'VIP':'会员'}}价</span>
                    <span class='c'>{{carData.memberRentPrice}}元/天</span>
                </div>
                <div v-if='(tokendays >= 7)&&(tokendays<30)' class='bdd'>
                    <span>周租折扣</span>
                    <span class='c'>{{carData.week}}折</span>
                </div>
                <div v-if='tokendays>=30' class='bdd'>
                    <span>月租折扣</span>
                    <span class='c'>{{carData.month}}折</span>
                </div>
                <div v-if='isbirthday' class='bdd'>
                    <span>生日折扣</span>
                    <span class='c'>单日{{carData.birthday}}折</span>
                </div>
                <p style="margin-top: 0.3rem;" class='clear'></p>
                <div style="height:0.8rem" class='bdd'>
                    <span>费用合计</span>
                    <span style="color:#f4d144!important" class='c'>¥{{total}}</span>
                </div>
            </div>
            <!-- 计划 -->
            <div @click='beforpay0' v-if='(orderType == 0)&&(rad == true)' class='submit'>
                提交订单
            </div>
            <!-- 会员 -->
            <div @click='pay1' v-if='(orderType == 2)||((orderType == 0)&&(rad == false))'>
                <div class='sl'>{{lessThan5000?"需预付租金":"需预付定金"}}
                    <span style="color:#fed945">{{cashFee}}元</span>
                </div>
                <div class='sr'>提交订单</div>
            </div>
            <!-- 计划订单确认弹窗 -->
            <div :class="{'orderH':checkorder}" class="checkorder">
              <div :class="{'orderDx':checkorder&&ipx}">
                <div class="line">
                  <span>订单确认</span>
                  <img @click="closecheck" src="../../assets/car_close.png">
                </div>
                <div class="line">
                  <span>{{carData.carName}}</span>
                  <b class="carstar">{{carData.carLevel}}</b>
                </div>
                <div style="flex-direction:column;height:1.6rem" class="line">
                  <h1>用车开始日期：{{startob.year}}年{{startob.month+1}}月{{startob.date}}日 {{((parseInt(startob.shi)<10? "0"+parseInt(startob.shi):parseInt(startob.shi))+ ":"+(parseInt(startob.fen)==0? "00":parseInt(startob.fen)))}}</h1>
                  <h1>用车结束日期：{{endob.year}}年{{endob.month+1}}月{{endob.date}}日 {{((parseInt(endob.shi)<10? "0"+parseInt(endob.shi):parseInt(endob.shi))+ ":"+(parseInt(endob.fen)==0? "00":parseInt(endob.fen)))}}</h1>
                </div>
                <div class="line">
                  <span class="yellow">共计：{{tokendays}}天</span>
                  <b>从{{carData.planName}}可用天数中扣减</b>
                </div>
                <div class="line">
                  <div style="background:rgba(0,0,0,0);"><b @click="closecheck">返回修改</b></div>
                  <div><b @click="pay0" style="color:#29333d">确认下单</b></div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
require("../app/rem.js")(window, document);
import qs from "qs";
export default {
  data() {
    return {
      ipx:false,
      storeAdds: "",
      orderType: "",
      checkorder: false,
      carId: "",
      carData: "",
      startadd: "",
      endadd: "",
      orderId: "",
      addr1: "自取",
      addr2: "自取",
      birthdayUsed: 0,
      lessThan5000: false,
      longrent:false
    };
  },
  created() {
    this.carId = this.$route.query.carId;
    this.orderType = this.$route.query.orderType;
    //请求用户数据和车辆信息
    this.$ajax(BASE_URL + "/car/memberData?carId=" + this.carId).then(res => {
      this.carData = res.data.data;
      this.startadd = res.data.data.storeAdds;
      this.storeAdds = res.data.data.storeAdds;
      this.endadd = res.data.data.storeAdds;
      this.$store.commit("rentdays", res.data.data.takenDates);
    });
    var ua = navigator.userAgent.toLowerCase()
    if(/iphone/.test(ua)&&(screen.height == 812 && screen.width == 375)){
      this.ipx = true
      }
  },
  computed: {
    rad() {
      return this.$store.state.rad;
    },
    WAG() {
      return this.$store.state.WAG;
    },

    cashFee() {
      if (this.total <= 5000) {
        this.lessThan5000 = true;
        return this.total;
      } else {
        this.lessThan5000 = false;
        let tmp = Math.floor(this.total * 0.2);
        return tmp > 5000 ? 5000 : tmp;
      }
    },
    startob() {
      return this.$store.state.starttime;
    },
    endob() {
      return this.$store.state.endtime;
    },
    sxqj() {
      var x = this.$store.state.starttime.xqj;
      switch (x) {
        case 0:
          return "周日";
          break;
        case 1:
          return "周一";
          break;
        case 2:
          return "周二";
          break;
        case 3:
          return "周三";
          break;
        case 4:
          return "周四";
          break;
        case 5:
          return "周五";
          break;
        case 6:
          return "周六";
          break;
      }
    },
    exqj() {
      var x = this.$store.state.endtime.xqj;
      switch (x) {
        case 0:
          return "周日";
          break;
        case 1:
          return "周一";
          break;
        case 2:
          return "周二";
          break;
        case 3:
          return "周三";
          break;
        case 4:
          return "周四";
          break;
        case 5:
          return "周五";
          break;
        case 6:
          return "周六";
          break;
      }
    },
    tokendays() {
      let s = new Date(
        this.startob.year,
        this.startob.month,
        this.startob.date,
        parseInt(this.startob.shi),
        parseInt(this.startob.fen)
      );
      let e = new Date(
        this.endob.year,
        this.endob.month,
        this.endob.date,
        parseInt(this.endob.shi),
        parseInt(this.endob.fen)
      );
      if (s == "Invalid Date" || e == "Invalid Date") {
        return 0;
      } else {
        if (((e - s) % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000) == 0) {
          return Math.floor((e - s) / (60 * 60 * 24 * 1000));
        } else {
          return (
            Math.floor((e - s) / (60 * 60 * 24 * 1000)) +
            (((e - s) % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000) >
            this.carData.extraHours
              ? 1
              : 0.5)
          );
        }
      }
    },
    isbirthday() {
      let tmp = [];
      if (this.carData.date) {
        tmp = this.carData.date.split("-");
      } else {
        return;
      }
      let s = new Date(
        this.startob.year,
        this.startob.month,
        this.startob.date,
        parseInt(this.startob.shi),
        parseInt(this.startob.fen)
      );
      let e = new Date(
        this.endob.year,
        this.endob.month,
        this.endob.date,
        parseInt(this.endob.shi),
        parseInt(this.endob.fen)
      );
      let b1 = new Date(this.startob.year, tmp[0] - 1, tmp[1]);
      let b2 = new Date(this.endob.year, tmp[0] - 1, tmp[1]);
      //跨年租车，生日在年前
      let t1 = b1 <= e && b1 >= s;
      //跨年租车，生日在年后
      let t2 = b2 <= e && b2 >= s;
      if (t1 || t2) {
        this.birthdayUsed = 1;
        return true;
      } else {
        this.birthdayUsed = 0;
        return false;
      }
    },
    total() {
      //有生日
      if (this.isbirthday) {
        if (this.tokendays >= 7 && this.tokendays < 30) {
          //周租折扣 有生日
          return (
            (this.tokendays - 1) *
              this.carData.memberRentPrice *
              this.carData.week *
              0.1 +
            this.carData.memberRentPrice * this.carData.birthday * 0.1
          );
        } else if (this.tokendays >= 30) {
          //月租折扣 有生日
          return (
            (this.tokendays - 1) *
              this.carData.memberRentPrice *
              this.carData.month *
              0.1 +
            this.carData.memberRentPrice * 0.5
          );
        } else {
          //只有生日
          return (
            (this.tokendays - 1) * this.carData.memberRentPrice +
            this.carData.memberRentPrice * 0.5
          );
        }
      } else {
        //没生日
        if (this.tokendays >= 7 && this.tokendays < 30) {
          //周租折扣 没生日
          return (
            this.tokendays *
            this.carData.memberRentPrice *
            this.carData.week *
            0.1
          );
        } else if (this.tokendays >= 30) {
          //月租折扣 mei生日
          return (
            this.tokendays *
            this.carData.memberRentPrice *
            this.carData.month *
            0.1
          );
        } else {
          //mei生日
          return this.tokendays * this.carData.memberRentPrice;
        }
      }
    }
  },
  methods: {
    gotel () {
      location.href = 'tel:4008625700'
    },
    showlongrent () {
      this.longrent == true?this.longrent = false:this.longrent = true
    },
    switchrad() {
      if (this.rad == true) {
        this.$store.commit("rad", false);
      } else {
        this.$store.commit("rad", true);
      }
    },
    closecheck() {
      this.checkorder = false;
    },
    changeAddr(n) {
      if (n == 1) {
        if (this.addr1 == "自取") {
          this.addr1 = "上门";
          this.startadd = "";
        } else {
          this.addr1 = "自取";
          this.startadd = this.storeAdds;
        }
      } else if (n == 2) {
        if (this.addr2 == "自取") {
          this.addr2 = "上门";
          this.endadd = "";
        } else {
          this.addr2 = "自取";
          this.endadd = this.storeAdds;
        }
      }
    },
    starttime() {
      this.$router.push({
        path: "/wx/datepicker",
        query: { type: "starttime" }
      });
    },
    endtime() {
      this.$router.push({ path: "/wx/datepicker", query: { type: "endtime" } });
    },
    beforpay0() {
      if (this.startob == "") {
        alert("请选择开始时间");
        return false;
      }
      if (this.endob == "") {
        alert("请选择结束时间");
        return false;
      }
      if (this.endadd == "") {
        alert("请选择填写还车地址");
        return false;
      }
      if (this.startadd == "") {
        alert("请选择填写取车地址");
        return false;
      }
      if (this.tokendays > this.carData.canMemberUse) {
        alert("可用天数不足，请重新选择");
        return false;
      }
      this.checkorder = true;
    },
    pay0() {
      var vm = this;
      this.$ajax({
        method: "POST",
        url: BASE_URL + "/car/deposit",
        data: qs.stringify({
          carId: vm.carId,
          rentStartAt:
            vm.startob.year +
            "-" +
            (vm.startob.month + 1) +
            "-" +
            vm.startob.date +
            " " +
            parseInt(vm.startob.shi) +
            ":" +
            parseInt(vm.startob.fen),
          rentEndAt:
            vm.endob.year +
            "-" +
            (vm.endob.month + 1) +
            "-" +
            vm.endob.date +
            " " +
            parseInt(vm.endob.shi) +
            ":" +
            parseInt(vm.endob.fen),
          sendAddr: vm.startadd,
          returnAddr: vm.endadd,
          orderType: 0,
          dayOrdered: vm.tokendays
        }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }).then(res => {
        if (res.data.success) {
          vm.$router.push("/wx/paysuccess");
        } else {
          alert("下单失败");
        }
      });
    },
    pay1() {
      var vm = this;
      if (this.startob == "") {
        alert("请选择开始时间");
        return false;
      }
      if (this.endob == "") {
        alert("请选择结束时间");
        return false;
      }
      // if (this.endadd == "") {
      //   alert("请选择填写还车地址");
      //   return false;
      // }
      // if (this.startadd == "") {
      //   alert("请选择填写取车地址");
      //   return false;
      // }
      //付钱的
      var paydata2 = qs.stringify({
        carId: vm.carId,
        rentStartAt:
          vm.startob.year +
          "-" +
          (vm.startob.month + 1) +
          "-" +
          vm.startob.date +
          " " +
          parseInt(vm.startob.shi) +
          ":" +
          parseInt(vm.startob.fen),
        rentEndAt:
          vm.endob.year +
          "-" +
          (vm.endob.month + 1) +
          "-" +
          vm.endob.date +
          " " +
          parseInt(vm.endob.shi) +
          ":" +
          parseInt(vm.endob.fen),
        sendAddr: vm.startadd,
        returnAddr: vm.endadd,
        totalFee: vm.total * 100,
        cashFee: vm.carData.memberId == 2 ? 1 : vm.cashFee * 100,
        orderType: 2,
        birthdayUsed: vm.birthdayUsed
      });
      this.$ajax({
        method: "POST",
        url: BASE_URL + "/car/deposit",
        data: paydata2,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          WAG: vm.WAG
        } //oEUUVv_6lXDk2XuAwSIWaqtvXbDI  vm.WAG
      }).then(res => {
        this.$router.push(
          "/wx/payorder?my=" + vm.cashFee + "&orderId=" + res.data.data.orderId
        );
      });
    }
  }
};
</script>

<style lang='scss' scoped>
$ordercheckbg: #29333d;
$yellow: #fed945;
.checkorder {
  position: fixed;
  color: #ffffff;
  bottom: -5.7rem;
  background: rgba(0, 0, 0, 1);
  left: 0;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  font-size: 0.26rem !important;
  width: 100%;
  height: 0%;
  left: 0;
  > div {
    position: absolute;
    width: 100%;
    height: 5.7rem;
    background: $ordercheckbg;
    z-index: 1;
    bottom: 0;
    .line {
      display: flex;
      padding: 0 0.2rem;
      display: -webkit-flex;
      width: 7.1rem;
      height: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      > .yellow {
        color: $yellow !important;
      }
      span {
        margin: auto;
        margin-left: 0;
      }
      img {
        margin: auto;
        width: 0.3rem;
        margin-right: 0;
        height: 0.3rem;
      }
      b {
        margin: auto;
        margin-right: 0;
      }
      h1 {
        display: block;
        width: 100%;
        margin: auto;
        color: #999999;
      }
      div {
        width: 3.4rem;
        height: 0.7rem;
        border: 1px solid $yellow;
        margin: auto;
        border-radius: 0.04rem;
        display: flex;
        display: -webkit-flex;
        background: $yellow;
        b {
          margin: auto;
          color: $yellow;
        }
        > div {
          font-size: 0;
        }
      }
    }
  }
}
.longrent-alert{
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  display: -webkit-flex;
  background: rgba(0, 0, 0, 0.8);
  .head{
    width: 5.17rem;
    height: 2rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin: auto;
    margin-bottom: 0;
  }
  .close{
    width: 0.67rem;
    height: 0.67rem;
    margin: auto;
    margin-top: 0;
  }
  >div{
    font-size: 0.24rem;
    color: #333333;
    margin: auto;
    margin-top: 0;
    width: 4.54rem;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    line-height: 0.4rem;
    height: auto;
    background: #fff;
    padding: 0.32rem;
    >div{
      img{
        width: 0.26rem;
        height: 0.26rem;
        display: inline-block;
        position:relative;
        top: 0.05rem;
        left:-0.1rem;
      }
      font-size: 0.26rem;
      line-height: 0.8rem;
      width: 4.54rem;
      height: 0.72rem;
      border-radius: 4px;
      text-align: center;
      margin: auto;
      margin-top: 1rem;
      background: $yellow;
    }
  }
}
.longrent{
  font-size: 0.2rem;
  color: $yellow;
  border: 1px solid $yellow;
  border-radius: 1000px;
  padding: 4px 12px;
  float: right;
  margin-right: 0.3rem;
}
.orderH {
  background: rgba(0, 0, 0, 0.5);
  height: 100% !important;
  bottom: 0;
}
.orderD {
  height: 5.7rem!important;
}
.orderDx {
  height: 6.7rem!important;
}
.byself {
  background: #3d454d;
  color: #ffffff;
  font-size: 0.26rem;
  display: inline-block;
  width: 0.92rem;
  height: 0.46rem;
  text-align: center;
  line-height: 0.46rem;
  border-radius: 0.04rem;
}
.sl {
  display: inline-block;
  width: 60%;
  height: 1rem;
  font-size: 0.26rem;
  color: #ffffff;
  border-top: 1px solid #39424a;
  vertical-align: top;
  position: absolute;
  bottom: 0;
  line-height: 1rem;
  text-align: center;
}

.sr {
  display: inline-block;
  width: 40%;
  height: 1rem;
  background: #fed945;
  color: #333333;
  font-size: 0.32rem;
  text-align: center;
  vertical-align: top;
  position: absolute;
  bottom: 0;
  right: 0;
  line-height: 1rem;
  text-align: center;
}

.warn {
  width: 100%;
  height: 0.6rem;
  background: #d8434d;
  display: block;
  margin-top: 0.2rem;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.24rem;
  color: #ffffff;
}

.c {
  width: 1.62rem !important;
  text-align: right;
}

.bdd span {
  font-size: 0.24rem !important;
  color: #999999 !important;
  width: 4rem;
}

.bdd {
  margin-left: 0.5rem;
  display: block;
  height: 0.6rem;
}

.clear {
  width: 6.25rem;
  height: 1px;
  background: #39424a;
  margin-left: 0.5rem;
}

.submit {
  background: #fed945;
  color: #333333;
  font-size: 0.32rem;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
  position: absolute;
  display: block;
  width: 100%;
  bottom: 0;
}
.noborder {
  border-top: 0 !important;
}
.com .rr {
  display: inline-flex;
  display: -webkit-inline-flex;
  width: 6.25rem;
  border-top: 1px solid #39424a;
  margin-left: 0.5rem;
  .switch {
    width: 0.9rem;
    height: 0.54rem;
    background: #4ac87a;
    border-radius: 1rem;
    position: relative;
    left: 2.9rem;
    top: 0.15rem;
    border: 1px solid #999999;
    .rad {
      width: 0.5rem;
      height: 0.5rem;
      background: #ffffff;
      border-radius: 10000px;
      position: absolute;
      right: 0;
      transition: all 0.2s;
      -webkit-transition: all 0.2s;
    }
    .leftrad {
      right: 0.4rem !important;
    }
  }
  .switchdown {
    background: #273039 !important;
  }
}

.com span {
  font-size: 0.24rem;
  color: #999999;
  vertical-align: top;
  display: inline-block;
  margin-right: 0.3rem;
  margin-top: 0.3rem;
}

.com {
  width: 6.8rem;
  display: block;
  margin: auto;
  background: #273039;
  border-radius: 4px;
  font-size: 0;
  margin-top: 0.2rem;
  padding-left: 0.3rem;
  padding-bottom: 0.32rem;
  b {
    font-size: 0.26rem;
    margin: auto;
    margin-right: 0.3rem;
    color: #999999;
    margin-top: 0.3rem;
  }
}

:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #999999;
  opacity: 1;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #999999;
  opacity: 1;
}

input:-ms-input-placeholder {
  color: #999999;
  opacity: 1;
}

input::-webkit-input-placeholder {
  color: #999999;
  opacity: 1;
}

.in {
  background: rgba(0, 0, 0, 0);
  border: 0;
  color: #ffffff;
  width: 4.5rem;
  margin-top: 0.4rem;
  margin-bottom: 0.2rem;
  margin-left: 0.3rem;
  font-size: 0.24rem;
}

.lf b {
  font-size: 0.24rem;
  color: #999999;
  display: inline-block;
  vertical-align: top;
  position: relative;
  top: 0.1rem;
}

.date img {
  display: inline-block;
  width: 0.1rem;
  height: 0.18rem;
  margin-left: 0.3rem;
  vertical-align: top;
  position: relative;
  top: 0.09rem;
}

.date {
  vertical-align: top;
  font-size: 0.3rem;
  color: #ffffff;
  display: inline-block;
  position: relative;
  top: 0.1rem;
}

.lf {
  display: inline-block;
  border-bottom: 1px solid #39424a;
  font-size: 0;
}

.com .rad {
  display: inline-block;
  width: 0.18rem;
  height: 0.18rem;
  border-radius: 100px;
  vertical-align: top;
  position: relative;
  top: 0.03rem;
}

.useinfo .rad {
  display: inline-block;
  width: 0.18rem;
  height: 0.18rem;
  border-radius: 100px;
  vertical-align: top;
  position: relative;
  top: 0.15rem;
}

.useinfo {
  background: #273039;
  width: 6.8rem;
  height: 3.06rem;
  display: block;
  margin: auto;
  margin-top: 0.2rem;
  border-radius: 4px;
  padding: 0.67rem 0rem 0.67rem 0.3rem;
}

.carstar {
  color: #ffffff !important;
  border: 1px solid #ffffff;
  border-radius: 4px;
  display: inline-block;
  width: 0.98rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  margin-left: 0.3rem !important;
}

.left {
  display: inline-block;
  width: 4.5rem;
  vertical-align: top;
  height: 100%;
}

.carinfo span {
  font-size: 0.24rem;
  color: #999999;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
}

.carname {
  display: inline-block;
  margin-left: 0.3rem;
  font-size: 0.24rem;
  color: #ffffff;
  vertical-align: top;
  margin-top: 0.3rem;
  width: 100%;
}

.carinfo img {
  width: 2.6rem;
  height: 100%;
  display: inline-block;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.carinfo {
  width: 7.1rem;
  height: 1.3rem;
  display: block;
  margin: auto;
  background: #273039;
  border-radius: 4px;
  font-size: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
