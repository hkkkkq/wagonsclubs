<template>
  <div>
      <div class="head_xz">
            <a @click="goback" class="goback"></a>
            <p class="wagons_logo">如何加入WAGONS</p>
            <span v-if="isNew" @click="call" class="share"></span>
        </div>
        <div style="width:100%;height:1.27rem;"></div>
        <div class="introduce">
            开始用车之前，您需要通过申请加入WAGONS，成功后即可自由选择购买优惠套餐，或采用单次散租的方式开始您的超跑自驾之旅。
        </div>
        <div class="packgage">
            <div class="head">
                <i class="line" style="left:2.47rem;"></i>
                <i class="line" style="right:2.47rem;"></i>
                <p>套餐</p>
            </div>
            <div class="card_grade">
                <h4>乐潮计划</h4>
                <p>98000元／年<span @click="showcars(1)" class="support_car le">支持车型一览<img src="../../assets/gt.jpg" alt=""></span></p>
                <h6>权益细则:</h6>
                <ul class="list">
                    <li>
                        <i>1</i><span>每月3天超跑使用权，每天可在指定车型中任选1台自驾，本月未使用完的天数可累计到下月，本年度未使用完的天数可在下一年度继续使用</span>
                    </li>
                    <li>
                        <i>2</i><span>乐潮计划权益外用车，可享受金卡会员折扣，即基础价7折</span>
                    </li>
                    <li>
                        <i>3</i><span>生日当天用车半价，生日专属礼物</span>
                    </li>
                    <li>
                        <i>4</i><span>每邀请1位好友，可额外累计1天使用权</span>
                    </li>
                    <li>
                        <i>5</i><span>一对一专属管家服务</span>
                    </li>
                    <li>
                        <i>6</i><span>俱乐部旗下修理厂每年1次免费深度车辆清洗</span>
                    </li>
                    <li>
                        <i>7</i><span>俱乐部组织的高端定制游等自费活动，享受9折优惠</span>
                    </li>
                </ul>
            </div>

            <div class="card_grade">
                <h4>优享计划</h4>
                <p>218000元／年<span @click="showcars(2)" class="support_car you">支持车型一览<img src="../../assets/gt.jpg" alt=""></span></p>
                <h6>权益细则:</h6>
                <ul class="list">
                    <li>
                        <i>1</i><span>每月3天超跑使用权，每天可在俱乐部所有车型中任选1台自驾，本月未使用完的天数可累计到下月，本年度未使用完的天数可在下一年度继续使用</span>
                    </li>
                    <li>
                        <i>2</i><span>获俱乐部价值100万白金会员资格，享有白金会员所有权益</span>
                    </li>
                    <li>
                        <i>3</i><span>优享计划权益外用车，可享受白金会员折扣，即基础价6折</span>
                    </li>
                    <li>
                        <i>4</i><span>长租折上折，周租白金价格9折，月租白金价格7折</span>
                    </li>
                    <li>
                        <i>5</i><span>生日当天用车半价，生日专属礼物</span>
                    </li>
                    <li>
                        <i>6</i><span>每邀请1位好友，可额外累计1天使用权</span>
                    </li>
                    <li>
                        <i>7</i><span>每月1次劳斯莱斯或宾利商务接送服务</span>
                    </li>
                    <li>
                        <i>8</i><span>一对一专属管家服务</span>
                    </li>
                    <li>
                        <i>9</i><span>每次用车免除3分及以内的违章罚金</span>
                    </li>
                    <li>
                        <i>10</i><span>俱乐部旗下修理厂每年2次免费深度车辆清洗，保养9折优惠</span>
                    </li>
                    <li>
                        <i>11</i><span>免费参与俱乐部组织的各类培训试驾、演唱会、观影、酒会派对、体育棋牌等活动</span>
                    </li>
                    <li>
                        <i>12</i><span>俱乐部组织的高端定制游等自费活动，享受8折优惠</span>
                    </li>
                </ul>
            </div>

            <div class="card_grade" style="border-bottom: none">
                <h4>至尊计划</h4>
                <p>358000元／年<span @click="showcars(3)" class="support_car zhi">支持车型一览<img src="../../assets/gt.jpg" alt=""></span></p>
                <h6>权益细则:</h6>
                <ul class="list">
                    <li>
                        <i>1</i><span>每月5天超跑使用权，每天可在俱乐部所有车型中任选1台自驾，本月未使用完的天数可累计到下月，本年度未使用完的天数可在下一年度继续使用</span>
                    </li>
                    <li>
                        <i>2</i><span>获俱乐部价值100万白金会员资格，享有白金会员所有权益</span>
                    </li>
                    <li>
                        <i>3</i><span>优享计划权益外用车，可享受白金会员折扣，即基础价6折</span>
                    </li>
                    <li>
                        <i>4</i><span>长租折上折，周租白金价格9折，月租白金价格7折</span>
                    </li>
                    <li>
                        <i>5</i><span>生日当天用车半价，生日专属礼物</span>
                    </li>
                    <li>
                        <i>6</i><span>每邀请1位好友，可额外累计1天使用权</span>
                    </li>
                    <li>
                        <i>7</i><span>每月2次劳斯莱斯或宾利商务接送服务</span>
                    </li>
                    <li>
                        <i>8</i><span>一对一专属管家服务</span>
                    </li>
                    <li>
                        <i>9</i><span>每次用车免除6分及以内的违章罚金</span>
                    </li>
                    <li>
                        <i>10</i><span>俱乐部旗下修理厂每年4次免费深度车辆清洗，保养8折优惠</span>
                    </li>
                    <li>
                        <i>11</i><span>免费参与俱乐部组织的各类培训试驾、演唱会、观影、酒会派对、体育棋牌等活动</span>
                    </li>
                    <li>
                        <i>12</i><span>俱乐部组织的高端定制游等自费活动，享受7折优惠</span>
                    </li>
                    <li>
                        <i>13</i><span>在与WAGONS合作的顶级会所、健身房、高尔夫球场、餐厅、酒吧消费享受专属礼遇</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="none_box"></div>        
        <div class="scatter">
            <div class="head">
                <i class="line" style="left:2.47rem;"></i>
                <i class="line" style="right:2.47rem;"></i>
                <p>散租</p>
            </div>
            <div class="card_grade" style="border-bottom: none">
                <ul class="list">
                    <li>
                        <i>1</i><span>只需缴纳少量押金，即可开走顶级跑车</span>
                    </li>
                    <li>
                        <i>2</i><span>尊享会员折扣价，长租还享折上折</span>
                    </li>
                    <li>
                        <i>3</i><span>优质老客户还有多重优惠，有机会免押金用车</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="none_box"></div>
        <div @click="tomemberitro" class="more">
            查看更多会员说明<span></span>
        </div>
        <div class="none_box"></div>
        <div style="height:1rem;"></div>
        <router-link to='/mobile/apply' class="apply">
            立即申请
        </router-link>
        <div v-show="show1||show2||show3" class="mask youxiang">
            <img v-if="show1" class="im1" src="../../assets/lechao.jpg">
            <img v-else-if="show2" class="im1" src="../../assets/youxiang.jpg">
            <img v-else class="im1" src="../../assets/zhizun.jpg">
            <img @click="close" src="../../assets/close.png" class="close">
        </div>
  </div>
</template>
<script>
require('./rem.js')(window,document)
var wx = require('weixin-js-sdk');

export default {
    data(){
        return {
            show1:false,
            show2:false,
            show3:false
        }
    },
    computed:{
        isNew(){ return this.$store.state.isNewApp}
    },
    created(){
         this.$ajax(BASE_URL+'/car/weixinShare')
        .then((res)=>{
            wx.config({
                        debug: false,
                        appId: res.data.sign.appId,
                        timestamp: res.data.sign.timestamp,
                        nonceStr: res.data.sign.nonceStr,
                        signature: res.data.sign.signature,
                        jsApiList: [
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo'
                        ]
                    });
            var locationHref = window.location.href;
            wx.ready(function () {
                        wx.onMenuShareTimeline({
                            title: 'WAGONS超跑俱乐部',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagon_logo.png'
                        });

                        wx.onMenuShareAppMessage({
                            title: 'WAGONS超跑俱乐部',
                            desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagon_logo.png'
                        });

                        wx.onMenuShareQQ({
                            title: 'WAGONS超跑俱乐部',
                            desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagon_logo.png'
                        });

                        wx.onMenuShareWeibo({
                            title: 'WAGONS超跑俱乐部',
                            desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagon_logo.png'
                        });
                    });
            console.log(window.ground)
            })
    },
    methods:{
        goback:function(){
            this.$router.push('/mobile');
        },
        showcars:function(i){
            if(i == 1){this.show1 = true}
            if(i == 2){this.show2 = true}
            if(i == 3){this.show3 = true}
        },
        close:function(){
            this.show1 = this.show2 = this.show3 = false
        },
        tomemberitro:function(){
            this.$router.push('/mobile/memberitro')
        },
        call(command) {
            window.ground.share('WAGONS超跑俱乐部', location.href.replace(/true/g,"false"), '', 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务','0,1,2,3');
            // try {
            //     nativeShare.call(command)
            // } catch (err) {
            //     // 如果不支持，你可以在这里做降级处理
            //     alert(err.message)
            // }
        }
    }
}
</script>
<style scoped>
.share{
    position: relative;
    top: -0.4rem;
    float: right;
    margin-right: 0.3rem;
    display: block;
    width: 0.35rem;
    height: 0.35rem;
    z-index: 1000000;
    background-image: url('../../assets/share.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.mask img.close {
    position: absolute;
    width: 0.72rem;
    height: 0.72rem;
    top:70%;
    left: 50%;
    margin-left: -0.36rem;
    bottom: 2.5rem;
}
.mask .im1{
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -2.59rem;
    margin-top: -3.06rem;
    width: 5.17rem;
    height: 6.12rem;
}
.mask {
    width: 100%;
    height: 100%;
    background: rgba(1,1,1,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}
.scatter {
    width: 6rem;
    margin: 0 auto;
    padding: 0.8rem 0;
    box-sizing: border-box;
}
.apply {
    text-decoration:none;
    text-decoration-line: none;
    color: black;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background: #ffd320;
    font-size: 0.32rem;
    font-weight: bold;
}
.more span {
    display: inline-block;
    /* margin-left: 3.8rem; */
    float: right;
    margin-top: 0.3rem;
    width: 0.11rem;
    height: 0.2rem;
    background: url('../../assets/tiaozhuan.png') no-repeat;
    background-size: 0.11rem 0.2rem;
}
.more {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.76rem;
    font-size: 0.25rem;
    box-sizing: border-box;
}
.none_box {
    width: 100%;
    height: 0.1rem;
    padding-bottom: 2px;
    background-color: #f6f6f6;
}
.card_grade .list li span {
    float: left;
    width: 5.55rem;
}
.card_grade .list li i {
    float: left;
    width: 0.3rem;
    height: 0.3rem;
    background: url('../../assets/vip_intro.png') no-repeat;
    background-size: 100% 100%;
    line-height: 0.28rem;
    text-align: center;
    font-size: 0.18rem;
    color: #fff;
    margin: 0.09rem 0.12rem 0 0;
}
.card_grade .list li {
    padding: 0;
    line-height: 0.46rem;
    font-size: 0.24rem;
    color: #252525;
    overflow: hidden;
}
.card_grade .list {
    padding: 0;
}
.card_grade h6 {
    height: 0.45rem;
    color: #727272;
    font-size: 0.24rem;
}
.card_grade p .support_car img {
    display: inline-block;
    width: 0.11rem;
    height: 0.2rem;
    margin-left: 0.15rem;
    margin-top: 0.02rem;
}
.card_grade p {
    height: 0.76rem;
    font-size: 0.28rem;
    color: #f96d57;
}
.card_grade p .support_car {
    display: inline-block;
    margin-left: 2.4rem;
    font-size: 0.24rem;
}
.card_grade h4 {
    height: 0.76rem;
    font-size: 0.34rem;
    color: #252525;
}
.card_grade {
    width: 6rem;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0.8rem 0;
    border-bottom: 1px solid #e1e1e1;
}
.head p {
    font-weight: 600;
}
.head .line {
    position: absolute;
    top: 0.1rem;
    width: 0.12rem;
    height: 1px;
    background-color: #ffd320;
}
.head {
    position: relative;
    height: 0.24rem;
    font-size: 0.24rem;
    text-align: center;
}
.packgage {
    width: 6rem;
    margin: 0 auto;
    padding: 0.8rem 0;
    box-sizing: border-box;
}
.introduce {
    box-sizing: border-box;
    width: 7.5rem;
    height: 2.5rem;
    line-height: 0.4rem;
    font-size: 0.24rem;
    background: #f6f6f6;
    padding: 0.8rem 0.75rem;
}
.head_xz {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 0.84rem;
    padding-top: 0.43rem;
    background-color: #06060b;
    box-sizing: content-box;
}
.head_xz .goback {
    position: absolute;
    left: 0.06rem;
    top: 0.37rem;
    width: 0.8rem;
    height: 0.8rem;
    background: url('../../assets/m-goback.png') no-repeat center center;
    background-size: 0.3rem 0.3rem;
}
.head_xz .wagons_logo {
    width: 3.08rem;
    height: 0.4rem;
    font-size: 0.36rem;
    color: #fff;
    margin: 0.17rem 0 0 2.2rem;
}
</style>
