<template>
<div style="background:#f5f5f5">
        <div class="s_banner"></div>

    <h1 style="height:28px"></h1>
    <div class="tit">
        <p>有人开超跑把美女主播约走啦</p>
        <h1>2017-09-6  18:35:00</h1>
    </div>
    <h1 style="height:20px"></h1>
    <div class="ccc">
        <p>这个七夕，追随WAGONS的脚步，开着炸街超跑载着美女主播 去 约 会 ！</p>
        <img src="../../assets/zl21.png">
        <p>照片不足以体现，我们来看视频，直播镜头后的美女主播们依旧可爱迷人。</p>
        <video style="display: block;width: 800px;" controls src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/zl.mp4"></video>
        <p>为了这次七夕，WAGONS的工作人员布置了温馨的场地。</p>
        <img src="../../assets/zl22.jpg">
        <img src="../../assets/zl23.png">
        <img src="../../assets/zl24.png">
        <img src="../../assets/zl25.jpg">
    </div>
    <div class="fen">
        <!-- <a style="float:left;color: #acacac; cursor: no-drop;">上一页：没有了</a> -->
        <a href="/article/5" style="float:left">上一页：超跑一发光，撩妹不用慌 丨 埃及之夜，时尚SHOW</a>
        <!-- <a style="float:right;color: #acacac; cursor: no-drop;">没有了：下一页</a> -->
        <a href="/article/7" style="float:right;">WAGONS的互联网沙龙 ：下一页</a>

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
        console.log(this.$route.params.id)
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
    line-height: 30px;
}
.ccc img{
    width: 100%;
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
