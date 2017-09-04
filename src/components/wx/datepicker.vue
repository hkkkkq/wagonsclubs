<template>
<div style="position:absolute;height:100%;width:100%">
    <div style="background:#0f1923;height:100%">
        <p style="height:0.2rem"></p>
        <div class="con">
            <img @click="premonth" style="float:left" src="../../assets/app/pickerleft.jpg">
            <p><span>{{curYear}}</span><span>年</span><span>{{(curMonth+1)>9?(curMonth+1):("0"+(curMonth+1))}}</span><span>月</span></p>
            <img  @click="nextmonth" style="float:right" src="../../assets/app/pickerright.jpg">
            <div class="days">
                <span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span>
            </div>
            <!-- <div class="dates">
                <span>1<b>已出租</b></span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
            </div> -->
            <div class="dates" :key="n" v-for="(item,n) in this.dateform">
                <span>{{item}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
require('../app/rem.js')(window,document)
export default {
    data(){
        return{
            curYear:"",
            curMonth:"",   //0开头
            dateform:[],
            xqj:""
        }
    },
    computed:{
    },
    watch:{
        curMonth:function(data){
            this.xqj = new Date(this.curYear,this.curMonth,1).getDay()
            var form = new Array(this.xqj).fill("k")
            for(let i=1;i<=this.getCountDays();i++){
                form.push(i)
            }
            this.dateform = [];
            for(let i=0;i<form.length;i=i+7){
                this.dateform.push(form.slice(i,i+7))
            }
        }
    },
    created(){
        var curDate = new Date(); //当前日期
        this.curYear = curDate.getFullYear()  //当前年份
        this.curMonth = curDate.getMonth() //当前月份

        //获取当月1号是周几
        this.xqj = new Date(this.curYear,this.curMonth,1).getDay()

    },
    methods:{
        premonth(){
            if(this.curMonth == 0){
                this.curYear = this.curYear - 1;
                this.curMonth = 11;
                
            }else{
                this.curMonth = this.curMonth - 1
            }
        },
        nextmonth(){
            if(this.curMonth == 11){
                this.curYear = this.curYear + 1
                this.curMonth = 0;
            }else{
                this.curMonth = this.curMonth + 1               
            }
        },
        getCountDays(){//获取一个月的天数
            /* 获取当前月份 */
            // var curMonth = curDate.getMonth();
            var tmp = new Date(this.curYear,this.curMonth+1,0)
            /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
            // curDate.setMonth(curMonth + 1);
            /* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
            // curDate.setDate(0);
            /* 返回当月的天数 */
            return tmp.getDate();
        }
    }
}
</script>

<style scoped>
.dates>span>b{
    display: block;
    font-size: 0.18rem;
    color: #666666;
    position: absolute;
    width: 0.92rem;
    top: 0.3rem;
    left: 0rem;
}
.dates>span{
    display: inline-block;
    width: 0.92rem;
    height: 100%;
    color: #ffffff;
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.9rem;
    position: relative;
}
.dates{
    display: block;
    height: 0.95rem;
    width: 100%;
}
.days>span{
    color: #999999;
    font-size: 0.18rem;
    display: inline-block;
    height: 100%;
    width: 0.92rem;
    text-align: center;
    line-height: 0.5rem;
}
.days{
    height: 0.48rem;
    border-top:1px solid #39424a;
    border-bottom:1px solid #39424a;
    margin-top: 0.48rem;
}
.con>p{
    text-align: center;
    display: inline-block;
    width: 5.3rem;
    margin: auto;
}
.con>p>span{
    color: #ffffff;
    font-size: 0.3rem;
    display: inline-block;
}
.con>img{
    width: 0.6rem;
    height: 0.28rem;
}
.con{
    background: #273039;
    width: 6.5rem;
    margin: auto;
    display: block;
    border-radius: 4px;
    font-size: 0;
    padding: 0.46rem 0.3rem 0.96rem 0.3rem
}
</style>
