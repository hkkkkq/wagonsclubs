<template>
  <div>
    <div class="banner"></div>
    <div class="car-con">
      <h5 class="hot">
        <p>POPULAR MODELE</p>
        <span>热门车型</span>
      </h5>
      <div class="intro">
        <div class="left">
          <img :src="currentcarimg">
        </div>
        <div class="right">
          <p class="p1">
          <span>用车条件</span>
          <i>{{currentcar.car.conditionText}}</i>
        </p>
          <p>
          <span>市场价</span>
          <i>{{currentcar.car.dailyRentPrice}}元／天</i>
        </p>
          <p>
          <span>{{currentcar.memberNick3}}</span>
          <i>{{currentcar.level3?currentcar.level3:''}}元／天</i>
        </p>
          <p>
          <span>{{currentcar.memberNick4}}</span>
          <i>{{currentcar.level4?currentcar.level4:''}}元／天</i>
        </p>
          <p>
          <span>{{currentcar.memberNick4}}</span>
          <i>{{currentcar.level4?currentcar.level4:''}}元／天</i>
        </p>
        </div>
        <h2 class="car_name" id="carName">{{currentcar.car.carName}}</h2>
        <div class="car_info">
          <div class="car_info_left">
            <span>本车特色</span>
            <p>{{currentcar.car.carDesc}}</p>
          </div>
          <div class="car_info_right">
            <span>车型信息</span>
            <p>
              <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/1.png" />
              <i>{{currentcar.car.carSeats}}</i>
            </p>
            <p v-if="currentcar.car.gearLevel == 2" >
              <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/2.png" />
              <i>自动挡</i>
            </p>
            <p v-else>
              <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/3.png" />
              <i>手动挡</i>
            </p>
            <p>
              <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/4.png" />
              <i>{{currentcar.car.carColor}}</i>
            </p>
            <p v-if="currentcar.car.convertible==1">
              <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/5.png" />
              <i>敞篷</i>
            </p>
            <p v-if="currentcar.car.convertible==2">
              <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/5.png" />
              <i>硬顶敞篷</i>
            </p>
            <p v-if="currentcar.car.convertible==3">
              <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/5.png" />
              <i>软顶敞篷</i>
            </p>
            <p>
              <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/6.png" />
              <i>{{currentcar.car.carEngineDisplacement}}</i>
            </p>
          </div>
        </div>
      </div>
      <div class="car_list">
        <div class="box">
          <span @click="goprev" class="up"></span>
          <swiper class="swip1" :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in cars" :key="item.id"  class="swip2">
              <i>
                <img :class="{active:haschoose[index]}" :num="index" :id="item.id" @click="choose(index,item.id)" ref="menuItem" :src='item.carImages' />
              </i>
            </swiper-slide>
          </swiper>
          <span @click="gonext" class="down"></span>
        </div>
      </div>
      <div v-if="qr_show" class="qr_code">
        <a @click="close" href="javascript:;" class="cclose"></a>
        <img src="../../assets/car_gongzhonghao.png" alt="" class="qr"/>
        <p>扫码即刻体验</p>
      </div>
      <div class="brand">
        <p class="brandname1">BRAND</p>
        <p class="brandname2">品牌</p>
        <img src="../../assets/car_logos.png">
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from "../../../node_modules/vue-awesome-swiper/swiper";
  export default {
    components: {Swiper},
    data(){
          return{
            swiperOption: {
              notNextTick: true,
              autoplay: 0,
              direction : 'horizontal',
              grabCursor : true,
              setWrapperSize :true,
              autoHeight: true,
              slidesPerView : 4,
              paginationClickable :false,
              observeParents:true,
              debugger: true,
              onTransitionStart(swiper){},
            },
            haschoose:[1],
            cars:[],
            currentcar:{car:''},
            currentcarimg:'',
            qr_show:true,
          }
      },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created(){
      this.$ajax('https://www.huoqiu.cn/car/cars')
        .then((resolve)=>{
          this.cars = resolve.data.cars;
          this.currentcarimg = this.cars[0].carImages;
          for(let i = 1;i<this.cars.length;i++){
            this.haschoose.push(0);
          }
        })
        .catch((err)=>console.log(err));

      this.$ajax('https://www.huoqiu.cn/car/carDetail?carId=14')
        .then((resolve)=>{this.currentcar = resolve.data;})
    },
    mounted() {
    },
    methods:{
      goprev:function(){
          this.swiper.slidePrev();
      },
      gonext:function(){
          this.swiper.slideNext();
      },
      choose:function(index,id){
          for(let i = 0;i<this.cars.length;i++){
            this.haschoose[i]=0;
          }
          this.$ajax.get('https://www.huoqiu.cn/car/carDetail?',{params:{carId:id}})
            .then(resolve => {this.currentcar = resolve.data;this.currentcarimg = this.cars[index].carImages})
            .catch(resolve =>{console.log(resolve)});
          this.haschoose[index] = 1;
//          console.log(this.$refs.menuItem[index].id)
      },
      close:function(){
          this.qr_show = false;
      }
    }
  }
</script>
<style>
  .banner {
    width: 100%;
    min-width: 1000px;
    height: 354px;
    background: url("../../assets/car_pc_banner.png") center center no-repeat;
  }
  .car-con{
    width: 100%;
    padding-top: 88px;
    margin: 0 auto;
  }
  .hot{
    text-align: center;
    height: 88px;
    color: #444444;
    text-align: center;
  }
  .hot p{
    height: 28px;
    font-size: 18px;
    font-weight: bold;
  }
  .hot span{
    display: block;
    font-size: 16px;
  }
  .intro{
    width: 1000px;
    font-size: 0;
    margin: auto;
  }
  .intro .right{
    vertical-align: top;
    width: 25%;
    display: inline-block;
    height: 504px;
    background-color: #404040;
  }
  .intro .left{
    width: 75%;
    font-size: 0;
    display: inline-block;
  }
  .intro .left img{
    width: 100%;
    height: 475px;
  }
  .p1{
    margin-top: 122px!important;
  }
  .right p{
    font-size: 14px;
    line-height: 37px;
    margin: 12px;
    border-bottom: 1px solid #626263;
  }
  .right p i {
    float: right;
    color: #e7e7e7;
  }
  .right p span{
    color: #a6a6a6;
  }
  .brand{
    color: #dadada;
    text-align: center;
    width: 100%;
    min-width: 1000px;
    height: 478px;
    box-sizing: border-box;
    padding-top: 88px;
    background-color: #2c2c2c;
  }
  .brandname1{
    height: 29px;
    font-size: 18px;
    font-weight: bold;
  }
  .brandname2{
    font-size: 16px;
    margin-bottom: 4em;
  }
  .car_name{
    margin-top: -30px;
    height: 62px;
    line-height: 62px;
    font-size: 18px;
    color: #202128;
    font-weight: bold;
  }
  .car_info{
    font-size: 16px;
    color: #6c7382;
    height: 92px;
  }
  .car_info_left{
    display: inline-block;
    width: 51.5%;
    height: 66px;
    border-right: 1px solid #dbdbdb;
    font-size: 14px;
    color: #6c7382;
  }
  .car_info_right{
    vertical-align: bottom;
    display: inline-block;
    width: 47.5%;
    height: 66px;
    font-size: 14px;
    color: #6c7382;
  }
  .car_info_left span{
    margin-top: 5px;
    display: inline-block;
  }
  .car_info_left p{
    margin-right: 4em;
    float: right;
    width: 370px;
    height: 66px;
    line-height: 24px;
    word-break: break-all;
  }
  .car_info_right span{
    vertical-align: bottom;
    display: inline-block;
    width: 100px;
    text-align: center;
    padding-top: 5px;
    box-sizing: border-box;
    height: 66px;
  }
  .car_info_right p {
    margin: 0 1em;
    vertical-align: top;
    display: inline-block;
  }
  .car_info_right p img{
    display: block;
    width: 35px;
    height: 35px;
  }
  .car_info_right p i {
    display: block;
    text-align: center;
    line-height: 2em;
  }
  .car_list{
    width: 100%;
    height: 232px;
    box-sizing: border-box;
    padding-top: 18px;
    background-color: #ececec;
  }
  .car_list .box{
    user-select: none;
    width: 1000px;
    margin: auto;
  }
  .box span{
    vertical-align: top;
    display: inline-block;
    width: 35px;
    height: 128px;
    cursor: pointer;
  }
  .up{
    background: url("../../assets/car_left_jiantou.png");
    background-repeat: no-repeat;
    background-position: left center;
  }
  .up:hover {
    background: url("../../assets/car_left_jiantou1.png");
    background-repeat: no-repeat;
    background-position: left center;
  }
  .down{
    background: url("../../assets/car_right_jiantou.png");
    background-repeat: no-repeat;
    background-position: right center;
  }
  .down:hover {
    background: url("../../assets/car_right_jiantou1.png");
    background-repeat: no-repeat;
    background-position: right center;
  }
  .swip1{
    display: inline-block;
    width: 920px;
    height: 200px;
  }
  .swip2{
  }
  .swip2 i{
    box-shadow:1px 7px 7px rgba(0,0,0,0.1);
    background: white;
    width: 207px;
    height: 128px;
    margin: auto;
    display: block;
  }
  .swip2 i .active{
    width: 92%;
    margin: auto;
    display: block;
    padding-top: 6px;
  }
  .swip2 i img:hover{
    width: 92%;
    margin: auto;
    display: block;
    padding-top: 6px;
  }
  .qr_code{
    z-index: 100;
    position: fixed;
    right:18%;
    top:30%;
    width:173px;
    height:234px;
    background-color: #333333;
  }
  .qr_code .cclose{
    position: absolute;
    top:15px;
    right:15px;
    width:14px;
    height:14px;
    background:url("../../assets/car_close.png") no-repeat;
    background-size:100% 100%;
  }
  .qr_code .qr{
    display:block;
    margin:45px auto 13px;
    width:128px;
    height:128px;
  }
  .qr_code p{
    font-size:14px;
    color:#f4f4f4;
    text-align: center;
  }
</style>
