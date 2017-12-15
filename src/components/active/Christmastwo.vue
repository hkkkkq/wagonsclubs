<template>
<div class="wrap">
  <!-- <p>{{score}}</p> -->
  <img class="faker" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/faker.png">
  <div class="hp">
    <div :style="{'width':live + '%'}" class="red">HP</div>
  </div>
  <p class="countdown">{{wxshare}}00:{{countdown | formtime}}</p>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple1" v-if="apple1"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple2" v-if="apple2"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple3" v-if="apple3"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple4" v-if="apple4"></apple>
  <apple v-on:increment="incrementTotal" :currx='leftx' ref="apple5" v-if="apple5"></apple>
  <img :style="{left: leftx+'rem'}" :class="{'reserveman':reserveman}" class="man" :src="man[manindex]">
  <button :class="{'leftdown':leftdown}" class="left" @touchstart="move($event,'L')" @touchend="moveend('L')"></button>
  <button :class="{'rightdown':rightdown}" class="right" @touchstart="move($event,'R')" @touchend="moveend('R')"></button>
  <div v-show='gamewin||gamelose' class="zz">
    <div @click="share" class="but"></div>
    <img v-show='gamelose' class="true" src="/static/img/falsecall.png">
    <img v-show='gamewin' class="false" src="/static/img/successcall.png">
  </div>
</div>
</template>

<script>
import apple from "./apple.vue";
export default {
  data() {
    return {
      man: [
        'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/man.png',
        'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/manget.png',
        'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/mandead.png'],
      manindex:0,
      leftdown:false,
      countdown:30,
      rightdown:false,
      leftx: 0,
      leftloop: "",
      wxshare:'xx',
      rightloop: "",
      apple1: true,
      apple2: false,
      apple3: false,
      apple4: false,
      apple5: false,
      score: 0,
      live:100,
      gamewin:false,
      gamelose:false,
      reserveman:true,
      starttime:0,
      endtime:0,
      gametime:0
    };
  },
  watch:{
    // this.$refs.apple1
    countdown (value) {
      if((this.countdown == 0)&&(this.gamewin == false)){
        this.gamelose = true
      }
    },
    gamewin (val) {
      if(val == true) {
        this.endtime = new Date()
        this.gametime = this.endtime - this.starttime
        // alert('游戏时间'+(this.gametime/1000)+'秒')
      }
    }
  },
  computed: {
    WAG() {
      return this.$store.state.WAG;
    }
  },
  filters: {  
    formtime: function (value) {  
      if(value >= 10 ){
        return value
      }else{
        return '0'+value
      }
    }  
  },
  mounted () {
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {        // 通过下面这个API显示右上角按钮     
      WeixinJSBridge.call('showOptionMenu'); 
    });
    var urllink 
    if(/iPhone/i.test(navigator.userAgent)){
      urllink = 'http://www.wagonsclub.com/wx/christmas?WAG='+this.WAG
    }else{
      urllink = location.href
    }
    var count = setInterval(() => {
      if(this.countdown == 1){
        clearInterval(count)
      }
      --this.countdown
    }, 1000);
    this.starttime = new Date();
    setTimeout(() => {
      this.apple2 = true
    }, 2000);
    setTimeout(() => {
      this.apple3 = true
    }, 4000);
    setTimeout(() => {
      this.apple4 = true
    }, 6000);
    setTimeout(() => {
      this.apple5 = true
    }, 8000);
    this.$ajax(BASE_URL + '/car/weixinShare?ts='+new Date().getTime()+'&url=' + escape(urllink))
    // this.$ajax(BASE_URL + '/car/weixinShare?url=' + escape(location.href))
    .then((res) => {
      var vm = this
      wx.config({
        debug: true,
        appId:res.data.data.sign.appId,
        timestamp:res.data.data.sign.timestamp,
        nonceStr:res.data.data.sign.nonceStr,
        signature:res.data.data.sign.signature,
        jsApiList:[
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo'
        ]
      });
      var locationHref = window.location.href;
      wx.ready(function() {
        wx.onMenuShareTimeline({
          title: 'WAGONS光速超跑圣诞节活动',
          link: 'http://wap.wagonsclub.com/weixin/redirect/ChristmasFighting',
          imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg',
          success: function(){
            //游戏成功分享游戏次数-1
            vm.wxshare = 'success'
            if(vm.gamewin){
                //请求游戏次数
                vm.$ajax({
                  url:BASE_URL+'/christmas/shareCondition',
                  method:'get',
                  headers: { WAG: vm.WAG }
                  })
                .then(res=>{
                })
                vm.$router.push('/wx/Christmas/three')
            }else{
              vm.$router.push('/wx/Christmas/one')
            }
          },
          cancel: function(){
            vm.wxshare = 'cancel'
            alert(errMsg)
            alert('请点击右上角分享')
            // alert("直接取消分享啥也不干"+vm.WAG)
          },
          fail:function(){
            vm.wxshare = 'fail'
            alert(errMsg)
            alert('分享失败')
          },
          complete:function(){
            vm.wxshare = 'complete'
            alert(errMsg)
            alert('complete')
          },
          trigger:function(){
            vm.wxshare = 'trigger'
            alert(errMsg)
            alert('111')
          }
        });
        wx.onMenuShareAppMessage({
          title: 'WAGONS光速超跑圣诞节活动',
          desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
          link: 'http://wap.wagonsclub.com/weixin/redirect/ChristmasFighting',
          imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg',
          success: function(){
            var vm = this
            //游戏成功分享游戏次数-1
            if(vm.gamewin == true){
                //请求游戏次数
                // alert('赢了')
                vm.$ajax({
                  url:BASE_URL+'/christmas/shareCondition',
                  method:'get',
                  headers: { WAG: vm.WAG }
                  })
                .then(res=>{
                  // alert('请求了接口')
                    vm.$router.push('/wx/Christmas/three')
                })
            }else{
              // alert("游戏失败分享成功啥也不干"+vm.WAG)
            }
          },
          cancel: function(){
            // alert("直接取消分享啥也不干"+vm.WAG)
          }
        });
        wx.onMenuShareQQ({
          title: 'WAGONS光速超跑圣诞节活动',
          desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
          link: locationHref,
          imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg'
        });
        wx.onMenuShareWeibo({
          title: 'WAGONS光速超跑圣诞节活动',
          desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
          link: locationHref,
          imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg'
        });
      });
    }).catch((res) => { alert(res) })
  },
  components:{
    apple: apple
  },
  methods: {
    share () {
      var vm = this
      alert('请点击右上角分享至朋友圈')
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
      var vm = this
      if (type === "L") {
        this.reserveman = false
        this.leftdown = true
        function gol(params) {
          if(vm.leftx < 0){
            return
          }else{
            vm.leftx += -0.06
          }
          vm.leftloop = requestAnimationFrame(gol)          
        }
        gol()
      } else {
        this.reserveman = true
        this.rightdown = true
        function gor(params) {
          if(vm.leftx > 5){
            return
          }else{
            vm.leftx += 0.06;
          }
          vm.rightloop = requestAnimationFrame(gor)
        }
        gor()
      }
    },
    moveend(type) {
      if (type === "L") {
        this.leftdown = false
        window.cancelAnimationFrame(this.leftloop)
      } else {
        this.rightdown = false
        window.cancelAnimationFrame(this.rightloop)
      }
    },
    incrementTotal (random) {
      if (random == 0) {
        //炸弹
        this.manindex = 2
        setTimeout(() => {
          this.manindex = 0
        }, 500);
        return
      }else{
        this.manindex = 1
        setTimeout(() => {
          this.manindex = 0
        }, 500);
        if(random == 3){
          //苹果
          this.live -= 10
          if (this.live <= 0){
            //成功
            this.live = 0
            if(this.gamelose == true){
              return
            }else{
              this.gamewin = true
            }
          }else{
            return
          }
        }else{
          //商家
          this.live -= 5
          if(this.live <= 0){
            //成功
            this.live = 0
            if(this.gamelose == true){
              return
            }else{
              this.gamewin = true
            }
          }else{
            return
          }
        }
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@font-face { 
  font-family: "Quartz Regular"; 
  src: url('/static/christmas/Quartz Regular.ttf'); 
} 
.countdown{
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
.zz{
  position: fixed;
  top:0;
  background: rgba(0,0,0,0.8);
  width: 100%;
  font-size: 0;
  display: flex;
  z-index: 11;
  display: -webkit-flex;
  height: 100%;
  .false{
    margin: auto;
    width: 5.8rem
  }
  .true{
    margin: auto;
    width: 6.4rem
  }
  .but{
    width: 50%;
    height: 1rem;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 8.5rem;
  }
}
.hp{
    width: 4.66rem;
    height: 0.45rem;
    display: inline-block;
    border: 2px solid #ecb1b1;
    position: relative;
    top: -1rem;
    left: 2rem;
    border-radius: 4px;
    background: #000;
    .red{
      transition: all 0.2s ease-in;
      -webkit-transition: all 0.2s ease-in;
      width: 80%;
      height: 100%;
      font-size: 0.3rem;
      text-indent: 0.2rem;
      color: #fff;
      line-height: 0.5rem;
      background: -webkit-gradient(linear, 0 0, 0 bottom, from(#f04c4e), to(#d3282d));
    }
}
.left{
  left:0.5rem;
  background: url('../../assets/active/left.png');
}
.leftdown{
  background: url('../../assets/active/leftdown.png')!important;
}
.right{
  right:0.5rem;
  background: url('../../assets/active/right.png');
}
.rightdown{
  background: url('../../assets/active/rightdown.png')!important;
}
.faker{
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
  background: url('http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/bg2.png');
  background-size: 100% 100%;
  button {
    border: 0;
    background-size: 100%!important;
    width: 2.6rem;
    height: 1.26rem;
    background-repeat: no-repeat!important;
    position: absolute;
    font-size: 1rem;
    bottom: 10px;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  span{
    font-size:0.5rem
  }
  .reserveman{
    transform: rotateY(180deg);
  }
  .man {
    width: 2.56rem;
    position: absolute;
    bottom: 2.5rem;
    // margin: auto;
  }
}
</style>
