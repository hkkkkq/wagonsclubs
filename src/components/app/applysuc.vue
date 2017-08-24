<template>
<div style="height:100%;background:#0f1923;border:1px solid #3d454d">
    <div class="qq"></div>
    <img style="width:7.1rem" src="../../assets/app/suc.jpg">
    <textarea placeholder="请填写您的详细地址" class="area"></textarea>
    <p class="but">提交申请</p>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.but{
    width: 7.1rem;
    height: 0.72rem;
    margin: auto;
    background: #fed945;
    font-size: 0.26rem;
    color: #333333;
    text-align: center;
    line-height: 0.7rem;
    margin-top: 0.3rem;
}
.area{
    width: 6.5rem;
    display: block;
    margin: auto;
    height: 1.3rem;
    background: #273039;
    color: #666666;
    font-size: 0.26rem;
    border: 0;
    border-radius: 3px;
    line-height: 0.4rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-top: 0.1rem;
}
.qq{
    width: 7.1rem;
    height: 1rem;
    display: block;
    margin: auto;
    background: url('../../assets/app/apply2.jpg');
    background-size: 100% 100%;
    border-bottom: 1px solid #273039;
    margin-top: 0.42rem;
    margin-bottom: 0.4rem;
    border-left: 1px solid #273039;
}
</style>
