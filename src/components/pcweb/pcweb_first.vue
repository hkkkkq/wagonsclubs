<template>
  <div>
    <div class="banner"></div>
    <div class="dongtai">
      <div class="con">
        <span class="cons"></span><p class="conp">最新动态</p>
        <p style="height: 24px;"></p>
        <div style="font-size:0">
          <div @mouseenter="min(1)" @mouseleave="mout(1)" @click='goar(1)' class="f1">
            <div style="height: 234px;width: 318px;padding: 0;margin: 0;display:-webkit-flex;display:flex">
              <img src="../../assets/news1.png" />
          <transition name="fade">
              
              <h4 v-if="mask1" class="mask">
                光速超跑，落地京城
              </h4>
          </transition>
            </div>
          <h1>WAGONS光速超跑落地京城 引领高端出</h1>
          <div>诸如兰博基尼、法拉利的超级跑车一直以来都处在汽车消费金字塔的最尖端，即便是很多......</div>
        </div>
        <div @mouseenter="min(2)" @mouseleave="mout(2)" @click='goar(2)' style="margin: 0 22px;" class="f1">
            <div style="height: 234px;width: 318px;padding: 0;margin: 0;display:-webkit-flex;display:flex">
          <img src="../../assets/nn21.jpg" />
          <transition name="fade">
          
              <h4 v-if="mask2" class="mask">
                盛夏七月，品鉴试驾
              </h4>
          </transition>
            </div>
          <h1>WAGONS光速超跑举办首次高端试驾品</h1>
          <div>盛夏7月，WAGONS光速超跑在北京当代MOMA商务中心WAGONS俱乐部举行了首次......</div>
        </div>
        <div @mouseenter="min(3)" @mouseleave="mout(3)" @click='goar(3)' class="f1">
            <div style="height: 234px;width: 318px;padding: 0;margin: 0;display:-webkit-flex;display:flex">
          <img src="../../assets/news2.jpg" />
          <transition name="fade">
              <h4 v-if="mask3" class="mask">
                为爱提速，超跑动心  
              </h4>        
          </transition>  
            </div>
          <h1>为爱提速、超跑动心 | WAGONS为留守</h1>
          <div>赠人玫瑰之手，经久犹有余香。WAGONS光速超跑通过当代MOMA了解到有这么一群......</div>
        </div>
        </div>
      </div>  
    </div>      
    <div class="car-con">
      <div style="width: 1000px;margin: auto;">
      <span class="cons"></span><p class="conp">热门车型</p>        
      </div>
        <p style="height: 24px;"></p>
      <div class="intro">
        <div class="left">
          <img :src="currentcar.car.carImages">
        </div>
        <div class="right">
          <p class="name">{{currentcar.car.carName}}</p>
          <p style="margin-top: 14px;    margin-bottom: 20px;">
            <img style="margin: 0 10px 0 0;" v-for="i in currentcar.car.starLevel" src='../../assets/xingxing.png'>
          </p>
          <p class="chexing">车型信息</p>
          <span class="ddd">
            <img src="../../assets/zuowei.png" />
            <p>{{currentcar.car.carSeats}}</p>
          </span>
           <span v-if="currentcar.car.gearLevel == 2"  class="ddd">
            <img src="../../assets/zidong.png" />
            <p>自动档</p>
          </span>
           <span v-else class="ddd">
            <img src="../../assets/shoudong.png" />
            <p>手动挡</p>
          </span>
           <span class="ddd">
            <img src="../../assets/yanse.png" />
            <p>{{currentcar.car.carColor}}</p>
          </span>
          <span v-if="currentcar.car.convertible==1" class="ddd">
            <img src="../../assets/changpeng.png" />
            <p>敞篷</p>
          </span>
          <span v-if="currentcar.car.convertible==2" class="ddd">
            <img src="../../assets/changpeng.png" />
            <p>硬顶敞篷</p>
          </span>
          <span v-if="currentcar.car.convertible==3" class="ddd">
            <img src="../../assets/changpeng.png" />
            <p>软顶敞篷</p>
          </span>
          <span class="ddd">
            <img src="../../assets/pailiang.png" />
            <p>{{currentcar.car.carEngineDisplacement}}</p>
          </span>
          <span v-if="currentcar.car.plateNumberBj" class="ddd">
            <img src="../../assets/bj.png" />
            <p>京牌</p>
          </span>
          <span v-else class="ddd">
            <img src="../../assets/feibj.png" />
            <p>非京牌</p>
          </span>
          <p style="margin-top:26px;"></p>
          <p class="chexing">本车特色</p>       
          <p class="ddes">{{currentcar.car.carDesc}}</p>  
          <div class="ppri">
            <h1>
              {{currentcar.memberNick5}}价:
            </h1>
            <h2><span>{{currentcar.level5?currentcar.level5:''}}</span> 元/天</h2>
          </div> 
        </div>
      </div>
      <div class="car_list">
        <div class="box">
          <span @click="goprev" class="up"></span>
          <swiper class="swip1" :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in cars" :key="item.id"  class="swip2">
              <i :class="{shadow:haschoose[index]}">
                <img :class="{active:haschoose[index]}" :num="index" :id="item.id" @click="choose(index,item.id)" ref="menuItem" :src='item.carImages' />
              </i>
            </swiper-slide>
          </swiper>
          <span @click="gonext" class="down"></span>
        </div>
      </div>
      <div v-if="qr_show" class="qr_code">
        <a @click="closeqr" href="javascript:;" class="cclose"></a>
        <img src="../../assets/car_gongzhonghao.png" alt="" class="qr"/>
        <p>扫码即刻体验</p>
      </div>
      <div class="brand">
        <span style="position: relative;left: -461px;background-color:white" class="cons"></span><p style="position: relative;left: -461px;color:white" class="conp">品牌一览</p>   
        <p></p>
        <!-- <p class="brandname1">BRAND</p> -->
        <!-- <p class="brandname2">品牌</p> -->
        <img src="../../assets/car_logos.png">
      </div>
    </div>
  </div>
</template>
<script>
require('swiper/dist/css/swiper.css')
  // import {swiper,swiperSlide }  from "vue-awesome-swiper";
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    // components: {swiper,swiperSlide},
      components: {
    swiper,
    swiperSlide
  },
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
              // onTransitionStart(swiper){},
            },
            haschoose:[1],
            cars:[],
            currentcar:{car:''},
            currentcarimg:'',
            qr_show:true,
            firstid:'',
            mask1:false,
            mask2:false,
            mask3:false
          }
      },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },

    created(){
      this.$ajax(BASE_URL+'/car/cars')
        .then((resolve)=>{
          let firstid
          this.cars = resolve.data.data.cars;
          firstid = resolve.data.data.cars[0].id;

          this.$ajax(BASE_URL+'/car/carDetail?carId='+firstid)
          .then((resolve)=>{
            this.currentcar = resolve.data.data;
            console.log(this.currentcar)
          })

          for(let i = 1;i<this.cars.length;i++){
            this.haschoose.push(0);
          }
        })
        .catch((err)=>console.log(err));

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
          this.$ajax.get(BASE_URL+'/car/carDetail?',{params:{carId:id}})
            .then(resolve => {
                this.currentcar = resolve.data.data;
            })
            .catch(resolve =>{console.log(resolve)});
          this.haschoose[index] = 1;
      },
      closeqr:function(){
          this.qr_show = false;
      },
      goar(n){
        this.$router.push('/article/'+n)
      },
      min(n){
        if(n==1){this.mask1 = true} 
        if(n==2){this.mask2 = true} 
        if(n==3){this.mask3 = true} 
      },
      mout(n){
        if(n==1){this.mask1 = false} 
        if(n==2){this.mask2 = false} 
        if(n==3){this.mask3 = false} 
      }
    }
  }
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
.ppri h1{
color: white;
    font-size: 14px;
    width: 80px;
    display: inline-block;
        margin-top: 30px;
}
.ppri h2{
    color: white;
    float: right;
    font-size: 12px;
    display: inline-block;
    position: relative;
    top: 6px;
    margin-right: 10px;
    margin-top: 21px;

}
.ppri h2 span{
  font-size: 24px;
  color: #ffeb61;
  font-weight: bolder;
  letter-spacing: 1px;
}
.ppri{
  border-top: 1px solid #8e8e8e;
}
.mask{
    position: absolute;
    background: rgba(0,0,0,0.8);
    width: 318px;
    height: 234px;
    text-align: center;
    color: #ffffff;
    font-size: 18px;
    line-height: 231px;
}
.ddes{
  font-size: 12px;
    color: #bababa;
    width: 204px;
    height: 48px;
    padding-top: 12px;
    padding-bottom: 20px;
    line-height: 20px;
    margin: auto;
    /* letter-spacing: -1px; */
}
.ddd img{
    width: 70%;
    margin: auto;
    display: block;
}
.ddd p {
      font-size: 12px;
    text-align: center;
    color: #8e8e8e;
    margin-top: 11px;
}
.ddd{
  margin-top: 10px;
display: inline-block;
    width: 53px;
    height: 56px;
}
.chexing{
  padding-bottom: 10px;
  color: #8e8e8e;
  font-size: 14px;
  border-bottom: 1px solid #8e8e8e;
}
.right .name{
  font-size: 22px;
  color: white;
  white-space: nowrap;
}
.f1 h1{
width: 318px;
    background: white;
    /* font-weight: bolder; */
    font-size: 16px;
    padding-left: 0px;
    text-indent: 10px;
    border-bottom: 3px solid #f7f7f7;
    padding-top: 4px;
    padding-bottom: 6px;
    height: 22px;
    line-height: 25px;
} 
.f1 div{
    width: 298px;
    background: white;
    height: 40px;
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    line-height: 19px;
    color: #747474;
} 
.f1{
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  position: relative;
}
.f1 img{
    width: 318px;
    height: 100%;
    display: block;
    margin: auto;
}
/* .f1 img:hover{
    width: 300px;
    height: 220px;
    display: block;
    margin: auto;
} */
.cons{
    display: inline-block;
    width: 2px;
    height: 12px;
    background-color: black;
}
.conp{
font-size: 18px;
    color: black;
    display: inline-block;
    margin-left: 10px;
}
  .dongtai{
    display: block;
    /* font-size: 0; */
    width: 100%;
    background: #f5f5f5; 
    padding-top: 38px;
    padding-bottom: 30px;

  }
  .dongtai .con{
    display: block;
    width: 1000px;
    margin: auto;
  }
  .banner {
    width: 100%;
    min-width: 1000px;
    height: 354px;
    background: url("../../assets/car_pc_banner.jpg") center center no-repeat;
  }
  .car-con{
    width: 100%;
    padding-top: 40px;
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
    width: 212px;
    display: inline-block;
    height: 450px;
    background-color: #272727;
    position: relative;
    top: -15px;
    padding-left: 36px;
    padding-top: 40px;
    padding-right: 28px;

  }
  .intro .left{
    width: 723px;
    font-size: 0;
    display: inline-block;
  }
  .intro .left img{
    width: 100%;
    height: 461px;
  }
  .p1{
    margin-top: 122px!important;
  }
  .brand{
    color: #dadada;
    text-align: center;
    width: 100%;
    min-width: 1000px;
    height: 400px;
    box-sizing: border-box;
    padding-top: 44px;
    background-color: #272727;
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
    width: 90px;
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
  }
  .car_list .box{
    user-select: none;
    overflow: hidden;
     width: 1100px; 
    margin: auto;
  }
  .box span{
    vertical-align: top;
    display: inline-block;
    width: 35px;
    height: 128px;
    cursor: pointer;
  }
  /* .swip1{
    overflow: hidden;
  }
  .swip2{
    float:left;
  } */
  .up{
    background: url("../../assets/car_left_jiantou.png");
    background-repeat: no-repeat;
    background-position: left center;
    float: left;
    margin-right: 15px;
    
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
    float: right;
  }
  .down:hover {
    background: url("../../assets/car_right_jiantou1.png");
    background-repeat: no-repeat;
    background-position: right center;
  }
  .swip1{
    display: inline-block;
    width: 1000px;
    height: 200px;
  }
  .swip2{
  }
  .swip2 i{
    background: white;
    width: 246px;
    height: 152px;
    margin: auto;
    display: block;
  }
  .swip2 i img{
        width: 100%;
        /* height: 100%; */
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
    right:0;
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
  .shadow{
    box-shadow:1px 7px 7px rgba(0,0,0,0.1);
  }
</style>
