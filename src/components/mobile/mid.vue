<template>
<div style="position: absolute;width:100%;height:100%">
    <div style="background:#ffffff;height:100%">
        <div v-if="suc == false">
            <div class="carimg">
                <p class="carname">
                    <img class="midal" src="../../assets/mida.jpg">
                    <span>兰博基尼阿拉斯加呢3213</span>
                    <img class="midar" src="../../assets/mida.jpg">
                </p>
                <p class="disp"><b>¥110000</b>/天</p>
                <p class="nodisp"><span>¥<b>101000</b>/天</span></p>
                <img class="img1" src="../../assets/miaosha.png">
                <div class="but">我要租车</div>
            </div>
            <div class="clear"></div>
            <div class="share">
                <p class='sp'><b>-</b>分享到朋友圈<b>-</b></p>
                <h1 class="sh">现在分享，就送满3000减500租车抵用券!</h1>
                <img src="../../assets/miaoshawx.png">
            </div>
        </div>
        <div class="success" v-else-if="suc == true">
            <img src="../../assets/migs.png">
            <span>您已成功获得500元Gift Card</span>
            <div style="position: absolute;left: 0;right: 0;top: 2rem;" class="clear"></div>            
        </div>
        
    </div>
</div>
</template>

<script>
require('./rem.js')(window,document)
export default {
    data(){
        return{
            carId:"",
            suc:true
        }
    },
    created(){
        // this.carId = this.$route.query.id;
        this.$ajax(BASE_URL+'/car/leaseDetails',{params:{'carId':this.$route.query.carId,'tt': Date.parse(new Date()) }})
            .then((res)=>{
                console.log(res.data)
            })

    }
}
</script>

<style scoped>
.success span{
    display: inline-block;
    width: 4rem;
    font-size: 0.28rem;
    color: #000000;
    vertical-align: top;
    margin-top: 0.95rem;
}
.success{
    width: 6rem;
    display: block;
    margin: auto;
}
.success img{
    width: 0.8rem;
    height: 0.8rem;
    margin-top: 0.66rem;
    display: inline-block;

}
.nodisp span {
    border-bottom: 2px solid #dab729;
    height: 0.25rem;
    display: inline-block;
}
.disp b{
    font-weight: bolder;
    font-size: 0.75rem;

}
.disp{
    font-size: 0.6rem;
    color: #000000;
    position: absolute;
    top: 6.4rem;
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
    text-align: right;
    width: 6rem;
    font-style: italic;
}
.nodisp{
    font-size: 0.5rem;
    position: absolute;
    color: #dab729;
    top: 7.2rem;
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
    display: block;
    text-align: right;
    width: 6.6rem;
    font-style: italic;
    /* border-bottom: 2px solid #dab729; */
}
.carname{
    position: absolute;
    top: 2.5rem;
    left: 0;
    right: 0;
    transform: rotate(-9.8deg);
    text-align: center;
}
.carname span{
    font-size: 0.23rem;
    color: #000000;
    position: relative;
    top: -0.05rem;
    font-weight: bolder;
    font-style: italic;
}
.midal{
    /* position: absolute; */
    /* top: 0; */
    z-index: 2;
    width: 0.21rem;
    height: 0.24rem;
    transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
    margin-right: 0.2rem;
}
.midar{
    /* position: absolute; */
    /* top: 0; */
    z-index: 2;    
    width: 0.21rem;
    height: 0.24rem;
    margin-left: 0.2rem;
    transform: rotate(-170deg);    
    -webkit-transform: rotate(-170deg);
}
.share img{
    margin: auto;
    display: block;
    width: 0.7rem;
    height: 0.7rem;
    margin-top: 0.45rem;
}
.sh{
    font-size: 0.3rem;
    margin-top: 0.32rem;
    color: #999999;
    text-align: center;
}
.sp b{
    color: #fed945;
    margin: 0 0.15rem;
}
.sp{
    font-size: 0.24rem;
    margin-top: 0.32rem;
    color: #000000;
    text-align: center;
}
.but{
    width: 80%;
    height: 0.84rem;
    background: #000000;
    color: #fed945;
    margin: auto;
    margin-bottom: 0.4rem;
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.8rem;
}
.carimg .img1{
    width: 7.2rem;
    height: 8rem;
    /* position: absolute; */
    left: 0;
    top: 0;
    margin: auto;
    z-index: 1;
    display: block;
}
.carimg{
    width: 100%;
    display: block;
    font-size: 0;
    position: relative;
}
.clear{
    height: 0.82%;
    width: 100%;
    background: #f6f6f6;
    
}
.share{
    width: 100%;
    display: block;
    height: auto;
}
</style>
