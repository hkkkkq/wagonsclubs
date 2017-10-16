<template>
<div style="background:#f5f5f5">
        <div class="s_banner"></div>

    <h1 style="height:28px"></h1>
    <div class="tit">
        <p>{{item.title}}</p>
        <h1>{{item.time}}</h1>
    </div>
    <h1 style="height:20px"></h1>
    <div v-html="item.context" class="ccc"></div>
    <div class="fen">
        <a style="float:left;color: #acacac; cursor: no-drop;">上一页：没有了</a>
        <a href="/article/2" style="float:right">WAGONS光速超跑举办试驾品鉴活动：下一页</a>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            item:''
        }
    },
    created(){
        window.scroll(0,0)
        this.$ajax(BASE_URL+"/xxxx")
        .then((res)=>{
            item = res.data.data
        })
        this.$route.params.id
    }
}
</script>

<style scoped>
/* .fen a:hover{
    color: #acacac;
} */
.fen a {
     margin-top: 20px;
     font-size: 14px;
     color: #494949;
     cursor: pointer;
     text-decoration-line: none;
}
.fen{
    width: 1000px;
    margin: auto;
    display: block;
    height: 72px;
}
.ccc p {
    /* text-indent: 30px; */
    margin-bottom: 18px;
    line-height: 30px;
}
.ccc img{
    width: 100%;
}
.ccc{
    width: 800px;
    background: #ffffff;
    padding: 32px 100px 32px 100px;
    margin: auto;
    font-size: 15px;
    color: #a2a2a2;
    line-height: 25px;
}
.tit h1{
    width: 800px;
    display: block;
    margin: auto;
    color: #747474;
}
.tit p{
    font-size: 24px;
    color: #000000;
    width: 800px;
    margin: auto;
    display: block;
    margin-bottom: 10px;
}
.tit{
    width: 1000px;
    height: 88px;
    margin: auto;
    background: #ffffff;
    padding-top: 32px;
}
  .s_banner{
    width: 100%;
    min-width: 1000px;
    height: 217px;
    background: url('../../assets/car_dongtai.jpg') center center no-repeat;
  }
</style>
