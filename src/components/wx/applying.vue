<template>
    <div style="position: absolute;width:100%;height:100%">
        <div style="height:100%;background:#0f1923;width:100%">
            <h1 style="width:100%;height:1px"></h1>
            <img class="ai" src="../../assets/app/applying.png">
            <p class="ap">申请审核中</p>
            <div class="co">
                <p>尊敬的用户：</p>
                <p>您提交的申请我们已收到，评估工作正在忙碌地进行中。我们会及时向您通报进展。</p>
            </div>
            <img style="width: 5.22rem;margin: 0.74rem auto auto;padding-bottom: 0.78rem;position: absolute;bottom: 0;left: 0;right: 0;" src="../../assets/app/blogo.png">
        </div>
    </div>
</template>

<script>
require('../app/rem.js')(window, document)
export default {

}
</script>

<style scoped>
.co p{
    font-size: 0.24rem;
    color:#ffffff;
    line-height: 1rem;
     line-height: 0.45rem;
     /* text-indent: 0.3rem; */
}
.co{
    padding-top: 0.38rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    width: 6.5rem;
    height: 1.52rem;
    display: block;
    background: #273039;
    margin: auto;
    border-radius: 0.04rem;
    margin-top: 1.2rem;
}
.ap{
    font-size: 0.32rem;
    color: #ffffff;
    text-align: center;
    margin-top: 0.3rem;
}
.ai{
    width: 1rem;
    height: 1rem;
    display: block;
    margin: auto;
    margin-top: 0.72rem;
}
</style>
