<template>
<div style="background:#f5f5f5">
        <div class="s_banner"></div>

    <h1 style="height:28px"></h1>
    <div class="tit">
        <p>WAGONS光速超跑落地京城 引领高端出行新趋势</p>
        <h1>2017-08-21  16:22:52</h1>
    </div>
    <h1 style="height:20px"></h1>
    <div class="ccc">
        <p>诸如兰博基尼、法拉利的超级跑车一直以来都处在汽车消费金字塔的最尖端，即便是很多高端用户群体一生也鲜有驾驶甚至接触超跑的机会。</p>
        <p>近日，主营超跑用车服务的WAGONS光速超跑俱乐部落地京城，打破了超跑高高的藩篱，为广大超跑爱好者提供了一个近距离接触超跑，轻松驾驭超跑的绝佳平台。</p>
        <p>专业超跑运营商让超跑零距离</p>
        <p>据相关负责人介绍，WAGONS光速超跑是国内首家以俱乐部的形式运营的专业超跑运营商，围绕超跑的各类使用场景为高端用户群体提供顶级的驾享服务。</p>
        <p>具体来看，WAGONS光速超跑目前推出了超跑自驾、商务接待、婚庆、高端静展、广告、影视拍摄等用车服务，基本覆盖了高端用车的各个环节。</p>
        <p>顶级豪车矩阵，多样用车选择</p>
        <p>从储备的车辆来看，WAGONS光速超跑打造了一个由法拉利、兰博基尼、玛莎拉蒂、奔驰、宝马、保时捷等世界顶级超跑品牌主力车型组成的豪华车辆矩阵，超跑爱好者可以在这里便捷享受驾驶各样超跑的非凡乐趣。</p>
        <p>除了顶级跑车，WAGONS还储备了数台稀有车型，既有全北京第一台Morgan 4/4新款老爷车，还有全国仅2台的KTM X-BOW自动挡车型，甚至不乏被喻为“公路上的F1”的限量版梅赛德斯·奔驰SLR迈凯轮。</p>
        <p>“亲民”价格，轻松享受非凡驾驭体验</p>
        <p>虽然车辆价格不菲，但负责人表示，WAGONS光速超跑的用车价格在同领域中足够“亲民”。“我们的常规价格整体就比其他品牌要低很多，如果用户加入我们的尊享套餐计划，同样的车型则可以享受到仅市面3-4折的使用价格”该负责人说。</p>
        <p>从官方信息了解到，WAGONS的尊享套餐计划分为三类：乐潮计划、优享计划和至尊计划。用户加入计划之后可以按月享受3-5次用车服务以及10余项增值服务。</p>
        <p>加入计划的费用分别为9.8万元、21.8万元和35.8万元，单纯以用车次数计算，加入套餐后的单次用车费用已经低至2000多元起步，这个与市场上动辄数万的价格比起来无疑非常具有吸引力。</p>
        <p>焦点中心，合作不停歇</p>
        <p>时刻处在焦点中心的超跑无论到哪个层面都始终是焦点。WAGONS光速超跑开门营业仅一个月就吸引到了海那边、爱享聚等品牌到店举办活动，与知名视频自媒体品牌“李老鼠说车”以及实力高端地产品牌当代MOMA建立了战略合作关系。“短短一个月时间里，与WAGONS光速超跑达成合作或合作意向的品牌已经达到10余家”负责人介绍说。</p>
    </div>
    <div class="fen">
        <a style="float:left;color: #acacac; cursor: no-drop;">上一页：没有了</a>
        <a href="/article/2" style="float:right">WAGONS光速超跑举办试驾品鉴活动：下一页</a>
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
