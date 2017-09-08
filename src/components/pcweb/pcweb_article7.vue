<template>
<div style="background:#f5f5f5">
            <div class="s_banner"></div>
    <h1 style="height:28px"></h1>
    <div class="tit">
        <p>WAGONS的互联网沙龙</p>
        <h1>2017-09-7  14:17:09</h1>
    </div>
    <h1 style="height:20px"></h1>
    <div class="ccc">
        <h1>WAGONS的互联网沙龙</h1>
        <h1 style="height:20px"></h1>
        <p>8月31日，由《首席财务官》杂志和奇点金服共同主办的“人工智能来了，移动互联网时代的财务绩效管理怎么‘破’”主题沙龙在北京WAGONS光速超跑俱乐部顺利举行，来自北京各个行业的财务高管40余人参加此次活动。</p>
        <img src="../../assets/zl26.jpg">
        <h1>京城的绯红派对</h1>
        <h1 style="height:20px"></h1>
        <p>8月26日夜，我们在东三环康莱德酒店五层Vivid Bar鉴证蚝友会的绯色晚宴。</p>
        <img src="../../assets/zl27.jpg">
        <img src="../../assets/zl28.jpg">
        <img src="../../assets/zl29.jpg">
        <img src="../../assets/zl30.jpg">
        <p>曼妙的爵士音乐中，尽享夜色魅力。</p>
        <h1>拥有超跑是什么感觉</h1>
        <h1 style="height:20px"></h1>
        <p>8月30日，WAGONS光速超跑为驾遇的汽车服务门店大咖带来一场全新私享驾驭体验。WAGONS将高端前沿，品趣相投的人聚集，它不仅是一段丰富的试驾体验，更是一次思维的头脑风暴，让你与有趣的灵魂相聚；把最盛大的体验与最简单的快乐相结合，满足每一颗热爱超跑、追求恣意的心。</p>        
        <img src="../../assets/zl31.jpeg">        
        <img src="../../assets/zl32.jpeg">     
        <h1>WAGONS&翰亚 私享会</h1>   
        <h1 style="height:20px"></h1>
        <p>9月2日，WAGONS为翰亚举办了会员私享试驾会。</p>
        <img src="../../assets/zl33.jpeg">        
        <img src="../../assets/zl34.jpeg">        
        <p>速度与激情的碰撞，每位会员满意而归。</p>
        <img src="../../assets/zl35.jpeg">        
        <img src="../../assets/zl36.jpeg">     
    </div>
    <div class="fen">
        <a href="/article/6" style="float:left">上一页：有人开超跑把美女主播约走啦</a>
        <!-- <a href="/article/5" style="float:right;">超跑一发光，撩妹不用慌 丨 埃及之夜，时尚SHOW：下一页</a> -->
        <a style="float:right;color: #acacac; cursor: no-drop;">没有了：下一页</a>
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
.ccc h1{
    font-size: 24px!important;
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
