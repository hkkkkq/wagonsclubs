<template>
<div style="font-family: PingFangSC-Medium, sans-serif;position: absolute;width:100%;height:100%">
    <div style="background:#ffffff;height:100%">
        <div @click="clo" v-show="yousa" class="yousa">
            <transition name="fade">
                <img v-if="yousa" src="../../assets/mss.png">
            </transition>
        </div>
        <div v-if="isNew" class="head">
            <!--  -->
            <img class="goback" @click="goo" src="../../assets/m-goback.png">
            <p>限时秒杀</p>
            <!-- <img class="sha" @click="sha" src="../../assets/share.png"> -->
        </div>
        <div style="position:relative" v-if="suc == false">
            <div class="carimg"></div>
                <p class="carname">
                    <img class="midal" src="../../assets/mida.jpg">
                    <span>{{car.car.carName}}</span>
                    <img class="midar" src="../../assets/mida.jpg">
                </p>
                <p class="disp"><b>¥{{car.car.currentDaydisc}}</b>/天</p>
                <p class="nodisp"><span>¥<b>{{car.car.dailyRentPrice}}</b>/天</span></p>
                <img class="img1" src="../../assets/miaosha.png">
                <img class="ci" :src="car.carImgShows[0]">
                <div @click="but" class="but">我要租车</div>
            </div>
            <div class="clear"></div>
            <div class="share">
                <p class='sp'><b>-</b>分享到朋友圈<b>-</b></p>
                <h1 class="sh">现在分享，就送满3000减500租车抵用券!</h1>
                <img @click="sha" src="../../assets/miaoshawx.png">
            </div>
        </div>
        <div class="success" style="position:relative" v-else-if="suc == true">
            <img src="../../assets/migs.png">
            <span>您已成功获得500元Gift Card</span>
            <div style="position: absolute;left: -2rem;right: 0;top: 2rem;width:10rem" class="clear"></div>     
            <img class="mmss" src="../../assets/mmss.png">       
        </div>
        
    </div>
</div>
</template>

<script>
require('./rem.js')(window,document)
export default {
    data(){
        return{
            carId:"",
            suc:false,
            car:"",
            yousa:false
        }
    },
    computed:{
        isNew(){ return this.$store.state.isNewApp}
    },
    created(){
        // var vm = this
        // location.href
       

        if(this.$route.query.isNewApp == 'true'){
            window.ground.hideHeader();
            window.ground.dontRefresh();
            this.$store.commit('isNewApp')
        }

        this.carId = this.$route.query.carId;
        this.$ajax(BASE_URL+'/car/leaseDetails?carId='+this.$route.query.carId+"&tt="+Date.parse(new Date()))
            .then((res)=>{
                console.log(res.data)
                this.car = res.data.data
                var vmm = this
                this.wx(vmm)
            })

    },
    methods:{
        but(){
            this.$router.push({path:"/mobile/cardetail",query:{"carId":this.carId}})
        },
        goo(){
            this.$router.go(-1)
        },
        sha(){
            if(this.isNew){
                this.suc = true
                window.ground.share('WAGONS光速超跑限时秒杀，'+this.car.car.carName+'原价'+this.car.car.dailyRentPrice+'/天，现价'+this.car.car.currentDaydisc+'/天，有意者速抢', location.href.replace(/true/g,"false"), 'http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/199E727409CD4B3FBB3DDFC2C3FD0FA4.png', 'WAGONS光速超跑限时秒杀，宝马i8原价7000/天，现价3.6折2520/天，有意者速抢','1');
            }else{
                this.yousa = true
            }
        },
        clo(){
            this.yousa = false;
        },
        wx(vm){
            console.log(vm.car.car.carName)
 vm.$ajax(BASE_URL+'/car/weixinShare?url='+escape(location.href))
            .then((res)=>{
                wx.config({
                    debug: true,
                        appId: res.data.data.sign.appId,
                        timestamp: res.data.data.sign.timestamp,
                        nonceStr: res.data.data.sign.nonceStr,
                        signature: res.data.data.sign.signature,
                        jsApiList: [
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo'
                        ]
                    });
                    // vm.car.car.currentDaydisc
                var locationHref = window.location.href;
                wx.ready(function () {
                        wx.onMenuShareTimeline({
                            title: 'WAGONS光速超跑限时秒杀，'+vm.car.car.carName+'原价'+vm.car.car.dailyRentPrice+'/天，现价'+vm.car.car.dailyRentPrice+'/天，有意者速抢',
                            link: locationHref,
                            imgUrl: 'http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/199E727409CD4B3FBB3DDFC2C3FD0FA4.png',
                            success: function () { 
                            // 用户确认分享后执行的回调函数
                            vm.suc = true;
                            vm.yousa = false;
                            },
                            cancel: function () { 
                            // 用户取消分享后执行的回调函数
                            vm.suc = true;
                            vm.yousa = false;
                            }

                        });

                        wx.onMenuShareAppMessage({
                            title: '秒杀价体验超跑，仅此1天，仅此1款',
                            desc: 'WAGONS光速超跑限时秒杀，'+vm.car.carName+'原价'+vm.car.dailyRentPrice+'/天，现价'+vm.car.currentDaydisc+'/天，有意者速抢',
                            link: locationHref,
                            imgUrl: 'http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/199E727409CD4B3FBB3DDFC2C3FD0FA4.png',
                            success: function () { 
                            // 用户确认分享后执行的回调函数
                            vm.suc = true;
                            },
                            cancel: function () { 
                            // 用户取消分享后执行的回调函数
                            vm.suc = true;
                            }
                        });

                        wx.onMenuShareQQ({
                            title: '秒杀价体验超跑，仅此1天，仅此1款',
                            desc: 'WAGONS光速超跑限时秒杀，宝马i8原价7000/天，现价3.6折2520/天，有意者速抢',
                            link: locationHref,
                            imgUrl: 'http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/199E727409CD4B3FBB3DDFC2C3FD0FA4.png'
                        });

                        wx.onMenuShareWeibo({
                            title: '秒杀价体验超跑，仅此1天，仅此1款',
                            desc: 'WAGONS光速超跑限时秒杀，宝马i8原价7000/天，现价3.6折2520/天，有意者速抢',
                            link: locationHref,
                            imgUrl: 'http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/199E727409CD4B3FBB3DDFC2C3FD0FA4.png'
                        });
                    });
            }).catch((res)=>{alert(res)})
        }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition:  transform .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  transform: translateY(-6.3rem)
}
.mmss{
    margin: 0!important;
    display: block!important;
    width: 100%!important;
    height: auto!important;
    margin-top: 0.4rem!important;
}
.yousa img{
    width: 100%;
    z-index: 12;
}
.yousa{
    background: rgba(0,0,0,0.8);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 11;
}
.sha{
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 0.3rem;
    display: inline-block;
    vertical-align: top;
    float: right;
    margin-right: 0.3rem;
    z-index:10;
    position: relative;
}
.head p{
    font-size: 0.36rem;
    color: #ffffff;
    display: inline-block;
    vertical-align: top;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
}
.goback{
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 0.3rem;
    display: inline-block;
    vertical-align: top;
    z-index:10;
    position: relative;
    float: left;
    /* margin-top: 0.06rem; */
}
.head{
    width: 100%;
    height: 0.7rem;
    background: #000000;
    position: relative;
    font-size: 0;
    padding-top: .43rem;
}
.ci{
    position: absolute;
    z-index: 0;
    width: 5.7rem;
    display: block;
    margin: auto;
    left: 0;
    right: 0;
    top: 2.24rem;
}
.success span{
    display: inline-block;
    width: 4rem;
    font-size: 0.28rem;
    color: #000000;
    vertical-align: top;
    margin-top: 0.95rem;
}
.success{
    /* width: 6rem; */
    display: block;
    margin: auto;
}
.success img{
    width: 0.8rem;
    height: 0.8rem;
    margin-top: 0.66rem;
    display: inline-block;
    margin-left: 0.75rem;
}
.nodisp span {
    border-bottom: 2px solid #dab729;
    height: 0.25rem;
    display: inline-block;
}
.disp b{
    font-weight: bolder;
    font-size: 0.75rem;

}
.disp{
    font-size: 0.6rem;
    color: #000000;
    position: absolute;
    top: 6.4rem;
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
    text-align: right;
    width: 6rem;    
    z-index: 3;
    font-style: italic;
}
.nodisp{
    font-size: 0.5rem;
    position: absolute;
    color: #dab729;
    top: 7.2rem;
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
    display: block;
    text-align: right;
    width: 6.6rem;
    font-style: italic;  
    z-index: 3;

    /* border-bottom: 2px solid #dab729; */
}
.carname{
    position: absolute;
    top: 2.5rem;
    left: 0;
    right: 0;
    transform: rotate(-9.8deg);
    text-align: center;
    z-index: 3;
}
.carname span{
    font-size: 0.23rem;
    color: #000000;
    position: relative;
    top: -0.05rem;
    font-weight: bolder;
    font-style: italic;
}
.midal{
    /* position: absolute; */
    /* top: 0; */
    z-index: 2;
    width: 0.21rem;
    height: 0.24rem;
    transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
    margin-right: 0.2rem;
}
.midar{
    /* position: absolute; */
    /* top: 0; */
    z-index: 2;    
    width: 0.21rem;
    height: 0.24rem;
    margin-left: 0.2rem;
    transform: rotate(-170deg);    
    -webkit-transform: rotate(-170deg);
}
.share img{
    margin: auto;
    display: block;
    width: 0.7rem;
    height: 0.7rem;
    margin-top: 0.3rem;
}
.sh{
    font-size: 0.3rem;
    margin-top: 0.32rem;
    color: #999999;
    text-align: center;
}
.sp b{
    color: #fed945;
    margin: 0 0.15rem;
}
.sp{
    font-size: 0.24rem;
    margin-top: 0.32rem;
    color: #000000;
    text-align: center;
}
.but{
    width: 80%;
    height: 0.84rem;
    background: #000000;
    color: #fed945;
    margin: auto;
    margin-bottom: 0.4rem;
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.8rem;
}
.carimg .img1{
    /* width: 7.2rem; */
    height: 8rem;
    position: relative;
    left: 0;
    top: 0;
    margin: auto;
    z-index: 1;
    display: block;
}
.carimg{
    width: 100%;
    display: block;
    font-size: 0;
    position: relative;
}
.clear{
    height: 0.1rem;
    width: 100%;
    background: #f6f6f6;
    
}
.share{
    width: 100%;
    display: block;
    height: auto;
}
</style>
