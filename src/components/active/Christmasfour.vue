<template>
<div class="four">
  <img class="img1" src="/static/christmas/four-1.png">
  <div class="card">
    <img class="cardbg" src="/static/christmas/four-bg.png">
  </div>
  <div class="zz">
    <div v-show="zz">
      <input v-model='name' placeholder="请输入姓名" class="zzname" type="text">
      <input v-model="cell" placeholder="请输入手机号" class="zztel" type="text">
      <img @click="submit" class="zzsub" src="/static/christmas/four-sub.png">
      <img class="zzbg" src="/static/christmas/four-alert.png">
    </div>
  </div>
</div>
</template>

<script>
import qs from 'qs';
require("../app/rem.js")(window, document);
export default {
  data() {
    return {
      name: "",
      cell: "",
      zz:true
    };
  },
  methods: {
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
            this.zz = false;
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
  width: 100%;
  .img1 {
    width: 100%;
  }
  .card {
    background: #000;
    display: flex;
    display: -webkit-flex;
    height: 3.6rem;
    .cardbg {
      width: 6.39rem;
      height: 3.21rem;
      margin: auto;
    }
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