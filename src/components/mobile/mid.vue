<template>
<div style="position: absolute;width:100%;height:100%">
    <div style="background:#ffffff;height:100%">
        <div class="carimg">
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
</div>
</template>

<script>
require('./rem.js')(window,document)
export default {
    data(){
        return{
            carId:""
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
    margin-top: 0.2rem;
    margin-bottom: 0.4rem;
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.8rem;
}
.carimg .img1{
    width: 7.2rem;
    height: auto;
    /* position: absolute; */
    left: 0;
    top: 0;
    margin: auto;
    display: block;
}
.carimg{
    width: 100%;
    display: block;
    font-size: 0;
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
