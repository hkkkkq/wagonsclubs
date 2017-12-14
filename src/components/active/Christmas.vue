<template>
<div>
  <img @click="cmp3" v-show="mp3" class="mp3" src="/static/christmas/mp3.png">
  <img @click="cmp3" v-show="!mp3" class="mp3" src="/static/christmas/mp3done.png">
  <audio id='audio' ref="mylife" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/mp3/GAI.mp3"></audio>
  <p v-show='loading == true'>加载中</p>
  <transition name="fade">
	  <router-view class="child-view">sss</router-view>
  </transition>
</div>
</template>

<script>
require("../app/rem.js")(window, document);
export default {
  data () {
    return{
      mp3: true,
      count:0,
      loading:true
    }
  },
  computed: {
    WAG() {
      return this.$store.state.WAG;
    }
  },
  mounted () {
    if (this.$route.query.WAG) {
      this.$store.commit("setOpenId", this.$route.query.WAG);
    }
    var arr = [
      'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load2.png',
      'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load1.png',
      'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load3.png',
      'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/load4.png',
      'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/bg2.png',
      'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/man.png',
      'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/manget.png',
      'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/mandead.png',
      'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/presentbj.png',
      'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/rad.png',
      'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/arrow.png',
      ]
    arr.forEach(item => {
      let img = new Image()
      img.onload = ()=>{
        this.count++
      }
      img.src=item
    })
    document.getElementById('audio').play()
    this.$refs.mylife.play()
    document.addEventListener("WeixinJSBridgeReady", function () { 
        document.getElementById('audio').play() 
        this.$refs.mylife.play()
    }, false);
    //请求游戏次数
    this.$ajax({
      url:BASE_URL+'/christmas/timesRestriction',
      method:'get',
      headers: { WAG: this.WAG }
      })
    .then(res=>{
      console.log(res.data)
      if(res.data.success == false){
        this.$router.push('/wx/Christmas/four')
      }else if(res.data.success == true){
        this.$router.push('/wx/Christmas/one')
      }else{
        alert('后台bug1')
      }
    })
  },
  watch: {
    count(val){
      if(val == 11) {
        // alert('资源加载完成')
        this.loading = false
        // this.$router.push('/Christmas/one')
      } 
    }
  },
  methods: {
    cmp3 () {
      if(this.mp3){
        this.$refs.mylife.pause()
        this.mp3 = false
      }else{
        this.$refs.mylife.play()
        this.mp3 = true
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.mp3{
  position: absolute;
  top: 0.3rem;
  right: 0.38rem;
  width: 0.7rem;
  z-index: 10000;
}
.child-view {
  position: absolute;
} 
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
  opacity: 0;
  background: #FFF;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>