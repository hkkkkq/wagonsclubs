<template>
<div style="background:#f5f5f5">
    <h1 style="height:28px"></h1>
    <div class="tit">
        <p>WAGONS光速超跑举办首次高端试驾品鉴活动</p>
        <h1>2017-08-21  16:25:52</h1>
    </div>
    <h1 style="height:20px"></h1>
    <div class="ccc">
        <p>盛夏7月，WAGONS光速超跑在北京当代MOMA商务中心WAGONS俱乐部举行了首次体验试驾活动。</p>
        <img src="../../assets/nn21.jpg">
        <img src="../../assets/nn22.jpg">
        <p>WAGONS光速超跑此次店内试驾体验活动采取邀请嘉宾制度，给予嘉宾们更私密的交流空间。</p>
        <img src="../../assets/nn23.jpg">
        <p>活动期间我们不间断供应Ferrero Federico与法国雷武士生蚝，这款口感仅次于香槟的微气泡酒微微的甜感大放异彩，搭配着装满新鲜法国海水的生蚝，为嘉宾们带来了味觉的至尊体验。</p>
        <img src='../../assets/nn24.jpg'>
        <p>不仅仅是味觉的体验，WAGONS还提供了德扑的友谊竞赛，最后邀请了幸运嘉宾参与了我们的超跑体验试驾活动。</p>
        <img src='../../assets/nn25.jpg'>
        <img src='../../assets/nn26.jpg'>        
        <p>WAGONS光速超跑此次展出十余辆超跑，为嘉宾带来视觉盛宴，本次体验试驾WAGONS提供奔驰SLS AMG、玛莎拉蒂GranCabrio、法拉利California让嘉宾试驾，每位试驾归来的嘉宾都按耐不住激动的心情与我们分享他们的感受。</p>
        <img src='../../assets/nn27.jpg'>        
        <img src='../../assets/nn28.jpg'>        
        <img src='../../assets/nn29.jpg'>        
        <p>WAGONS光速超跑让你在炎炎夏日体验速度与激情带来的凉爽，加入我们，不要再压抑自己的荷尔蒙，让独一无二的你享受我们为你准备的全球超跑激情体验！</p>
        <p>WAGONS光速超跑是国内首家专业超跑运营商，主要为高端用户群体提供超跑自驾、商务接待、婚庆服务、影视拍摄、高端静展等一些列用车服务。</p>
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
.ccc p {
    text-indent: 30px;
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
    font-size: 18px;
    color: #5c5c5c;
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
</style>
