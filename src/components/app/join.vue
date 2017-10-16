<template>
    <div style="font-family: PingFangSC-Medium, sans-serif;background:#0f1923">
        <img class="banner" src="../../assets/app/joinbanner.png">
        <p class="uv">开始用车之前，您需要通过申请方式加入WAGONS，成功后即可自由选择购买优惠套餐，或采用单次散租的方式开始您的超跑自驾之旅。</p>
        <div class="cc">
            <p>套餐</p>
            <div class="qq">
                <p>
                    <span style="floate:left">乐潮计划</span>
                    <span style='float:right'>98000元/年</span>
                </p>
                <h1>
                    <span style="color:#999999;float:left">全部权益明细</span>
                    <span @click="ch(1)" style="color:#009cff;float:right">支持车型一览</span>
                </h1>
                <div class="ff">
                    <span>1</span>
                    <b>每月3天超跑使用权，每天可在俱乐部指定车型中任选1台自驾，本月未使用完的天数可累计到下月，本年度未使用完的天数可在下一年度继续使用</b>
                </div>
                <div class="ff">
                    <span>2</span>
                    <b>乐潮计划权益外用车，享受会员折扣，即基础价6折</b>
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
                    <b>一对一专属管家服务</b>
                </div>
                <div class="ff">
                    <span>7</span>
                    <b>俱乐部旗下修理厂每年1次免费深度车辆清洗</b>
                </div>
                <div class="ff">
                    <span>8</span>
                    <b>俱乐部组织的高端定制游等自费活动，享受9折优惠</b>
                </div>
            </div>
            <div class="qq">
                <p>
                    <span style="floate:left">优享计划</span>
                    <span style='float:right'>218000元/年</span>
                </p>
                <h1>
                    <span style="color:#999999;float:left">全部权益明细</span>
                    <span @click="ch(2)" style="color:#009cff;float:right">支持车型一览</span>
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
                    <b>俱乐部旗下修理厂每年2次免费深度车辆清洗，保养9折优惠</b>
                </div>
                <div class="ff">
                    <span>9</span>
                    <b>免费参与俱乐部组织的各类培训试驾、演唱会、观影、酒会派对、体育棋牌等活动</b>
                </div>
                <div class="ff">
                    <span>10</span>
                    <b>俱乐部组织的高端定制游等自费活动，享受8折优惠</b>
                </div>
            </div>
            <div class="qq">
                <p>
                    <span style="floate:left">至尊计划</span>
                    <span style='float:right'>358000元/年</span>
                </p>
                <h1>
                    <span style="color:#999999;float:left">全部权益明细</span>
                    <span @click="ch(3)" style="color:#009cff;float:right">支持车型一览</span>
                </h1>
                <div class="ff">
                    <span>1</span>
                    <b>每月5天超跑使用权，每天可在俱乐部所有车型中任选1台自驾，本月未使用完的天数可累计到下月，本年度未使用完的天数可在下一年度继续使用</b>
                </div>
                <div class="ff">
                    <span>2</span>
                    <b>至尊计划权益外用车，可享受会员折扣，即基础价6折</b>
                </div>
                <div class="ff">
                    <span>3</span>
                    <b>长租折上折，周租会员价9折，月租会员价7折</b>
                </div>
                <div class="ff">
                    <span>4</span>
                    <b>生日当天用车免费，生日专属礼物</b>
                </div>
                <div class="ff">
                    <span>5</span>
                    <b>每邀请1位好友，可额外累计1天使用权</b>
                </div>
                <div class="ff">
                    <span>6</span>
                    <b>每月2次劳斯莱斯或宾利商务接送服务</b>
                </div>
                <div class="ff">
                    <span>7</span>
                    <b>一对一专属管家服务</b>
                </div>
                <div class="ff">
                    <span>8</span>
                    <b>俱乐部旗下修理厂每年4次免费深度车辆清洗，保养8折优惠</b>
                </div>
                <div class="ff">
                    <span>9</span>
                    <b>免费参与俱乐部组织的各类培训试驾、演唱会、观影、酒会派对、体育棋牌等活动</b>
                </div>
                <div class="ff">
                    <span>10</span>
                    <b>俱乐部组织的高端定制游等自费活动，享受7折优惠</b>
                </div>
                <div class="ff">
                    <span>11</span>
                    <b>在与WAGONS合作的顶级会所、健身房、高尔夫球场、餐厅、酒吧消费享专属礼遇</b>
                </div>
            </div>
            <p>散租</p>
            <div class="qq">
                <b>
                    <span class="rad"></span>只需缴纳少量押金，即可开走顶级跑车</b>
                <b>
                    <span class="rad"></span>尊享会员折扣价，长租还享折上折</b>
                <b>
                    <span class="rad"></span>优质老客户还有多重优惠，有机会免押金用车</b>
            </div>
            <!-- <router-link to="/app/memindex" style="text-decoration-line: none;font-size:0.22rem;color:#009cff;float:right;height:0.7rem;margin-right: 0.4rem;">查看更多会员说明</router-link> -->
            <img style="width: 5.22rem;height: 0.59rem;display: block;margin: auto;padding-bottom:0.78rem;margin-top: 0.74rem;" src="../../assets/app/blogo.png">
        </div>
        <transition name="fade">
            <div v-show="at" class="al">
                <div class="att" v-show="lechao">
                    <img class="at" src="../../assets/app/lc.png">
                    <h1 class="yl">乐潮计划车型一览</h1>
                    <div class="ms">兰博基尼加拉多，阿斯顿马丁V8 Vantage，法拉利加利福尼亚，奥迪R8，奔驰SLS AMG，奔驰G55 AMG，奔驰AMG GT，玛莎拉蒂GranCabrio，玛莎拉蒂GranTurismo，保时捷911，宝马i8，宝马640i，宝马z4，科尔维特，科迈罗等</div>
                </div>
                <div class="att" v-show="youxiang">
                    <img class="at" src="../../assets/app/yx.png">
                    <h1 class="yl">优享计划车型一览</h1>
                    <div class="ms">除乐潮计划车型外，还包括兰博基尼 LP700-4、兰博基尼 huracan、阿斯顿马丁、阿斯顿马丁 D89、法拉利 F12、法拉利 458、法拉利 FF、法拉利 488、劳斯莱斯魅影、劳斯莱斯 Ghost、宾利飞驰、宾利欧陆 GT、奔驰迈凯伦SLR、奔驰 G63 Amg、迈凯伦 MP4-12C、迈凯伦720s、KTM X-BOW、摩根4-4等</div>
                </div>
                <div class="att" v-show="zhizun">
                    <img class="at" src="../../assets/app/zz.png">
                    <h1 class="yl">至尊计划车型一览</h1>
                    <div class="ms">除乐潮计划车型外，还包括兰博基尼 LP700-4、兰博基尼 huracan、阿斯顿马丁、阿斯顿马丁 D89、法拉利 F12、法拉利 458、法拉利 FF、法拉利 488、劳斯莱斯魅影、劳斯莱斯 Ghost、宾利飞驰、宾利欧陆 GT、奔驰迈凯伦SLR、奔驰 G63 Amg、迈凯伦 MP4-12C、迈凯伦720s、KTM X-BOW、摩根4-4等</div>
                </div>
                <img @click="cl" class="ax" src="../../assets/app/xx.png">
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            at: false,
            lechao: false,
            youxiang: false,
            zhizun: false,
        }
    },
    created() {
        window.scrollTo(0, 0);
    },
    methods: {
        cl() {
            this.at = false
        },
        ch(n) {
            this.lechao = this.youxiang = this.zhizun = false
            if (n == 1) { this.lechao = true }
            if (n == 2) { this.youxiang = true }
            if (n == 3) { this.zhizun = true }
            this.at = true;
        },
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
    -moz-transition: opacity .5s;
    /* Firefox 4 */
    -webkit-transition: opacity .5s;
    /* Safari 和 Chrome */
    -o-transition: opacity .5s;
    /* Opera */
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
    opacity: 0
}

.att {
    position: absolute;
    bottom: 3.1rem;
    left: 0;
    right: 0;
}

.ax {
    z-index: 1;
    width: 0.68rem;
    height: 0.68rem;
    display: block;
    margin: auto;
    position: fixed;
    bottom: 1.18rem;
    left: 3.2rem;
}

.ms {
    background: #ffffff;
    font-size: 0.24rem;
    color: #333333;
    min-height: 2.28rem;
    width: 4.52rem;
    padding: 0.4rem 0.32rem 0.48rem 0.32rem;
    line-height: 0.4rem;
    display: block;
    margin: auto;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.al .at {
    width: 5.17rem;
    margin: auto;
    display: block;
    margin-top: 3rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.yl {
    font-size: 0.3rem;
    color: #ffffff;
    position: absolute;
    top: 13em;
    left: 2.5rem;
}

.al {
    width: 100%;
    height: 100%;
    position: fixed;
    display: block;
    z-index: 1;
    top: 0;
    left: 0;
    font-size: 0;
    background: rgba(0, 0, 0, 0.7);
}

.uv {
    font-size: 0.24rem;
    color: #ffffff;
    width: 6.6rem;
    position: absolute;
    top: 0.6rem;
    left: 0.4rem;
    line-height: 0.4rem;
}

.rad {
    display: inline-block;
    vertical-align: top;
    width: 5px;
    height: 5px;
    background: #999999;
    border-radius: 10px;
    margin-top: 0.05rem;
    margin-right: 0.3rem;
}

.qq>b {
    display: block;
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    font-size: 0.22rem;
    color: #999999;
}

.ff span {
    vertical-align: top;
    font-size: 0.16rem;
    color: white;
    display: inline-block;
    width: 0.28rem;
    height: 0.24rem;
    background: #4b535a;
    border-radius: 4px;
    text-align: center;
    padding-top: 0.04rem;
    margin-top: 0.04rem;
    line-height: 0.23rem;
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
    border-radius: 0.04rem;
    background: #273039;
    padding: 0.3rem 0.3rem 0.3rem 0.3rem;
    margin-bottom: 0.2rem;
}

.cc>p {
    color: white;
    font-size: 0.24rem;
    border-left: 2px solid #fed945;
    text-indent: 0.18rem;
    margin-top: 0.32rem;
    margin-bottom: 0.16rem;
}

.banner {
    width: 100%;
    height: 2.4rem;
    display: block;
}

.cc {
    width: 7.1rem;
    margin: auto;
}
</style>
