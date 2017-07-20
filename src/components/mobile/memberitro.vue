<template>
<div>
    <div class="head_xz">
        <a @click="goback" class="goback" id="goback"></a>
        <p>会员说明</p>    
        <div class="tab">
            <span class="no1"><b class="active">会员权益</b></span>
            <span class="no2"><b class="">如何加入</b></span>
            <i class="line"></i>
        </div>
        <div class="none_box"></div>
    </div>
    <div class="empty"></div>
</div>
</template>
<script>
require('./rem.js')(window,document)
export default {
    data(){
        return{

        }
    },
    methods:{
        goback:function(){
            this.$router.go(-1);
        },
    }
}
</script>
<style scoped>
.empty {
    width: 100%;
    height: 2.28rem;
}
.none_box {
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
    height: 0.91rem;
    overflow: hidden;
    background-color: #fff;
}
.head_xz p {
    height: 0.84rem;
    line-height: 0.84rem;
    font-size: 0.36rem;
    color: #ffffff;
    text-align: center;
}
.head_xz .goback {
    position: absolute;
    left: 0.1rem;
    top: 0.43rem;
    width: 1rem;
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
    height: 1.85rem;
    padding-top: 0.43rem;
    background-color: #06060b;
}
</style>
