<template>
<div class="pre">
  <img @click="cmp3" v-show="mp3" class="mp3" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/mp3.png">
  <img @click="cmp3" v-show="!mp3" class="mp3" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/mp3done.png">
  <audio id='audio' ref="mylife" src="/static/christmas/lol1.mp3"></audio>
  <div v-show='loading == true'>
  <img class="loading" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/loading.png">
  <p class="loadingtext">请稍候，游戏资源正在加载中</p>
  </div>
  <transition name="fade">
    <!-- <keep-alive include="four"> -->
	    <router-view class="child-view"></router-view>
    <!-- </keep-alive> -->
  </transition>
</div>
</template>

<script>
require("../app/rem.js")(window, document);
export default {
  data() {
    return {
      mp3: true,
      count: 0,
      loading: true,
      canplay: ""
    };
  },
  computed: {
    WAG() {
      return this.$store.state.WAG;
    }
  },
  mounted() {
    document.addEventListener(
      "WeixinJSBridgeReady",
      function() {
        document.getElementById("audio").loop = true
        document.getElementById("audio").play();
        this.$refs.mylife.loop = true;
        this.$refs.mylife.play();
      },
      false
    );
    document.getElementById("audio").play();
    this.$refs.mylife.play();
    this.$refs.mylife.loop = true;
    document.getElementById("audio").loop = true
      //openid
    if (this.$route.query.WAG) {
      this.$store.commit("setOpenId", this.$route.query.WAG);
    }
    var arr = [
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load1.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load2.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load3.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load4.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/bg2.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/man.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/manget.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/faker.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/mandead.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/1.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/2.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/3.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/4.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/5.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/6.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/7.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/8.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/9.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/10.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/tnt.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/presentbj.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/rad.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/arrow.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/button.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/buttonclick.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/present.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-1.jpg",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-alert.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-award1.jpg",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-award2.jpg",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-award3.jpg",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-award4.jpg",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-award5.jpg",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-award6.jpg",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-award7.jpg",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-bg.jpg",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-bottom.jpg",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-qr.jpg",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-sub.png",
      "http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-tujia.jpg"
    ];
    arr.forEach((item,index) => {
      let img = new Image();
      img.onload = () => {
        if(index <= 8 ){
          this.count++;
        }else{}
      };
      img.src = item;
    });
    //请求游戏次数
    this.$ajax({
      url: BASE_URL + "/christmas/timesRestriction",
      method: "get",
      headers: { WAG: this.WAG }
    }).then(res => {
      console.log(res.data);
      if (res.data.success == false) {
        this.canplay = false;
        // this.$router.push('/wx/Christmas/four')
      } else if (res.data.success == true) {
        this.canplay = true;
        // this.$router.push('/wx/Christmas/one')
      } else {
        alert("后台bug1");
      }
    });
    (function isWeiXin() {
      var ua = window.navigator.userAgent.toLowerCase();
        _czc.push(["_trackEvent", "圣诞大作战", "圣诞大作战"]);
    })()
  },
  watch: {
    count(val) {
      if (val == 9) {
        if (/four/.test(this.$route.path)){
          this.$router.push(this.$route.fullPath)
        }else{
          this.$router.push("/wx/christmas/one");
        }
        // if(this.canplay == false){
        //   this.$router.push('/wx/Christmas/four')
        // }else{
        //   this.$router.push('/wx/Christmas/one')
        // }
        // alert('资源加载完成')
        this.loading = false;
        // this.$router.push('/Christmas/one')
      }
    }
  },
  methods: {
    cmp3() {
      if (this.mp3) {
        this.$refs.mylife.pause();
        this.mp3 = false;
      } else {
        this.$refs.mylife.play();
        this.mp3 = true;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@keyframes myfirst {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes myfirst {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.pre {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  > div {
    margin: auto;
    height: 100%;
    display: inherit;
    flex-direction: column; 
    .loading {
      margin: auto;
      width: 1rem;
      animation: myfirst 0.8s infinite;
      -webkit-animation: myfirst 0.8s infinite;
    }
    .loadingtext {
      font-size: 0.3rem;
      text-align: center;
      position: relative;
      bottom: 3rem;
    }
  }
  // background:rgba(0,0,0,0.2);
}
.mp3 {
  position: absolute;
  top: 0.3rem;
  right: 0.38rem;
  width: 0.7rem;
  z-index: 10000;
}
.child-view {
  position: absolute;
}
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
</style>