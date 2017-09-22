<template>
    <div style="position:absolute;width:100%;height:100%">
        <div style="width:100%;min-height:100%;background:#0f1923">
            <div class="ban">
                <img class="hg" src="../../assets/app/lchg.png">
                <img class="banimg" src="../../assets/app/slc.png">
                <p class="planname">乐巢计划会员</p>
                <p class="plandate">2017.05.27-2018.05.27有效</p>
            </div>
            <!-- 订单 -->
            <div>
                <p class="ti">
                    <span class="ty">当前订单</span>
                </p>
                <div class="car">
                    <img src="../../assets/app/slc.png">
                    <div>
                        <p class="d1">
                            <span class="d1s">使用中</span>
                            <span class="d1n">法拉利兰博基尼</span>
                        </p>
                        <p class="d2">
                            剩余
                            <span class="hour">2天3小时</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- 特权 -->
            <div>
                <p class="ti">
                    <span class="ty">我的特权</span>
                    <span class="tc">套餐升级</span>
                </p>
                <div class="car car1">
                    <p class="p1">
                        <img class="icon" src='../../assets/app/memcl.png'>
                        <span class="span1">优享计划用车特权</span>
                        <span class="span1 span2">15天可用</span>
                        <span class="span1 span3">已用8天</span>
                    </p>
                    <p class="p1">
                        <img class="icon" src='../../assets/app/memxiche.png'>
                        <span class="span1">本年度专业深度私车清洗</span>
                        <span class="ob">电话预约</span>
                        <span class="span1 span2">1次可用</span>
                    </p>
                    <p style='border:0' class="p1">
                        <img class="icon" src='../../assets/app/memhaoyou.png'>
                        <span class="span1">邀请好友免费用车</span>
                        <span class="ob">马上邀请</span>
                        <span class="span1 span2">2次可用</span>
                    </p>
                </div>
            </div>

            <!-- 细则 -->
            <div class="qq">
                <h1>
                    <span style="color: rgb(153, 153, 153); float: left;">全部权益明细</span>
                    <span style="color: rgb(0, 156, 255); float: right;">支持车型一览</span>
                </h1>
                <div class="ff">
                    <span>1</span>
                    <b>每月3天超跑使用权，每天可在俱乐部所有车型中任选1台自驾，本月未使用完的天数可累计到下月，本年度未使用完的天数可在下一年度继续使用</b>
                </div>
                <div class="ff">
                    <span>2</span>
                    <b>优享计划权益外用车，可享受会员折扣，即基础价6折</b>
                </div>
                <div class="ff">
                    <span>3</span>
                    <b>长租折上折，周租会员价9折，月租会员价7折</b>
                </div>
                <div class="ff">
                    <span>4</span>
                    <b>生日当天用车半价，生日专属礼物</b>
                </div>
                <div class="ff">
                    <span>5</span>
                    <b>每邀请1位好友，可额外累计1天使用权</b>
                </div>
                <div class="ff">
                    <span>6</span>
                    <b>每月1次劳斯莱斯或宾利商务接送服务</b>
                </div>
                <div class="ff">
                    <span>7</span>
                    <b>一对一专属管家服务</b>
                </div>
                <div class="ff">
                    <span>8</span>
                    <b>每年用车免除3分及以内的违章罚金</b>
                </div>
                <div class="ff">
                    <span>9</span>
                    <b>俱乐部旗下修理厂每年2次免费深度车辆清洗，保养9折优惠</b>
                </div>
                <div class="ff">
                    <span>10</span>
                    <b>免费参与俱乐部组织的各类培训试驾、演唱会、观影、酒会派对、体育棋牌等活动</b>
                </div>
                <div class="ff">
                    <span>11</span>
                    <b>俱乐部组织的高端定制游等自费活动，享受8折优惠</b>
                </div>
            </div>
            <img style="width: 5.22rem;margin: 0.74rem auto auto;padding-bottom: 0.78rem;display:block;bottom: 0;left: 0;right: 0;" src="../../assets/app/blogo.png">
            <div class="alert">
                <img src="../../assets/app/tcsj.png">
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
require('../app/rem.js')(window, document)
export default {

}
</script>

<style scoped>
.alert>div{
    width: 5.17rem;
    height: 3.26rem;
    background: #ffffff;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
}
.alert img{
    position: absolute;
    width: 5.17rem;
    height: 2rem;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
    bottom: 7.28rem;
    border-top-left-radius: 0.04rem;
    border-top-right-radius: 0.04rem;
}
.alert{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    font-size: 0;
}
.ff b {
    margin-left: 0.13rem;
    font-size: 0.22rem;
    display: inline-block;
    width: 6.07rem;
    color: #999999;
    vertical-align: top;
    line-height: 0.38rem;
}

.ff span {
    vertical-align: top;
    font-size: 0.16rem;
    color: white;
    display: inline-block;
    width: 0.3rem;
    height: 0.26rem;
    background: #4b535a;
    border-radius: 4px;
    text-align: center;
    padding-top: 0.04rem;
    margin-top: 0.04rem;
}

.ff {
    display: block;
    font-size: 0;
    margin-bottom: 0.3rem;
}

.qq>h1 {
    font-size: 0.24rem;
    margin-top: 0.32rem;
    margin-bottom: 0.36rem;
    height: 0.1rem;
}

.qq>p {
    font-size: 0.26rem;
    color: white;
    padding-bottom: 0.36rem;
    border-bottom: 1px solid #3d454d;
}

.qq {
    width: 6.5rem;
    margin: auto;
    margin-top: 0.2rem;
    border-radius: 0.04rem;
    background: #273039;
    padding: 1px 0.3rem 0.3rem 0.3rem;
    /* margin-bottom: 0.2rem; */
}

.ob {
    color: #000000;
    width: 1.48rem!important;
    height: 0.5rem!important;
    background: #fed945;
    text-align: center;
    display: inline-block;
    line-height: 0.5rem;
    font-size: 0.26rem;
    border-radius: 0.04rem;
    float: right;
    margin-left: 0.2rem;
}

.but {
    margin: auto!important;
    background: #fed945!important;
    color: #000000!important;
    width: 4.84rem!important;
    border-radius: 0.04rem!important;
    line-height: 0.7rem!important;
    font-size: 0.26rem!important;
    height: 0.7rem!important;
    text-align: center!important;
    display: block!important;
}

.p1 {
    padding: 0.38rem 0;
    border-bottom: 1px solid #3d454d;
}

.span3 {
    color: #999999!important;
    float: right;
    padding-right: 0.18rem;
    border-right: 1px solid #3d454d
}

.span2 {
    color: #fed945!important;
    float: right;
    padding-left: 0.18rem;
}

.span1 {
    font-size: 0.26rem;
    color: #ffffff;
    vertical-align: top;
    position: relative;
    top: 0.1rem;
}

.icon {
    width: 0.34rem;
    display: inline-block;
    margin-right: 0.2rem;
}

.car1 {
    height: auto!important;
    width: 6.5rem!important;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
}

.tc {
    color: #009cff;
    float: right;
    font-size: 0.24rem;
}

.hour {
    color: #4ac87a;
}

.d2 {
    margin-top: 0.28rem;
    font-size: 0.3rem;
    color: #999999;
    letter-spacing: 1px;
}

.d1n {
    color: #ffffff;
    font-size: 0.24rem;
    margin-left: 0.3rem;
}

.d1 {
    margin-top: 0.3rem;
}

.d1s {
    font-size: 0.2rem;
    background: #4ac87a;
    color: #ffffff;
}

.car>div {
    display: inline-block;
    margin-left: 0.3rem;
    height: 100%;
    width: 4rem;
    vertical-align: top;
}

.car>img {
    width: 2.6rem;
    height: 100%;
    border-top-left-radius: 0.04rem;
    display: inline-block;
    border-bottom-left-radius: 0.04rem;
}

.car {
    width: 7.1rem;
    height: 1.4rem;
    background: #273039;
    border-radius: 0.04rem;
    margin: auto;
    font-size: 0;
}

.ty {
    font-size: 0.24rem;
    color: #ffffff;
}

.ti {
    font-size: 0;
    width: 6.68rem;
    border-left: 0.04rem solid #fed945;
    margin: auto;
    padding-left: 0.12rem;
    padding-right: 0.3rem;
    margin-top: 0.3rem;
    margin-bottom: 0.12rem;
}

.plandate {
    color: #ffffff;
    font-size: 0.24rem;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 2.9rem;
    text-align: center;
}

.planname {
    font-weight: bolder;
    font-size: 0.3rem;
    color: #ffffff;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    top: 2.4rem;
}

.hg {
    position: absolute;
    width: 1.4rem;
    height: 1.4rem;
    left: 0;
    right: 0;
    margin: auto;
    top: 0.8rem;
}

.banimg {
    width: 100%;
    height: auto;
}

.ban {
    font-size: 0;
    display: block;
    width: 100%;
    height: auto;
    position: relative;
}
</style>
