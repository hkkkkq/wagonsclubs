<template>
<div class="four">
  <div>
    <img class="img1" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-1.jpg">
  </div>
  <div>
    <img class="award" :src='src[Number(id)-1]'>
    <img src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-bg.jpg">
  </div>
  <div>
    <div @click="tojia" class="tujia"></div>
    <img src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-tujia.jpg">
  </div>
  <div>
    <img @click="showqr" class="qr" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-qr.jpg">
    <img src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-bottom.jpg">
  </div>
  <transition name="fade">
    <div @click="showqr" v-show="qr" class="zz">
      <img class="zzqr" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-qr.jpg">
    </div>
  </transition>
  <transition name="fade">
    <div v-show="show" class="zz">
      <div>
        <input v-model='name' placeholder="请输入姓名" class="zzname" type="text">
        <input v-model="cell" placeholder="请输入手机号" class="zztel" type="text">
        <img @click="submit" class="zzsub" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-sub.png">
        <img class="zzbg" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-alert.png">
      </div>
    </div>
  </transition>
</div>
</template>

<script>
import qs from 'qs';
require("../app/rem.js")(window, document);
export default {
  name:'four',
  data() {
    return {
      name: "",
      cell: "",
      zz:'',
      qr:false,
      id:0,
      src:[
        'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-award1.jpg',
        'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-award2.jpg',
        'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-award3.jpg',
        'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-award4.jpg',
        'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-award5.jpg',
        'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-award6.jpg',
        'http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/four-award7.jpg',
      ]
    };
  },
  computed:{
    show() {
      return this.$store.state.christmas;
    }
  },
  created () {
    this.id = this.$route.query.presentid
    this.zz = this.$route.query.alert
  },
  methods: {
    showqr(){
      this.qr == true?this.qr = false:this.qr = true
    },
    tojia () {
      window.location.href = 'https://p.tujia.com/qrcode/cpjlbhb?go=h5&ts='+new Date().getTime();
    },
    submit() {
      if (this.name == "" || this.tel == "") {
        alert("请输入完整信息");
      } else {
        this.$ajax({
          url:BASE_URL + "/christmas/saveAward",
          method:'post',
          data:qs.stringify({
            awardId:this.$route.query.presentid,
            name:this.name,
            cell:this.cell
          })
          }).then(res => {
            this.$store.commit('setChristmas',false)
            alert(res.data.message)
        });
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.four {
  font-size: 0;
  position: absolute;
  min-height: 100%;
  background: #000;
  width: 100%;
  >div{
    position: relative;
    width: 100%;
    .qr{
      position: absolute;
      top: 1.5rem;
      right: 0.85rem;
      width: 2rem;
    }
    .tujia{
      @extend .award;
    }
    .award{
      width: 6.24rem;
      height: 3.11rem;
      border-radius: 10px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
    img{
      width: 100%;
    }
  }
  .img1 {
    width: 100%;
  }
  .zz {
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    display: -webkit-flex;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    .zzqr{
      width: 7.5rem;
      height: 7.5rem;
      margin: auto;
    }
    > div {
      margin: auto;
      width: 6.2rem;
      position: relative;
      .zzname {
        position: absolute;
        background: rgba(0, 0, 0, 0);
        border: 1px solid #fff;
        width: 5.4rem;
        height: 0.78rem;
        left: 0.3rem;
        font-size: 0.28rem;
        top: 1.45rem;
        color: #fff;
        text-indent: 0.3rem;
      }
      .zzsub {
        position: absolute;
        width: 3.67rem;
        height: 0.88rem;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 2.3rem;
      }
      .zztel {
        text-indent: 0.3rem;
        background: rgba(0, 0, 0, 0);
        color: #fff;
        border: 1px solid #fff;
        position: absolute;
        width: 5.4rem;
        height: 0.78rem;
        top: 2.5rem;
        left: 0.3rem;
        font-size: 0.28rem;
      }
      .zzbg {
        margin: auto;
        width: 100%;
        height: 7.25rem;
      }
    }
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #ffffff;
    opacity: 1;
  }

  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #ffffff;
    opacity: 1;
  }

  input:-ms-input-placeholder {
    color: #ffffff;
    opacity: 1;
  }

  input::-webkit-input-placeholder {
    color: #ffffff;
    opacity: 1;
  }
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