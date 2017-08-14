<template>
<div>
    <div class="head">
    <a v-if="isNew" @click="goback" class="goback"></a>
        <img class="logo" src="../../assets/newlogo.png">
        <span v-if="isNew" @click="call" class="share"></span>
        
    </div>
</div>
</template>
<script>
require('./rem.js')(window,document)
// require('./ground.js')
import NativeShare from 'nativeshare'
// var wx = require('weixin-js-sdk');
export default {
    data(){
        return{
        }
    },
    computed:{
        isNew(){ return this.$store.state.isNewApp}
    },
    created(){
        this.$ajax(BASE_URL+'/car/isNewApp').then((res)=>{
            if(res.data.data.isNewApp){
                this.$store.commit('isNewApp')
            }})
        this.$ajax(BASE_URL+'/car/weixinShare?url='+escape(location.href))
        // http://www.wagonsclub.com/prd/car/weixinShare   BASE_URL+'/car/weixinShare'
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
                            title: 'WAGONS超跑俱乐部',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg'
                        });

                        wx.onMenuShareAppMessage({
                            title: 'WAGONS超跑俱乐部',
                            desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg'
                        });

                        wx.onMenuShareQQ({
                            title: 'WAGONS超跑俱乐部',
                            desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg'
                        });

                        wx.onMenuShareWeibo({
                            title: 'WAGONS超跑俱乐部',
                            desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg'
                        });
                    });
            }).catch((res)=>{alert(res)})
        var nativeShare = new NativeShare()        
        var shareData = {
            title: 'WAGONS光速超跑-专业超跑运营商',
            desc: '客服热线：4008-625-700，WAGONS光速超跑为您提供超跑租赁、高端商务接待、高端静展、高端婚庆等用车服务。汇聚兰博基尼、法拉利、奔驰、迈凯伦、保时捷、宝马、玛莎拉蒂、劳斯莱斯、宾利等世界顶级品牌,精心定制奢享级会员服务,让您尽享至尊驾驭体验。',
            // 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
            link: 'http://www.wagonsclub.com',
            icon: 'http://wap.wagonsclub.com/source/images/wagon_logo.png',
            // 不要过于依赖以下两个回调，很多浏览器是不支持的
            success: function() {
                alert('success')
            },
            fail: function() {
                alert('fail')
            }
        }
        nativeShare.setShareData(shareData)
    },
    methods:{
        goback:function(){
            // this.$router.go(-1)
            window.ground.close();
        },
        call(command) {
            window.ground.share('WAGONS超跑俱乐部', location.href.replace(/true/g,"false"), 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg', 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务','0,1,2,3');
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
.goback {
    position: absolute;
    left: 0.06rem;
    top: 0.37rem;
    width: 0.8rem;
    height: 0.8rem;
    background: url("../../assets/m-goback.png") no-repeat center center;
    background-size: 0.3rem 0.3rem;
}
.share{
    position: relative;
    top: -0.3rem;
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
.head-1{
    position: relative;
    height: 1.25rem;
    top: 0;
    left: 0;
}
.head{
    position: fixed;
    top: 0;
    left: 0;
     z-index: 1000; 
    width: 100%;
    height: 0.84rem;
    padding-top: 0.43rem;
    background-color: #06060b;
    box-sizing: content-box;
}
.head .logo{
    width: 2.86rem;
    height: 0.28rem;
    display: block;
    margin: 0.2rem 0 0 2.3rem;;
}
</style>
