<template>
<div>
    <div class="s_banner"></div>
    <div style="display:block;height:904px">
    <div class="ff">
        <img src="../../assets/news1.png">
        <div class="gg">
            <p class="title">WAGONS光速超跑落地京城<span>2017-08-21  16:22:52</span></p>
            <div class="cc">诸如兰博基尼、法拉利的超级跑车一直以来都处在汽车消费金字塔的最尖端，即便是很多高端用户群体一生也鲜有驾驶甚至接触超跑的机会......</div>
            <span @click="goar(1)">阅读更多 >></span>
        </div>
    </div>
    <div class="ff">
        <img src="../../assets/nn21.jpg">
        <div class="gg">
            <p class="title">WAGONS光速超跑举办试驾品鉴活动<span>2017-08-21  16:25:52</span></p>
            <div class="cc">盛夏7月，WAGONS光速超跑在北京当代MOMA商务中心WAGONS俱乐部举行了首次体验试驾活动。WAGONS光速超跑此次店内试驾体验活动采取邀请嘉宾制度，给予嘉宾们更私密的交流空间......</div>
            <span @click="goar(2)">阅读更多 >></span>
        </div>
    </div>
    <div class="ff">
        <img src="../../assets/news2.jpg">
        <div class="gg">
            <p class="title">为爱提速、超跑动心<span>2017-08-11  14:30:09</span></p>
            <div class="cc">赠人玫瑰之手，经久犹有余香。WAGONS光速超跑通过当代MOMA了解到有这么一群孩子，每天在家盼望着父母的归来，只能在照片里看到父母慈爱的笑容，生病没有父母的拥抱。他们......</div>
            <span @click="goar(3)">阅读更多 >></span>
        </div>
    </div>
    <!-- <div class="ff">
        <img src="../../assets/youxiang.jpg">
        <div class="gg">
            <p class="title">有wagons的周末不会无聊<span>2017-08-11  14:23:52</span></p>
            <div class="cc">WAGONS光速超跑试驾会火热启幕，来自各行各业的精英人士也应邀来到现场，共赴极速之约，WAGONS光速超跑试驾会火热启幕，来自各行各业的精英人士也应邀来到WAGONS现场，共赴极速之约……</div>
            <span>阅读更多 >></span>
        </div>
    </div>
    <div class="ff">
        <img src="../../assets/youxiang.jpg">
        <div class="gg">
            <p class="title">有wagons的周末不会无聊<span>2017-08-11  14:23:52</span></p>
            <div class="cc">WAGONS光速超跑试驾会火热启幕，来自各行各业的精英人士也应邀来到现场，共赴极速之约，WAGONS光速超跑试驾会火热启幕，来自各行各业的精英人士也应邀来到WAGONS现场，共赴极速之约……</div>
            <span>阅读更多 >></span>
        </div>
    </div> -->
    </div>
    <p class="hh">
        <span>1</span>
        <span>/</span>
        <span>1</span> 
        <span style="padding-left:10px">上一页</span>
        <span style="padding-left:10px;padding-right:10px;font-size:10px">|</span>
        <span>下一页</span>
    </p>
</div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{
        goar(n){
            this.$router.push('/article/'+n)
        }
    }
}
</script>

<style scoped>
.gg span{
    cursor: pointer;
}
.hh span{
    color:#8c8c8c;
}
.hh{
    position: relative;
    top: -2px;
    height:68px;text-align:center;
    padding-top: 48px;
    z-index: 1;
    background: white;
}
.gg span{
    bottom: 0;
    float: left;
    color: #8c8c8c;
}
.cc{
color: #747474;
    font-size: 15px;
    height: 150px;
    line-height: 25px;
}
.gg p span{
    font-size: 12px;
    color: #747474;
    float: right;
}
.gg p {
    font-size: 24px;
    color: black;
    line-height: 48px;
}
.gg{
    width: 565px;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    float: right;
}
.ff img{
    display: inline-block;
    width: 323px;
    height: 100%;
}
.ff{
    width: 1000px;
    margin: auto;
    height: 248px;
    padding-top: 26px;
    padding-bottom: 26px;
    border-bottom: 1px solid #eeeeee;
}
  .s_banner{
    width: 100%;
    min-width: 1000px;
    height: 217px;
    background: url('../../assets/car_dongtai.jpg') center center no-repeat;
  }
</style>
