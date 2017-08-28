<template>
<div class="all">
    <video poster='poster' ref="video" controls="controls" :src="car.videoUrl">
        您的浏览器不支持 video 标签。
    </video>   
    <div class="lunbo">
        <img @click="back" src="../../assets/app/back.png" class="back"></img>
        <img @click="share" src="../../assets/app/share.png" class="share"></img>
            <div class="swiper-pagination"></div>                       
        <swiper :options="swiperOption" class="msl" ref="mySwiper">
            <swiper-slide>
                 <img class="vimg"  v-lazy="car.videoImg">                 
                 <img @click="pp" class="p11" src="../../assets/app/play.png" />
            </swiper-slide>
            <swiper-slide :key="item" v-for='item in carimgs'>
                 <img v-lazy="item"> 
            </swiper-slide>
        </swiper>
    </div>
    <div class="it">
        <div>
            <span class="name">{{car.carName}}</span>
            <span class="star">{{car.starLevel}}星级车</span>
        </div>
        <div class="pr">
            <span class="level">{{memberNick5}}</span>
            <span class="price"><span class="number">{{level5}}</span>／天</span>
        </div>
        <p class="des">{{car.carDesc}}</p>
         
        <span class="tips">{{car.carSeats}}座</span>
        <span v-if="car.gearLevel == 2" class="tips">自动挡</span>
        <span v-else class="tips">手动挡</span>        
        <span class="tips">{{car.carColor}}</span>
        <span class="tips">{{car.carEngineDisplacement}}排量</span>
        <span v-if="car.convertible == 1" class="tips">敞篷</span>
        <span v-if="car.convertible == 2" class="tips">硬顶敞篷</span>
        <span v-if="car.convertible == 3" class="tips">软顶敞篷</span>
    </div>
    <p class="but1"></p>
    <p @click="sub" class="but">
        立即预订
    </p>
    <div v-show="at" class="al">
        <div>
        <img class="at" src="../../assets/app/xqt1.png">
        <div class="ms">
            {{mes}}
            <div @click="cl">我知道了</div>
        </div>
        </div>
        <img @click="cl" class="ax" src="../../assets/app/xx.png">
    </div>
</div>
</template>

<script>
import {swiper} from "vue-awesome-swiper"
require('swiper/dist/css/swiper.css')
var deurl = require('./url.js')
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
            // isplay:false
            memberNick5:'',
            level5:'',
            car:'',
            carimgs:'',
            carId:'',
            at:true,
            mes:''
        }
    },
    created(){
        this.carId = deurl(location).carId;
        this.$ajax(BASE_URL+'/car/leaseDetails?carId='+deurl(location).carId)
        .then((res)=>{
            console.log(res)
            if(res.data.success == true){
                this.memberNick5 = res.data.data.memberNick5;
                this.level5 = res.data.data.level5;
                this.car = res.data.data.car;
                this.carimgs = res.data.data.carImgShows;
            }else{
                alert('一定是后台小哥出现了什么问题！！！')
            }            
            })
        .catch(()=>{alert('一定是你的手机出了什么问题！！！')})
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
                this.full(this.$refs.video)
                this.$refs.video.play();
        },
        back(){
            window.Wground.goBack();
        },
        share(){
            window.Wground.share("wagons光速超跑",window.location.href,'','www',[0,1,2,3])
        },
        sub(){
            //获取token
            window.Wground.getApiToken(suc,fail)
            function suc(token){
                this.$ajax({
                    url:BASE_URL+"/car/memberType?carId="+this.carId,
                    method:'GET',
                    headers:{"token":token}
                    }).then((res)=>{
                        if(res.data.success == false){
                            alert('请求出错1');
                            }else{
                                if((res.data.data.type == 4)||(res.data.data.type == 5)){
                                    window.Wground.reservation(false)
                                }else if((res.data.data.type == 1)||(res.data.data.type == 2)||(res.data.data.type == 3)){
                                    window.Wground.reservation(true)
                                }else if(res.data.data.type == 7){
                                    this.ef("尊敬的用户，您尚未加入WAGONS光速超跑，请在“会员”页面查看详情并提交必要资料，等待评估完成后即可预定用车。")
                                    // alert('审核未通过')
                                }else if(res.data.data.type == 6){
                                    this.ef("尊敬的用户，您尚未加入WAGONS光速超跑，请在“会员”页面查看详情并提交必要资料，等待评估完成后即可预定用车。")
                                    // alert('会员审核中')
                                }else if(res.data.data.type == 8){
                                    alert('该车辆不可用')
                                }
                            }
                        })
                };
            function fail(err){alert(err,2)}
        },
        cl(){
            this.at = false
        },
        ef(msg){
            this.mes = msg
            this.at = true;
        }
    }

}
</script>

<style scoped>
.ms div{
    background: #fed945;
    height: 0.72rem;
    color: #333333;
    position: absolute;
    bottom: 0.32rem;
    width: 4.52rem;
    border-radius: 4px;
    font-size: 0.26rem;
    text-align: center;
    line-height: 0.7rem;
}
.ax{
    z-index: 1;
    width: 0.68rem;
    height: 0.68rem;
    display: block;
    margin: auto;
    margin-top: 2.24rem;
}
.ms{
    position: relative;
    background: #ffffff;
    font-size: 0.24rem;
    color: #7a7a7a;
    height: 2.76rem;
    width: 4.52rem;
    padding: 0.48rem 0.32rem 0 0.32rem;
    line-height: 0.4rem;
    display: block;
    margin: auto;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
.al .at{
    width: 5.17rem;
    margin: auto;
    display: block;
    margin-top: 3rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.yl{
    font-size: 0.3rem;
    color: #ffffff;
    position: absolute;
    top: 13em;
    left: 2.5rem;
}
.al{
    width: 100%;
    height: 100%;
    position: fixed;
    display: block;
    z-index: 1;
    top: 0;
    left: 0;
    font-size: 0;
    background: rgba(0,0,0,0.7);
}
.vimg{
    margin-top: 1rem;
}
.msl{
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
