<template>
<div style="font-family: PingFangSC-Medium, sans-serif;background:#0f1923;border:0px solid #3d454d">
    <!-- <div v-if="iswx" class="t1">
        <img class="logo" src="../../assets/app/wlogo.png">
    </div> -->
    <p style="height:0.5rem"></p>
    <p class="ti">基本信息</p>
    <img class="abb" src="../../assets/app/abb.png">
    <p class="de">WAGONS超跑俱乐部是国内首家专业超跑运营商，旗舰店坐落在京城高端商区当代MOMA商务中心，在库运营超跑涵盖世界各主流顶级品牌，专为精英人士及社群提供奢享级用车服务。</p>
    <div style="position:relative;padding-bottom: 0.3rem;border-bottom: 1px solid #273039;width: 7.1rem;margin: 0 auto .4rem auto;">
        <div style="bottom:0px" class="swiper-pagination"></div>     
        <swiper class="sw1" :options="swiperOption" ref="mySwiper">
            <swiper-slide class="sw2" >
                <img class="sw3" src="../../assets/app/abll.png" />
            </swiper-slide>
            <swiper-slide class="sw2">
                <img class="sw3" src="../../assets/app/abl.png" />
            </swiper-slide>
        </swiper>
    </div>
    <p class="ti">业务介绍</p>
    <img class="abb" src="../../assets/app/abc.png">   
    <p class="co"><span>自驾出行</span>-拉风、炸街、稀有车型，WAGONS豪华车型矩阵让追求极致驾驭的您时刻拥有新鲜体验</p>
    <p class="co"><span>商务接待</span>-劳斯莱斯、宾利超豪华座驾接驾，让尊贵的您和尊贵的客人坐享极致奢华。</p>
    <p class="co"><span>婚庆静展</span>-豪华婚礼、高端展示，WAGONS顶级豪车成就您的非凡场面。</p>
    <p class="co"><span>影视拍摄</span>-提供各类影视拍摄用车，车型丰富，满足多场景用车需求。</p>
    <p class="co"><span>广告服务</span>-超跑炫目的车身，永远是广告主渴求的黄金位置。</p>
    <P class="co"><span>豪车托管</span>-WAGNOS通过专业细致的爱车管理服务，为您发掘爱车的最大价值。</P>
    <P class="co"><span>专业修理维护</span>-WAGONS汽车维护中心依据您对爱车的基本保养和安全要求，为您定制可靠专业的维护修理服务。</P>
    <div class="bo"></div>
    <p class="ti">车辆托管</p>
    <img class="abb" src="../../assets/app/abt.png">   
    <p class="de">您可以将闲置的跑车托管到WAGONS平台上运营，我们会与您协商具体运营模式并向您支付相应费用。</p> 
    <p @click="sub" style="margin-bottom: 0.38rem;" class="but">申请托管</p>   
    <img style="width: 5.22rem;height: 0.59rem;display: block;margin: auto;margin-bottom:0.78rem;margin-top: 0.74rem;" src="../../assets/app/blogo.png">
    <p style="width:100%;height:1px"></p>
</div>
</template>

<script>
require('swiper/dist/css/swiper.css');
import { swiper, swiperSlide } from "vue-awesome-swiper";
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
                _html += '<li style="margin:6px;background:#fed945;display:inline-block;width:5%;height:4px;"></li>';
              }else{
                _html += '<li style="margin:6px;background:#575e65;display:inline-block;width:5%;height:4px;"></li>';
              }
            }
            return _html
              },
              loop : true,
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
            isapp:""
        }
    },
    created(){
        //判断是否是wagonsapp
        if(/from_wagons/.test(navigator.userAgent.toLowerCase())){
            this.isapp = true            
        }else{
            this.isapp = false
        }
    },
    methods:{
        sub(){
            if(this.isapp){
                window.Wground.trusteeship();
            }else{
                this.$router.push("/wx/collocation")
            }
        }
    }
}
</script>

<style>
.but{
    width: 7.1rem;
    height: 0.72rem;
    margin: auto;
    background: #fed945;
    font-size: 0.26rem;
    color: #333333;
    text-align: center;
    line-height: 0.7rem;
    margin-top: 0rem;
    border-radius: 0.04rem;
}
.bo{
    border-bottom: 1px solid #273039;
    width: 7.1rem;
    margin: auto;
    margin-top: 0.3rem;
    margin-bottom: 0.4rem;
}
.co span{
    color: #fed945;
}
.co{
    font-size: 0.24rem;
    color: #999999;
    width: 7.1rem;
    display: block;
    margin: auto;
    line-height: 0.4rem;
}
.sw3{
    width: 100%;
}
.sw2{
    width: 7.1rem;
}
.sw1{
    width: 7.1rem;
    display: block;
    margin: auto;
}
.de{
    display: block;
    width: 7.1rem;
    font-size: 0.24rem;
    color: #999999;
    margin: auto;
    line-height: 0.4rem;
    margin-bottom: 0.68rem;
}
.abb{
    display: block;
    width: 7.1rem;
    height: 2rem;
    margin: auto;
    margin-top: 0.16rem;
    margin-bottom: 0.34rem;
}
.ti{
    color: #ffffff;
    font-size: 0.24rem;
    border-left: 2px solid #fed945;
    text-indent: 0.16rem;
    display: block;
    width: 7.1rem;
    margin: auto;
    /* margin-top: 0.5rem; */
}

.t1 .kefu{
    width: 0.4rem;
    float: right;
    margin-top: 0.2rem;
    margin-right: 0.3rem;
}
.t1 .logo{
    width: 2.92rem;
    margin: auto;
    display:block;
}
.t1>p{
    color: #ffffff;
    font-size: 0.28rem;
    display: inline-block;
    vertical-align: top;
    margin-top: 0.25rem;
    float: left;
    margin-left: 0.3rem;
}
.t1{
    height: 0.6rem;
    width: 100%;
    padding-top: 0.2rem;
    border-bottom: 1px solid #273039;
}
</style>
