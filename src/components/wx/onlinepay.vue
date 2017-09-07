<template>
<div style="height: 100%;position: absolute;width: 100%;">
    <div style="background:rgb(15, 25, 35);min-height:100%">
        <p class="money">¥2000.00</p>
        <p class="m1">线上支付定金</p>
        <img style="width:7.1rem;display:block;margin:auto" src="../../assets/app/wxp.png">
        <p class='clear'></p>  
        <p class="txt">如果您线上支付金额受限，也可以通过支付宝转账的方式缴纳定金</p>  
        <div class="alipay">
            <img src="../../assets/app/alipay.png">
            <div class="alit">
                <h1>支付宝转账</h1>
                <p style="margin-top:0.36rem">支付宝账户：XXX@XXXXXXX.com</p>
                <p style="margin-top:0.18rem;margin-bottom:0.42rem">收款公司：铭博顺通（北京）科技发展有限公司</p>
            </div>
        </div>   
        <img style="width: 5.22rem;margin: 0.74rem auto auto;padding-bottom: 0.78rem;position: absolute;bottom: 0;left: 0;right: 0;" src="../../assets/app/blogo.png">
    </div>
</div>
</template>

<script>
require('../app/rem.js')(window,document)
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.alipay p {
    color: #ffffff;
    font-size: 0.24rem;
}
.alit h1{
    font-size: 0.26rem;
    color: #ffffff;
    border-bottom: 1px solid #39424a;
    height: 1rem;
    line-height: 1rem;
}
.alit{
    display: inline-block;
    margin-left: 0.2rem;
    width: 6.1rem;
}
.alipay img{
    width: 0.48rem;
    height:0.48rem;
    display: inline-block;
    margin-top: 0.26rem;
    vertical-align: top;
}
.alipay{
    background: #273039;
    width: 6.8rem;
    display: block;
    margin: auto;
    padding-left: 0.3rem;
    font-size: 0;
    margin-top: 0.26rem;
    border-radius: 2px;
}
.txt{
    color: #999999;
    font-size: 0.24rem;
    display: block;
    width: 7.1rem;
    margin: auto;
    margin-top: 0.38rem;
}
.clear{
    width: 7.1rem;
    height: 1px;
    background: #39424a;
    margin: auto;
    margin-top: 0.33rem;
}
.m1{
    color: #ffffff;
    font-size: 0.26rem;
    text-align: center;
    margin-top: 0.22rem;
    margin-bottom: 1.27rem;
}
.money{
    font-size: 0.58rem;
    color: #f4d144;
    width: 100%;
    text-align: center;
    padding-top: 1.27rem;
}
</style>
