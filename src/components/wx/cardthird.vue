<template>
<div class="wrap">
    <img src="../../assets/app/cardsuccess.png">
    <p>充值成功</p>
    <div class="tips">
        <p>尊敬的用户：</p>
        <p>您的WAGONS光速超跑充值卡已成功充值20000元，马上开启您的超跑自驾之旅吧！</p>
    </div>
</div>  
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang='scss' scoped>
$bgcolor: #0f1923;
$yellow: #fed945;
$font: PingFangSC-Light, sans-serif;
$divbgcolor: #273039;
.border {
  border-radius: 0.04rem;
}
//上面是变量
.wrap {
  background: $bgcolor;
  width: 100%;
  color: #fff;
  height: 100%;
  font-family: $font;
  img {
    width: 1rem;
    height: 1rem;
    display: block;
    margin: auto;
    margin-top: 0.7rem;
  }
  > p {
    font-size: 0.32rem;
    text-align: center;
    margin-top: 0.3rem;
    width: 100%;
    margin-bottom: 0.7rem;
  }
  .tips {
    background: $divbgcolor;
    width: 6.5rem;
    padding: 0.3rem;
    margin: auto;
    font-size: 0.24rem;
    @extend .border;
    p {
      line-height: 0.5rem;
    }
  }
}
</style>
