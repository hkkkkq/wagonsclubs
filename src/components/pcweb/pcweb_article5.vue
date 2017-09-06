<template>
<div style="background:#f5f5f5">
        <div class="s_banner"></div>

    <h1 style="height:28px"></h1>
    <div class="tit">
        <p>超跑一发光，撩妹不用慌 丨 埃及之夜，时尚SHOW</p>
        <h1>2017-09-6  18:32:00</h1>
    </div>
    <h1 style="height:20px"></h1>
    <div class="ccc">
        <p>8月19日，WAGONS光速超跑与美丽的环球旅游小姐相约在珠江紫宸山。打入秘密据点，最会玩的人都在这里！</p>
        <p>这场由珠江紫宸山主办、WAGONS光速超跑携手环球旅游小姐网络大赛组委会共同协办的“埃及之夜 丨 时尚SHOW”，在珠江紫宸山会所隆重举行。</p>
        <p>本次活动均是来自时尚、影视、金融、互联网等领域的行业精英和领导人物，现场由凤凰网、网易、今日头条、搜房网现场直播报道，腾讯、优酷、爱奇艺等多家媒体后续宣传。</p>
        <p>接下来，千万别眨眼！活动现场的照片简直是颜值轰炸机！</p>
        <p>香车、美女、蓝天、别墅，还有甜美的定制点心，当身着礼服的美女们踏上红毯开始走秀时，伴随着WAGONS光速超跑的轰鸣，活动掀起了颜值与激情的最高点！</p>
        <p>活动的主角爱莎公主乘坐着南瓜车被四位壮士缓缓抬入会场。爱莎公主对塔罗牌有着与生俱来的天赋和钟爱。她是澳洲著名灵性大师 Val Morgan 的关门弟子。擅长塔罗预测、星座分析、性格炼金术、灵性指引等。</p>
        <p>WAGONS光速超跑代表徐鑫Grace女士在现场发言。</p>
        <p>奢华的爱马仕主题别墅随意摆拍就是一副油画般的大片。</p>
        <p>感谢珠江紫宸山和环球旅游小姐，与WAGONS光速超跑共同举办了这场盛会。埃及之夜落下帷幕，爱莎公主的咒语为我们荡涤心灵洗去凡尘，环球旅游小姐为我们开启了一场视觉盛宴，珠江紫宸山为我们展现了别墅的奢华与品位。WAGONS光速超跑作为国内首家超跑运营商，除了为会员们组织超跑类赛道活动之外，还组织大量高品质的社交活动，深受超跑车主的推崇与喜爱。只为尊贵的会员，我们一直在路上！</p>
    </div>
    <div class="fen">
        <!-- <a style="float:left;color: #acacac; cursor: no-drop;">上一页：没有了</a> -->
        <a href="/article/4" style="float:left">上一页：我学会了漂移 正在前往拯救世界的路上</a>
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
