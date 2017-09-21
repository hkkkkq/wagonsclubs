<template>
<div style="font-size:0;background: rgba(0,0,0,0.6);">
    <div class="head">
        <a @click="goback" class="goback"></a>
        <img class="nl" src="../../assets/newlogo.png">
        <a v-if="isNew" @click="share" class="share"></a>
         <!--  -->
    </div>
    <div :key="index" v-for="(item,index) in imgs" class="co"><img v-once @click="tod(index)" :src="item"></div>
</div>
</template>

<script>
require('./rem.js')(window,document)
export default {
    data(){
        return{
            isNew:false,
            imgs:[
                require("../../assets/njd1_02.png"),
                require("../../assets/njd2_02.png"),
                require("../../assets/njd3_02.jpg"),
                require("../../assets/njd4_02.jpg"),
                require("../../assets/njd5_02.jpg"),
                require("../../assets/njd6_02.jpg"),
                require("../../assets/njd7_02.jpg"),
                require("../../assets/njd8_02.jpg"),
                require("../../assets/njd9_02.jpg"),
                require("../../assets/njd10_02.jpg"),
                require("../../assets/njd11_02.jpg"),
                require("../../assets/njd12_02.jpg"),
                require("../../assets/njd13_02.jpg"),
                require("../../assets/njd14_02.jpg"),
            ]
        }
    },
    created(){
            // 
        if(this.$route.query.isNewApp){
            this.isNew = true;
            window.ground.hideHeader()
        }



        this.$ajax(BASE_URL+'/car/weixinShare?url='+escape(location.href))
        .then((res)=>{
            wx.config({
                debug: false,
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
            var locationHref = window.location.href;
            wx.ready(function () {
                wx.onMenuShareTimeline({
                    title: 'WAGONS光速超跑',
                    link: locationHref,
                    imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg'
                });
                wx.onMenuShareAppMessage({
                    title: 'WAGONS光速超跑',
                    desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                    link: locationHref,
                    imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg'
                });
                wx.onMenuShareQQ({
                    title: 'WAGONS光速超跑',
                    desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                    link: locationHref,
                    imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg'
                });
                wx.onMenuShareWeibo({
                    title: 'WAGONS光速超跑',
                    desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                    link: locationHref,
                    imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg'
                });
            });
            }).catch((res)=>{alert(res)})
    },
    methods:{
        tod(n){
            if((this.$route.query.isNewApp)&&(/iPhone|iPod/i.test(navigator.userAgent))){
                window.ground.showHeader()       
                setTimeout(function() {
                    switch(n){
                        case 1:
                        location.href = 'http://mp.weixin.qq.com/s/P7xBsD02noQSgwwTGPOLgA'
                        break;
                        case 2:
                        location.href = 'http://mp.weixin.qq.com/s/yVR6zMW0UFJgGtxA8cIzyg'
                        break;
                        case 3:
                        location.href = 'http://mp.weixin.qq.com/s/Yjlb_TGTf3klkoAm9GdR0A'
                        break;
                        case 4:
                        location.href = 'http://mp.weixin.qq.com/s/QOeH8Z13HrcczR2Y1HdmVQ'
                        break;
                        case 5:
                        location.href = 'http://mp.weixin.qq.com/s/W82Q3ihluAgcg05iFRgpPA'
                        break;
                        case 6:
                        location.href = 'http://mp.weixin.qq.com/s/6lOwMpRaq5jdPJqXYPXp3A'
                        break;
                        case 7:
                        location.href = 'http://mp.weixin.qq.com/s/54ppUt-SQF8LtUXiHfk-Qg'
                        break;
                        case 8:
                        location.href = 'http://mp.weixin.qq.com/s/54ppUt-SQF8LtUXiHfk-Qg'
                        break;
                        case 9:
                        location.href = 'http://mp.weixin.qq.com/s/54ppUt-SQF8LtUXiHfk-Qg'
                        break;
                        case 10:
                        location.href = 'http://mp.weixin.qq.com/s/54ppUt-SQF8LtUXiHfk-Qg'
                        break;
                        case 11:
                        location.href = 'http://mp.weixin.qq.com/s/54ppUt-SQF8LtUXiHfk-Qg'
                        break;
                        case 12:
                        location.href = 'http://mp.weixin.qq.com/s/54ppUt-SQF8LtUXiHfk-Qg'
                        break;
                    }
                }, 1000);     
            }
            switch(n){
                case 1:
                location.href = 'http://mp.weixin.qq.com/s/P7xBsD02noQSgwwTGPOLgA'
                break;
                case 2:
                location.href = 'http://mp.weixin.qq.com/s/yVR6zMW0UFJgGtxA8cIzyg'
                break;
                case 3:
                location.href = 'http://mp.weixin.qq.com/s/Yjlb_TGTf3klkoAm9GdR0A'
                break;
                case 4:
                location.href = 'http://mp.weixin.qq.com/s/QOeH8Z13HrcczR2Y1HdmVQ'
                break;
                case 5:
                location.href = 'http://mp.weixin.qq.com/s/W82Q3ihluAgcg05iFRgpPA'
                break;
                case 6:
                location.href = 'http://mp.weixin.qq.com/s/6lOwMpRaq5jdPJqXYPXp3A'
                break;
                case 7:
                location.href = 'http://mp.weixin.qq.com/s/54ppUt-SQF8LtUXiHfk-Qg'
                break;
                case 8:
                location.href = 'http://mp.weixin.qq.com/s/54ppUt-SQF8LtUXiHfk-Qg'
                break;
                case 9:
                location.href = 'http://mp.weixin.qq.com/s/54ppUt-SQF8LtUXiHfk-Qg'
                break;
                case 10:
                location.href = 'http://mp.weixin.qq.com/s/54ppUt-SQF8LtUXiHfk-Qg'
                break;
                case 11:
                location.href = 'http://mp.weixin.qq.com/s/54ppUt-SQF8LtUXiHfk-Qg'
                break;
                case 12:
                location.href = 'http://mp.weixin.qq.com/s/54ppUt-SQF8LtUXiHfk-Qg'
                break;
            }
        },
        share(){
            window.ground.share('WAGONS光速超跑', location.href.replace(/true/g,"false"), 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg', 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务','0,1,2,3');
        },
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.nl{
    width: 2.86rem;
    height: .28rem;
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
.co img{
    width: 100%;
    height: auto;
}
.co{

}
.share{
    position: absolute;
    top: 0.4rem;
    margin-right: 0.3rem;
    display: block;
    width: 0.28rem;
    height: 0.34rem;
    z-index: 1000000;
    background-image: url('../../assets/share.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    right: 0;
}
.goback {
    position: absolute;
    left: 0.06rem;
    top: 0.22rem;
    width: 0.8rem;
    height: 0.8rem;
    background: url("../../assets/m-goback.png") no-repeat center center;
    background-size: 0.3rem 0.3rem;
}
.head{
    width: 100%;
    height: 1.29rem;
    background: #000000;
    font-size: 0.36rem;
    color: #ffffff;
    text-align: center;
    line-height: 1.29rem;
}

</style>
