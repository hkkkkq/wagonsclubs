<template>
    <div style="font-family: PingFangSC-Medium, sans-serif;" class="all">
        <div class="cr">
            <div class="allzzz"></div>
            <img :src='bg' class="allzz">
        </div>
        <div class="lunbo">
            <img v-if="!playvideo" @click="back" src="../../assets/app/back.png" class="back" />
            <img v-if="isapp && !playvideo" @click="share" src="../../assets/app/share.png" class="share" />
            <div v-show="!playvideo" class="swiper-pagination"></div>
            <!-- 占位 -->
            <h1 v-show="playvideo" style="height:1rem"></h1>
            <swiper :options="swiperOption" class="msl" ref="mySwiper">
                <swiper-slide v-if="carVideoShow">
                  <div ref='videodiv' class="showvideo">
                    <div v-if="!playvideo">
                      <img @click="play" class="playbutton" src="../../assets/app/play.png">
                      <img class="bgimg" :src="carimgs[0]">
                    </div>
                    <video v-if="playvideo" @click="videopause" controls ref="video" x5-playsinline="" playsinline="" webkit-playsinline="" poster="" preload="auto" :src='carVideoShow'></video>
                  </div>
                </swiper-slide>
                <swiper-slide :key="index" v-for='(item,index) in carimgs'>
                    <img v-lazy="item">
                </swiper-slide>
            </swiper>
        </div>
        <div class="it">
            <div>
                <span class="name">{{car.carName}}</span>
                <span class="star">{{car.starLevel}}星级车</span>
            </div>
            <div class="pr">
                <span class="level">会员价</span>
                <span class="price">
                    <span class="number">{{car.memberRentPrice}}</span>/天</span>
                <span class="nodis">
                  <img class="vip" src="../../assets/app/vip.png">
                    <b>{{car.vipPrice}}</b>/天</span>
            </div>
            <p class="des">{{car.carDesc}}</p>

            <span class="tips">{{car.carSeats}}</span>
            <span v-if="car.gearLevel == 2" class="tips">自动挡</span>
            <span v-else class="tips">手动挡</span>
            <span class="tips">{{car.carColor}}</span>
            <span class="tips">{{car.carEngineDisplacement}}排量</span>
            <span v-if="car.convertible == 1" class="tips">敞篷</span>
            <span v-if="car.convertible == 2" class="tips">硬顶敞篷</span>
            <span v-if="car.convertible == 3" class="tips">软顶敞篷</span>
            <span v-if="car.plateNumberBj" class="tips">京牌</span>
            <span v-if="!car.plateNumberBj" class="tips">非京牌</span>
            <span v-if="car.restrictionDay" class="tips">{{car.restrictionDay}}</span>            
        </div>
        <p class="but1"></p>
        <p @click="sub" class="but">
            <span v-if="wxAppShare">下载APP 开始用车</span>
            <span v-else>立即预订</span>
        </p>
        <div v-show="at" class="al">
            <div style="position: absolute;left: 0;right: 0;margin: auto;display: block;bottom: 4.5rem;">
                <img class="at" src="../../assets/app/xqt1.png">
                <div class="ms">
                    {{mes}}
                    <div @click="cl">我知道了</div>
                </div>
            </div>
            <img @click="cl" class="ax" src="../../assets/app/xx.png">
        </div>
        <div class="al" v-if="memberfalseshow">
            <div style="position: absolute;left: 0;right: 0;margin: auto;display: block;bottom: 4.5rem;">
                <img class="at" src="../../assets/app/memberfalse.png">
                <div class="ms">
                    很抱歉，您的会员状态存在问题，暂时无法用车，请与工作人员联系，我们回协助你解决问题
                    <div @click="cl(1)"><img class="ftel" src="../../assets/app/pendingphone.png">联系客服</div>
                </div>
            </div>
            <img @click="cl" class="ax" src="../../assets/app/xx.png">
        </div>
    </div>
</template>

<script>
import { swiper } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
var deurl = require("./url.js");
export default {
  components: { swiper },
  name: "cardetails",
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: 0,
        autoplayDisableOnInteraction: false,
        pagination: ".swiper-pagination",
        paginationType: "custom",
        paginationCustomRender: function(swiper, current, total) {
          var _html = "";
          for (var i = 1; i <= total; i++) {
            if (current == i) {
              _html +=
                '<li style="background:#ffffff;display:inline-block;width:5px;height:5px;border-radius:5px"></li><i style="display:inline-block;width:9px"></i>';
            } else {
              _html +=
                '<li style="opacity:0.3;background:#F3F3F3;display:inline-block;width:5px;height:5px;border-radius:50%"></li><i style="display:inline-block;width:9px"></i>';
            }
          }
          return _html;
        },
        direction: "horizontal",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        slidesPerView: 1,
        paginationClickable: false,
        observeParents: true,
        debugger: true,
        watchSlidesVisibility: true,
        onTransitionStart(swiper) {}
      },
      // isplay:false
      memberNick5: "",
      level5: "",
      car: "",
      carVideoShow:'',
      carimgs: "",
      carId: "",
      at: false,
      mes: "",
      isapp: "",
      bg: "",
      memberfalseshow: false,
      playvideo:false,
      set1:''
    };
  },
  created() {
    //微信分享出去
    if (this.$route.query.wxAppShare == "true") {
      this.$store.commit("wxAppShare");
    }
    //判断是否是wagonsapp
    if (/from_wagons/.test(navigator.userAgent.toLowerCase())) {
      this.isapp = true;
    } else {
      this.isapp = false;
    }
    //获取微信分享4要素
    this.$ajax(
      BASE_URL + "/car/weixinShare?url=" + escape(location.href)
    ).then(res => {
      wx.config({
        debug: false,
        appId: res.data.data.sign.appId,
        timestamp: res.data.data.sign.timestamp,
        nonceStr: res.data.data.sign.nonceStr,
        signature: res.data.data.sign.signature,
        jsApiList: [
          "onMenuShareTimeline",
          "onMenuShareAppMessage",
          "onMenuShareQQ",
          "onMenuShareWeibo"
        ]
      });
      var locationHref = window.location.href + "&wxAppShare=true";
      wx.ready(function() {
        wx.onMenuShareTimeline({
          title: "WAGONS光速超跑",
          link: locationHref,
          imgUrl:
            "http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg"
        });
        wx.onMenuShareAppMessage({
          title: "WAGONS光速超跑",
          desc: "WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务",
          link: locationHref,
          imgUrl:
            "http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg"
        });
        wx.onMenuShareQQ({
          title: "WAGONS光速超跑",
          desc: "WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务",
          link: locationHref,
          imgUrl:
            "http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg"
        });
        wx.onMenuShareWeibo({
          title: "WAGONS光速超跑",
          desc: "WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务",
          link: locationHref,
          imgUrl:
            "http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg"
        });
      });
    });

    //获取车辆详情
    this.carId = deurl(location).carId;
    this.$ajax(BASE_URL + "/appCar/carDetails?carId=" + deurl(location).carId)
      .then(res => {
        if (res.data.success == true) {
          this.memberNick5 = res.data.data.memberNick5;
          this.level5 = res.data.data.level5;
          this.car = res.data.data.car;
          this.carimgs = res.data.data.carImgShows;
          this.bg = res.data.data.carImgShows[0];
          this.carVideoShow = res.data.data.carVideoShow;
        } else {
          alert("一定是后台小哥出现了什么问题！！！");
        }
      })
      .catch(() => {
        alert("一定是你的手机出了什么问题！！！");
      });
  },
  destroyed(){
    clearInterval(this.set1)
  },
  computed: {
    WAG() {
      return this.$store.state.WAG;
    },
    wxAppShare() {
      return this.$store.state.wxAppShare;
    }
  },
  methods: {
    videopause(){
      clearInterval(this.set1)
      this.$refs.video.pause()
      this.playvideo = false
    },
    play(){
      this.playvideo = true
      this.$refs.video.play()
      this.set1 = setInterval(()=>{
        if(/active/.test(this.$refs.videodiv.parentElement.className)){
          this.playvideo = true
          this.$refs.video.play()
        }else{
          this.playvideo = false
          this.$refs.video.pause()
        }
      },700)
      this.$refs.video.addEventListener('ended',() => {
        this.playvideo = false
        clearInterval(this.set1)
      })
    },
    full(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    },
    pp() {
      this.full(this.$refs.video);
      this.$refs.video.play();
    },
    back() {
      if (this.isapp) {
        window.Wground.goBack();
      } else {
        this.$router.go(-1);
      }
    },
    share() {
      window.Wground.share(
        "WAGONS光速超跑",
        window.location.href + "&wxAppShare=true",
        "http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg",
        "WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务",
        "0,1,2,3"
      );
    },
    sub() {
      if (this.wxAppShare == true) {
        if (/iPhone|iPod/i.test(navigator.userAgent)) {
          // setTimeout(() => {
          location.href = "itms-apps://itunes.apple.com/app/id1279198452";
          // }, 200)
        } else {
          // setTimeout(() => {
          location.href =
            "http://m.anzhi.com/share_2862728.html?azfrom=anzhi&host=details&pkg=com.wagons.app&flag=1&aztype=qr";
          // }, 200)
        }
        return;
      }
      var vm = this;
      if (this.isapp) {
        window.Wground.getApiToken(suc, fail); //suc在下面
      } else {
        this.$ajax({
          url: BASE_URL + "/car/isBinding",
          method: "GET",
          headers: { WAG: vm.WAG }
        }).then(res => {
          if (res.data.success == false) {
            this.$router.push("/wx/login");
          } else {
            this.$ajax({
              url: BASE_URL + "/car/memberType?carId=" + vm.carId,
              method: "GET",
              headers: { WAG: vm.WAG }
            })
              .then(res => {
                if (res.data.success == true) {
                  //请求成功
                  if (
                    res.data.data.JumpInfo.memberUsable == false &&
                    res.data.data.JumpInfo.review == true
                  ) {
                    vm.memberfalseshow = true;
                    return;
                  }
                  if (res.data.data.JumpInfo.review == true) {
                    //审核通过
                    if (
                      res.data.data.JumpInfo.userType == 4 ||
                      res.data.data.JumpInfo.userType == 5
                    ) {
                      //白金会员和散租
                      // window.Wground.reservation(false)
                      this.$router.push({
                        path: "/wx/pay",
                        query: { orderType: 2, carId: this.carId }
                      });
                    } else {
                      //三计划用户
                      if (
                        res.data.data.JumpInfo.carUseable &&
                        res.data.data.JumpInfo.dateUseable
                      ) {
                        //车可用，日期可用
                        // window.Wground.reservation(true)
                        this.$router.push({
                          path: "/wx/pay",
                          query: { orderType: 0, carId: this.carId }
                        });
                      } else if (res.data.data.JumpInfo.carUseable == false) {
                        //车不可用
                        this.ef("尊敬的用户，您所选择的车辆不在乐潮计划的服务范围内，您可以升级到更高套餐或选择其他车辆。");
                        return;
                      } else if (res.data.data.JumpInfo.dateUseable == false) {
                        //日期不可用
                        // window.Wground.reservation(false)
                        this.$router.push({
                          path: "/wx/pay",
                          query: { orderType: 2, carId: this.carId }
                        });
                      }
                    }
                  } else {
                    this.ef(
                      "尊敬的用户，您尚未加入WAGONS光速超跑，请在“会员”页面查看详情并提交必要资料，等待评估完成后即可预定用车。"
                    );
                    return;
                  }
                } else {
                  this.ef("出现了什么问题，比如没登陆？");
                  return;
                }
              })
              .catch(error => {
                alert(error);
              });
          }
        });
        // }
      }
      function suc(token) {
        vm
          .$ajax({
            url: BASE_URL + "/car/memberType?carId=" + vm.carId,
            method: "GET",
            headers: { token: token }
          })
          .then(res => {
            if (res.data.success == true) {
              if (
                res.data.data.JumpInfo.memberUsable == false &&
                res.data.data.JumpInfo.review == true
              ) {
                vm.memberfalseshow = true;
                return;
              }
              if (res.data.data.JumpInfo.review == true) {
                if (
                  res.data.data.JumpInfo.userType == 4 ||
                  res.data.data.JumpInfo.userType == 5
                ) {
                  window.Wground.reservation(false, vm.carId);
                } else {
                  if (
                    res.data.data.JumpInfo.carUseable &&
                    res.data.data.JumpInfo.dateUseable
                  ) {
                    window.Wground.reservation(true, vm.carId);
                  } else if (res.data.data.JumpInfo.carUseable == false) {
                    vm.ef("尊敬的用户，您所选择的车辆不在乐潮计划的服务范围内，您可以升级到更高套餐或选择其他车辆。");
                    return;
                  } else if (res.data.data.JumpInfo.dateUseable == false) {
                    window.Wground.reservation(false, vm.carId);
                  }
                }
              } else {
                vm.ef(
                  "尊敬的用户，您尚未加入WAGONS光速超跑，请在“会员”页面查看详情并提交必要资料，等待评估完成后即可预定用车。"
                );
                return;
              }
            } else {
              vm.ef("出现了什么问题，比如没登陆？");
              return;
            }
          });
      }
      function fail(err) {
        alert(res);
        vm.ef("err");
      }
    },
    cl(n) {
      if (n == 1) {
        this.memberfalseshow = false;
        location.href = "tel:4008625700";
      } else {
        this.memberfalseshow = false;
        this.at = false;
      }
    },
    ef(msg) {
      this.mes = msg;
      this.at = true;
    }
  }
};
</script>

<style lang='scss' scoped>
.showvideo{
  position: relative;
  height: 5.8rem;
  div{
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 100%;
    img{
      position: absolute;
    }
    .bgimg{
      width: 100%;
      height: 100%;
    }
    .playbutton{
      z-index: 3;
      width: 1rem;
      height: 1rem;
      display: block;
      margin: auto;
      position: relative;
    }
  }
  video{
      position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
}
.vip{
  width: 0.96rem;
  border-radius: 0.04rem;
  height: 0.3rem;
  position: relative;
  top: 0.05rem;
  padding-right: 0.16rem;
}
.ftel {
  position: relative;
  margin: auto;
  width: 0.3rem;
  height: 0.3rem;
  margin-right: 0.3rem;
  top: 0.06rem;
}
.cr {
  position: absolute;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
}

img[lazy="error"] {
  /* //your code */
  background-image: url("../../assets/loading12.gif");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0.5rem;
  z-index: 1;
}

img[lazy="loading"] {
  /* //your code */
  background-image: url("../../assets/loading12.gif");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0.5rem;
  z-index: 1;
}

img[lazy="loaded"] {
  /* //your code */
  z-index: 1;
  animation: fadee 0.5s;
}
@keyframes fadee {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.nodis b {
  z-index: 1;
  font-size: 0.34rem;
}
.nodis {
  font-size: 0.2rem;
  display: inline-block;
  z-index: 1;
  margin-left: 0.3rem;
  color:white;
  background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#f8da8c), to(#dcbb6a));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ms div {
  background: #fed945;
  height: 0.72rem;
  color: #333333;
  position: absolute;
  bottom: 0.32rem;
  width: 4.52rem;
  border-radius: 4px;
  font-size: 0.26rem;
  text-align: center;
  z-index: 1;
  line-height: 0.7rem;
}

.ax {
  width: 0.68rem;
  height: 0.68rem;
  z-index: 1;
  margin-top: 2.24rem;
  position: absolute;
  bottom: 1.2rem;
  left: 0;
  margin: auto;
  display: block;
  right: 0;
}

.ms {
  position: relative;
  background: #ffffff;
  font-size: 0.24rem;
  color: #7a7a7a;
  height: 2.76rem;
  width: 4.52rem;
  padding: 0.48rem 0.32rem 0 0.32rem;
  line-height: 0.4rem;
  z-index: 1;
  display: block;
  margin: auto;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.al .at {
  width: 5.17rem;
  margin: auto;
  display: block;
  z-index: 1;
  margin-top: 3rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.yl {
  font-size: 0.3rem;
  color: #ffffff;
  position: absolute;
  top: 13em;
  z-index: 1;
  left: 2.5rem;
}

.al {
  width: 100%;
  height: 100%;
  position: fixed;
  display: block;
  top: 0;
  z-index: 3;
  left: 0;
  font-size: 0;
  background: rgba(0, 0, 0, 0.7);
}

.msl img {
  z-index: 1;
  widows: 100%;
  height: auto;
}

.msl {
  z-index: 1;
  top: -1rem !important;
  height: 5.7rem;
}

.back {
  top: 0.6rem;
  left: 0.3rem;
  z-index: 2;
  width: 0.45rem !important;
  height: 0.45rem !important;
  position: absolute;
}

.share {
  top: 0.6rem;
  z-index: 2;
  right: 0.3rem;
  z-index: 2;
  width: 0.45rem !important;
  height: 0.45rem !important;
  position: absolute;
}

.but1 {
  position: relative;
  bottom: 0;
  display: block;
  width: 100%;
  height: 0.98rem;
  color: #333333;
  text-align: center;
  z-index: 1;
  font-size: 0.32rem;
}

.but {
  z-index: 1;
  line-height: 1rem;
  position: fixed;
  bottom: 0;
  display: block;
  width: 100%;
  height: 0.98rem;
  color: #333333;
  text-align: center;
  background-color: #fed945;
  font-size: 0.32rem;
  font-family: -webkit-body;
}

.tips {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: rgba(255, 255, 255, 0.15);
  font-size: 0.24rem;
  border-radius: 15px;
  color: #ffffff;
  margin-right: 0.2rem;
  display: inline-block;
  position: relative;
  z-index: 1;
  margin-bottom: 0.2rem;
  font-family: PingFangSC-Light, sans-serif;
}

.des {
  margin-top: 0.16rem;
  position: relative;
  font-size: 0.24rem;
  line-height: 0.5rem;
  color: #ffffff;
  z-index: 1;
  margin-bottom: 0.34rem;
  font-family: PingFangSC-Light, sans-serif;
  font-weight: lighter;
}

.pr {
  margin-top: 0.3rem;
  padding-bottom: 0.22rem;
  z-index: 1;
  border-bottom: 1px solid rgba(213, 213, 190, 0.1);
  position: relative;
}

.number {
  font-size: 0.44rem;
  z-index: 1;
  color: #fed945;
  position: relative;
  top: 3px;
}

.price {
  z-index: 1;
  color: #fed945;
  font-size: 0.26rem;
}

.level {
  font-family: PingFangSC-Light, sans-serif;
  vertical-align: top;
  z-index: 1;
  font-size: 0.18rem;
  padding-left: 0.15rem;
  background-color: #fed945;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  padding-right: 0.2rem;
  height: 0.32rem;
  margin-right: 0.3rem;
  display: inline-block;
  line-height: 0.32rem;
  margin-top: 0.1rem;
  position: relative;
  top: 0.01rem;
}

.star {
  border-radius: 0.04rem;
  padding-left: 0.03rem;
  padding-right: 0.04rem;
  z-index: 1;
  font-size: 0.2rem;
  color: #ffffff;
  float: right;
  padding-bottom: 2px;
  width: 0.96rem;
  text-align: center;
  height: 0.28rem;
  line-height: 0.32rem;
  position: relative;
  top: -0.05rem;
  background: rgba(255, 255, 255, 0.15);
}

.name {
  font-size: 0.3rem;
  color: #ffffff;
  z-index: 1;
  line-height: 0.3rem;
}

.it {
  display: block;
  width: 92%;
  z-index: 1;
  margin: auto;
  padding-top: 0.1rem;
  position: relative;
  font-size: 0;
}

.all {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: auto 100%;
  z-index: -3;
}

.allzz {
  z-index: -2 !important;
  position: absolute;
  bottom: 0;
  width: auto;
  height: 9rem;
  z-index: 0;
  filter: blur(10px);
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -ms-filter: blur(10px);
  -o-filter: blur(10px);
}

.allzzz {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #0f1923;
  opacity: 0.9;
  min-height: 100%;
  z-index: 1;
}

.lunbo {
  height: 5.7rem;
  z-index: 1;
  width: 100%;
  margin-bottom: 0.22rem;
}

.lunbo img {
  width: 100%;
  z-index: 2;
  height: 100%;
}

.swiper-pagination {
  z-index: 2;
  position: relative;
  top: 4.6rem;
  height: 1rem;
}

.swiper-pagination-bullets span {
  z-index: 1;
  background-color: white !important;
}
</style>
