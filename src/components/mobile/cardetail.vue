<template>
<div>
    <router-link to="/mobile" class="back"></router-link>
    <div class="lunbo">
        <div class="swiper-pagination"></div>    
        <swiper class="swip1" :options="swiperOption" ref="mySwiper">
            <swiper-slide :key="item.id" v-for="item in info.carImgShows" class="swip2">
                <img :src="item" />
            </swiper-slide>
            <!-- <swiper-slide class="swip2">
                <img src="../../assets/car_gongzhonghao.png" />            
            </swiper-slide>
            <swiper-slide class="swip2">
                <img src="../../assets/car_gongzhonghao.png" />            
            </swiper-slide>
            <swiper-slide class="swip2">
                <img src="../../assets/car_gongzhonghao.png" />            
            </swiper-slide>
            <swiper-slide class="swip2">
                <img src="../../assets/car_gongzhonghao.png" />            
            </swiper-slide>
            <swiper-slide class="swip2">
                <img src="../../assets/car_gongzhonghao.png" />            
            </swiper-slide>
            <swiper-slide class="swip2">
                <img src="../../assets/car_gongzhonghao.png" />            
            </swiper-slide>
            <swiper-slide class="swip2">
                <img src="../../assets/car_gongzhonghao.png" />            
            </swiper-slide> -->
        </swiper>
    </div>
    <div class="car_info">
            <p class="car_name">
                 <span>{{info.car.carName}}</span> 
                <img v-if="info.car.starLevel == '5'" src="../../assets/5.png" class="star">
                <img v-if="info.car.starLevel == '4'" src="../../assets/4.png" class="star">  
                <img v-if="info.car.starLevel == '3'" src="../../assets/3.png" class="star">
                <!-- <img v-if="info.car.starLevel == '2'" src="../../assets/2.png" class="star"> -->
                <!-- <img v-if="info.car.starLevel == '1'" src="../../assets/1.png" class="star">  -->
            </p>
            <p class="price">
                <span>白金会员</span>
                ¥<i>{{info.car.dailyRentPrice}}</i>/天
            </p>
    </div>
    <div class="car_intro">
            <h3>本车特色</h3>
            <div class="show">
                <p>{{info.car.carDesc}}</p>
            </div>
    </div>
<div class="mo_intro">
            <h3>车型信息</h3>
            <div class="specific">
                <span>
                    <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/1.png" alt=""><i>{{info.car.carSeats}}</i>
                </span>
                <span v-if="info.car.gearLevel == 2">
                        <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/2.png" alt="">自动挡
                </span>
                <span v-else>
                    <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/3.png" alt="">手动挡
                </span> 
                <span>
                    <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/4.png" alt="">{{info.car.carColor}}</span>
                <span v-if='info.car.convertible==1'>
                    <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/5.png" alt="">敞篷
                </span>
                <span v-if='info.car.convertible==2'>
                    <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/5.png" alt="">硬顶敞篷
                </span>
                <span v-if='info.car.convertible==3'>
                    <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/5.png" alt="">软顶敞篷
                </span>
                <span>
                    <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/6.png" alt="">{{info.car.carEngineDisplacement}}
                </span>
                <span v-if="info.car.plateNumberBj">
                    <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/Bj.png" alt="">京牌
                </span>
                <span v-else>
                    <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/noBj.png" alt="">非京牌
                </span>
                </div>
        </div>
        <div class="lease_info">
            <div class="rent_header">
                <router-link class="link" to="/mobile/join">还没有加入WAGONS光速超跑？点此了解套餐及散租详情</router-link>
            </div>
        </div>
        <div style="height:1.2rem"></div>
        <div class="fix">
            <div @click="open" class="can_rent">
                我要用车
            </div>
        </div>
        <div v-show="show1" class="shadow_rent">
            <div class="lock">
                <img src="../../assets/car_Identification3.png" alt="" class="Identification">
                <h4>我要用车</h4>
                <p class="con_text" style="margin-bottom: 0.3rem;">坐骑就位&nbsp;恭候大驾</p>
                <p class="con_text">问小二</p>
                <p class="con_condition">4008-625-700</p>
                <p class="call">
                    <img src="../../assets/call.png">
                    <span @click="call">呼叫</span>
                </p>
                <a @click="close" class="cclose"></a>
            </div>
        </div>
        <div v-show="show2" class="alert_msg">当前版本不支持此功能，请升级到最新版本</div>

</div>
</template>

<script>
require('./rem.js')(window,document);
import Swiper from "../../../node_modules/vue-awesome-swiper/swiper";
export default {
    components: {Swiper},
    data(){
        return{
            swiperOption: {
              notNextTick: true,
              autoplay: 2000,
              autoplayDisableOnInteraction:false,
              pagination : '.swiper-pagination',
              direction : 'horizontal',
              grabCursor : true,
              setWrapperSize :true,
              autoHeight: true,
              slidesPerView : 1,
              paginationClickable :false,
              observeParents:true,
              debugger: true,
              watchSlidesVisibility : true,
              onTransitionStart(swiper){},
            },
            show1:false,
            show2:false,
            info:{
                car:{
                    carName:'',
                    starLevel:''
                },
            },
        }
    },
    created(){
        this.$ajax(BASE_URL+'/car/leaseDetails',{params:{'carId':this.$route.query.carId}})
        .then((res)=>{this.info = res.data.data;console.log(res.data.data)})
        window.scrollTo(0,0);
    },
    methods:{
        close:function(){
            this.show1 = false;
        },
        open:function(){
            this.show1 = true;
        },
        call:function(){
            this.show2 = true;
            setTimeout(()=>{
                this.show2 = false
            },1500)
        }
    }

}
</script>

<style scoped>
.alert_msg {
    position: fixed;
    width: 6.8rem;
    height: 1.2rem;
    border-radius: 0.2rem;
    top: 50%;
    left: 50%;
    margin-top: -0.6rem;
    margin-left: -3.4rem;
    background-color: rgba(0,0,0,0.6);
    text-align: center;
    line-height: 1.2rem;
    font-size: 0.28rem;
    color: white;
    z-index: 10000;
}
.shadow_rent .lock .cclose {
    position: absolute;
    width: 0.68rem;
    height: 0.68rem;
    left: 50%;
    bottom: -1.1rem;
    border-radius: 50%;
    margin-left: -0.34rem;
    background: url('../../assets/car_close2.png') no-repeat;
    background-size: 100% 100%;
}
.shadow_rent .lock .call span {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.3rem;
}
.shadow_rent .lock .call img {
    width: 2.2rem;
    height: 0.8rem;
    display: block;
}
.shadow_rent .lock .call {
    position: absolute;
    top: 5rem;
    left: 1.29rem;
    width: 2.2rem;
    height: 0.8rem;
}
.shadow_rent .lock .con_condition {
    height: 0.72rem;
    font-size: 0.42rem;
    text-align: center;
    color: #282e39;
}
.shadow_rent .lock .con_text {
    height: 0.5rem;
    font-size: 0.26rem;
    color: #282e39;
    text-align: center;
}
.shadow_rent .lock h4 {
    height: 0.68rem;
    font-size: 0.42rem;
    font-weight: bold;
    color: #282e39;
    text-align: center;
}
.shadow_rent .lock .Identification {
    display: block;
    width: 1.1rem;
    height: 1.1rem;
    margin: 0.64rem auto 0.46rem;
}
.shadow_rent .lock {
    position: fixed;
    left: 50%;
    margin-left: -2.38rem;
    top: 20%;
    width: 4.76rem;
    height: 6.24rem;
    background-color: #ffffff;
    border-radius: 3px;
}
.shadow_rent {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
}
.link{
    text-decoration-line: none;
    text-decoration-style: none;
    color: #7abefd;
}
.back {
    position: fixed;
    left: 0.22rem;
    top: 0.48rem;
    z-index: 100;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: url('../../assets/back_1.png') no-repeat;
    background-size: 100% 100%;
}
.can_rent {
    width: 7rem;
    height: 0.8rem;
    line-height: 0.8rem;
    margin: 0.18rem auto 0.26rem;
    text-align: center;
    font-size: 0.29rem;
    background: #fed945;
}
.fix {
    width: 7.5rem;
    height: 1.2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #eceef1;
    background: #fff;
}
.lease_info .rent_header {
    padding: 0.35rem 0 0.8rem 0.47rem;
    /* padding-top: 0.05rem; */
    font-size: 0.26rem;
    color: #7abefd;
    overflow: hidden;
}
.mo_intro .specific span img {
    display: block;
    width: 0.53rem;
    height: 0.53rem;
    margin: 0 auto 0.2rem;
}
.mo_intro .specific span {
    float: left;
    width: 1.4rem;
    margin: 0 0.4rem 0.2rem -0.2rem;
    font-size: 0.26rem;
    color: #888f9d;
    text-align: center;
    letter-spacing: -1px;
}
.mo_intro .specific {
    overflow: hidden;
}
.mo_intro h3 {
    font-weight: 100;
    height: 0.65rem;
    color: #282e39;
    font-size: 0.3rem;
}
.mo_intro {
    margin-left: 0.35rem;
    width: 7.15rem;
    box-sizing: border-box;
    padding: 0.33rem 0.4rem 0.2rem 0;
    border-bottom: 3px solid #f2f3f5;
}
.car_intro h3 {
    font-weight: 100;
    height: 0.55rem;
    color: #282e39;
    font-size: 0.3rem;
}
.car_intro .show p {
    display: block;
    width: 6.75rem;
    line-height: 0.41rem;
    font-size: 0.26rem;
    color: #808796;
    word-wrap: break-word;
    word-break: break-all;
}
.car_intro {
    margin-left: 0.35rem;
    width: 7.15rem;
    box-sizing: border-box;
    padding: 0.33rem 0.4rem 0.2rem 0;
    border-bottom: 3px solid #f2f3f5;
}
.car_info .price i {
    font-size: 0.34rem;
    font-weight: bold;
}
.car_info .price span {
    display: inline-block;
    width: 1.14rem;
    height: 0.28rem;
    line-height: 0.15rem;
    text-align: center;
    padding-top: 0.05rem;
    margin: 0.1rem 0.2rem 0 0;
    vertical-align: top;
    color: #fff;
    background: url('../../assets/m-discount_vip.png') no-repeat;
    background-size: 1.14rem 0.28rem;
}
.car_info .price {
    height: 0.52rem;
    line-height: 0.52rem;
    font-size: 0.18rem;
    color: #f65641;
}
.car_info .star {
     float: right; 
    height: 0.3rem;
    margin-right: 0.5rem;
    margin-top: 0.2rem;
}
.car_info .car_name {
    height: 0.65rem;
    line-height: 0.65rem;
    font-size: 0.34rem;
    color: #202128;
    font-weight: bolder;
    overflow: hidden;
}
.car_info {
    width: 7.5rem;
    height: 1.28rem;
    box-sizing: border-box;
    padding: 0.03rem 0 0 0.35rem;
    border-bottom: 1px solid #eceef1;
}
.lunbo{
    position: relative;
    height: 5.7rem;
}
.swiper-pagination-bullet{
    margin-left: 10px!important;
    margin-right: 10px!important;
}
.swiper-pagination{
    top: 4.4rem;
    left: 40%;
}
.swip2 img{
    display: block;
    width: 100%;
    height: 5.7rem;
}
</style>