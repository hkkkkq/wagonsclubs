<template>
    <div style="position:absolute;width:100%;height:100%">
        <div style="min-height:100%;background:rgb(15, 25, 35)">
            <p class="fw">尊敬的WAGONS会员，您好！</p>
            <img class="f" src="../../assets/app/pending.png">
            <div v-if="type == 'C'">
                <p class="pp">我的特权</p>
                <div class="dd">
                    <img src="../../assets/app/c+.png">
                    <span class="hy">邀请好友免费用车</span>
                    <span class="msyq">马上邀请</span>
                    <span class="days">1天可用</span>
                </div>
                <div style="height: 3.7rem;" class="co1">
                    <div class="co2">
                        <p class="qbqy">全部权益明细</p>
                        <p class="cp">
                            <span class="num">1</span>
                            <span class="des">用车尊享会员折扣，即基础价6折</span>
                        </p>
                        <p class="cp">
                            <span class="num">2</span>
                            <span class="des">长租可享折上折，周租会员价9折，月租会员价7折</span>
                        </p>
                        <p class="cp">
                            <span class="num">3</span>
                            <span class="des">生日当天用车半价，生日当月用车可获定制汽车模型</span>
                        </p>
                        <p class="cp">
                            <span class="num">4</span>
                            <span class="des">每邀请1位好友成功加入会员，可享1天免费用车</span>
                        </p>
                        <p class="cp">
                            <span class="num">5</span>
                            <span class="des">尊享会员专属活动邀请</span>
                        </p>
                    </div>
                </div>
                <div class="sm">
                    购买合作方私募基金可减免押金
                    <span>></span>
                </div>
            </div>
            <div v-else>
                <p class="tp">我们根据您的情况为您推荐以下优惠套餐</p>
                <div v-show="(type == 'B')||(type == 'A')" style="display:none" :class="{'pauto1':lc}" class="co1">
                    <div class="co2">
                        <transition name="fade">
                            <img v-if='!lc' @click="open(1)" class="zz" src="../../assets/app/pendingzz.png">
                        </transition>
                        <p style="width:100%;height:0.32rem"></p>
                        <div class="cl1">
                            <span class="planname">乐潮计划</span>
                            <span class="planprice">98000元/年</span>
                        </div>
                        <div class="co2">
                            <p class="cp">
                                <span class="num">1</span>
                                <span class="des">每月3天超跑使用权，每天可在俱乐部指定车型中任选1台自驾，本月未使用完的天数可累计到下月，本年度未使用完的天数可在下一年度继续</span>
                            </p>
                            <p class="cp">
                                <span class="num">2</span>
                                <span class="des">乐潮计划权益外用车，享受会员折扣，即基础价6折</span>
                            </p>
                            <p class="cp">
                                <span class="num">3</span>
                                <span class="des">长租折上折，周租会员价9折，月租会员价7折</span>
                            </p>
                            <p class="cp">
                                <span class="num">4</span>
                                <span class="des">生日当天用车半价，生日专属礼物</span>
                            </p>
                            <p class="cp">
                                <span class="num">5</span>
                                <span class="des">每邀请1位好友，可额外累计1天使用权</span>
                            </p>
                            <p class="cp">
                                <span class="num">6</span>
                                <span class="des">一对一专属管家服务</span>
                            </p>
                            <p class="cp">
                                <span class="num">7</span>
                                <span class="des">俱乐部旗下修理厂每年1次免费深度车辆清洗</span>
                            </p>
                            <p class="cp">
                                <span class="num">8</span>
                                <span class="des">俱乐部组织的高端定制游等自费活动，享受9折优惠</span>
                            </p>
                            <img @click="close(1)" class="pull" src="../../assets/app/pendingp.png">
                        </div>
                    </div>
                </div>
                <!--   -->
                <div v-show="type == 'A'" style="display:none" :class="{'pauto2':yx}" class="co1">
                    <div class="co2">
                        <transition name="fade">
                            <img v-if='!yx' @click="open(2)" class="zz" src="../../assets/app/pendingzz.png">
                        </transition>
                        <p style="width:100%;height:0.32rem"></p>
                        <div class="cl1">
                            <span class="planname">优享计划</span>
                            <span class="planprice">218000元/年</span>
                        </div>
                        <div class="co2">
                            <p class="cp">
                                <span class="num">1</span>
                                <span class="des">每月3天超跑使用权，每天可在俱乐部所有车型中任选1台自驾，本月未使用完的天数可累计到下月，本年度未使用完的天数可在下一年度继续使用</span>
                            </p>
                            <p class="cp">
                                <span class="num">2</span>
                                <span class="des">优享计划权益外用车，可享受会员折扣，即基础价6折</span>
                            </p>
                            <p class="cp">
                                <span class="num">3</span>
                                <span class="des">长租折上折，周租会员价9折，月租会员价7折</span>
                            </p>
                            <p class="cp">
                                <span class="num">4</span>
                                <span class="des">生日当天用车半价，生日专属礼物</span>
                            </p>
                            <p class="cp">
                                <span class="num">5</span>
                                <span class="des">每邀请1位好友，可额外累计1天使用权</span>
                            </p>
                            <p class="cp">
                                <span class="num">6</span>
                                <span class="des">每月1次劳斯莱斯或宾利商务接送服务</span>
                            </p>
                            <p class="cp">
                                <span class="num">7</span>
                                <span class="des">一对一专属管家服务</span>
                            </p>
                            <p class="cp">
                                <span class="num">8</span>
                                <span class="des">每年用车免除3分及以内的违章罚金</span>
                            </p>
                            <p class="cp">
                                <span class="num">9</span>
                                <span class="des">俱乐部旗下修理厂每年2次免费深度车辆清洗，保养9折优惠</span>
                            </p>
                            <p class="cp">
                                <span class="num">10</span>
                                <span class="des">免费参与俱乐部组织的各类培训试驾、演唱会、观影、酒会派对、体育棋牌等活动</span>
                            </p>
                            <p class="cp">
                                <span class="num">11</span>
                                <span class="des">俱乐部组织的高端定制游等自费活动，享受8折优惠</span>
                            </p>
                            <img @click="close(2)" class="pull" src="../../assets/app/pendingp.png">
                        </div>
                    </div>
                </div>
                <!-- -->
                <div v-show="type == 'A'" style="display:none" :class="{'pauto3':zz}" class="co1">
                    <div class="co2">
                        <transition name="fade">
                            <img v-if='!zz' @click="open(3)" class="zz" src="../../assets/app/pendingzz.png">
                        </transition>
                        <p style="width:100%;height:0.32rem"></p>
                        <div class="cl1">
                            <span class="planname">至尊计划</span>
                            <span class="planprice">358000元/年</span>
                        </div>
                        <div class="co2">
                            <p class="cp">
                                <span class="num">1</span>
                                <span class="des">每月5天超跑使用权，每天可在俱乐部所有车型中任选1台自驾，本月未使用完的天数可累计到下月，本年度未使用完的天数可在下一年度继续使用</span>
                            </p>
                            <p class="cp">
                                <span class="num">2</span>
                                <span class="des">至尊计划权益外用车，可享受会员折扣，即基础价6折</span>
                            </p>
                            <p class="cp">
                                <span class="num">3</span>
                                <span class="des">长租折上折，周租会员价9折，月租会员价7折</span>
                            </p>
                            <p class="cp">
                                <span class="num">4</span>
                                <span class="des"> 生日当天用车免费，生日专属礼物</span>
                            </p>
                            <p class="cp">
                                <span class="num">5</span>
                                <span class="des">每邀请1位好友，可额外累计1天使用权</span>
                            </p>
                            <p class="cp">
                                <span class="num">6</span>
                                <span class="des">每月2次劳斯莱斯或宾利商务接送服务</span>
                            </p>
                            <p class="cp">
                                <span class="num">7</span>
                                <span class="des">一对一专属管家服务</span>
                            </p>
                            <p class="cp">
                                <span class="num">8</span>
                                <span class="des"> 每年用车免除6分及以内的违章罚金</span>
                            </p>
                            <p class="cp">
                                <span class="num">9</span>
                                <span class="des">俱乐部旗下修理厂每年4次免费深度车辆清洗，保养8折优惠</span>
                            </p>
                            <p class="cp">
                                <span class="num">10</span>
                                <span class="des">免费参与俱乐部组织的各类培训试驾、演唱会、观影、酒会派对、体育棋牌等活动</span>
                            </p>
                            <p class="cp">
                                <span class="num">11</span>
                                <span class="des">俱乐部组织的高端定制游等自费活动，享受7折优惠</span>
                            </p>
                            <p class="cp">
                                <span class="num">12</span>
                                <span class="des">在与WAGONS合作的顶级会所、健身房、高尔夫球场、餐厅、酒吧消费享专属礼遇</span>
                            </p>
                            <img @click="close(3)" class="pull" src="../../assets/app/pendingp.png">
                        </div>
                    </div>
                </div>
            </div>
            <div @click="call" class="but">
                <img src="../../assets/app/pendingphone.png">
                <span>联系我们，咨询购买</span>
            </div>
            <p class="clear"></p>
            <p class="tp">您也可以通过散租的方式享受用车服务</p>
            <p style="margin-top:0.16rem" class="tp">缴纳少量押金即可驾享顶级超跑，随用随租，还享会员折扣价!</p>
            <p style="width:100%;height:1.2rem"></p>
        </div>
    </div>
</template>

<script>
require('../app/rem.js')(window, document)
export default {
    data() {
        return {
            lc: false,//关闭状态
            yx: false,
            zz: false,
            type: ''
        }
    },
    created() {
        // { headers: { "token": "666eff19e5ca4e1bb2d6285a23f721d9", } }
        this.$ajax.get(BASE_URL + "/member/privilege", )
            .then((res) => {
                console.log(res)
                this.type = res.data.data.member.subtype
            })
    },
    methods: {
        open(n) {
            if (n == 1) { this.lc = true }
            if (n == 2) { this.yx = true }
            if (n == 3) { this.zz = true }
        },
        close(n) {
            if (n == 1) { this.lc = false }
            if (n == 2) { this.yx = false }
            if (n == 3) { this.zz = false }
        },
        call() {
            location.href = "tel:18688888888"
        }
    }
}
</script>

<style scoped>
.sm span {
    float: right;
    color: #999999
}

.sm {
    width: 6.5rem;
    height: 1rem;
    background: #273039;
    display: block;
    margin: auto;
    border-radius: 4px;
    margin-top: 0.2rem;
    color: #ffffff;
    font-size: 0.26rem;
    line-height: 1rem;
    padding: 0 0.3rem;
}

.qbqy {
    color: #999999;
    font-size: 0.24rem;
    margin-top: 0.4rem;
}

.msyq {
    color: #333333;
    font-size: 0.24rem;
    background: #fed945;
    width: 1.5rem;
    height: 0.5rem;
    display: inline-block;
    text-align: center;
    line-height: 0.5rem;
    border-radius: 4px;
    float: right;
    margin-top: 0.25rem;
    margin-right: 0.3rem;
}

.days {
    color: #fed945;
    font-size: 0.24rem;
    float: right;
    margin-top: 0.4rem;
    margin-right: 0.2rem;
}

.hy {
    color: #ffffff;
    font-size: 0.26rem;
    vertical-align: top;
    line-height: 0.95rem;
}

.dd img {
    width: 0.3rem;
    height: 0.3rem;
    display: inline-block;
    margin: 0.3rem;
}

.dd {
    width: 7.1rem;
    height: 1rem;
    border-radius: 4px;
    background: #273039;
    margin: auto;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    font-size: 0;
}

.pp {
    font-size: 0.24rem;
    color: #ffffff;
    border-left: 0.04rem solid #fed945;
    width: 7.1rem;
    margin: auto;
    text-indent: 0.2rem;
    margin-top: 0.32rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
    opacity: 0
}

.pauto3 {
    height: 9.5rem!important;
}

.pauto2 {
    height: 8.7rem!important;
}

.pauto1 {
    height: 6.6rem!important;
}

.pull {
    width: 0.22rem;
    margin: auto;
    display: block;
    margin-bottom: 0.2rem;
}

.clear {
    border-bottom: 1px solid #3d454d;
    width: 7.1rem;
    margin: auto;
    height: 0.42rem;
}

.but span {
    color: #333333;
    font-size: 0.26rem;
    margin-left: 0.2rem;
    top: 0.02rem;
}

.but img {
    width: 0.26rem;
    display: inline-block;
}

.but {
    background: #fed945;
    width: 7.1rem;
    height: 0.73rem;
    display: block;
    margin: auto;
    font-size: 0;
    margin-top: 0.32rem;
    text-align: center;
    border-radius: 4px;
    line-height: 0.72rem;
}

.cp {
    font-size: 0;
    margin: 0.28rem 0;
}

.des {
    display: inline-block;
    color: #999999;
    font-size: 0.22rem;
    width: 2rem;
    margin-left: 0.16rem;
    width: 6rem;
}

.num {
    display: inline-block;
    width: 0.27rem;
    height: 0.27rem;
    vertical-align: top;
    background: #3a434b;
    color: #ffffff;
    font-size: 0.18rem;
    text-align: center;
    line-height: 0.28rem;
    border-radius: 0.06rem;
}

.zz {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    z-index: 1;
}

.cl1 {
    border-bottom: 1px solid #3d454d;
    height: 0.62rem;
}

.planname {
    font-size: 0.26rem;
    color: #ffffff;
    border-left: 0.04rem solid #fed945;
    text-indent: 0.2rem;
    display: inline-block;
    float: left;
}

.planprice {
    color: #fed945;
    font-size: 0.26rem;
    float: right;
}

.co2 {
    width: 6.5rem;
    margin: auto;
    display: block;
    height: auto;
    position: relative;
}

.tp {
    width: 7.1rem;
    display: block;
    margin: auto;
    color: #999999;
    font-size: 0.24rem;
    margin-top: 0.32rem;
}

.fw {
    color: #ffffff;
    font-size: 0.3rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 1rem;
    text-align: center;
}

.f {
    width: 100%;
    height: auto;
    display: block;
}

.co1 {
    width: 7.1rem;
    height: 3rem;
    background: #273039;
    border-radius: 4px;
    margin: auto;
    display: block;
    margin-top: 0.2rem;
    transition: height 0.5s;
    overflow: hidden;
}
</style>
