<template>
<div class="wrap">
  <!-- <p>{{score}}</p> -->
  <img class="faker" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/faker.png">
  <div class="hp">
    <div :style="{'width':live + '%'}" class="red">HP</div>
  </div>
  <p class="countdown">00:{{countdown | formtime}}</p>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple1" v-if="apple1"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple2" v-if="apple2"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple3" v-if="apple3"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple4" v-if="apple4"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple5" v-if="apple5"></apple>
  <div :style="{left: leftx+'rem'}" class="man">
      <!-- <span>+5</span> -->
    <img :class="{'reserveman':reserveman}" :src="man[manindex]">
  </div>
  <button :class="{'leftdown':leftdown}" class="left" @touchstart="move($event,'L')" @touchend="moveend('L')"></button>
  <button :class="{'rightdown':rightdown}" class="right" @touchstart="move($event,'R')" @touchend="moveend('R')"></button>
  <div v-show='gamewin||gamelose' class="zz">
    <div class="wrapd">
    <div @click="share" class="but"></div>
    <img v-show='gamelose' class="true" src="/static/img/falsecall.png">
    <img v-show='gamewin' class="false" src="/static/img/successcall.png">
    </div>
  </div>
</div>
</template>

<script>
import apple from "./apple.vue";
export default {
  data() {
    return {
      man: [
        "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/man.png",
        "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/manget.png",
        "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/mandead.png"
      ],
      manindex: 0,
      leftdown: false,
      countdown: 30,
      rightdown: false,
      leftx: 0,
      leftloop: "",
      wxsign:{},
      rightloop: "",
      apple1: true,
      apple2: false,
      apple3: false,
      apple4: false,
      apple5: false,
      score: 0,
      live: 100,
      urllink:'',
      gamewin: false,
      gamelose: false,
      reserveman: true,
      starttime: 0,
      endtime: 0,
      gametime: 0
    };
  },
  watch: {
    // this.$refs.apple1
    countdown(value) {
      if (this.countdown == 0 && this.gamewin == false) {
        this.gamelose = true;
        wx.ready(function () {
          wx.onMenuShareTimeline({
            title: "我被大魔王干翻，扶我起来，还能再战！",
            link: "http://wap.wagonsclub.com/weixin/redirect/ChristmasFighting",
            imgUrl:"http://www.wagonsclub.com/static/christmas/sharelogo2.png",
          });
          wx.onMenuShareAppMessage({
            title: "WAGONS光速超跑圣诞节活动",
            desc: "我被大魔王干翻，扶我起来，还能再战!",
            link: "http://wap.wagonsclub.com/weixin/redirect/ChristmasFighting",
            imgUrl:"http://www.wagonsclub.com/static/christmas/sharelogo2.png",
          });
        })
      }
    },
    gamewin(val) {
      if (val == true) {
        var vm = this
        this.endtime = new Date();
        this.gametime = this.endtime - this.starttime;
        wx.ready(function () {
          wx.onMenuShareTimeline({
            title: "我用了"+(vm.gametime/1000)+"秒将大魔王干翻，救出了圣诞老人，你能超过我吗",
            link: "http://wap.wagonsclub.com/weixin/redirect/ChristmasFighting",
            imgUrl:"http://www.wagonsclub.com/static/christmas/sharelogo1.png",
          });
          wx.onMenuShareAppMessage({
            title: "WAGONS光速超跑圣诞节活动",
            desc: "我用了"+(vm.gametime/1000)+"秒将大魔王干翻，救出了圣诞老人，你能超过我吗",
            link: "http://wap.wagonsclub.com/weixin/redirect/ChristmasFighting",
            imgUrl:"http://www.wagonsclub.com/static/christmas/sharelogo1.png",
          });
        })
      }
    }
  },
  computed: {
    WAG() {
      return this.$store.state.WAG;
    }
  },
  filters: {
    formtime: function(value) {
      if (value >= 10) {
        return value;
      } else {
        return "0" + value;
      }
    }
  },
  mounted() {
    var vm = this
    document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
      // 通过下面这个API显示右上角按钮
      WeixinJSBridge.call("showOptionMenu");
    });
    if (/iPhone/i.test(navigator.userAgent)) {
      this.urllink = "http://www.wagonsclub.com/wx/christmas?WAG=" + this.WAG;
    } else {
      this.urllink = location.href;
    }
    var count = setInterval(() => {
      if (this.countdown == 1) {
        clearInterval(count);
      }
      --this.countdown;
    }, 1000);
    this.starttime = new Date();
    setTimeout(() => {
      this.apple2 = true;
    }, 2000);
    setTimeout(() => {
      this.apple3 = true;
    }, 4000);
    setTimeout(() => {
      this.apple4 = true;
    }, 6000);
    setTimeout(() => {
      this.apple5 = true;
    }, 8000);
    this.$ajax(
      BASE_URL +
        "/car/weixinShare?ts=" +
        new Date().getTime() +
        "&url=" +
        escape(vm.urllink)
    )
      .then(res => {
        this.wxsign = res.data.data
        wx.config({
          debug: false,
          appId: vm.wxsign.sign.appId,
          timestamp: vm.wxsign.sign.timestamp,
          nonceStr: vm.wxsign.sign.nonceStr,
          signature: vm.wxsign.sign.signature,
          jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
        });
        wx.error(function(val) {
          alert(val.errMsg);
          alert("初始化错误");
        });
      })
      .catch(res => {
        alert(res);
      });
  },
  components: {
    apple: apple
  },
  methods: {
    addscore(n){
      // alert(1)
      var node = document.createElement('span')
      // alert(2)
      node.className = 'adds'
      // alert(3)
      var text = document.createTextNode('+'+n)
      // alert(4)
      node.appendChild(text)
      // var node=document.createTextNode();
      // node.innerHTML = '+'+n
      // console.log(node)
      // alert(5)
      document.getElementsByClassName('man')[0].appendChild(node)
      // alert(6)
      setTimeout(() => {
      // alert(7)
        document.getElementsByClassName('man')[0].removeChild(node)
      }, 500);
      // alert(8)
    },
    share() {
      var vm = this;
      if(vm.gamewin){
        alert("请点击右上角分享至朋友圈哦!5秒后跳自动转至抽奖页面");
        setTimeout(() => {
          this.$router.push('/wx/christmas/three')
        }, 5000);
      }else{
        alert("请点击右上角分享至朋友圈哦!5秒后自动重新开始");
        setTimeout(() => {
          this.$router.push('/wx/christmas/tmp')
        }, 5000);
      }
      // if (vm.gamewin) {
      //   //请求游戏次数
      //   vm.$router.push("/wx/Christmas/three");
      //   vm.$ajax({
      //       url: BASE_URL + "/christmas/shareCondition",
      //       method: "get",
      //       headers: { WAG: vm.WAG }
      //     })
      //     .then(res => {});
      // } else {
      //   vm.$router.push("/wx/Christmas/two");
      // }

      // alert('分享')
      //请求游戏次数
      // vm.$ajax({
      //   url:BASE_URL+'/christmas/shareCondition',
      //   method:'get',
      //   headers: { WAG: vm.WAG }
      //   })
      // .then(res=>{
      //   vm.$router.push('/wx/Christmas/three')
      // })
    },
    move(event, type) {
      event.preventDefault();
      var vm = this;
      if (type === "L") {
        this.reserveman = false;
        this.leftdown = true;
        function gol(params) {
          if (vm.leftx < 0) {
            return;
          } else {
            vm.leftx += -0.06;
          }
          vm.leftloop = requestAnimationFrame(gol);
        }
        gol();
      } else {
        this.reserveman = true;
        this.rightdown = true;
        function gor(params) {
          if (vm.leftx > 5) {
            return;
          } else {
            vm.leftx += 0.06;
          }
          vm.rightloop = requestAnimationFrame(gor);
        }
        gor();
      }
    },
    moveend(type) {
      if (type === "L") {
        this.leftdown = false;
        window.cancelAnimationFrame(this.leftloop);
      } else {
        this.rightdown = false;
        window.cancelAnimationFrame(this.rightloop);
      }
    },
    incrementTotal(random) {
      if (random == 0) {
        //炸弹
        this.manindex = 2;
        setTimeout(() => {
          this.manindex = 0;
        }, 500);
        return;
      } else {
        this.manindex = 1;
        setTimeout(() => {
          this.manindex = 0;
        }, 500);
        if (random == 3) {
          //苹果
          this.live -= 10;
          this.addscore(10)
          if (this.live <= 0) {
            //成功
            this.live = 0;
            if (this.gamelose == true) {
              return;
            } else {
              this.gamewin = true;
            }
          } else {
            return;
          }
        } else {
          //商家
          this.live -= 5;
          this.addscore(5)
          if (this.live <= 0) {
            //成功
            this.live = 0;
            if (this.gamelose == true) {
              return;
            } else {
              this.gamewin = true;
            }
          } else {
            return;
          }
        }
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
  opacity: 0;
  background: #fff;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@font-face {
  font-family: "Quartz Regular";
  src: url("/static/christmas/Quartz Regular.ttf");
}
.countdown {
  font-size: 28px;
  color: #ee494c;
  text-align: center;
  position: relative;
  top: -1rem;
  font-family: Quartz Regular;
  font-weight: bolder;
  letter-spacing: 3px;
  vertical-align: center;
}
.zz {
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  font-size: 0;
  display: flex;
  z-index: 11;
  display: -webkit-flex;
  height: 100%;
  .wrapd {
    margin: auto;
    height: auto;
    position: relative;
  }
  .false {
    margin: auto;
    width: 5.8rem;
  }
  .true {
    margin: auto;
    width: 6.4rem;
  }
  .but {
    width: 66%;
    height: 2.5rem;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0.5rem;
  }
}
.hp {
  width: 4.66rem;
  height: 0.45rem;
  display: inline-block;
  border: 2px solid #ecb1b1;
  position: relative;
  top: -1rem;
  left: 2rem;
  border-radius: 4px;
  background: #000;
  .red {
    transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    width: 80%;
    height: 100%;
    font-size: 0.3rem;
    text-indent: 0.2rem;
    color: #fff;
    line-height: 0.5rem;
    background: -webkit-gradient(
      linear,
      0 0,
      0 bottom,
      from(#f04c4e),
      to(#d3282d)
    );
  }
}
.left {
  left: 0.5rem;
  background: url("../../assets/active/left.png");
}
.leftdown {
  background: url("../../assets/active/leftdown.png") !important;
}
.right {
  right: 0.5rem;
  background: url("../../assets/active/right.png");
}
.rightdown {
  background: url("../../assets/active/rightdown.png") !important;
}
.faker {
  width: 1.96rem;
  height: 1.83rem;
  z-index: 10;
  position: relative;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
  display: inline-block;
}
.wrap {
  font-size: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: url("http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/bg2.png");
  background-size: 100% 100%;
  button {
    border: 0;
    background-size: 100% !important;
    width: 2.6rem;
    height: 1.26rem;
    background-repeat: no-repeat !important;
    position: absolute;
    font-size: 1rem;
    bottom: 10px;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  span {
    font-size: 0.5rem;
  }
  .reserveman {
    transform: rotateY(180deg);
  }
  .man {
    width: 2.56rem;
    position: absolute;
    bottom: 2.5rem;
    img{
      width: 100%;
    }

    // margin: auto;
  }
}
</style>
