<template>
<div>
    <!-- <img @click="whoweare" class="banner" src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/assets/carousel/20170607195218_769.png"> -->
    <div style="position:relative">
        <div style="height:0;top: 1.3rem;" class="swiper-pagination"></div>       
        <swiper :options="swiperOption" ref="mySwiper"> 
            <swiper-slide :key="n" v-for="(item,n) in carousel">
                <a :href='item.detailPath+"?isNewApp="+isNew'>
                    <img class="banner" :src="item.imagePath">
                </a>
            </swiper-slide>
        </swiper>
    </div>
    <!-- 每日特价 -->
    <div v-if="tj">
        <p style="height:0.1rem;background:#eceef1"></p>
        <div style="background:#ffffff;width:100%;height:3.9rem;padding-top: 0.1rem;">
            <img style="width:2.24rem;height:0.4rem;display:block;margin:auto" src="../../assets/tj.jpg">
            <swiper :options="swiperOption" ref="mySwiper"> 
                <swiper-slide :key="n" v-for="(item,n) in tj.discount">
                    <div @click="mid(item.id)" class="tj">
                        <img v-if="item.rentingStatus" class="zz" src="../../assets/bz.png">
                        <img v-else class="zz" src="../../assets/tjb1.png">
                        <div class="tjcar">
                            <img class="tjcar" style="width: 100%;height: 100%;" :src="item.carImages">
                        </div>
                        <span class="tjdes" style="">{{item.carName}}</span>
                        <span class="tjyuan">原价:<span style="font-size:0.22rem">{{item.dailyRentPrice}}</span>元/天</span>
                        <span class="tjdi"><span style="font-size:0.48rem">{{item.discDailyRentPrice}}</span>元/天</span>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <div v-if="loading == false" class="content">
        <ul>
            <li @click="details(car.id)" v-for="car in carlist.data.carsList" class="car_details">
                <img v-lazy="car.carImages" class="car_img">
                <div v-if="car.rentingStatus" class="carShadow"><img class="lazy" src="../../assets/already_rent.png"></div>
                <p class="carName">{{car.carName}}</p>
                <div class="rentPrice">
                    <p class="car_price">¥<i>{{Math.round( car.dailyRentPrice*discount*0.1)}}</i>／天起</p>
                    <p class="member_cut">{{car.starLevel}}星级</p>
                </div>
                <img v-if="car.new" class="newcar" src="../../assets/new.png">
            </li>
            
        </ul>
    </div>
    <div style="height:5.1rem" v-else>
        <img class="loadgif" src="../../assets/loading_3.gif">
    </div>
    <div class="foot_logo">
        <img class="loadgif" src="../../assets/m-foot_logo.png">
    </div>
</div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
require('swiper/dist/css/swiper.css')
export default {
    data(){
        return{
             swiperOption: {
              notNextTick: true,
              autoplay: 2000,
              autoplayDisableOnInteraction:false,
              pagination : '.swiper-pagination',
              paginationType:'custom',
              paginationCustomRender:function(swiper, current, total){
                  var _html = '';
            for (var i = 1; i <= total; i++) {
              if (current == i) {
                _html += '<li style="background:#F3F3F3;display:inline-block;width:13px;height:5px;border-radius:5px"></li><i style="display:inline-block;width:7px"></i>';
              }else{
                _html += '<li style="background:#F3F3F3;display:inline-block;width:5px;height:5px;border-radius:50%"></li><i style="display:inline-block;width:7px"></i>';
              }
            }
            return _html
              },
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
            type1:false,
            type2:true,
            type3:false,
            carlist:'',
            loading:true,
            discount:'',
            carousel:'',
            tj:""
        }
    },
    created(){
        //每日特价
        this.$ajax(BASE_URL+"/car/discount")
            .then((res)=>{
                this.tj = res.data.data;
            })


        if(this.$route.query.isNewApp == 'true'){
            window.ground.hideHeader();
            this.$store.commit('isNewApp')
        }
        this.$ajax(BASE_URL+'/car/carsList')
            .then((res)=>{this.carlist = res.data; this.discount = res.data.data.maxDiscount;this.loading = false})
            .catch(()=>{alert('一定是什么地方出问题了')})
        this.$ajax(BASE_URL+"/car/carousel")
            .then((res)=>{
                if(res.data.success == true){
                    this.carousel = res.data.data.carousel;
                }else{
                    alert('获取轮播图接口出了一些问题')
                }
            })
    },
    computed:{
        isNew(){ return this.$store.state.isNewApp},
    },
    methods:{
        mid(mid){
            this.$router.push({path:"/mobile/mid",query:{"id":mid}})
        },
        details:function(i){
            this.$router.push({path:'/mobile/cardetail?isNewApp='+this.isNew,query:{carId:i}})
            // router.push({ name: 'user', params: { userId: 123 }})
            // this.$ajax(BASE_URL+'/car/leaseDetails',{params:{'carId':i}})
            // .then((res)=>{console.log(res.data)})
        },
        whoweare:function(){
            this.$router.push('/mobile/whoweare?isNewApp='+this.isNew)
        }
    }
}
</script>
<style scoped>
.zz{
position: absolute;display: block;width: 7.1rem;height: 3.1rem;left: 0.2rem;
}
.tjdi{
    position: absolute;
    top: 2.5rem;
    left: 5.2rem;
    font-size: 0.18rem;
    color: #f33346;
}
.tjyuan{
    font-size: 0.14rem;
    color: #cbcbcb;
    position: absolute;
    top: 2.7rem;
    left: 3.3rem;
    text-decoration-line: line-through;
}
.tj .tjdes{
    position: absolute;
    top: 2.7rem;
    font-size: 0.24rem;
    display: block;
    width: 3rem;
    left: 0.4rem;
    color: #ffffff;
}
.tj .tjcar{
    width:7.1rem;
    height:3.1rem;
    margin:auto;
    display:block;
    margin-top:0.18rem;
    z-index: 0;
}
.tj{
    position:relative
}
.sp{
    height: 1rem;
}
.newcar{
    position: absolute;
    top: 0;
    width:0.55rem;
}
.carShadow img {
    width: 1.46rem;
    height: 1.46rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -0.73rem;
    margin-top: -0.73rem;
}
.carShadow{
    position: absolute;
    top: 0;
    left: 0;
    width: 3.5rem;
    height: 2.66rem;
    background: rgba(1,1,1,0.3);
}
img[lazy=error]{
    /* //your code */
    background-image: url('../../assets/loading12.gif');
    background-repeat: no-repeat;
    background-position:center;
    background-size: 0.5rem;

  
}
img[lazy=loading]{
    /* //your code */
    background-image: url('../../assets/loading12.gif');
    background-repeat: no-repeat;
    background-position:center;
    background-size: 0.5rem;

}

img[lazy=loaded]{
    /* //your code */
  animation:fade 0.5s;
}
@keyframes fade {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.loadgif{
    display: block;
    margin: auto;
    margin-top: 1rem;
    width: 1.5rem;
}
.banner{
    font-size: 0;
    width: 7.5rem;
    height: 2.3rem;
    display: block;
}
.but{
    left: 3.5rem;
    margin: auto;
    display: block;
    background: white;
    width: 0.35rem;
    height: 0.1rem;
    position: absolute;
    top: 3.35rem;
    border-radius: 15px;
}
.type{
    width: 100%;
    height: 0.8rem;
    overflow: hidden;
    background-color: #fff;
    z-index: 1000;
    border-bottom: 1px solid #eceef1;
}
.type div{
    float: left;
    font-size: 0.26rem;
    line-height: 0.8rem;
    height: 0.8rem;
    width: 2.48rem;
    text-align: center;
    font-weight: 500;
    position: relative;
}
.type>i{
    float: left;
    height: 0.3rem;
    border-right: 1px solid #cecece;
    margin: 0.23rem auto;
}
.typeselect{
    font-size: 0.3rem!important;
}
.type img {
    position: absolute;
    width: 1.24rem;
    height: 0.12rem;
    left: 0.62rem;
    bottom: 0;
}
.content{
    width: 7.12rem;
    margin: 0.20rem 0.16rem 0.06rem 0.22rem;
    min-height: 7rem;
    overflow: hidden;
    position: relative;
}
.foot_logo{
    width: 100%;
    height: 0.72rem;
}
.foot_logo img{
    width: 1.47rem;
    height: 0.16rem;
    margin: 0.1rem 3rem 0.46rem;
}
.car_details{
    float: left;
    width: 3.5rem;
    height: 3.94rem;
    margin: 0 0.06rem 0.06rem 0;
    background: #fff;
    position: relative;
}
.car_details .car_img {
    width: 3.5rem;
    height: 2.66rem;
}
img[lazy=loading] {
    width: 20rem;
    height: 2.66rem;
}
.car_details .carName {
    box-sizing: border-box;
    font-size: 0.3rem;
    height: 0.69rem;
    padding: 0.2rem 0 0.22rem 0.2rem;
}
.rentPrice {
    overflow: hidden;
    width: 3.5rem;
    height: 0.3rem;
    line-height: 0.3rem;
    font-weight: 500;
}
.car_details .car_price {
    float: left;
    font-size: 0.2rem;
    color: #f65641;
    margin-left: 0.2rem;
    font-weight: bold;
}
.car_details .car_price i {
    font-size: 0.34rem;
    font-weight: bold;
}
.rentPrice .member_cut {
    float: right;
    margin-right: 0.2rem;
    margin-top: 2px;
    width: 0.96rem;
    height: 0.28rem;
    font-size: 0.2rem;
    line-height: 0.28rem;
    color: #fff;
    text-align: center;
    background: url('../../assets/m-discount_vip.png') no-repeat;
    background-size: 100%;
}
</style>
