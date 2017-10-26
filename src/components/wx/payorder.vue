<template>
<div class="wrap">
    <p class="num">¥20000.00</p>
    <p class="cox">线上支付定金</p>
    <div class="paytype">
        <img src="../../assets/app/refillcard.png">
        <img class="arrow" src="../../assets/app/wxright.png">
    </div>
    <div class="paytype">
        <img src="../../assets/app/wxpay_03.png">
        <img class="arrow" src="../../assets/app/wxright.png">
    </div>
</div>
</template>

<script>
require("../app/rem.js")(window, document);
export default {};
</script>

<style lang='scss' scoped>
$bgcolor:#0f1923;
$yellow:#f4d144;
$divbg:#273039;
$fontfamily: PingFangSC-Light, sans-serif;
.border{
    border-radius: 0.04rem;
}
.wrap{
    position: absolute;
    width: 100%;
    color: #ffffff;
    min-height: 100%;
    background: $bgcolor;
    font-family: $fontfamily;
}
.num{
    font-size: 0.58rem;
    color: $yellow;
    text-align: center;
    margin-top: 1.28rem;
    margin-bottom: 0.27rem;
}
.cox{
    font-size: 0.26rem;
    text-align: center;
    margin-bottom: 1.28rem;
}
.paytype{
    width: 6.5rem;
    height: 1rem;
    padding: 0 0.3rem;
    background: $divbg;
    @extend .border;
    margin: auto;
    display: flex;
    display: -webkit-flex;
    margin: 0.2rem auto;
    img{
        width: 0.5rem;
        height: 0.5rem;
        margin: auto;
        margin-left: 0;
    }
    .arrow{
        height: 0.2rem;
        width: 0.1rem;
        margin-right: 0;
        margin-left: 0.25rem;
    }
}
</style>
