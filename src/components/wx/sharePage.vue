<template>
<div :style="{'height': screenHeight + 'px','background': 'url('+ bgpic+')'}" class="wrap">
	<div class="main">
		<img class="title" :src="titlepic">
		<div class="in">
			<div v-if="nameR === 1" class="line">
				<span>姓名</span>
				<input v-model="name" placeholder="请输入您的真实姓名">
			</div>
			<div v-if="cellR === 1" class="line">
				<span>手机号</span>
				<input v-model="cell" placeholder="请输入手机号">
			</div>
			<div v-if="addressR === 1" class="line">
				<span>住址</span>
				<input v-model="address" placeholder="请输入您的现居地址">
			</div>
			<div v-if="numberR === 1" class="line">
				<span>参加人数</span>
				<input v-model="number" placeholder="请输入您的参加人数">
			</div>
			<p>{{deadline}}</p>
		</div>
		<div class="bottom">
			<div @click="sub" class="but">
				<p>报名参加</p>
			</div>
			<div class="qr">
				<img v-if='qr1src != ""' :src="qr1src">
				<img v-if='qr2src != ""' :src="qr2src">
			</div>
		</div>
	</div>
</div>
</template>

<script>
import qs from "qs";
require("../app/rem.js")(window, document);
export default {
  data() {
    return {
      name: "",
      cell: "",
      address: "",
      number: "",
      screenHeight: 0,
      nameR: 1,
      numberR: 1,
      addressR: 1,
      cellR: 1,
      deadline: "",
      bgpic: "",
      titlepic: "",
      qr1src: '',
      qr2src: ''
    };
  },
  created() {
    this.screenHeight = document.documentElement.clientHeight;
    // this.$route.query.id
    this.$ajax(
      BASE_URL + "/activity/H5?id=" + this.$route.query.id
    ).then(res => {
      if (res.data.code == -1) {
        alert("此活动已结束");
      }
        this.bgpic = res.data.data.activity.backgroundPic;
        this.titlepic = res.data.data.activity.titlePic;
        this.qr1src = res.data.data.activity.qr1
        this.qr2src = res.data.data.activity.qr2
      if (res.data.data.qr2show == 1) {
      }
      document.title = res.data.data.activity.name;
      this.nameR = res.data.data.activity.nameRequired;
      this.cellR = res.data.data.activity.cellRequired;
      this.addressR = res.data.data.activity.addressRequired;
      this.numberR = res.data.data.activity.numRequired;
      this.deadline = res.data.data.activity.postscript;
    });
  },
  methods: {
    sub() {
      if ((this.nameR === 1) && (this.name == "")) {
        alert("请输入您的姓名");
        return;
      }
      if ((this.cellR === '1') && (this.cell == "")) {
        alert("请输入您的手机号");
        return;
      }
      if ((this.addressR === 1) && (this.address == "")) {
        alert("请输入您的现居地址");
        return;
      }
      if ((this.numberR === 1) && (this.number == "")) {
        alert("请输入您的参加人数");
        return;
      }
      this.$ajax({
        url: BASE_URL + "/activity/registActivity",
        method: "post",
        data: qs.stringify({
          activityId: this.$route.query.id,
          name: this.name,
          cell: this.cell,
          address: this.address,
          joinNum: this.number
        })
      }).then((res) => {
			if (res.data.success == true) {
				alert(res.data.message)
			}else {
				alert('报名出错,请检查您的输入是否有问题')
			}
		})
    }
  }
};
</script>

<style lang='scss' scoped>
.wrap {
  position: absolute;
  width: 100%;
  // background: url('../../assets/app/BG.jpg');
  background-size: 100% 100% !important;
  overflow: hidden;
  .main {
    width: 72%;
    margin: auto;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    .title {
      margin: auto;
      margin-top: 0;
      margin-bottom: -0.3rem;
      width: 100%;
    }
    .in {
      margin: auto;
      width: 100%;
      font-size: 0.3rem;
      p {
        font-size: 0.22rem;
        color: #ffffff;
        width: 90%;
        margin: auto;
        margin-top: 0.2rem;
      }
      .line {
        display: flex;
        width: 90%;
        margin: auto;
        line-height: 0.7rem;
        margin-top: 0.2rem;
        display: -webkit-flex;
        border-bottom: 1px solid #fed30b;
        span {
          margin: auto;
          margin-left: 0;
          color: #fed30b;
        }
        input {
          margin: auto;
          margin-right: 0;
          font-size: 0.3rem;
          text-align: right;
          background: rgba(0, 0, 0, 0);
          border: 0px;
          color: #ffffff;
          width: 3rem;
        }
      }
    }
    .bottom {
      width: 100%;
      margin: auto;
      margin-bottom: 0;
      .but {
        width: 90%;
        margin: auto;
        border-radius: 4px;
        height: 0.82rem;
        display: block;
        display: flex;
        display: -webkit-flex;
        background: -webkit-linear-gradient(
          bottom,
          #ffc60b,
          #fdd52a
        ); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(
          top,
          #ffc60b,
          #fdd52a
        ); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(
          top,
          #ffc60b,
          #fdd52a
        ); /* Firefox 3.6 - 15 */
        background: linear-gradient(to top, #ffc60b, #fdd52a); /* 标准的语法 */
        p {
          margin: auto;
          color: #000000;
          font-size: 0.32rem;
        }
      }
      .qr {
        display: flex;
        margin-top: 0.4rem;
        margin-bottom: 0.7rem;
        display: -webkit-flex;
        img {
          width: 1.6rem;
          height: 1.6rem;
          margin: auto;
        }
      }
    }
  }
}
</style>
