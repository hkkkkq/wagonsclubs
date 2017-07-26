<template>
    <div>
        <div class="h5" v-if='ish5'>
            <m-head></m-head>
             <a @click="goback" class="goback" id="goback"></a>
            <img class="h5img" src="../assets/car_pc_404.png">
            <p>页面找不到了</p>
            <p style="padding-top:0.2rem">这里的跑车早被别人捷足先登啦</p>
            <div @click="tomobile" class="but">返回首页</div>
        </div>
        <div class="pc" v-else>
            <img class="pcimg" src="../assets/car_pc_404.png" /> 
            <p>页面找不到了</p>
            <p style="padding-top:20px">这里的跑车早被别人捷足先登啦</p>
        </div> 
    </div>  
</template>
<script>
require('./mobile/rem.js')(window,document)
import head from './mobile/header.vue'
export default {
    data(){
        return {
            ish5:'true'
        }
    },
    components:{
        'm-head':head
    },
    created(){
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            this.ish5 = true;
        } else {
            this.ish5 = false
            }
    },
    methods:{
        tomobile(){
            this.$router.push('/mobile')
        },
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.goback {
    z-index: 10000;
    position: absolute;
    left: 0.1rem;
    top: 0.33rem;
    width: 1rem;
    height: 0.8rem;
    background: url('../assets/m-goback.png') no-repeat center center;
    background-size: 0.3rem 0.3rem;
}
.h5 .but{
    position: absolute;
    bottom: 1.5rem;
    left: 3rem;
    margin: auto;
    border: 1px solid #009cff;
    display: block;
    width: 1.53rem;
    height: 0.54rem;
    font-size: 0.24rem;
    text-align: center;
    color: #009cff;
    border-radius: 0.5rem;
    line-height: 0.5rem;
}
.h5 p{
    position: relative;
    top:-1.3rem;
    color: #cacaca;
    text-align: center;
    font-size: 0.26rem;
}
.h5img{
    width:5.4rem; 
    display: block;
    margin: auto;
    margin-top: 57%;
}
.back{
    margin: auto;
    text-align: center;
    display: block;
}
.pc p{
    position: relative;
    top:-100px;
    color: #cacaca;
    text-align: center;
}
.pcimg{
    display: block;
    margin: auto;
    margin-top: 10%;
}
</style>
