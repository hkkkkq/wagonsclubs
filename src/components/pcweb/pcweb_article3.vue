<template>
<div style="background:#f5f5f5">
            <div class="s_banner"></div>
    <h1 style="height:28px"></h1>
    <div class="tit">
        <p>为爱提速、超跑动心 | WAGONS为留守儿童爱心捐赠</p>
        <h1>2017-08-21  16:30:09</h1>
    </div>
    <h1 style="height:20px"></h1>
    <div class="ccc">
        <p>赠人玫瑰之手，经久犹有余香。</p>
        <p>WAGONS光速超跑通过当代MOMA了解到有这么一群孩子，每天在家盼望着父母的归来，只能在照片里看到父母慈爱的笑容，生病没有父母的拥抱。他们独守家中，感受着与自己年纪不相符的孤独，他们远离父母，承受着“无爱”之痛。</p>
        <p>他们就是留守儿童。</p>
        <img src="../../assets/nn31.jpg">
        <p>本次捐助对象</p>
        <p>河北、河南、江西、湖南、福建等地的留守儿童。</p>
        <p>捐赠时间</p>
        <p>2017年7月10日--2017年9月30日</p>
        <p>捐赠现场引来许多小朋友们领取了爱心存折，来到了作为MOMA园区内的爱心商户---WAGONS光速超跑，找到我们的爱心标识，收集爱心印章。</p>
        <img src='../../assets/nn32.png'>        
        <img src='../../assets/nn33.png'>        
        <img src='../../assets/nn34.png'>        
        <p>这个夏天，WAGONS光速超跑与您一起关注留守儿童，让油门为爱轰鸣！</p>
    </div>
    <div class="fen">
        <a href="/article/2" style="float:left">上一页：WAGONS光速超跑举办试驾品鉴活动</a>
        <a href="/article/4" style="float:right;">我学会了漂移 正在前往拯救世界的路上：下一页</a>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
        window.scroll(0,0)
    }
}
</script>

<style scoped>
/* .fen a:hover{
    color: #acacac;
} */
.fen a {
     margin-top: 20px;
     font-size: 14px;
     color: #494949;
     cursor: pointer;
     text-decoration-line: none;
}
.fen{
    width: 1000px;
    margin: auto;
    display: block;
    height: 72px;
}
.ccc p {
    /* text-indent: 30px; */
    margin-bottom: 18px;
}
.ccc img{
    width: 100%;
    margin-bottom: 15px;
    display: block;
}
.ccc{
    width: 800px;
    background: #ffffff;
    padding: 32px 100px 32px 100px;
    margin: auto;
    font-size: 15px;
    color: #a2a2a2;
    line-height: 25px;
}
.tit h1{
    width: 800px;
    display: block;
    margin: auto;
    color: #747474;
}
.tit p{
    font-size: 24px;
    color: #000000;
    width: 800px;
    margin: auto;
    display: block;
    margin-bottom: 10px;
}
.tit{
    width: 1000px;
    height: 88px;
    margin: auto;
    background: #ffffff;
    padding-top: 32px;
}
  .s_banner{
    width: 100%;
    min-width: 1000px;
    height: 217px;
    background: url('../../assets/car_dongtai.jpg') center center no-repeat;
  }
</style>
