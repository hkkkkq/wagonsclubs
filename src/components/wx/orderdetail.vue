<template>
    <div style="position:absolute;width:100%;height:100%">
        <div style="width:100%;min-height:100%;background:#0f1923">
            <h1 style="width:100%;height:1px"></h1>
            <div class="co">
                <p class="title">
                    <span class="carname">{{detail.carName}}</span>
                     <span v-if="detail.orderType == 0" class="status0">待接单</span>
                        <span v-if="detail.orderType == 1" class="status0">准备中</span>
                        <span v-if="detail.orderType == 2" class="status0">送车中</span>
                        <span v-if="detail.orderType == 3" class="status1">使用中</span>
                        <span v-if="detail.orderType == 4" class="status2">已还车</span>
                        <img v-if="detail.orderType == 5" class="ordered" src="../../assets/app/ordered1.png">
                        <span v-if="detail.orderType == 6" class="status3">已取消</span>
                        <span v-if="detail.orderType == 8" style="color:#952f36;background:#ff4f5b" class="status3">已超时</span>
                </p>
                <div class="info">
                    <img :src="detail.carImage">
                    <div class="deta">
                        <p>下单时间：
                            <span>{{detail.orderTime}}</span>
                        </p>
                        <p>{{detail.orderDayPrice}}</p>
                    </div>
                </div>
                <div class="co1">
                    <p class="ti2">
                        <img src="../../assets/app/orderdate1.png">
                        <span>用车日期</span>
                    </p>
                    <h1>{{detail.useTime}}</h1>
                </div>
                <div class="co1">
                    <p class="ti2">
                        <img src="../../assets/app/orderadd1.png">
                        <span>送车地址</span>
                    </p>
                    <h1>{{detail.useAdds}}</h1>
                </div>
                <h1 style="background:#3d454d;height:1px;margin-left: 0.7rem;"></h1>
                <div class="co1">
                    <p class="ti2">
                        <img src="../../assets/app/orderdate1.png">
                        <span>还车日期</span>
                    </p>
                    <h1>{{detail.backTime}} 前</h1>
                </div>
                <div class="co1">
                    <p class="ti2">
                        <img src="../../assets/app/orderadd1.png">
                        <span>还车地址</span>
                    </p>
                    <h1>{{detail.backAdds}}</h1>
                </div>
                <div style="width: 100%;height: 1px;"></div>
            </div>
            <!--   违章 -->
            <div v-if="illegalInfo" class="co">
                <h1 style="width:100%;height:1px"></h1>
                <div class="co1">
                    <p class="ti2">
                        <b class="b"></b>
                        <span v-if="illegalInfo.checkType == 0">违章记录核验中</span>
                        <span v-if="illegalInfo.checkType == 1">违章记录核验完成</span>
                        <i>已付押金¥{{illegalInfo.depositMoney}}</i>
                    </p>
                    <h1>{{illegalInfo.checkTime}}</h1>
                    <div class="wz">
                        <h1>违章记录如下</h1>
                        <img :src="illegalInfo.illegalImage">
                        <h2>罚款金额合计：
                            <span style="float:right">¥{{illegalInfo.illegalMoney}}</span>
                        </h2>
                    </div>
                    <p style="margin-top:0.4rem" class="ti2">
                        <b class="b"></b>
                        <span>剩余押金¥{{parseInt(illegalInfo.depositMoney)-parseInt(illegalInfo.illegalMoney)>0?(parseInt(illegalInfo.depositMoney) - parseInt(illegalInfo.illegalMoney)):"0"}}已打款完成</span>
                    </p>
                </div>
                <h1 style="width:100%;height:1px"></h1>
            </div>
            <h1 style="width:100%;height:50px"></h1>
        </div>
    </div>
</template>

<script>
require("../app/rem.js")(window, document);
export default {
  data() {
    return {
      detail: "",
      illegalInfo: ""
    };
  },
  created() {
    this.$ajax(
      BASE_URL + "/car/orderDetail?id=" + this.$route.query.id
    ).then(res => {
      if (!res.data.success) {
        alert("获取订单详情失败");
      } else {
        this.detail = res.data.data.orderInfo;
        this.illegalInfo = res.data.data.illegalInfo;
      }
    });
  }
};
</script>

<style scoped>
.ordered {
  width: 1rem;
  float: right;
  margin-right: 0.3rem;
}
.wz > h2 {
  display: inline-block;
  color: #ffffff;
  font-size: 0.24rem;
  margin-left: 0.4rem;
  width: 6rem;
}

.wz > img {
  width: 6rem;
  margin: 0.12rem 0 0.15rem 0.4rem;
}

.wz > h1 {
  color: #999999 !important;
  font-size: 0.24rem !important;
}

.wz {
}

.ti2 i {
  font-size: 0.24rem;
  color: #999999;
  display: inline-block;
  float: right;
}

.ti2 b {
  width: 0.16rem;
  height: 0.16rem;
  background: #fed945;
  display: inline-block;
  border-radius: 100px;
  margin-right: 0.25rem;
}

.co1 h1 {
  color: #ffffff;
  font-size: 0.24rem;
  margin-left: 0.4rem;
  margin-top: 0.18rem;
}

.ti2 span {
  color: #999999;
  font-size: 0.24rem;
}

.ti2 img {
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.25rem;
}

.co1 {
  margin: 0.4rem 0;
  padding: 0 0.3rem;
}

.deta p {
  font-size: 0.24rem;
  color: #999999;
  line-height: 0.4rem;
  /* width: 4rem; */
}

.deta {
  display: inline-block;
  vertical-align: top;
  margin-top: 0.3rem;
}

.info img {
  width: 2.6rem;
  height: 100%;
  display: inline-block;
  margin-right: 0.32rem;
  border-top-left-radius: 0.04rem;
  border-bottom-left-radius: 0.04rem;
}

.info {
  display: block;
  width: 100%;
  height: 1.3rem;
  background: #1b252e;
  font-size: 0;
}

.info {
  display: block;
  width: 100%;
  height: 1.3rem;
  background: #1b252e;
  font-size: 0;
}

.status0 {
  /* 代接单 */
  background: #7d8388;
  color: rgba(0, 0, 0, 0.4);
  display: inline-block;
  width: 0.88rem;
  height: 0.28rem;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.28rem;
  float: right;
  margin-right: 0.3rem;
  border-radius: 0.04rem;
  margin-top: 0.35rem;
}
.status1 {
  /* 使用中 */
  background: #4ac87a;
  color: rgba(0, 0, 0, 0.4);
  display: inline-block;
  width: 0.88rem;
  height: 0.28rem;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.28rem;
  float: right;
  margin-right: 0.3rem;
  border-radius: 0.04rem;
  margin-top: 0.35rem;
}

.status2 {
  background: #fed945;
  color: rgba(0, 0, 0, 0.4);
  display: inline-block;
  width: 0.88rem;
  height: 0.28rem;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.28rem;
  float: right;
  margin-right: 0.3rem;
  border-radius: 0.04rem;
  margin-top: 0.35rem;
}

.status3 {
  /* background: #fed945; */
  color: #666666;
  display: inline-block;
  width: 0.88rem;
  height: 0.28rem;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.28rem;
  float: right;
  margin-right: 0.3rem;
  border-radius: 0.04rem;
  margin-top: 0.35rem;
}
.carname {
  font-size: 0.26rem;
  color: #ffffff;
  margin-left: 0.3rem;
  vertical-align: top;
  position: relative;
  top: 0.35rem;
}

.title {
  width: 100%;
  background: #273039;
  border-top-left-radius: 0.04rem;
  border-top-right-radius: 0.04rem;
  height: 1rem;
}

.co {
  width: 7.1rem;
  display: block;
  margin: auto;
  margin-top: 0.2rem;
  background: #273039;
  font-size: 0;
  border-radius: 0.04rem;
}
</style>
