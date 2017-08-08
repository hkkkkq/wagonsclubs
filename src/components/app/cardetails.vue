<template>
<div class="all">
    <video poster='poster' ref="video" autoplay="autoplay" controls="controls" :src="ss">
        您的浏览器不支持 video 标签。
    </video>   
    <div class="lunbo">
        <img @click="back" src="../../assets/app/back.png" class="back"></img>
        <img @click="share" src="../../assets/app/share.png" class="share"></img>
            <div class="swiper-pagination"></div>                       
        <swiper :options="swiperOption" class="ms" ref="mySwiper">
            <swiper-slide>
                 <img  src="../../assets/test02.png">                 
                 <img @click="pp" class="p11" src="../../assets/app/play.png" />
            </swiper-slide>
             <swiper-slide>
                 <img src="../../assets/test02.png"> 
            </swiper-slide>
            <swiper-slide>
                 <img src="../../assets/test02.png"> 
            </swiper-slide>
            <swiper-slide>
                 <img src="../../assets/test02.png"> 
            </swiper-slide>     
        </swiper>
       
    </div>
    <div class="it">
        <div>
            <span class="name">宝马</span>
            <span class="star">5星级车</span>
        </div>
        <div class="pr">
            <span class="level">白金会员</span>
            <span class="price"><span class="number">180000</span>／天</span>
        </div>
        <p class="des">自由驰骋间，久违的感觉重新浮现——那童年时代自由奔跑，感受嗖嗖风声的纯真快乐，那穿梭往来的汽车经过身边时发出的Zoom-Zoom声，今天我们把它从你心中唤醒了吗？</p>
         
        <span class="tips">2座</span>
        <span class="tips">7档双离合</span>
        <span class="tips">太空灰</span>
        <span class="tips">全球限量</span>
        <span class="tips">硬顶敞篷</span>
        <span class="tips">2座</span>
        <span class="tips">7档双离合</span>
        <span class="tips">太空灰</span>
        <span class="tips">全球限量</span>
        <span class="tips">硬顶敞篷</span>
    </div>
    <p class="but1"></p>
    <p @click="sub" class="but">
        立即预订
    </p>
</div>
</template>

<script>
import {swiper} from "vue-awesome-swiper"
require('swiper/dist/css/swiper.css')

export default {
    components: {swiper},
    data(){
        return{
            swiperOption: {
              notNextTick: true,
              autoplay: 3000,
              autoplayDisableOnInteraction:false,
              pagination : '.swiper-pagination',
              paginationType:'custom',
              paginationCustomRender:function(swiper, current, total){
                  var _html = '';
            for (var i = 1; i <= total; i++) {
              if (current == i) {
                _html += '<li style="background:#ffffff;display:inline-block;width:5px;height:5px;border-radius:5px"></li><i style="display:inline-block;width:14px"></i>';
              }else{
                _html += '<li style="opacity:0.3;background:#F3F3F3;display:inline-block;width:5px;height:5px;border-radius:50%"></li><i style="display:inline-block;width:14px"></i>';
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
            ss:"http://192.168.10.132:3000/vi.mp4",
            poster:"http://192.168.10.132:3000/poster.jpg",
            // isplay:false
        }
    },
    computed: {
    },
    methods:{
        full(element){
            if(element.requestFullscreen) {
                element.requestFullscreen();
             } else if(element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if(element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if(element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        },
        pp(){
            // if(this.isplay == false){
                // this.$refs.mySwiper.swiper.stopAutoplay()
                this.full(this.$refs.video)
                // this.isplay = true;
                this.$refs.video.play();
            // }else{
            //     // this.$refs.mySwiper.swiper.startAutoplay()
            //     this.isplay = false;
            //     // this.$refs.video.pause()
            // }
        },
        back(){
            alert("back")
        },
        share(){
            alert("share")
        },
        sub(){
            alert("sub")
        }
    }

}
</script>

<style scoped>
.ms{
    top: -1rem!important;
}
.p11{
    width: 0.9rem!important;
    height: 0.9rem!important;
    position: relative!important;
    display: block!important;
    margin: auto!important;
    top: -3rem!important;
}
.back{
    top:0.6rem;
    left: 0.3rem;
    z-index: 2;
    width: 0.45rem!important;
    height: 0.45rem!important;
    position: absolute;
}
.share{
    top:0.6rem;
    right: 0.3rem;
    z-index: 2;
    width: 0.45rem!important;
    height: 0.45rem!important;
    position: absolute;
}
video{
    display: block;
    width: 0;
    height: 0;
}
.but1{
    position: relative;
    bottom: 0;
    display: block;
    width: 100%;
    height: 0.98rem;
    color: #333333;
    text-align: center;
    font-size: 0.32rem;
}
.but{
    line-height: 1rem;
    position: fixed;
    bottom: 0;
    display: block;
    width: 100%;
    height: 0.98rem;
    color: #333333;
    text-align: center;
    background-color: #fed945;
    font-size: 0.32rem;
}
.tips{
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #444b52;
    font-size: 0.24rem;
    border-radius: 15px;
    color: #ffffff;
    margin-right: 0.2rem;
    display: inline-block;
    margin-bottom: 0.2rem;
}
.des{
    margin-top: 0.2rem;
    font-size: 0.24rem;
    line-height: 0.5rem;
    color: #ffffff;
    margin-bottom: 0.34rem;
}
.pr{
    margin-top: 0.32rem;
    padding-bottom: 0.32rem;
    border-bottom: 1px solid rgba(213,213,190,0.1);
}
.number{
    font-size: 0.5rem;
    color: #fed945;
}
.price{
    color: #fed945;
    font-size: 0.26rem;
}
.level{
    vertical-align: super;
    font-size: 0.18rem;
    padding-left: 10px;
    background-color: #fed945;
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    padding-right: 10px; 
    width: 1rem;
    height: 0.3rem;
    margin-right: 0.3rem;
}
.star{
    border-radius: 4px;
    padding-left: 6px;
    padding-right: 6px;
    border: 1px solid;
    font-size: 0.2rem;
    color: #ffffff;
    float: right;
    padding-top: 2px;
    padding-bottom: 2px;
}
.name{
    font-size: 0.3rem;
    color: #ffffff;
    line-height: 0.3rem;
}
.it{
    display: block;
    width: 92%;
    margin: auto;
    padding-top: 0.1rem;
    font-size: 0;
}
.all{
    min-height: 100%;
    background-image: url('../../assets/a_bj.png');
    background-repeat: repeat-y;
    background-size: 100% 100%;
}
.lunbo{
    height: 5.7rem;
    width: 100%;
    margin-bottom: 0.32rem;
}
.lunbo img{
    width: 100%;
    height: 100%;
}
.swiper-pagination{
    position: relative;
    top: 4.6rem;
}
.swiper-pagination-bullets span{
    background-color: white!important;
}
</style>
