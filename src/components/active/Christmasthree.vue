<template>
<div class="three">
  <div :style="{'bottom':ipxbottom + 'rem'}" class="rad">
    <img @click="start" v-if="!click" class="button" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/button.png">
    <img v-else class="button" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/buttonclick.png">
    <img class="arrow" src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/arrow.png">
    <img :class="{'an':zhuan}" class="pan" src="/static/christmas/rad2.png">
  </div>
  <div class="bordcast">
    <p>
      <img src="../../assets/active/brodcast.png">
      <span class="lunbo">{{huojiang[random]}}</span>
    </p>
  </div>
  <div v-show="present" class="zz">
    <div class='wrapz'>
      <div @click="view" class="butz"></div>
      <span class="text">{{presentname}}</span>
      <img src="http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/present.png">
    </div>
  </div>
</div>
</template>

<script>
require("../app/rem.js")(window, document);
export default {
  data() {
    return {
      ipxbottom:false,
      zhuan: false,
      click: false,
      present: false,
      random: 0,
      presentid: 0,
      presentname: "恭喜您获得了是撒空间里发了空军飞机卡",
      huojiang: [
        "赵**获得光速超跑2000元使用券",
        "王**获得光速超跑2000元使用券",
        "赵**获得火球理财6.6%加息券",
        "陈**获得取满满5元电影票抵用券", 
        "朱*获得BOTAICA植物园八折券", 
        "廖**获得BOTAICA植物园八折券", 
        "青***获得一键秀十元抵用券", 
        "李**获得光速超跑2000元使用券",
        "李*获得光速超跑500元使用券",
        "候*获得取满满5元电影票抵用券",
        "孙**获得BOTAICA植物园八折券",]
    };
  },
  mounted() {
    var ua = navigator.userAgent.toLowerCase()
    if(/iphone/.test(ua)&&(screen.height == 812 && screen.width == 375)){
      this.ipxbottom = 3
    }else{
      this.ipxbottom = 2
    }
    setInterval(() => {
      this.random = Math.floor(Math.random() * 11);
    }, 2000);
    this.$ajax({
        url:BASE_URL+'/christmas/stepForward?step=3',
        headers:{WAG:this.WAG}
      }).then(res=>{
      })
  },
  methods: {
    start() {
      this.click = true;
      setTimeout(() => {
        this.click = false;
      }, 100);
      this.zhuan = true;
      setTimeout(() => {
        this.$ajax({
          url: BASE_URL + "/christmas/getAward",
          method: "get",
          headers: { WAG: this.WAG }
        }).then(res => {
          this.present = true;
          if (res.data.success == true) {
            this.presentname = res.data.data.award.name;
            this.presentid = res.data.data.award.id;
          } else {
            alert("请求接口出错");
          }
        });
      }, 2000);

      // setTimeout(() => {
      // this.present = true
      // }, 2000);
    },
    view() {
      this.$router.push("/wx/Christmas/four?presentid="+this.presentid);
      this.$store.commit('setChristmas',true)
    }
  }
};
</script>

<style lang='scss' scoped>
@keyframes lun {
  0% {
    transform: translateY(-0.5rem);
  }
  100% {
    transform: translateY(0.5rem);
  }
}
@-webkit-keyframes lun {
  0% {
    transform: translateY(0.5rem);
  }
  100% {
    transform: translateY(-0.5rem);
  }
}
.lunbo {
  animation: lun 2s linear infinite;
  -webkit-animation: lun 2s linear infinite;
  display: inline-block;
}
.zz {
  z-index: 10000;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  display: -webkit-flex;
  img {
    margin: auto;
    width: 6rem;
    height: 10.8rem;
    margin-top: 0.2rem;
  }
  .wrapz{
    margin: auto;
    position: relative;
      .butz {
        position: absolute;
        width: 50%;
        margin: auto;
        left: 0;
        right: 0;
        height: 2rem;
        z-index: 1;
        bottom: 0.8rem;
      }
      .text {
        position: absolute;
        color: #f4e19b;
        font-size: 0.32rem;
        text-align: center;
        left: 0;
        right: 0;
        bottom: 3.5rem;
        margin: auto;
        width: 4rem;
      }
  }
}
.but {
  animation: load5 1s ease-in-out infinite;
  -webkit-animation: load5 1s ease-in-out infinite;
  width: 50%;
  height: 1rem;
  opacity: 0;
  background: orange;
  color: #222;
  font-size: 24px;
  text-align: center;
  margin: auto;
  border-radius: 100px;
  position: absolute;
  z-index: 100;
  line-height: 42px;
  left: 0;
  right: 0;
  bottom: 2rem;
}
.bordcast {
  display: flex;
  position: absolute;
  overflow: hidden;
  bottom: 0.32rem;
  width: 80%;
  font-size: 0;
  background: #fff;
  height: 0.5rem;
  border: 3px solid #2e896c;
  border-radius: 1rem;
  margin: auto;
  left: 0;
  right: 0;
  p {
    font-size: 16px;
    margin: auto;
    padding: 0 5%;
    line-height: 24px;
    width: 6rem;
  }
  img {
    display: inline-block;
    width: 0.32rem;
    position: relative;
    top: 3px;
    height: 0.36rem;
  }
  span {
    position: relative;
  }
}
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
.three {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url("http://wagons.oss-cn-qingdao.aliyuncs.com/assets/active/christmas/images/presentbj.png");
  background-size: 100% 100%;
}
.rad {
  width: 5.3rem;
  height: 5.3rem;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  display: -webkit-flex;
  margin: auto;
  .an {
    animation: myfirst 0.5s linear infinite;
    -webkit-animation: myfirst 0.5s linear infinite;
  }
  .pan {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .arrow {
    position: relative;
    margin: auto;
    z-index: 2;
    margin-top: 1.3rem;
    height: 2.3rem;
  }
  .button {
    position: absolute;
    z-index: 4;
    left: 0;
    right: 0;
    margin: auto;
    width: 1.36rem;
    top: 1.95rem;
  }
}
</style>
