<template>
<div style="font-size:0">
    <div v-if="isNew" class="head">
        <a @click="goback" class="goback"></a>
        你就是焦点
        <a @click="share" class="share"></a>
    </div>
    <div class="co">
        <img src="">
    </div>
    <a href="http://mp.weixin.qq.com/s/54ppUt-SQF8LtUXiHfk-Qg">list1</a>
    <a href="http://mp.weixin.qq.com/s/yVR6zMW0UFJgGtxA8cIzyg">list1</a>
    <a href="http://mp.weixin.qq.com/s/Yjlb_TGTf3klkoAm9GdR0A">list1</a>
    <a href="http://mp.weixin.qq.com/s/54ppUt-SQF8LtUXiHfk-Qg">list1</a>
</div>
</template>

<script>
require('./rem.js')(window,document)
export default {
    data(){
        return{
            isNew:false
        }
    },
    created(){
        if(this.$route.query.isNewApp){
            this.isNew = true;
            window.ground.hideHeader()
        }
    },
    methods:{
        share(){
            window.ground.share('WAGONS光速超跑', location.href.replace(/true/g,"false"), 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg', 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务','0,1,2,3');
        },
        goback(){
            window.ground.close()
        }
    }
}
</script>

<style scoped>
.co{
    font-size: 0;
    width: 100%;
    height: auto;
}
.share{
    position: absolute;
    top: 0.4rem;
    margin-right: 0.3rem;
    display: block;
    width: 0.35rem;
    height: 0.35rem;
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
