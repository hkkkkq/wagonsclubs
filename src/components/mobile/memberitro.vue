<template>
<div>
    <div class="head_xz">
        <a @click="goback" class="goback" id="goback"></a>
        <p>会员说明</p>    
                    <span v-if="isNew" @click="call" class="share"></span>

        <div class="tab">
            <span @click="select(1)" class="no1"><b :class="{active:show1}">会员权益</b></span>
            <span @click="select(2)" class="no2"><b :class="{active:show2}">如何加入</b></span>
            <i class="line"></i>
        </div>
        <div class="none_box"></div>
    </div>
    <div class="empty"></div>
    <m-member v-if="show1"></m-member>
    <m-howjoin v-else></m-howjoin>
</div>
</template>
<script>
require('./rem.js')(window,document);
import memberright from './memberright.vue'
import howjoin from './howjoin.vue'
export default {
    data(){
        return{
            show1:true,
            show2:false
        }
    },
    computed:{
        isNew(){ return this.$store.state.isNewApp}
    },
    created(){
        window.scrollTo(0,0);
        this.$ajax(BASE_URL+'/car/weixinShare')
        .then((res)=>{
            wx.config({
                        debug: false,
                        appId: res.data.sign.appId,
                        timestamp: res.data.sign.timestamp,
                        nonceStr: res.data.sign.nonceStr,
                        signature: res.data.sign.signature,
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
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagon_logo.png'
                        });

                        wx.onMenuShareAppMessage({
                            title: 'WAGONS超跑俱乐部',
                            desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagon_logo.png'
                        });

                        wx.onMenuShareQQ({
                            title: 'WAGONS超跑俱乐部',
                            desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagon_logo.png'
                        });

                        wx.onMenuShareWeibo({
                            title: 'WAGONS超跑俱乐部',
                            desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagon_logo.png'
                        });
                    });
            console.log(window.ground)
            })
    },
    methods:{
        goback:function(){
            this.$router.go(-1);
        },
        select:function(i){
            if(i == 1){this.show1 = true;this.show2 = false}
            if(i == 2){this.show2 = true;this.show1 = false}
        },
        call(command) {
            window.ground.share('WAGONS超跑俱乐部', location.href.replace(/true/g,"false"), '', 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务','0,1,2,3');
            // try {
            //     nativeShare.call(command)
            // } catch (err) {
            //     // 如果不支持，你可以在这里做降级处理
            //     alert(err.message)
            // }
        }
    },
    components:{
        'm-member':memberright,
        'm-howjoin':howjoin
    }
}
</script>
<style scoped>
.share{
    position: relative;
    top: -0.4rem;
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
.empty {
    width: 100%;
    height: 2.28rem;
}
.none_box {
    position:relative;
    top:-0.1rem;
    width: 100%;
    height: 0.1rem;
    padding-bottom: 2px;
    background-color: #f6f6f6;
}
.tab .line {
    position: absolute;
    top: 0.36rem;
    left: 50%;
    width: 1px;
    height: 0.27rem;
    background-color: #eceef1;
}
.tab .active {
    color: #06060b;
    border-bottom: 2px solid #ffd320;
}
.tab span b {
    display: inline-block;
    height: 0.91rem;
    box-sizing: border-box;
}
.tab span {
    float: left;
    width: 50%;
    text-align: center;
    height: 0.91rem;
    font-size: 0.3rem;
    line-height: 0.91rem;
    color: #686868;
}
.tab {
    position: relative;
    width: 100%;
    top:-0.1rem;
    height: 0.91rem;
    overflow: hidden;
    background-color: #fff;
}
.head_xz p {
    text-align: center;
    width: 3.08rem;
    height: 0.4rem;
    font-size: 0.36rem;
    color: #fff;
    margin: 0.17rem 0 0 2.2rem;
}
.head_xz .goback {
    position: absolute;
    left: 0.06rem;
    top: 0.37rem;
    width: 0.8rem;
    height: 0.8rem;
    background: url('../../assets/m-goback.png') no-repeat center center;
    background-size: 0.3rem 0.3rem;
}
.head_xz {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 0.84rem;
    padding-top: 0.43rem;
    background-color: #06060b;
}
</style>
