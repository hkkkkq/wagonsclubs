<template>
<div style="position:absolute;height:100%;width:100%">
    <div style="background:#0f1923;min-height:100%">
        <p style="height:0.2rem"></p>
        <p @click="su" class='but1'>确定</p>
        <p style="height:0.8rem"></p>        
        <div class="con">
            <img @click="premonth" style="float:left" src="../../assets/app/pickerleft.jpg">
            <p><span>{{curYear}}</span><span>年</span><span>{{(curMonth+1)>9?(curMonth+1):("0"+(curMonth+1))}}</span><span>月</span></p>
            <img  @click="nextmonth" style="float:right" src="../../assets/app/pickerright.jpg">
            <div class="days">
                <span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span>
            </div>
            <div class="dates" :key="n" :line='n' v-for="(item,n) in this.dateform">
                <!-- <p style="font-size:20px">{{n}}</p> -->
                <span :line='n' :row='n2' @click="clickspan(n,n2)" :key="n2" v-for="(item2,n2) in item"><em :class="{'click':dateform[n][n2] == choose}">{{item2 == "k"?null:item2}}</em></span>
                <pd-select-box v-if="show[n]" style="width: 7.1rem;margin: auto;position: relative;left: -0.3rem;">
                    <pd-select-item :listData="listData" v-model="shi"></pd-select-item>
                    <pd-select-item :listData="listData2" v-model="fen"></pd-select-item>
                </pd-select-box>
            </div>
        </div>

    </div>
</div>
</template>

<script>
require('../app/rem.js')(window,document)

import pdSelectItem from './picker/selectitem.vue'
import pdSelectBox from './picker/slectBox.vue'
export default {
    data(){
        return{
            show:"",
            curYear:"",
            curMonth:"",   //0开头
            dateform:[],
            xqj:"",
            listData: ['00时','01时','02时','03时','04时','05时','06时','07时','08时','09时','10时','11时','12时','13时','14时','15时','16时','17时','18时','19时','20时','21时','22时','23时',],
            listData2: ['00分','30分'],
            shi: "",
            fen: "",
            choose:"",
            nowxqj:"",
        }
    },
    computed:{
    },
    components:{
        pdSelectItem,
        pdSelectBox
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
            this.show = new Array(this.dateform.length).fill(0)
        }
    },
    created(){

        var curDate = new Date(); //当前日期
        this.curYear = curDate.getFullYear()  //当前年份
        this.curMonth = curDate.getMonth() //当前月份
        this.choose = curDate.getDate()
        //获取当月1号是周几
        this.xqj = new Date(this.curYear,this.curMonth,1).getDay()

    },
    methods:{
        premonth(){
            this.choose = "";
            if(this.curMonth == 0){
                this.curYear = this.curYear - 1;
                this.curMonth = 11;
                
            }else{
                this.curMonth = this.curMonth - 1
            }
        },
        nextmonth(){
            this.choose = "";
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
        },
        clickspan(n,n2){
            this.choose = this.dateform[n][n2];
            this.show.fill(0)
            this.show[n] = 1
            this.nowxqj = new Date(this.curYear,this.curMonth,this.choose).getDay();
        },
        su(){
            if(this.$route.query.type == "starttime"){
                this.$store.commit('starttime',{year:this.curYear,month:this.curMonth,date:this.choose,xqj:this.nowxqj,shi:this.shi,fen:this.fen})
                this.$router.push("/wx/pay")
            }else{
                this.$store.commit('endtime',{year:this.curYear,month:this.curMonth,date:this.choose,xqj:this.nowxqj,shi:this.shi,fen:this.fen})
                this.$router.push("/wx/pay")
            }
        }
    }
}
</script>

<style scoped>
.but1{
    display: block;
    width: 1rem;
    height: 0.6rem;
    font-size: 0.3rem;
    color: #ffffff;
    background: #273039;
    text-align: center;
    line-height: 0.6rem;
    border-radius: 4px;
    right: 0.2rem;
    position: absolute;
}
.click{
    display: block;
    width: 0.68rem;
    margin: auto;
    height: 0.68rem;
    background: #f4d144;
    color: #0f1923;
    border-radius: 1000px;
    line-height: 0.7rem;
}
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
    color: #ffffff;
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.9rem;
    position: relative;
}
.dates{
    display: block;
    /* height: 0.95rem; */
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
    margin-bottom: 0.4rem;
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
